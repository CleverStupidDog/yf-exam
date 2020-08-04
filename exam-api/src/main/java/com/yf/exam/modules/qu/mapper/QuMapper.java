package com.yf.exam.modules.qu.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yf.exam.modules.qu.entity.Qu;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
* <p>
* 问题题目Mapper
* </p>
*
* @author 聪明笨狗
* @since 2020-05-25 13:23
*/
public interface QuMapper extends BaseMapper<Qu> {




    /**
     * 随机抽取题库的数据
     * @param repoId
     * @param quType
     * @param excludes 要排除的ID列表
     * @param size
     * @return
     */
    List<Qu> listByRandom(@Param("repoId") String repoId,
                          @Param("quType") Integer quType,
                          @Param("excludes") List<String> excludes,
                          @Param("size") Integer size);



}
