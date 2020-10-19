package com.yf.exam;

import com.alibaba.fastjson.JSON;
import com.yf.exam.modules.paper.dto.ext.PaperQuDetailDTO;
import com.yf.exam.modules.paper.dto.response.ExamDetailRespDTO;
import com.yf.exam.modules.paper.service.PaperService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = ExamApplication.class)
public class PaperTest {

    @Autowired
    private PaperService examService;

    @Test
    public void testCreate(){
        //examService.createPaper("aaaa", "4e867df4d47a42ad896f66fd1f9d0a8e");
    }


    @Test
    public void testPaperDetail(){
        ExamDetailRespDTO respDTO = examService.paperDetail("1264852438679150594");
        System.out.println(JSON.toJSONString(respDTO));
    }

    @Test
    public void testQuDetail(){
        PaperQuDetailDTO respDTO = examService.findQuDetail("1264872568393834497", "5859c292a6ad486da6d9ea41084affe2");
        System.out.println(JSON.toJSONString(respDTO));
    }

    @Test
    public void testFill(){
//        List<String> list = new ArrayList<>();
//        list.add("40a1c414-14a9-43a7-b7b7-a1c03eb44271");
//        examService.fillAnswer("1264872568393834497", "5859c292a6ad486da6d9ea41084affe2", list);
    }
}
