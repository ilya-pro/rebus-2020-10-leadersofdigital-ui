(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"eba9492a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"509272a8"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===r||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/rebus-2020-10-leadersofdigital-ui/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("d3b7"),n("bc3a")),a=n.n(o),i={},s=a.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Drawer",{attrs:{items:e.items},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-app-bar",{attrs:{app:"",color:"#262C40",dark:""}}),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":!0,value:e.value}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[e._l(e.items,(function(t){return n("v-list-item",{key:t.id,attrs:{to:{path:t.path}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),n("v-divider"),n("v-list-item",{on:{click:function(t){return e.clickExit()}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-exit-to-app")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Выйти")])],1)],1)],2),n("HealthChecker")],1)},d=[],f=n("9fb0"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"ma-2",attrs:{color:e.color,elevation:"2",loading:e.loading},on:{click:function(t){return e.check()}}},[e._v("Health check")])},m=[],h="https://rebus-leadersofdigital-central.herokuapp.com/api/",v={name:"HealthChecker",data:function(){return{color:"secondary",loading:!1}},methods:{check:function(){var e=this;this.loading=!0,this.color="secondary";var t={method:"get",url:h+"health/",headers:{Authorization:"Bearer "+this.$store.state.token}};a()(t).then((function(){e.color="success"})).catch((function(){e.color="error"})).finally((function(){e.loading=!1}))}}},g=v,b=n("2877"),w=n("6544"),k=n.n(w),y=n("8336"),_=Object(b["a"])(g,p,m,!1,null,"0f424598",null),O=_.exports;k()(_,{VBtn:y["a"]});var E={name:"Drawer",components:{HealthChecker:O},props:{value:{type:Boolean,required:!0},items:Array},data:function(){return{}},methods:{clickExit:function(){var e=this;console.log("exit"),this.$store.dispatch(f["c"]).then((function(){console.log("exit AUTH_LOGOUT"),e.$router.push("/login")}))}}},A=E,x=n("ce7e"),S=n("132d"),T=n("8860"),j=n("da13"),P=n("5d23"),C=n("34c3"),L=n("f774"),U=Object(b["a"])(A,c,d,!1,null,"aff9a8e4",null),V=U.exports;k()(U,{VDivider:x["a"],VIcon:S["a"],VList:T["a"],VListItem:j["a"],VListItemContent:P["a"],VListItemIcon:C["a"],VListItemTitle:P["b"],VNavigationDrawer:L["a"]});var D={name:"App",components:{Drawer:V},data:function(){return{drawer:!0,items:[{id:"modules",title:"Учебные модули",icon:"mdi-lightbulb",path:"/modules"}]}}},R=D,H=n("7496"),$=n("40dc"),I=n("a523"),B=n("553a"),M=n("f6c4"),F=Object(b["a"])(R,u,l,!1,null,null,null),N=F.exports;k()(F,{VApp:H["a"],VAppBar:$["a"],VContainer:I["a"],VFooter:B["a"],VMain:M["a"]});var q=n("8c4f"),z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rb-Login"},[n("LoginForm")],1)},G=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{label:"Ваш e-mail",rules:e.emailRules},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginClick()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{label:"Пароль",rules:e.passwordRules,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginClick()},"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){return e.loginClick()}}},[e._v("Поехали! ")])],1)],1)},J=[],K={name:"LoginForm",data:function(){return{valid:!1,email:"kulibin@mail.ru",emailRules:[function(e){return!!e||"E-mail обязателен"}],password:"",passwordRules:[function(e){return!!e||"Пароль обязателен"}],showPassword:!1}},methods:{loginClick:function(){var e=this;if(this.$refs.form.validate()){var t=this.email,n=this.password;this.$store.dispatch(f["d"],{email:t,password:n}).then((function(){console.log("login OK"),e.$router.push("/proposals")}))}else console.log("login fail")}}},Y=K,W=n("4bd4"),X=n("8654"),Z=Object(b["a"])(Y,Q,J,!1,null,"53124619",null),ee=Z.exports;k()(Z,{VBtn:y["a"],VContainer:I["a"],VForm:W["a"],VTextField:X["a"]});var te={name:"Login",components:{LoginForm:ee}},ne=te,re=Object(b["a"])(ne,z,G,!1,null,"21a28004",null),oe=re.exports;r["a"].use(q["a"]);var ae,ie,se=[{path:"/login",name:"Login",component:oe},{path:"/",alias:["/modules"],name:"Modules",component:function(){return n.e("about").then(n.bind(null,"4228"))}},{path:"/modules/:id",alias:["/modules/new-module"],name:"ModuleMainPage",component:function(){return n.e("about").then(n.bind(null,"58e7"))}}],ue=new q["a"]({routes:se}),le=ue,ce=n("ade3"),de=n("2f62");r["a"].use(de["a"]);var fe=new de["a"].Store({state:{status:"",token:localStorage.getItem("user-token")||"",user:{avatarSmall:""},modules:[]},mutations:(ae={},Object(ce["a"])(ae,f["d"],(function(e){console.log("m   AUTH_REQUEST"),e.status="loading"})),Object(ce["a"])(ae,f["e"],(function(e,t){e.status="success",e.token=t})),Object(ce["a"])(ae,f["b"],(function(e){e.status="error"})),Object(ce["a"])(ae,f["h"],(function(e,t){console.log("userData 3",t),e.user={avatarSmall:t.little_avatar}})),Object(ce["a"])(ae,f["a"],(function(e,t){e.modules=t})),ae),actions:(ie={},Object(ce["a"])(ie,f["d"],(function(e,t){var n=e.commit,r=e.dispatch;return console.log("A   AUTH_REQUEST",n,r,t),new Promise((function(e,r){n(f["d"]),a.a.post(h+"users/login/",t).then((function(t){console.log("TH");var r=t.data.token;localStorage.setItem("user-token",r),n(f["e"],r),e(t)})).catch((function(e){console.log("ERROR"),n(f["b"],e),localStorage.removeItem("user-token"),r(e)}))}))})),Object(ce["a"])(ie,f["c"],(function(e){var t=e.commit;return new Promise((function(e){console.log("AUTH_LOGOUT done"),t(f["c"]),localStorage.removeItem("user-token"),e()}))})),Object(ce["a"])(ie,f["g"],(function(e){var t={method:"get",url:h+"users/profile/",headers:{Authorization:"Bearer "+e.state.token}};a()(t).then((function(t){console.log("LOAD_USER_DATA  loaded",t),e.commit(f["h"],t.data)}))})),Object(ce["a"])(ie,f["f"],(function(e){var t={method:"get",url:h+"education/modules/",headers:{Authorization:"Bearer "+e.state.token}};a()(t).then((function(t){e.commit(f["a"],t.data)}))})),ie),getters:{isAuthenticated:function(e){return!!e.token},authStatus:function(e){return e.status}},modules:{}}),pe=n("f309");r["a"].use(pe["a"]);var me=new pe["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:le,store:fe,vuetify:me,render:function(e){return e(N)}}).$mount("#app")},"9fb0":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return c}));var r="AUTH_REQUEST",o="AUTH_SUCCESS",a="AUTH_ERROR",i="AUTH_LOGOUT",s="LOAD_USER_DATA",u="SET_USER_DATA",l="LOAD_MODULES",c="APPLY_MODULES"}});