(function(e){function t(t){for(var o,r,u=t[0],s=t[1],l=t[2],c=0,d=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"706c6827"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"509272a8"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===o||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/rebus-2020-10-leadersofdigital-ui/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=(n("d3b7"),n("bc3a")),a=n.n(r),i={},u=a.a.create(i);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},o["a"].use(Plugin);Plugin;var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Drawer",{attrs:{items:e.items},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-app-bar",{attrs:{app:"",color:"#262C40",dark:""}},[n("v-toolbar-title",[e._v(e._s(this.$route.title))]),n("HealthChecker")],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":!0,value:e.value}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[e._l(e.items,(function(t){return n("v-list-item",{key:t.id,attrs:{to:{path:t.path}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),n("v-divider"),n("v-list-item",{on:{click:function(t){return e.clickExit()}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-exit-to-app")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Выйти")])],1)],1)],2)],1)},d=[],f=n("9fb0"),m={name:"Drawer",components:{},props:{value:{type:Boolean,required:!0},items:Array},data:function(){return{}},methods:{clickExit:function(){var e=this;console.log("exit"),this.$store.dispatch(f["d"]).then((function(){console.log("exit AUTH_LOGOUT"),e.$router.push("/login")}))}}},p=m,h=n("2877"),v=n("6544"),g=n.n(v),b=n("ce7e"),w=n("132d"),k=n("8860"),_=n("da13"),y=n("5d23"),O=n("34c3"),E=n("f774"),A=Object(h["a"])(p,c,d,!1,null,"53718bf8",null),j=A.exports;g()(A,{VDivider:b["a"],VIcon:w["a"],VList:k["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:O["a"],VListItemTitle:y["b"],VNavigationDrawer:E["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"ma-2",attrs:{color:e.color,elevation:"2",loading:e.loading},on:{click:function(t){return e.check()}}},[e._v("Health check")])},x=[],L="https://rebus-leadersofdigital-central.herokuapp.com/api/",T={name:"HealthChecker",data:function(){return{color:"secondary",loading:!1}},methods:{check:function(){var e=this;this.loading=!0,this.color="secondary";var t={method:"get",url:L+"health/",headers:{Authorization:"Bearer "+this.$store.state.token}};a()(t).then((function(){e.color="success"})).catch((function(){e.color="error"})).finally((function(){e.loading=!1}))}}},P=T,C=n("8336"),U=Object(h["a"])(P,S,x,!1,null,"0f424598",null),D=U.exports;g()(U,{VBtn:C["a"]});var V={name:"App",components:{HealthChecker:D,Drawer:j},data:function(){return{drawer:!0,items:[{id:"modules",title:"Учебные модули",icon:"mdi-lightbulb",path:"/modules"}]}}},R=V,H=n("7496"),M=n("40dc"),$=n("a523"),I=n("553a"),B=n("f6c4"),N=n("2a7f"),F=Object(h["a"])(R,s,l,!1,null,null,null),z=F.exports;g()(F,{VApp:H["a"],VAppBar:M["a"],VContainer:$["a"],VFooter:I["a"],VMain:B["a"],VToolbarTitle:N["a"]});var G=n("8c4f"),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rb-Login"},[n("LoginForm")],1)},Q=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{label:"Ваш e-mail",rules:e.emailRules},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginClick()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{label:"Пароль",rules:e.passwordRules,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginClick()},"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){return e.loginClick()}}},[e._v("Поехали! ")])],1)],1)},K=[],Y={name:"LoginForm",data:function(){return{valid:!1,email:"kulibin@mail.ru",emailRules:[function(e){return!!e||"E-mail обязателен"}],password:"",passwordRules:[function(e){return!!e||"Пароль обязателен"}],showPassword:!1}},methods:{loginClick:function(){var e=this;if(this.$refs.form.validate()){var t=this.email,n=this.password;this.$store.dispatch(f["e"],{email:t,password:n}).then((function(){console.log("login OK"),e.$router.push("/proposals")}))}else console.log("login fail")}}},W=Y,X=n("4bd4"),Z=n("8654"),ee=Object(h["a"])(W,J,K,!1,null,"53124619",null),te=ee.exports;g()(ee,{VBtn:C["a"],VContainer:$["a"],VForm:X["a"],VTextField:Z["a"]});var ne={name:"Login",components:{LoginForm:te}},oe=ne,re=Object(h["a"])(oe,q,Q,!1,null,"21a28004",null),ae=re.exports;o["a"].use(G["a"]);var ie,ue,se=[{path:"/login",name:"Login",component:ae},{path:"/",alias:["/modules"],name:"Modules",title:"Учебные модули",component:function(){return n.e("about").then(n.bind(null,"4228"))}},{path:"/modules/:id",alias:["/modules/new-module"],name:"ModuleMainPage",component:function(){return n.e("about").then(n.bind(null,"58e7"))}}],le=new G["a"]({routes:se}),ce=le,de=n("ade3"),fe=n("2f62");o["a"].use(fe["a"]);var me=new fe["a"].Store({state:{status:"",token:localStorage.getItem("user-token")||"",user:{avatarSmall:""},modules:[],currentModule:null},mutations:(ie={},Object(de["a"])(ie,f["e"],(function(e){console.log("m   AUTH_REQUEST"),e.status="loading"})),Object(de["a"])(ie,f["f"],(function(e,t){e.status="success",e.token=t})),Object(de["a"])(ie,f["c"],(function(e){e.status="error"})),Object(de["a"])(ie,f["j"],(function(e,t){console.log("userData 3",t),e.user={avatarSmall:t.little_avatar}})),Object(de["a"])(ie,f["a"],(function(e,t){e.modules=t})),Object(de["a"])(ie,f["b"],(function(e,t){e.currentModule=t})),ie),actions:(ue={},Object(de["a"])(ue,f["e"],(function(e,t){var n=e.commit,o=e.dispatch;return console.log("A   AUTH_REQUEST",n,o,t),new Promise((function(e,o){n(f["e"]),a.a.post(L+"users/login/",t).then((function(t){console.log("TH");var o=t.data.token;localStorage.setItem("user-token",o),n(f["f"],o),e(t)})).catch((function(e){console.log("ERROR"),n(f["c"],e),localStorage.removeItem("user-token"),o(e)}))}))})),Object(de["a"])(ue,f["d"],(function(e){var t=e.commit;return new Promise((function(e){console.log("AUTH_LOGOUT done"),t(f["d"]),localStorage.removeItem("user-token"),e()}))})),Object(de["a"])(ue,f["i"],(function(e){var t={method:"get",url:L+"users/profile/",headers:{Authorization:"Bearer "+e.state.token}};a()(t).then((function(t){console.log("LOAD_USER_DATA  loaded",t),e.commit(f["j"],t.data)}))})),Object(de["a"])(ue,f["g"],(function(e){var t={method:"get",url:L+"education/modules/",headers:{Authorization:"Bearer "+e.state.token}};a()(t).then((function(t){e.commit(f["a"],t.data)}))})),Object(de["a"])(ue,f["h"],(function(e,t){var n={method:"get",url:L+"education/modules/".concat(t,"/"),headers:{Authorization:"Bearer "+e.state.token}};a()(n).then((function(t){e.commit(f["b"],t.data)}))})),ue),getters:{isAuthenticated:function(e){return!!e.token},authStatus:function(e){return e.status}},modules:{}}),pe=n("f309");o["a"].use(pe["a"]);var he=new pe["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:ce,store:me,vuetify:he,render:function(e){return e(z)}}).$mount("#app")},"9fb0":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return f}));var o="AUTH_REQUEST",r="AUTH_SUCCESS",a="AUTH_ERROR",i="AUTH_LOGOUT",u="LOAD_USER_DATA",s="SET_USER_DATA",l="LOAD_MODULES",c="APPLY_MODULES",d="LOAD_SINGLE_MODULE",f="APPLY_SINGLE_MODULES"}});