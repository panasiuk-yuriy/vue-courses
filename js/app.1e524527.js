(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-200ecc72":"a3e7c8f5","chunk-fcf88de6":"60278eb9"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-200ecc72":1,"chunk-fcf88de6":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-200ecc72":"2203fd5b","chunk-fcf88de6":"9f90701e"}[t]+".css",s=l.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],p.parentNode.removeChild(p),n(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-courses/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"2f44":function(t,e,n){},4806:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("AddButton",{directives:[{name:"show",rawName:"v-show",value:"/"!==this.$route.path,expression:"this.$route.path !== '/'"}]}),n("router-view"),n("ModalWindow",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{"close-modal":t.handleCloseModal}})],1)},s=[],o=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark",staticStyle:{"background-color":"#e3f2fd"}},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("LOGO")]),n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/courses"}},[t._v("Courses")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/students"}},[t._v("Students")])],1)])])])},l=[],c=n("2877"),u={},d=Object(c["a"])(u,r,l,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"actions"},[n("button",{staticClass:"btn btn-success btn-round",attrs:{type:"button"},on:{click:t.handelerClick}},[t._v("+")])])])},f=[],v=n("2f62"),b={methods:Object(o["a"])(Object(o["a"])({},Object(v["c"])(["openModal"])),{},{handelerClick:function(){console.log(this.$route.path),this.openModal()}})},h=b,g=(n("ba98"),Object(c["a"])(h,m,f,!1,null,"66b53882",null)),C=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("Add course")])],2),n("div",{staticClass:"modal-body"},[t._t("body",["/courses"===this.$route.path?n("AddCourse"):"/students"===this.$route.path?n("AddStudent"):t._e()])],2)])])])])},y=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"input-group mb-3"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"input-group mb-3"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),n("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Create")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.closeModalWindow}},[t._v("Close")])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-sm"}},[t._v("Title")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-sm"}},[t._v("Code")])])}],x={data:function(){return{title:"",code:""}},methods:Object(o["a"])(Object(o["a"])({},Object(v["c"])(["createCourse","closeModal"])),{},{onSubmit:function(){this.createCourse({title:this.title,code:this.code,id:Date.now()}),this.closeModal(),this.title="",this.code=""},closeModalWindow:function(){this.closeModal(),this.title="",this.code=""}})},M=x,O=Object(c["a"])(M,S,w,!1,null,null,null),k=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"input-group mb-3"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"input-group mb-3"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"input-group mb-3 "},[t._m(2),n("select",{directives:[{name:"model",rawName:"v-model",value:t.active,expression:"active"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect01"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.active=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:!0}},[t._v("Active")]),n("option",{domProps:{value:!1}},[t._v("Not active")])])]),n("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(e){return t.$emit("close-modal")}}},[t._v("Create")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.closeModalWindow}},[t._v("Close")])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-sm"}},[t._v("Name")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-sm"}},[t._v("Email")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect01"}},[t._v("Status")])])}],P=(n("b0c0"),{data:function(){return{name:"",email:"",active:!0}},methods:Object(o["a"])(Object(o["a"])({},Object(v["c"])(["createStudent","closeModal"])),{},{onSubmit:function(){this.createStudent({name:this.name,email:this.email,active:this.active,id:Date.now()}),this.closeModal(),this.name="",this.email="",this.active=!0},closeModalWindow:function(){this.closeModal(),this.name="",this.email="",this.active=!0}})}),$=P,N=Object(c["a"])($,j,E,!1,null,null,null),A=N.exports,T={name:"modal",components:{AddCourse:k,AddStudent:A}},z=T,V=(n("7084"),Object(c["a"])(z,_,y,!1,null,null,null)),G=V.exports,L={components:{Navigation:p,AddButton:C,ModalWindow:G},computed:Object(v["b"])(["isModalVisible"]),methods:Object(o["a"])(Object(o["a"])({},Object(v["c"])(["closeModal"])),{},{handleCloseModal:function(){this.closeModal()}})},D=L,H=(n("034f"),Object(c["a"])(D,i,s,!1,null,null,null)),B=H.exports,J=(n("d3b7"),n("8c4f")),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Home Page")])},I=[],q={name:"Home",components:{}},F=q,K=Object(c["a"])(F,W,I,!1,null,null,null),U=K.exports;a["a"].use(J["a"]);var Q=new J["a"]({mode:"history",routes:[{path:"/",component:U},{path:"/courses",component:function(){return n.e("chunk-200ecc72").then(n.bind(null,"1a2f"))}},{path:"/students",component:function(){return n.e("chunk-fcf88de6").then(n.bind(null,"4929"))}}]}),R=(n("4de4"),n("d81d"),{actions:{},mutations:{createCourse:function(t,e){t.courses.push(e)},editCourse:function(t,e){t.courses=t.courses.map((function(t){return t.id===e.id?e:t}))},deleteCourse:function(t,e){console.log("deleted",e),t.courses=t.courses.filter((function(t){return t.id!==e}))}},state:{courses:[{id:1,code:"P012345",title:"HTML"},{id:2,code:"P012314",title:"CSS"},{id:3,code:"P021312",title:"JavaScript"}]},getters:{allCourses:function(t){return t.courses}}}),X={actions:{},mutations:{openModal:function(t){t.isVisibleModal=!0},openEditModal:function(t){t.isVisibleEditModal=!0},closeModal:function(t){t.isVisibleModal=!1},closeEditModal:function(t){t.isVisibleEditModal=!1}},state:{isVisibleModal:!1,isVisibleEditModal:!1},getters:{isModalVisible:function(t){return t.isVisibleModal},isEditVisible:function(t){return t.isVisibleEditModal}}},Y={actions:{},mutations:{createStudent:function(t,e){t.students.push(e)},editStudent:function(t,e){t.students=t.students.map((function(t){return t.id===e.id?e:t}))},deleteStudent:function(t,e){console.log("deleted",e),t.students=t.students.filter((function(t){return t.id!==e})),console.log(t.students)}},state:{students:[{id:1,name:"Leanne Graham",email:"Sincere@april.biz",active:!0},{id:2,name:"Ervin Howell",email:"Shanna@melissa.tv",active:!1},{id:3,name:"Clementine Bauch",email:"Nathan@yesenia.net",active:!0},{id:4,name:"Patricia Lebsack",email:"Julianne.OConner@kory.org",active:!0},{id:5,name:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",active:!1}]},getters:{allStudents:function(t){return t.students}}},Z={actions:{},mutations:{filterText:function(t,e){console.log(e)}},state:{inputText:""},getters:{filterasdText:function(t){return t.inputText}}};a["a"].use(v["a"]);var tt=new v["a"].Store({modules:{courses:R,modal:X,students:Y,filter:Z},mutations:{initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}}});n("f9e3");a["a"].config.productionTip=!1,new a["a"]({router:Q,store:tt,render:function(t){return t(B)},beforeCreate:function(){this.$store.commit("initialiseStore")}}).$mount("#app"),tt.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}))},7084:function(t,e,n){"use strict";var a=n("4806"),i=n.n(a);i.a},"85ec":function(t,e,n){},ba98:function(t,e,n){"use strict";var a=n("2f44"),i=n.n(a);i.a}});
//# sourceMappingURL=app.1e524527.js.map