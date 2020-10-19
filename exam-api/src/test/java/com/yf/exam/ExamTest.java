package com.yf.exam;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yf.exam.core.api.dto.PagingReqDTO;
import com.yf.exam.modules.exam.dto.ExamDTO;
import com.yf.exam.modules.exam.dto.response.ExamOnlineRespDTO;
import com.yf.exam.modules.exam.service.ExamService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = ExamApplication.class)
public class ExamTest {

    @Autowired
    private ExamService examService;

    @Test
    public void testOnline(){
        PagingReqDTO<ExamDTO> reqDTO = new PagingReqDTO();
        reqDTO.setCurrent(1);
        reqDTO.setSize(10);

        System.out.println("++++++=开始查询：：：");
        IPage<ExamOnlineRespDTO> data = examService.onlinePaging(reqDTO);

        System.out.println("++++++=查询结果：：："+data);
    }
}
