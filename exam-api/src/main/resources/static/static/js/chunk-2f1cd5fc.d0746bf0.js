(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f1cd5fc"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),Math.easeInOutQuad=function(e,t,a,l){return e/=l/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(e,t,a){var i=r(),s=e-i,o=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=o;var r=Math.easeInOutQuad(u,i,s,t);n(r),u<t?l(e):a&&"function"===typeof a&&a()};c()}},2934:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var l=a("b775");function n(e,t){return Object(l["b"])(e,t)}function r(e,t){return Object(l["b"])(e,{ids:t})}function i(e,t,a){return Object(l["b"])(e,{ids:t,state:a})}},2995:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var l=a("b775");function n(e){return Object(l["b"])("/exam/api/sys/user/update",e)}function r(e){return Object(l["b"])("/exam/api/sys/user/save",e)}},"5fca":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,action:"http://localhost:8101/common/api/oss/upload","on-success":e.handleUploaded},model:{value:e.fileUrl,callback:function(t){e.fileUrl=t},expression:"fileUrl"}},[e.value?a("img",{class:e.type?e.type:"square",attrs:{src:e.value}}):a("i",{class:"el-icon-plus avatar-uploader-icon "+(e.type?e.type:"square")})])},n=[],r={name:"SingleUpload",props:{value:String,type:String},data:function(){return{fileUrl:""}},watch:{value:{handler:function(){this.fileUrl=this.value}}},created:function(){this.fileUrl=this.value},methods:{handleUploaded:function(e){this.$emit("input",e.data.url)}}},i=r,s=(a("6956"),a("2877")),o=Object(s["a"])(i,l,n,!1,null,null,null);t["a"]=o.exports},6956:function(e,t,a){"use strict";var l=a("ddf8"),n=a.n(l);n.a},"9b73":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return u}));var l=a("b775");function n(e){return Object(l["b"])("/exam/api/sys/depart/paging",e)}function r(e){return Object(l["b"])("/exam/api/sys/depart/tree",e)}function i(e){var t={id:e};return Object(l["b"])("/exam/api/sys/depart/detail",t)}function s(e){var t={ids:e};return Object(l["b"])("/exam/api/sys/depart/delete",t)}function o(e){return Object(l["b"])("/exam/api/sys/depart/save",e)}function u(e,t){var a={id:e,sort:t};return Object(l["b"])("/exam/api/sys/depart/sort",a)}},c2a2:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("data-table",{ref:"pagingTable",attrs:{options:e.options,"list-query":e.listQuery},on:{"multi-actions":e.handleMultiAction}},[a("template",{slot:"filter-content"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索登录名"},model:{value:e.listQuery.params.userName,callback:function(t){e.$set(e.listQuery.params,"userName",t)},expression:"listQuery.params.userName"}}),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索姓名"},model:{value:e.listQuery.params.realName,callback:function(t){e.$set(e.listQuery.params,"realName",t)},expression:"listQuery.params.realName"}}),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v(" 添加 ")])],1),a("template",{slot:"data-columns"},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{align:"center",label:"用户名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v(e._s(t.row.userName))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"姓名",prop:"realName"}}),a("el-table-column",{attrs:{align:"center",label:"角色",prop:"roleIds"}}),a("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"createTime"}}),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("stateFilter")(t.row.state))+" ")]}}])})],1)],2),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisible,width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.formData.userName,callback:function(t){e.$set(e.formData,"userName",t)},expression:"formData.userName"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.formData.realName,callback:function(t){e.$set(e.formData,"realName",t)},expression:"formData.realName"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"不修改请留空",type:"password"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),a("el-form-item",{attrs:{label:"部门"}},[a("depart-tree-select",{attrs:{options:e.treeData,props:e.defaultProps},model:{value:e.formData.departId,callback:function(t){e.$set(e.formData,"departId",t)},expression:"formData.departId"}})],1),a("el-form-item",{attrs:{label:"角色"}},[a("meet-role",{model:{value:e.formData.roles,callback:function(t){e.$set(e.formData,"roles",t)},expression:"formData.roles"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("确 定")])],1)],1)],1)},n=[],r=(a("28a5"),a("7845")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",clearable:"","automatic-dropdown":"",placeholder:"请选择角色","remote-method":e.fetchList},on:{change:e.handlerChange},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}},e._l(e.list,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)},s=[],o=a("b775");function u(){return Object(o["b"])("/exam/api/sys/role/list",{})}var c={name:"MeetRole",props:{value:Array,default:Array},data:function(){return{list:[],values:[]}},watch:{value:{handler:function(){this.values=this.value},deep:!0}},created:function(){this.values=this.value,this.fetchList()},methods:{fetchList:function(){var e=this;u().then((function(t){e.list=t.data}))},handlerChange:function(e){this.$emit("change",e),this.$emit("input",e)}}},d=c,f=a("2877"),p=Object(f["a"])(d,i,s,!1,null,null,null),m=p.exports,b=a("2995"),h=a("5ba1"),v=a("9b73"),y=a("5fca"),g={name:"SysUserList",components:{SingleUpload:y["a"],DepartTreeSelect:h["a"],DataTable:r["a"],MeetRole:m},filters:{userState:function(e){var t={0:"正常",1:"禁用"};return t[e]}},data:function(){return{treeData:[],defaultProps:{value:"id",label:"deptName",children:"children"},dialogVisible:!1,listQuery:{current:1,size:10,params:{}},formData:{avatar:""},options:{listUrl:"/exam/api/sys/user/paging",stateUrl:"/sys/user/state",deleteUrl:"/exam/api/sys/user/delete",multiActions:[{value:"enable",label:"启用"},{value:"disable",label:"禁用"},{value:"delete",label:"删除"}]}}},created:function(){var e=this;Object(v["c"])({}).then((function(t){e.treeData=t.data}))},methods:{handleUploadSuccess:function(e){this.formData.avatar=e.data.url},handleAdd:function(){this.formData={},this.dialogVisible=!0},handleUpdate:function(e){this.dialogVisible=!0,this.formData=e,this.formData.roles=e.roleIds.split(","),this.formData.password=null,console.log(JSON.stringify(this.formData))},departSelected:function(e){this.formData.departId=e.id},handleSave:function(){var e=this;Object(b["a"])(this.formData).then((function(){e.$message({type:"success",message:"用户修改成功!"}),e.dialogVisible=!1,e.$refs.pagingTable.getList()}))},handleMultiAction:function(e){"cancel"===e.opt&&this.handleCancelOrder(e.ids)}}},w=g,D=Object(f["a"])(w,l,n,!1,null,null,null);t["default"]=D.exports},ddf8:function(e,t,a){}}]);