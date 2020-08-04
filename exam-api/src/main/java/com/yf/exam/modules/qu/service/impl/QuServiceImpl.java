package com.yf.exam.modules.qu.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yf.exam.core.api.dto.PagingReqDTO;
import com.yf.exam.core.utils.BeanMapper;
import com.yf.exam.modules.qu.dto.QuAnswerDTO;
import com.yf.exam.modules.qu.dto.QuDTO;
import com.yf.exam.modules.qu.dto.ext.QuDetailDTO;
import com.yf.exam.modules.qu.entity.Qu;
import com.yf.exam.modules.qu.mapper.QuMapper;
import com.yf.exam.modules.qu.service.QuAnswerService;
import com.yf.exam.modules.qu.service.QuRepoRefService;
import com.yf.exam.modules.qu.service.QuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;

/**
* <p>
* 语言设置 服务实现类
* </p>
*
* @author 聪明笨狗
* @since 2020-05-25 10:17
*/
@Service
public class QuServiceImpl extends ServiceImpl<QuMapper, Qu> implements QuService {

    @Autowired
    private QuAnswerService quAnswerService;

    @Autowired
    private QuRepoRefService quRepoRefService;

    @Override
    public IPage<QuDTO> paging(PagingReqDTO<QuDTO> reqDTO) {

        //创建分页对象
        IPage<Qu> query = new Page<>(reqDTO.getCurrent(), reqDTO.getSize());

        //查询条件
        QueryWrapper<Qu> wrapper = new QueryWrapper<>();

        QuDTO params = reqDTO.getParams();
        if(params!=null){
            if(params.getQuType()!=null){
                wrapper.lambda().eq(Qu::getQuType, params.getQuType());
            }

            if(!StringUtils.isEmpty(params.getContent())){
                wrapper.lambda().like(Qu::getContent, params.getContent());
            }
        }

        // 更新
        wrapper.lambda().orderByDesc(Qu::getCreateTime);

        //获得数据
        IPage<Qu> page = this.page(query, wrapper);
        //转换结果
        IPage<QuDTO> pageData = JSON.parseObject(JSON.toJSONString(page), new TypeReference<Page<QuDTO>>(){});
        return pageData;
     }

    @Override
    public List<Qu> listByRandom(String repoId, Integer quType, List<String> excludes, Integer size) {
        return baseMapper.listByRandom(repoId, quType, excludes, size);
    }

    @Override
    public QuDetailDTO detail(String id) {

        QuDetailDTO respDTO = new QuDetailDTO();
        Qu qu = this.getById(id);
        BeanMapper.copy(qu, respDTO);

        List<QuAnswerDTO> answerList = quAnswerService.listByQu(id);
        respDTO.setAnswerList(answerList);

        List<String> repoIds = quRepoRefService.listByQu(id);
        respDTO.setRepoIds(repoIds);

        return respDTO;
    }


    @Transactional(rollbackFor = Exception.class)
    @Override
    public void save(QuDetailDTO reqDTO) {

        Qu qu = new Qu();
        BeanMapper.copy(reqDTO, qu);

        // 更新
        this.saveOrUpdate(qu);

        // 保存全部问题
        quAnswerService.saveAll(qu.getId(), reqDTO.getAnswerList());

        // 保存到题库
        quRepoRefService.saveAll(qu.getId(), qu.getQuType(), reqDTO.getRepoIds());

    }
}
