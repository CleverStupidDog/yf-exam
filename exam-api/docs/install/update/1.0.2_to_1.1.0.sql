SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE `sys_config`  (
  `id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ID',
  `site_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '系统名称',
  `front_logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '前端LOGO',
  `back_logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '后台LOGO',
  `create_time` datetime COMMENT '创建时间',
  `update_time` datetime COMMENT '更新时间',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '创建人',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '修改人',
  `data_flag` int(11) NOT NULL DEFAULT 0 COMMENT '数据标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统设置' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS=1;