package com.yf.exam.modules.qu.dto.export;

import com.yf.exam.core.utils.excel.annotation.ExcelField;
import lombok.Data;

/**
 * 用于导出的数据结构
 * @author bool
 */
@Data
public class QuExportDTO {

    private static final long serialVersionUID = 1L;


    @ExcelField(title="试题类型", align=2, sort=1)
    private String repoName;

    @ExcelField(title="题型", align=2, sort=2)
    private String quType;

    @ExcelField(title="分值", align=2, sort=3)
    private String score;

    @ExcelField(title="难易程度", align=2, sort=4)
    private String level;

    @ExcelField(title="题干", align=2, sort=5)
    private String quContent;

    @ExcelField(title="选项", align=2, sort=6)
    private String anContent;

    @ExcelField(title="答案", align=2, sort=7)
    private String answer;

    @ExcelField(title="解析", align=2, sort=8)
    private String qAnalysis;
}
