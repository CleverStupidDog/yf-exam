(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15a6bfa1"],{3200:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"d",(function(){return r})),e.d(a,"f",(function(){return s})),e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return o})),e.d(a,"e",(function(){return u}));var n=e("b775");function i(t){return Object(n["b"])("/exam/api/paper/paper/create-paper",t)}function r(t){return Object(n["b"])("/exam/api/paper/paper/paper-detail",t)}function s(t){return Object(n["b"])("/exam/api/paper/paper/qu-detail",t)}function c(t){return Object(n["b"])("/exam/api/paper/paper/fill-answer",t)}function o(t){return Object(n["b"])("/exam/api/paper/paper/hand-exam",t)}function u(t){return Object(n["b"])("/exam/api/paper/paper/paper-result",t)}},"70fe":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"visibility-change",rawName:"v-visibility-change",value:t.visibleChange,expression:"visibleChange"}],staticClass:"app-container"},[e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{span:24}},[e("el-card",{staticStyle:{"margin-bottom":"10px"}},[t._v(" 距离考试结束还有："),e("span",{staticStyle:{color:"#ff0000"}},[t._v(t._s(t.min)+"分钟"+t._s(t.sec)+"秒")]),e("el-button",{staticStyle:{float:"right","margin-top":"-10px"},attrs:{type:"primary",icon:"el-icon-plus",loading:t.loading},on:{click:function(a){return t.handHandExam()}}},[t._v(" "+t._s(t.handleText)+" ")])],1)],1),e("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:6,xs:24}},[e("el-card",[e("p",{staticClass:"card-title"},[t._v("答题卡")]),e("el-row",{staticClass:"card-line",staticStyle:{"padding-left":"10px"},attrs:{gutter:24}},[e("el-tag",{attrs:{type:"info"}},[t._v("未作答")]),e("el-tag",{attrs:{type:"success"}},[t._v("已作答")])],1),void 0!==t.paperData.radioList&&t.paperData.radioList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("单选题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.radioList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(" "+t._s(a.sort+1))])})),1)],1):t._e(),void 0!==t.paperData.multiList&&t.paperData.multiList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("多选题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.multiList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(t._s(a.sort+1))])})),1)],1):t._e(),void 0!==t.paperData.judgeList&&t.paperData.judgeList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("判断题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.judgeList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(t._s(a.sort+1))])})),1)],1):t._e(),void 0!==t.paperData.saqList&&t.paperData.saqList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("简答题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.saqList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(t._s(a.sort+1))])})),1)],1):t._e()],1)],1),e("el-col",{attrs:{span:18,xs:24}},[e("el-card",{staticClass:"qu-content"},[t.quData.content?e("p",[t._v(t._s(t.quData.sort+1)+"."+t._s(t.quData.content))]):t._e(),t.quData.image?e("p",[e("img",{attrs:{src:t.quData.image}})]):t._e(),1===t.quData.quType||3===t.quData.quType?e("div",[e("el-radio-group",{model:{value:t.radioValue,callback:function(a){t.radioValue=a},expression:"radioValue"}},t._l(t.quData.answerList,(function(a){return e("el-radio",{attrs:{label:a.id}},[t._v(t._s(a.abc)+"."+t._s(a.content)+" "),a.image?e("div",{staticStyle:{clear:"both"}},[e("img",{attrs:{src:a.image}})]):t._e()])})),1)],1):t._e(),2===t.quData.quType?e("div",[e("el-checkbox-group",{model:{value:t.multiValue,callback:function(a){t.multiValue=a},expression:"multiValue"}},t._l(t.quData.answerList,(function(a){return e("el-checkbox",{attrs:{label:a.id}},[t._v(t._s(a.abc)+"."+t._s(a.content)+" "),a.image?e("div",{staticStyle:{clear:"both"}},[e("img",{attrs:{src:a.image}})]):t._e()])})),1)],1):t._e(),4===t.quData.quType?e("div",[e("el-input",{attrs:{type:"textarea",rows:10},model:{value:t.saqValue,callback:function(a){t.saqValue=a},expression:"saqValue"}})],1):t._e()]),e("div",{staticStyle:{"margin-top":"20px"}},[t.showPrevious?e("el-button",{attrs:{type:"primary",icon:"el-icon-back"},on:{click:function(a){return t.handPrevious()}}},[t._v(" 上一题 ")]):t._e(),t.showNext?e("el-button",{attrs:{type:"warning",icon:"el-icon-right"},on:{click:function(a){return t.handNext()}}},[t._v(" 下一题 ")]):t._e()],1)],1)],1),e("div",[e("web-cam",{staticClass:"web-cam",attrs:{"auto-capture":3e5},on:{capt:t.captureImage}})],1)],1)},i=[],r=(e("55dd"),e("ac6a"),e("2b0e")),s=e("3200"),c=e("5c96"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("vue-web-cam",{ref:"webcam",attrs:{"device-id":t.deviceId,width:"250px",height:"180px"},on:{started:t.onStarted,stopped:t.onStopped,error:t.onError,cameras:t.onCameras,capture:t.onCapture,"camera-change":t.onCameraChange}})},u=[],l=(e("34ef"),e("4917"),e("28a5"),e("01c8")),d=(e("7514"),e("c5f6"),e("b3cb")),p=e("b775");function h(t){return Object(p["c"])("/common/api/oss/upload",t)}function m(t){return Object(p["b"])("/exam/api/paper/paper-capture/save",t)}var f={name:"WebCam",components:{"vue-web-cam":d["WebCam"]},props:{autoCapture:{type:Number,defaultValue:0}},data:function(){return{img:null,camera:null,deviceId:null,devices:[]}},computed:{device:function(){var t=this;return this.devices.find((function(a){return a.deviceId===t.deviceId}))}},watch:{camera:function(t){this.deviceId=t},devices:function(){var t=Object(l["a"])(this.devices),a=t[0];t.slice(1);a&&(this.camera=a.deviceId,this.deviceId=a.deviceId)}},created:function(){this.autoCapture>0&&setInterval(this.handleUpload,this.autoCapture)},methods:{handleUpload:function(){var t=this;this.img=this.$refs.webcam.capture();var a=this.base64ToFile(this.img,"capture.jpg");h(a).then((function(a){alert(JSON.stringify(a)),t.$emit("capt",a.url)}))},base64ToFile:function(t,a){var e=t.split(","),n=e[0].match(/:(.*?);/)[1],i=atob(e[1]),r=i.length,s=new Uint8Array(r);while(r--)s[r]=i.charCodeAt(r);return new File([s],a,{type:n})},onCapture:function(){this.img=this.$refs.webcam.capture()},onStarted:function(t){console.log("On Started Event",t)},onStopped:function(t){console.log("On Stopped Event",t)},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(t){console.log("On Error Event",t)},onCameras:function(t){this.devices=t,console.log("On Cameras Event",t)},onCameraChange:function(t){this.deviceId=t,this.camera=t,console.log("On Camera Change Event",t)}}},v=f,g=e("2877"),b=Object(g["a"])(v,o,u,!1,null,null,null),w=b.exports,I=e("9af4"),_=e.n(I);r["default"].use(_.a);var D={name:"ExamProcess",components:{WebCam:w},data:function(){return{isFullscreen:!1,camVisible:!0,showPrevious:!1,showNext:!0,loading:!1,handleText:"交卷",pageLoading:!1,paperId:"",cardItem:{},allItem:[],quData:{answerList:[]},paperData:{leftSeconds:99999,radioList:[],multiList:[],judgeList:[],saqList:[]},radioValue:"",saqValue:"",multiValue:[],answeredIds:[],min:"00",sec:"00"}},created:function(){var t=this.$route.params.id;"undefined"!==typeof t&&(this.paperId=t,this.fetchData(t))},methods:{captureImage:function(t){var a={paperId:this.paperId,capture:t};m(a).then((function(t){}))},visibleChange:function(t,a){a||this.$message({message:"诚信考试，请不要切换窗口！",type:"warning"})},countdown:function(){var t=this.paperData.leftSeconds;if(t<0)this.doHandler();else{var a=parseInt(t/60%60),e=parseInt(t%60);this.min=a>9?a:"0"+a,this.sec=e>9?e:"0"+e;var n=this;this.paperData.leftSeconds-=1,setTimeout((function(){n.countdown()}),1e3)}},cardItemClass:function(t,a){return a===this.cardItem.quId?"warning":t?"success":t?void 0:"info"},countNotAnswered:function(){var t=0;return this.paperData.radioList.forEach((function(a){a.answered||(t+=1)})),this.paperData.multiList.forEach((function(a){a.answered||(t+=1)})),this.paperData.judgeList.forEach((function(a){a.answered||(t+=1)})),this.paperData.saqList.forEach((function(a){a.answered||(t+=1)})),t},handNext:function(){var t=this.cardItem.sort+1;this.handSave(this.allItem[t])},handPrevious:function(){var t=this.cardItem.sort-1;this.handSave(this.allItem[t])},doHandler:function(){var t=this;this.handleText="正在交卷，请等待...",this.loading=!0;var a={id:this.paperId};Object(s["c"])(a).then((function(){t.$message({message:"试卷提交成功，即将进入试卷详情！",type:"success"}),t.$router.push({name:"ShowExam",params:{id:t.paperId}})}))},handHandExam:function(){var t=this;this.handSave(this.cardItem,(function(){var a=t.countNotAnswered(),e="确认要交卷吗？";a>0&&(e="您还有"+a+"题未作答，确认要交卷吗?"),t.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.doHandler()})).catch((function(){t.$message({type:"info",message:"交卷已取消，您可以继续作答！"})}))}))},handSave:function(t,a){var e=this;t.id===this.allItem[0].id?this.showPrevious=!1:this.showPrevious=!0;var n=this.allItem.length-1;t.id===this.allItem[n].id?this.showNext=!1:this.showNext=!0;var i=this.multiValue;""!==this.radioValue&&i.push(this.radioValue);var r={paperId:this.paperId,quId:this.cardItem.quId,answers:i,answer:this.saqValue};Object(s["b"])(r).then((function(){i.length>0&&(e.cardItem.answered=!0),a&&a(),e.fetchQuData(t)}))},fetchQuData:function(t){var a=this,e=c["Loading"].service({text:"拼命加载中",background:"rgba(0, 0, 0, 0.7)"});this.cardItem=t;var n={paperId:this.paperId,quId:t.quId};Object(s["f"])(n).then((function(t){console.log(t),a.quData=t.data,a.radioValue="",a.multiValue=[],a.quData.answerList.forEach((function(t){1!==a.quData.quType&&3!==a.quData.quType||!t.checked||(a.radioValue=t.id),2===a.quData.quType&&t.checked&&a.multiValue.push(t.id)})),a.saqValue=a.quData.answer,e.close()}))},fetchData:function(t){var a=this,e={id:t};Object(s["d"])(e).then((function(t){a.paperData=t.data,a.paperData.radioList?a.cardItem=a.paperData.radioList[0]:a.paperData.multiList?a.cardItem=a.paperData.multiList[0]:a.paperData.judgeList?a.cardItem=a.paperData.judgeList[0]:a.cardItem=a.paperData.saqList[0];var e=a;a.paperData.radioList.forEach((function(t){e.allItem.push(t)})),a.paperData.multiList.forEach((function(t){e.allItem.push(t)})),a.paperData.judgeList.forEach((function(t){e.allItem.push(t)})),a.paperData.saqList.forEach((function(t){e.allItem.push(t)})),a.fetchQuData(a.cardItem),a.countdown()}))}}},q=D,x=(e("942b"),Object(g["a"])(q,n,i,!1,null,"bdbe121e",null));a["default"]=x.exports},"942b":function(t,a,e){"use strict";var n=e("c17f"),i=e.n(n);i.a},c17f:function(t,a,e){}}]);