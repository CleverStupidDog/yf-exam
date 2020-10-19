package com.yf.exam.modules.qu.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.google.common.collect.Lists;
import com.yf.exam.core.api.ApiRest;
import com.yf.exam.core.api.controller.BaseController;
import com.yf.exam.core.api.dto.BaseIdReqDTO;
import com.yf.exam.core.api.dto.BaseIdRespDTO;
import com.yf.exam.core.api.dto.BaseIdsReqDTO;
import com.yf.exam.core.api.dto.PagingReqDTO;
import com.yf.exam.core.exception.ServiceException;
import com.yf.exam.core.utils.BeanMapper;
import com.yf.exam.core.utils.excel.ExportExcel;
import com.yf.exam.core.utils.excel.ImportExcel;
import com.yf.exam.modules.qu.dto.QuAnswerDTO;
import com.yf.exam.modules.qu.dto.QuDTO;
import com.yf.exam.modules.qu.dto.export.QuExportDTO;
import com.yf.exam.modules.qu.dto.ext.QuDetailDTO;
import com.yf.exam.modules.qu.dto.request.QuQueryReqDTO;
import com.yf.exam.modules.qu.entity.Qu;
import com.yf.exam.modules.qu.service.QuService;
import com.yf.exam.modules.repo.service.RepoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* <p>
* 问题题目控制器
* </p>
*
* @author 聪明笨狗
* @since 2020-05-25 13:25
*/
@Api(tags={"问题题目"})
@RestController
@RequestMapping("/exam/api/qu/qu")
public class QuController extends BaseController {

    @Autowired
    private QuService baseService;

    @Autowired
    private RepoService repoService;

    /**
     * 添加或修改
     *
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "添加或修改")
    @RequestMapping(value = "/save", method = {RequestMethod.POST})
    public ApiRest<BaseIdRespDTO> save(@RequestBody QuDetailDTO reqDTO) {
        baseService.save(reqDTO);
        return super.success();
    }

    /**
     * 批量删除
     *
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "批量删除")
    @RequestMapping(value = "/delete", method = {RequestMethod.POST})
    public ApiRest edit(@RequestBody BaseIdsReqDTO reqDTO) {
        //根据ID删除
        baseService.removeByIds(reqDTO.getIds());
        return super.success();
    }

    /**
     * 查找详情
     *
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "查找详情")
    @RequestMapping(value = "/detail", method = {RequestMethod.POST})
    public ApiRest<QuDetailDTO> detail(@RequestBody BaseIdReqDTO reqDTO) {
        QuDetailDTO dto = baseService.detail(reqDTO.getId());
        return super.success(dto);
    }

    /**
     * 分页查找
     *
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "分页查找")
    @RequestMapping(value = "/paging", method = {RequestMethod.POST})
    public ApiRest<IPage<QuDTO>> paging(@RequestBody PagingReqDTO<QuQueryReqDTO> reqDTO) {

        //分页查询并转换
        IPage<QuDTO> page = baseService.paging(reqDTO);

        return super.success(page);
    }

    /**
     * 查找列表，每次最多返回200条数据
     *
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "查找列表")
    @RequestMapping(value = "/list", method = {RequestMethod.POST})
    public ApiRest<List<QuDTO>> list(@RequestBody QuDTO reqDTO) {

        //分页查询并转换
        QueryWrapper<Qu> wrapper = new QueryWrapper<>();

        //转换并返回
        List<Qu> list = baseService.list(wrapper);

        //转换数据
        List<QuDTO> dtoList = BeanMapper.mapList(list, QuDTO.class);

        return super.success(dtoList);
    }


    /**
     * 导出excel文件
     */
    @ResponseBody
    @RequestMapping(value = "/export")
    public ApiRest exportFile(HttpServletResponse response, @ModelAttribute QuQueryReqDTO reqDTO) {


//        // 导出文件名
//        String fileName = "导出的试题-" + System.currentTimeMillis() + ".xlsx";
//
//        try {
//
//            int no = 0;
//            String quId = "";
//            List<QuExportDTO> list = baseService.listForExport(reqDTO);
//            for (QuExportDTO item : list) {
//                if (!quId.equals(item.getQId())) {
//                    quId = item.getQId();
//                    no += 1;
//                } else {
//                    item.setQuType("0");
//                    item.setQContent("");
//                    item.setQAnalysis("");
//                    item.setRepoList(null);
//                    item.setQImage("");
//                    item.setQVideo("");
//                }
//                item.setNo(String.valueOf(no));
//            }
//            new ExportExcel("试题", QuExportDTO.class).setDataList(list).write(response, fileName).dispose();
//            return super.success();
//        } catch (Exception e) {
//            return failure(e.getMessage());
//        }

        return null;
    }

    /**
     * 导入Excel
     *
     * @param file
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "import")
    public ApiRest importFile(@RequestParam("file") MultipartFile file) {

        try {

            // 解析导入源数据
            ImportExcel ei = new ImportExcel(file, 1, 0);
            List<QuExportDTO> list = ei.getDataList(QuExportDTO.class);

            // 校验并转换
            List<QuDetailDTO> checkList =  this.checkExcel(list);

            // 导入数据条数
            baseService.importExcel(checkList);

            // 导入成功
            return super.success();

        } catch (ServiceException e) {

            return super.failure(e);

        } catch (Exception e) {
            return super.failure(e);
        }

    }

    /**
     * 校验Excel
     *
     * @param list
     * @throws Exception
     */
    private List<QuDetailDTO> checkExcel(List<QuExportDTO> list) throws ServiceException {

        List<QuDetailDTO> importList = new ArrayList<>();

        for(QuExportDTO item: list){
            QuDetailDTO dto = parseQu(item);
            importList.add(dto);

        }

        return importList;
    }

    /**
     * 下载导入试题数据模板
     */
    @ResponseBody
    @RequestMapping(value = "import/template")
    public ApiRest importFileTemplate(HttpServletResponse response) {
        try {
            String fileName = "试题导入模板.xlsx";
            List<QuExportDTO> list = Lists.newArrayList();

            QuExportDTO l1 = new QuExportDTO();
            l1.setRepoName("CISP");
            l1.setQuType("简答题");
            l1.setScore("1");
            l1.setLevel("普通");
            l1.setQuContent("最小特权是软件安全设计的基本原则，某应用程序在设计时，设计人员给出了以下四种策略，其中有一个违反了最小特权的原则，作为评审专家，请指出是哪一个?");
            l1.setAnContent("（A）软件在 Linux下按照时，设定运行时使用 nobody用户运行实例\n" +
                    "（B）软件的日志备份模块由于需要备份所有数据库数据，在备份模块运行时，以数据库备份操作员账号连接数据库\n" +
                    "（C）软件的日志模块由于要向数据库中的日志表中写入日志信息，使用了一个日志用户账号连接数据库，该账号仅对日志表拥有权限\n" +
                    "（D）为了保证软件在 Windows 下能稳定的运行，设定运行权限为 system，确保系统运行正常，不会因为权限不足产生运行错误");
            l1.setAnswer("D");
            l1.setQAnalysis("SYSTEM 权限是最大权限。");
            list.add(l1);

            new ExportExcel("试题数据", QuExportDTO.class, 1).setDataList(list).write(response, fileName).dispose();
            return super.success();
        } catch (Exception e) {
            return super.failure("导入模板下载失败！失败信息："+e.getMessage());
        }

    }


    /**
     * 转换试题信息
     * @param dto
     * @return
     */
    private QuDetailDTO parseQu(QuExportDTO dto){

        // 试题类型
        Map<String,Integer> quTypeMap = new HashMap<>(16);
        quTypeMap.put("单选题", 1);
        quTypeMap.put("多选题", 2);

        String anContent = dto.getAnContent();
        String [] items = anContent.split("\n");

        // 题库ID
        String repoId = repoService.findByName(dto.getRepoName());

        // 响应数据
        QuDetailDTO resDTO = new QuDetailDTO();
        resDTO.setContent(dto.getQuContent());
        resDTO.setQuType(quTypeMap.get(dto.getQuType()));
        resDTO.setAnalysis(dto.getQAnalysis());
        resDTO.setRepoIds(Arrays.asList(new String[]{repoId}));
        List<QuAnswerDTO> answers = new ArrayList<>();

        for(String line: items){
            QuAnswerDTO item = new QuAnswerDTO();
            item.setContent(line);
            // 是否正确答案
            item.setIsRight(this.isAnswer(line, dto.getAnswer()));
            answers.add(item);
        }

        resDTO.setAnswerList(answers);
        return resDTO;

    }

    /**
     * 判断是否正确答案
     * @param line
     * @param answer
     * @return
     */
    private boolean isAnswer(String line, String answer){

        for(int i=0;i<answer.length();i++){

            if(line.contains("（"+answer.charAt(i)+"）")){
                return true;
            }
        }
        return false;
    }
}
