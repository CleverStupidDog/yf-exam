package com.yf.exam.aspect;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yf.exam.core.annon.Dict;
import com.yf.exam.core.api.ApiRest;
import com.yf.exam.core.utils.BeanMapper;
import com.yf.exam.core.utils.Reflections;
import com.yf.exam.modules.sys.system.service.SysDictService;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * 数据字典AOP类，处理数据字典值
 * @author bool
 */
@Aspect
@Component
@Slf4j
public class DictAspect {

    @Autowired
    private SysDictService sysDictService;

    /**
     * 切入Controller
     */
    @Pointcut("execution(public *  com.yf.exam.modules..*.*Controller.*(..))")
    public void execService() {
    }

    @Around("execService()")
    public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
        long time1 = System.currentTimeMillis();
        Object result = pjp.proceed();
        long time2 = System.currentTimeMillis();
        log.error("获取JSON数据 耗时：" + (time2 - time1) + "ms");
        long start = System.currentTimeMillis();
        this.parseAllDictText(result);
        long end = System.currentTimeMillis();
        log.error("解析注入JSON数据  耗时" + (end - start) + "ms");
        return result;
    }

    /**
     * 转换全部数据字典
     * @param result
     */
    private void parseAllDictText(Object result) {

        // 非ApiRest类型不处理
        if (result instanceof ApiRest) {
            parseFullDictText(result);
        }
    }


    /**
     * 转换所有类型的数据字典、包含子列表
     * @param result
     */
    private void parseFullDictText(Object result) {

        try {

            // 分页的
            if (((ApiRest) result).getData() instanceof IPage) {
                List<JSONObject> items = new ArrayList<>(16);
                for (Object record : ((IPage) ((ApiRest) result).getData()).getRecords()) {
                    JSONObject item = this.parseObject(record);
                    items.add(item);
                }
                ((IPage) ((ApiRest) result).getData()).setRecords(items);
                return;
            }

            // 数据列表的
            if (((ApiRest) result).getData() instanceof List) {
                List<JSONObject> items = new ArrayList<>();
                for (Object record : ((List) ((ApiRest) result).getData())) {
                    JSONObject item = this.parseObject(record);
                    items.add(item);
                }
                // 重新回写值
                ((ApiRest) result).setData(items);
                return;
            }

            // 处理单对象
            JSONObject item = this.parseObject(((ApiRest) result).getData());
            ((ApiRest) result).setData(item);

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * 处理数据字典值
     * @param record
     * @return
     */
    public JSONObject parseObject(Object record) {

        if(record == null){
            return null;
        }

        log.info("++++++++++翻译字典："+ JSON.toJSONString(record));

        ObjectMapper mapper = new ObjectMapper();
        String json = "{}";
        try {
            //解决@JsonFormat注解解析不了的问题详见SysAnnouncement类的@JsonFormat
            json = mapper.writeValueAsString(record);
        } catch (JsonProcessingException e) {
            log.error("json解析失败" + e.getMessage(), e);
        }
        JSONObject item = JSONObject.parseObject(json);
        for (Field field : Reflections.getAllFields(record)) {
            // 如果是List类型
            if(List.class.isAssignableFrom(field.getType())){
                try {
                    List<JSONObject> list = this.processList(field, item.getJSONArray(field.getName()));
                    item.put(field.getName(), list);
                    continue;
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            // 处理普通字段
            if (field.getAnnotation(Dict.class) != null) {
                String code = field.getAnnotation(Dict.class).dicCode();
                String text = field.getAnnotation(Dict.class).dicText();
                String table = field.getAnnotation(Dict.class).dictTable();
                String key = String.valueOf(item.get(field.getName()));

                //翻译字典值对应的txt
                String textValue = this.translateDictValue(code, text, table, key);
                if(StringUtils.isEmpty(textValue)){
                    textValue = "";
                }
                item.put(field.getName() + "_dictText", textValue);
            }

            //日期格式转换
            if (field.getType().getName().equals("java.util.Date")
                    && field.getAnnotation(JsonFormat.class) == null
                    && item.get(field.getName()) != null) {
                SimpleDateFormat aDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                item.put(field.getName(), aDate.format(new Date((Long) item.get(field.getName()))));
            }
        }

        return item;
    }

    /**
     * 获得类型为List的值
     * @param field
     * @return
     */
    private List<JSONObject> processList(Field field, JSONArray array) throws IllegalAccessException, InstantiationException {

        // 空判断
        if(array == null || array.size()==0){
            return new ArrayList<>();
        }

        // 获得List属性的真实类
        ParameterizedType pt = (ParameterizedType) field.getGenericType();
        Class clazz = (Class) pt.getActualTypeArguments()[0];

        // 返回列表
        List<JSONObject> list = new ArrayList<>(16);

        for(int i=0; i<array.size(); i++){
            // 创建实例-->赋值-->字典处理
            Object data = clazz.newInstance();
            BeanMapper.copy(array.get(i), data);
            JSONObject obj = this.parseObject(data);
            list.add(obj);
        }
        return list;
    }

    /**
     * 翻译字典文本
     *
     * @param code
     * @param text
     * @param table
     * @param key
     * @return
     */
    private String translateDictValue(String code, String text, String table, String key) {
        if (StringUtils.isEmpty(key)) {
            return null;
        }

        try {
            StringBuffer textValue = new StringBuffer();
            String[] keys = key.split(",");
            for (String k : keys) {
                String tmpValue = null;
                log.debug(" 字典 key : " + k);
                if (k.trim().length() == 0) {
                    continue; //跳过循环
                }

                if (!StringUtils.isEmpty(table)) {
                    log.debug("--DictAspect------dicTable=" + table + " ,dicText= " + text + " ,dicCode=" + code);
                    tmpValue = sysDictService.findDict(table, text, code, k.trim());
                }

                if (tmpValue != null) {
                    if (!"".equals(textValue.toString())) {
                        textValue.append(",");
                    }
                    textValue.append(tmpValue);
                }

            }
            return textValue.toString();
        }catch (Exception e){
            e.printStackTrace();
        }

        return "";
    }

}
