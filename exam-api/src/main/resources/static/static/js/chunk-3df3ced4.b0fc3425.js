(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3df3ced4"],{"0468":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=n("b775");function s(t){return Object(a["b"])("/exam/api/repo/detail",t)}function o(t){return Object(a["b"])("/exam/api/repo/save",t)}function r(t){return Object(a["b"])("/exam/api/repo/list",t)}function i(t){return Object(a["b"])("/exam/api/repo/batch-action",t)}},"5fca":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,action:"http://localhost:8101/common/api/oss/upload","on-success":t.handleUploaded},model:{value:t.fileUrl,callback:function(e){t.fileUrl=e},expression:"fileUrl"}},[t.value?n("img",{class:t.type?t.type:"square",attrs:{src:t.value}}):n("i",{class:"el-icon-plus avatar-uploader-icon "+(t.type?t.type:"square")})])},s=[],o={name:"SingleUpload",props:{value:String,type:String},data:function(){return{fileUrl:""}},watch:{value:{handler:function(){this.fileUrl=this.value}}},created:function(){this.fileUrl=this.value},methods:{handleUploaded:function(t){this.$emit("input",t.data.url)}}},r=o,i=(n("6956"),n("2877")),l=Object(i["a"])(r,a,s,!1,null,null,null);e["a"]=l.exports},6956:function(t,e,n){"use strict";var a=n("ddf8"),s=n.n(a);s.a},d5b7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"postForm",attrs:{model:t.postForm,rules:t.rules,"label-position":"left","label-width":"150px"}},[n("el-card",[n("el-form-item",{attrs:{label:"题目类型 ",prop:"quType"}},[n("el-select",{staticClass:"filter-item",attrs:{disabled:t.quTypeDisabled},on:{change:t.handleTypeChange},model:{value:t.postForm.quType,callback:function(e){t.$set(t.postForm,"quType",e)},expression:"postForm.quType"}},t._l(t.quTypes,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"归属题库",prop:"repoIds"}},[n("repo-select",{attrs:{multi:!0},model:{value:t.postForm.repoIds,callback:function(e){t.$set(t.postForm,"repoIds",e)},expression:"postForm.repoIds"}})],1),n("el-form-item",{attrs:{label:"题目内容",prop:"content"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),n("el-form-item",{attrs:{label:"题目图片"}},[n("single-upload",{model:{value:t.postForm.image,callback:function(e){t.$set(t.postForm,"image",e)},expression:"postForm.image"}})],1),n("el-form-item",{attrs:{label:"整题解析",prop:"oriPrice"}},[n("el-input",{attrs:{type:"textarea",precision:1,max:999999},model:{value:t.postForm.analysis,callback:function(e){t.$set(t.postForm,"analysis",e)},expression:"postForm.analysis"}})],1)],1),4!==t.postForm.quType?n("div",{staticClass:"filter-container",staticStyle:{"margin-top":"25px"}},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus",size:"small",plain:""},on:{click:t.handleAdd}},[t._v(" 添加 ")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.postForm.answerList,border:!0}},[n("el-table-column",{attrs:{label:"是否答案",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{model:{value:e.row.isRight,callback:function(n){t.$set(e.row,"isRight",n)},expression:"scope.row.isRight"}},[t._v("答案")])]}}],null,!1,1650073960)}),n("el-table-column",{attrs:{label:"答案图片",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("single-upload",{model:{value:e.row.image,callback:function(n){t.$set(e.row,"image",n)},expression:"scope.row.image"}})]}}],null,!1,1175180104)}),n("el-table-column",{attrs:{label:"答案内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{type:"textarea"},model:{value:e.row.content,callback:function(n){t.$set(e.row,"content",n)},expression:"scope.row.content"}})]}}],null,!1,924406712)}),n("el-table-column",{attrs:{label:"答案解析"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{type:"textarea"},model:{value:e.row.analysis,callback:function(n){t.$set(e.row,"analysis",n)},expression:"scope.row.analysis"}})]}}],null,!1,3792987939)}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return t.removeItem(e.$index)}}})]}}],null,!1,1518468532)})],1)],1):t._e(),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")]),n("el-button",{attrs:{type:"info"},on:{click:t.onCancel}},[t._v("返回")])],1)],1)],1)},s=[],o=(n("ac6a"),n("f4bc")),r=n("4a02"),i=n("5fca"),l={name:"QuDetail",components:{SingleUpload:i["a"],RepoSelect:r["a"]},data:function(){return{quTypeDisabled:!1,quTypes:[{value:1,label:"单选题"},{value:2,label:"多选题"},{value:3,label:"判断题"},{value:4,label:"简答题"}],postForm:{repoIds:[],tagList:[],answerList:[]},rules:{content:[{required:!0,message:"题目内容不能为空！"}],quType:[{required:!0,message:"题目类型不能为空！"}],repoIds:[{required:!0,message:"至少要选择一个题库！"}]}}},created:function(){var t=this.$route.params.id;"undefined"!==typeof t&&(this.quTypeDisabled=!0,this.fetchData(t))},methods:{handleTypeChange:function(t){this.postForm.answerList=[],3===t&&(this.postForm.answerList.push({isRight:!0,content:"对",analysis:""}),this.postForm.answerList.push({isRight:!1,content:"错",analysis:""}))},handleAdd:function(){this.postForm.answerList.push({isRight:!1,content:"",analysis:""})},removeItem:function(t){this.postForm.answerList.splice(t,1)},fetchData:function(t){var e=this;Object(o["b"])(t).then((function(t){e.postForm=t.data}))},submitForm:function(){var t=this;console.log(JSON.stringify(this.postForm));var e=0;this.postForm.answerList.forEach((function(t){t.isRight&&(e+=1)})),1!==this.postForm.quType||1===e?2===this.postForm.quType&&e<2?this.$message({message:"多选题至少要有两个正确答案！",type:"warning"}):3!==this.postForm.quType||1===e?this.$refs.postForm.validate((function(e){e&&Object(o["e"])(t.postForm).then((function(e){t.postForm=e.data,t.$notify({title:"成功",message:"试题保存成功！",type:"success",duration:2e3}),t.$router.push({name:"ListQu"})}))})):this.$message({message:"判断题只能有一个正确项！",type:"warning"}):this.$message({message:"单选题答案只能有一个",type:"warning"})},onCancel:function(){this.$router.push({name:"ListQu"})}}},u=l,c=n("2877"),p=Object(c["a"])(u,a,s,!1,null,"5648bbcd",null);e["default"]=p.exports},ddf8:function(t,e,n){},f4bc:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return l}));var a=n("b775");function s(t){return Object(a["b"])("/exam/api/qu/qu/detail",{id:t})}function o(t){return Object(a["b"])("/exam/api/qu/qu/save",t)}function r(t){return Object(a["a"])("/exam/api/qu/qu/export",t)}function i(){return Object(a["a"])("/exam/api/qu/qu/import/template")}function l(t){return Object(a["c"])("/exam/api/qu/qu/import",t)}}}]);