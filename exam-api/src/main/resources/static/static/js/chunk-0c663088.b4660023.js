(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c663088"],{"5efb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("exam-select",{staticClass:"filter-item",attrs:{multi:!1},on:{change:t.examChange}})],1),a("el-table",{ref:"table",attrs:{data:t.tableData,"row-key":"id",border:"","empty-text":"请先选择一个考试再查看部门考试情况","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},"header-cell-style":{background:"#f2f3f4",color:"#555","font-weight":"bold","line-height":"32px"}}},[a("el-table-column",{attrs:{label:"部门名称",prop:"deptName"}}),a("el-table-column",{attrs:{label:"部门总人数",prop:"totalUser",align:"center"}}),a("el-table-column",{attrs:{label:"考试人数",prop:"joinUser",align:"center"}}),a("el-table-column",{attrs:{label:"通过人数",prop:"passUser",align:"center"}}),a("el-table-column",{attrs:{label:"通过率",prop:"passRate",align:"center"}}),a("el-table-column",{attrs:{align:"center",label:"详情"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",icon:"el-icon-view"},on:{click:function(a){return t.statDetail(e.row.id)}}},[t._v("明细")])]}}])})],1)],1)},l=[],r=a("b775");function i(t){return Object(r["b"])("/exam/api/stat/depart/tree-list",t)}var s=a("47aa"),o={name:"Depart",components:{ExamSelect:s["a"]},filters:{refTypeFilter:function(t){var e={1:"公司",2:"部门"};return e[t]}},data:function(){return{examIds:[],tableData:[],listLoading:!0,listQuery:{examId:""}}},created:function(){this.getList()},methods:{examChange:function(t){this.listQuery.examId=t,this.getList()},statDetail:function(t){console.log(t),console.log(this.listQuery.examId),this.$router.push({name:"StatDepartDetail",params:{examId:this.listQuery.examId,departId:t}})},getList:function(){var t=this;this.listQuery.examId&&(this.listLoading=!0,i(this.listQuery).then((function(e){t.tableData=e.data,t.listLoading=!1})))}}},c=o,u=a("2877"),d=Object(u["a"])(c,n,l,!1,null,null,null);e["default"]=d.exports},"955d":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i}));var n=a("b775");function l(t){return Object(n["b"])("/exam/api/exam/exam/detail",{id:t})}function r(t){return Object(n["b"])("/exam/api/exam/exam/save",t)}function i(){return Object(n["b"])("/exam/api/exam/exam/paging",{current:1,size:100})}}}]);