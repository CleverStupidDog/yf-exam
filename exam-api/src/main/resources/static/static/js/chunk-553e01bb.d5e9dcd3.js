(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-553e01bb"],{"01c8":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("178b"),r=n("3953"),o=n("1df6");function u(t){return Object(i["a"])(t)||Object(r["a"])(t)||Object(o["a"])()}},"09fa":function(t,e,n){var i=n("4588"),r=n("9def");t.exports=function(t){if(void 0===t)return 0;var e=i(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n}},"0f88":function(t,e,n){var i,r=n("7726"),o=n("32e9"),u=n("ca5a"),c=u("typed_array"),a=u("view"),s=!(!r.ArrayBuffer||!r.DataView),f=s,d=0,l=9,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");while(d<l)(i=r[h[d++]])?(o(i.prototype,c,!0),o(i.prototype,a,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:c,VIEW:a}},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"34ef":function(t,e,n){n("ec30")("Uint8",1,(function(t){return function(e,n,i){return t(this,e,n,i)}}))},"36bd":function(t,e,n){"use strict";var i=n("4bf8"),r=n("77f1"),o=n("9def");t.exports=function(t){var e=i(this),n=o(e.length),u=arguments.length,c=r(u>1?arguments[1]:void 0,n),a=u>2?arguments[2]:void 0,s=void 0===a?n:r(a,n);while(s>c)e[c++]=t;return e}},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),r=n("d8e8"),o=n("4bf8"),u=n("79e5"),c=[].sort,a=[1,2,3];i(i.P+i.F*(u((function(){a.sort(void 0)}))||!u((function(){a.sort(null)}))||!n("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),r(t))}})},7514:function(t,e,n){"use strict";var i=n("5ca1"),r=n("0a49")(5),o="find",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),i(i.P+i.F*u,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"9af4":function(t,e,n){!function(e,n){t.exports=n()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,r,o=Symbol("visibility-change-id"),u=-1;void 0!==document.hidden?(i="hidden",r="visibilitychange"):void 0!==document.msHidden?(i="msHidden",r="msvisibilitychange"):void 0!==document.webkitHidden?(i="webkitHidden",r="webkitvisibilitychange"):void 0!==document.mozHidden&&(i="mozHidden",r="mozvisibilitychange");var c,a={},s=document;function f(){c||(document.addEventListener(r,(function(){(function(t){for(var e in a)a[e].call(s,t,s[i])}).apply(d,arguments)})),c=!0)}var d={change:function(t){if(!d.isSupported())return!1;var e=u+=1;return a[e]=t,f(),e},unbind:function(t){delete a[t]},isSupported:function(){return void 0!==i},hidden:function(){return s[i]},install:function(t){t.directive("visibility-change",{bind:function(t,e){var n=e.value;"function"==typeof n?t[o]=d.change((function(t,e){n(t,e)})):console.error("You need bind a callback function for v-visibility-change")},unbind:function(t){d.unbind(t[o])}})}};e.default=d}])}))},b3cb:function(t,e,n){!function(e,n){t.exports=n()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=function(t,e,n,i,r,o,u,c){var a,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),i&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=a):r&&(a=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,e){return a.call(e),f(t,e)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,a):[a]}return{exports:t,options:s}}({name:"VueWebCam",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:500},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},selectFirstDevice:{type:Boolean,default:!1},deviceId:{type:String,default:null},playsinline:{type:Boolean,default:!0},resolution:{type:Object,default:null,validator:function(t){return t.height&&t.width}}},data:function(){return{source:null,canvas:null,camerasListEmitted:!1,cameras:[]}},watch:{deviceId:function(t){this.changeCamera(t)}},mounted:function(){this.setupMedia()},beforeDestroy:function(){this.stop()},methods:{legacyGetUserMediaSupport:function(){return function(t){var e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return e?new Promise((function(n,i){e.call(navigator,t,n,i)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}},setupMedia:function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=this.legacyGetUserMediaSupport()),this.testMediaAccess()},loadCameras:function(){var t=this;navigator.mediaDevices.enumerateDevices().then((function(e){for(var n=0;n!==e.length;++n){var i=e[n];"videoinput"===i.kind&&t.cameras.push(i)}})).then((function(){t.camerasListEmitted||(t.selectFirstDevice&&t.cameras.length>0&&(t.deviceId=t.cameras[0].deviceId),t.$emit("cameras",t.cameras),t.camerasListEmitted=!0)})).catch((function(e){return t.$emit("notsupported",e)}))},changeCamera:function(t){this.stop(),this.$emit("camera-change",t),this.loadCamera(t)},loadSrcStream:function(t){var e=this;"srcObject"in this.$refs.video?this.$refs.video.srcObject=t:this.source=window.HTMLMediaElement.srcObject(t),this.$refs.video.onloadedmetadata=function(){e.$emit("video-live",t)},this.$emit("started",t)},stopStreamedVideo:function(t){var e=this,n=t.srcObject;n.getTracks().forEach((function(t){t.stop(),e.$emit("stopped",n),e.$refs.video.srcObject=null,e.source=null}))},stop:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.stopStreamedVideo(this.$refs.video)},start:function(){this.deviceId&&this.loadCamera(this.deviceId)},pause:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.pause()},resume:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.play()},testMediaAccess:function(){var t=this,e={video:!0};this.resolution&&(e.video={},e.video.height=this.resolution.height,e.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(e).then((function(e){e.getTracks().forEach((function(t){t.stop()})),t.loadCameras()})).catch((function(e){return t.$emit("error",e)}))},loadCamera:function(t){var e=this,n={video:{deviceId:{exact:t}}};this.resolution&&(n.video.height=this.resolution.height,n.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(n).then((function(t){return e.loadSrcStream(t)})).catch((function(t){return e.$emit("error",t)}))},capture:function(){return this.getCanvas().toDataURL(this.screenshotFormat)},getCanvas:function(){var t=this.$refs.video;if(!this.ctx){var e=document.createElement("canvas");e.height=t.videoHeight,e.width=t.videoWidth,this.canvas=e,this.ctx=e.getContext("2d")}var n=this.ctx,i=this.canvas;return n.drawImage(t,0,0,i.width,i.height),i}}},(function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"video",attrs:{width:this.width,height:this.height,src:this.source,autoplay:this.autoplay,playsinline:this.playsinline}})}),[],!1,null,null,null).exports;function r(t){t.component("vue-web-cam",i)}n.d(e,"version",(function(){return o})),n.d(e,"WebCam",(function(){return i})),"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.default=r;var o="__VERSION__"}])}))},ba92:function(t,e,n){"use strict";var i=n("4bf8"),r=n("77f1"),o=n("9def");t.exports=[].copyWithin||function(t,e){var n=i(this),u=o(n.length),c=r(t,u),a=r(e,u),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?u:r(s,u))-a,u-c),d=1;a<c&&c<a+f&&(d=-1,a+=f-1,c+=f-1);while(f-- >0)a in n?n[c]=n[a]:delete n[c],c+=d,a+=d;return n}},ec30:function(t,e,n){"use strict";if(n("9e1e")){var i=n("2d00"),r=n("7726"),o=n("79e5"),u=n("5ca1"),c=n("0f88"),a=n("ed0b"),s=n("9b43"),f=n("f605"),d=n("4630"),l=n("32e9"),h=n("dcbc"),v=n("4588"),g=n("9def"),p=n("09fa"),b=n("77f1"),y=n("6a99"),m=n("69a8"),w=n("23c6"),_=n("d3f4"),S=n("4bf8"),E=n("33a4"),O=n("2aeb"),x=n("38fd"),I=n("9093").f,M=n("27ee"),j=n("ca5a"),U=n("2b4c"),$=n("0a49"),A=n("c366"),P=n("ebd6"),C=n("cadf"),T=n("84f2"),F=n("5cc5"),L=n("7a56"),D=n("36bd"),R=n("ba92"),V=n("86cc"),N=n("11e9"),W=V.f,k=N.f,B=r.RangeError,H=r.TypeError,G=r.Uint8Array,Y="ArrayBuffer",z="Shared"+Y,J="BYTES_PER_ELEMENT",X="prototype",q=Array[X],K=a.ArrayBuffer,Q=a.DataView,Z=$(0),tt=$(2),et=$(3),nt=$(4),it=$(5),rt=$(6),ot=A(!0),ut=A(!1),ct=C.values,at=C.keys,st=C.entries,ft=q.lastIndexOf,dt=q.reduce,lt=q.reduceRight,ht=q.join,vt=q.sort,gt=q.slice,pt=q.toString,bt=q.toLocaleString,yt=U("iterator"),mt=U("toStringTag"),wt=j("typed_constructor"),_t=j("def_constructor"),St=c.CONSTR,Et=c.TYPED,Ot=c.VIEW,xt="Wrong length!",It=$(1,(function(t,e){return At(P(t,t[_t]),e)})),Mt=o((function(){return 1===new G(new Uint16Array([1]).buffer)[0]})),jt=!!G&&!!G[X].set&&o((function(){new G(1).set({})})),Ut=function(t,e){var n=v(t);if(n<0||n%e)throw B("Wrong offset!");return n},$t=function(t){if(_(t)&&Et in t)return t;throw H(t+" is not a typed array!")},At=function(t,e){if(!(_(t)&&wt in t))throw H("It is not a typed array constructor!");return new t(e)},Pt=function(t,e){return Ct(P(t,t[_t]),e)},Ct=function(t,e){var n=0,i=e.length,r=At(t,i);while(i>n)r[n]=e[n++];return r},Tt=function(t,e,n){W(t,e,{get:function(){return this._d[n]}})},Ft=function(t){var e,n,i,r,o,u,c=S(t),a=arguments.length,f=a>1?arguments[1]:void 0,d=void 0!==f,l=M(c);if(void 0!=l&&!E(l)){for(u=l.call(c),i=[],e=0;!(o=u.next()).done;e++)i.push(o.value);c=i}for(d&&a>2&&(f=s(f,arguments[2],2)),e=0,n=g(c.length),r=At(this,n);n>e;e++)r[e]=d?f(c[e],e):c[e];return r},Lt=function(){var t=0,e=arguments.length,n=At(this,e);while(e>t)n[t]=arguments[t++];return n},Dt=!!G&&o((function(){bt.call(new G(1))})),Rt=function(){return bt.apply(Dt?gt.call($t(this)):$t(this),arguments)},Vt={copyWithin:function(t,e){return R.call($t(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return nt($t(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return D.apply($t(this),arguments)},filter:function(t){return Pt(this,tt($t(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return it($t(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return rt($t(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z($t(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return ut($t(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot($t(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ht.apply($t(this),arguments)},lastIndexOf:function(t){return ft.apply($t(this),arguments)},map:function(t){return It($t(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return dt.apply($t(this),arguments)},reduceRight:function(t){return lt.apply($t(this),arguments)},reverse:function(){var t,e=this,n=$t(e).length,i=Math.floor(n/2),r=0;while(r<i)t=e[r],e[r++]=e[--n],e[n]=t;return e},some:function(t){return et($t(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return vt.call($t(this),t)},subarray:function(t,e){var n=$t(this),i=n.length,r=b(t,i);return new(P(n,n[_t]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,g((void 0===e?i:b(e,i))-r))}},Nt=function(t,e){return Pt(this,gt.call($t(this),t,e))},Wt=function(t){$t(this);var e=Ut(arguments[1],1),n=this.length,i=S(t),r=g(i.length),o=0;if(r+e>n)throw B(xt);while(o<r)this[e+o]=i[o++]},kt={entries:function(){return st.call($t(this))},keys:function(){return at.call($t(this))},values:function(){return ct.call($t(this))}},Bt=function(t,e){return _(t)&&t[Et]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ht=function(t,e){return Bt(t,e=y(e,!0))?d(2,t[e]):k(t,e)},Gt=function(t,e,n){return!(Bt(t,e=y(e,!0))&&_(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?W(t,e,n):(t[e]=n.value,t)};St||(N.f=Ht,V.f=Gt),u(u.S+u.F*!St,"Object",{getOwnPropertyDescriptor:Ht,defineProperty:Gt}),o((function(){pt.call({})}))&&(pt=bt=function(){return ht.call(this)});var Yt=h({},Vt);h(Yt,kt),l(Yt,yt,kt.values),h(Yt,{slice:Nt,set:Wt,constructor:function(){},toString:pt,toLocaleString:Rt}),Tt(Yt,"buffer","b"),Tt(Yt,"byteOffset","o"),Tt(Yt,"byteLength","l"),Tt(Yt,"length","e"),W(Yt,mt,{get:function(){return this[Et]}}),t.exports=function(t,e,n,a){a=!!a;var s=t+(a?"Clamped":"")+"Array",d="get"+t,h="set"+t,v=r[s],b=v||{},y=v&&x(v),m=!v||!c.ABV,S={},E=v&&v[X],M=function(t,n){var i=t._d;return i.v[d](n*e+i.o,Mt)},j=function(t,n,i){var r=t._d;a&&(i=(i=Math.round(i))<0?0:i>255?255:255&i),r.v[h](n*e+r.o,i,Mt)},U=function(t,e){W(t,e,{get:function(){return M(this,e)},set:function(t){return j(this,e,t)},enumerable:!0})};m?(v=n((function(t,n,i,r){f(t,v,s,"_d");var o,u,c,a,d=0,h=0;if(_(n)){if(!(n instanceof K||(a=w(n))==Y||a==z))return Et in n?Ct(v,n):Ft.call(v,n);o=n,h=Ut(i,e);var b=n.byteLength;if(void 0===r){if(b%e)throw B(xt);if(u=b-h,u<0)throw B(xt)}else if(u=g(r)*e,u+h>b)throw B(xt);c=u/e}else c=p(n),u=c*e,o=new K(u);l(t,"_d",{b:o,o:h,l:u,e:c,v:new Q(o)});while(d<c)U(t,d++)})),E=v[X]=O(Yt),l(E,"constructor",v)):o((function(){v(1)}))&&o((function(){new v(-1)}))&&F((function(t){new v,new v(null),new v(1.5),new v(t)}),!0)||(v=n((function(t,n,i,r){var o;return f(t,v,s),_(n)?n instanceof K||(o=w(n))==Y||o==z?void 0!==r?new b(n,Ut(i,e),r):void 0!==i?new b(n,Ut(i,e)):new b(n):Et in n?Ct(v,n):Ft.call(v,n):new b(p(n))})),Z(y!==Function.prototype?I(b).concat(I(y)):I(b),(function(t){t in v||l(v,t,b[t])})),v[X]=E,i||(E.constructor=v));var $=E[yt],A=!!$&&("values"==$.name||void 0==$.name),P=kt.values;l(v,wt,!0),l(E,Et,s),l(E,Ot,!0),l(E,_t,v),(a?new v(1)[mt]==s:mt in E)||W(E,mt,{get:function(){return s}}),S[s]=v,u(u.G+u.W+u.F*(v!=b),S),u(u.S,s,{BYTES_PER_ELEMENT:e}),u(u.S+u.F*o((function(){b.of.call(v,1)})),s,{from:Ft,of:Lt}),J in E||l(E,J,e),u(u.P,s,Vt),L(s),u(u.P+u.F*jt,s,{set:Wt}),u(u.P+u.F*!A,s,kt),i||E.toString==pt||(E.toString=pt),u(u.P+u.F*o((function(){new v(1).slice()})),s,{slice:Nt}),u(u.P+u.F*(o((function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()}))||!o((function(){E.toLocaleString.call([1,2])}))),s,{toLocaleString:Rt}),T[s]=A?$:P,i||A||l(E,yt,P)}}else t.exports=function(){}},ed0b:function(t,e,n){"use strict";var i=n("7726"),r=n("9e1e"),o=n("2d00"),u=n("0f88"),c=n("32e9"),a=n("dcbc"),s=n("79e5"),f=n("f605"),d=n("4588"),l=n("9def"),h=n("09fa"),v=n("9093").f,g=n("86cc").f,p=n("36bd"),b=n("7f20"),y="ArrayBuffer",m="DataView",w="prototype",_="Wrong length!",S="Wrong index!",E=i[y],O=i[m],x=i.Math,I=i.RangeError,M=i.Infinity,j=E,U=x.abs,$=x.pow,A=x.floor,P=x.log,C=x.LN2,T="buffer",F="byteLength",L="byteOffset",D=r?"_b":T,R=r?"_l":F,V=r?"_o":L;function N(t,e,n){var i,r,o,u=new Array(n),c=8*n-e-1,a=(1<<c)-1,s=a>>1,f=23===e?$(2,-24)-$(2,-77):0,d=0,l=t<0||0===t&&1/t<0?1:0;for(t=U(t),t!=t||t===M?(r=t!=t?1:0,i=a):(i=A(P(t)/C),t*(o=$(2,-i))<1&&(i--,o*=2),t+=i+s>=1?f/o:f*$(2,1-s),t*o>=2&&(i++,o/=2),i+s>=a?(r=0,i=a):i+s>=1?(r=(t*o-1)*$(2,e),i+=s):(r=t*$(2,s-1)*$(2,e),i=0));e>=8;u[d++]=255&r,r/=256,e-=8);for(i=i<<e|r,c+=e;c>0;u[d++]=255&i,i/=256,c-=8);return u[--d]|=128*l,u}function W(t,e,n){var i,r=8*n-e-1,o=(1<<r)-1,u=o>>1,c=r-7,a=n-1,s=t[a--],f=127&s;for(s>>=7;c>0;f=256*f+t[a],a--,c-=8);for(i=f&(1<<-c)-1,f>>=-c,c+=e;c>0;i=256*i+t[a],a--,c-=8);if(0===f)f=1-u;else{if(f===o)return i?NaN:s?-M:M;i+=$(2,e),f-=u}return(s?-1:1)*i*$(2,f-e)}function k(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function B(t){return[255&t]}function H(t){return[255&t,t>>8&255]}function G(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function Y(t){return N(t,52,8)}function z(t){return N(t,23,4)}function J(t,e,n){g(t[w],e,{get:function(){return this[n]}})}function X(t,e,n,i){var r=+n,o=h(r);if(o+e>t[R])throw I(S);var u=t[D]._b,c=o+t[V],a=u.slice(c,c+e);return i?a:a.reverse()}function q(t,e,n,i,r,o){var u=+n,c=h(u);if(c+e>t[R])throw I(S);for(var a=t[D]._b,s=c+t[V],f=i(+r),d=0;d<e;d++)a[s+d]=f[o?d:e-d-1]}if(u.ABV){if(!s((function(){E(1)}))||!s((function(){new E(-1)}))||s((function(){return new E,new E(1.5),new E(NaN),E.name!=y}))){E=function(t){return f(this,E),new j(h(t))};for(var K,Q=E[w]=j[w],Z=v(j),tt=0;Z.length>tt;)(K=Z[tt++])in E||c(E,K,j[K]);o||(Q.constructor=E)}var et=new O(new E(2)),nt=O[w].setInt8;et.setInt8(0,2147483648),et.setInt8(1,2147483649),!et.getInt8(0)&&et.getInt8(1)||a(O[w],{setInt8:function(t,e){nt.call(this,t,e<<24>>24)},setUint8:function(t,e){nt.call(this,t,e<<24>>24)}},!0)}else E=function(t){f(this,E,y);var e=h(t);this._b=p.call(new Array(e),0),this[R]=e},O=function(t,e,n){f(this,O,m),f(t,E,m);var i=t[R],r=d(e);if(r<0||r>i)throw I("Wrong offset!");if(n=void 0===n?i-r:l(n),r+n>i)throw I(_);this[D]=t,this[V]=r,this[R]=n},r&&(J(E,F,"_l"),J(O,T,"_b"),J(O,F,"_l"),J(O,L,"_o")),a(O[w],{getInt8:function(t){return X(this,1,t)[0]<<24>>24},getUint8:function(t){return X(this,1,t)[0]},getInt16:function(t){var e=X(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=X(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return k(X(this,4,t,arguments[1]))},getUint32:function(t){return k(X(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return W(X(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return W(X(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){q(this,1,t,B,e)},setUint8:function(t,e){q(this,1,t,B,e)},setInt16:function(t,e){q(this,2,t,H,e,arguments[2])},setUint16:function(t,e){q(this,2,t,H,e,arguments[2])},setInt32:function(t,e){q(this,4,t,G,e,arguments[2])},setUint32:function(t,e){q(this,4,t,G,e,arguments[2])},setFloat32:function(t,e){q(this,4,t,z,e,arguments[2])},setFloat64:function(t,e){q(this,8,t,Y,e,arguments[2])}});b(E,y),b(O,m),c(O[w],u.VIEW,!0),e[y]=E,e[m]=O}}]);