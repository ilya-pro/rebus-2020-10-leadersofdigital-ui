(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},4228:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rb-Login"},[i("ModulesList")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rb-ModulesList"},[i("div",{staticClass:"rb-ModulesList__header"},[t._v(" Учебные модули "),i("router-link",{attrs:{to:{name:"ModuleMainPage",params:{id:"new-module",detail:"common"}}}},[t._v("Создать")])],1),i("v-row",t._l(t.$store.state.modules,(function(t){return i("v-col",{key:t.id,attrs:{cols:"12",md:"6"}},[i("ModuleCard",{attrs:{value:t}})],1)})),1)],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{to:{name:"ModuleMainPage",params:{id:t.value.id,detail:"common"}}}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-img",{staticClass:"white--text align-start",attrs:{src:"https://newschool.sberclass.ru/services/storage/download/global/82ebabef-ebd2-49f7-9c7d-76d3da8f7243?path=c1f1758b-243d-4f79-82b3-54094068ce36/cb8a4b52-5992-493f-94f6-9f9934b91ab1/flame_w200.png","max-height":"100%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}})],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-card-title",[t._v(t._s(t.value.name))]),i("v-card-subtitle",[t._v(t._s(t.value.base_idea))]),i("v-card-text",[t._v(t._s(t.value.work_hours)+" ч "),i("v-icon",[t._v(t._s(t.visibility.icon))]),t._v(" "+t._s(t.visibility.name))],1)],1)],1)],1)},c=[],l={name:"ModuleCard",props:{value:{type:Object,required:!0}},computed:{visibility:function(){var t={name:"Персональный",icon:"mdi-account"};return"personal"!==this.value.visibility_level&&(t.name="Школьный",t.icon="mdi-earth"),t}}},u=l,h=i("2877"),d=i("6544"),f=i.n(d),v=i("b0af"),p=i("99d9"),m=i("62ad"),g=i("132d"),b=i("adda"),y=i("0fd9"),x=Object(h["a"])(u,r,c,!1,null,"bd471270",null),C=x.exports;f()(x,{VCard:v["a"],VCardSubtitle:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:m["a"],VIcon:g["a"],VImg:b["a"],VRow:y["a"]});var O=i("9fb0"),$={name:"ModulesList",components:{ModuleCard:C},data:function(){return{}},mounted:function(){this.$store.dispatch(O["g"])}},w=$,_=Object(h["a"])(w,s,o,!1,null,"39f83306",null),k=_.exports;f()(_,{VCol:m["a"],VRow:y["a"]});var A={name:"Login",components:{ModulesList:k}},T=A,M=Object(h["a"])(T,n,a,!1,null,"4c0a69fa",null);e["default"]=M.exports},5803:function(t,e,i){},"58d7":function(t,e,i){},"58e7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rb-Login"},[i("ModuleMain")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"rb-ModuleMain",attrs:{height:"100%"}},[t._v(" Редактор модуля "),"common"===t.$route.params.detail?i("div",[i("div",{staticClass:"rb-ModuleMain__title title",staticStyle:{"margin-bottom":"15px"}},[i("span",[t._v("Общие данные модуля "),i("v-text-field",{staticClass:"rb-ModuleMain__titleTextField",attrs:{label:"Название модуля",required:""},model:{value:t.$store.state.currentModule.name,callback:function(e){t.$set(t.$store.state.currentModule,"name",e)},expression:"$store.state.currentModule.name"}})],1),i("span",[t._v("статус: "+t._s(t.$store.state.currentModule.status))])]),i("v-text-field",{attrs:{label:"Общий замысел модуля"},model:{value:t.$store.state.currentModule.general_concept,callback:function(e){t.$set(t.$store.state.currentModule,"general_concept",e)},expression:"$store.state.currentModule.general_concept"}}),i("v-text-field",{attrs:{label:"Базовая идея",required:""},model:{value:t.$store.state.currentModule.base_idea,callback:function(e){t.$set(t.$store.state.currentModule,"base_idea",e)},expression:"$store.state.currentModule.base_idea"}}),i("v-text-field",{attrs:{label:"Комментарий"},model:{value:t.$store.state.currentModule.comment,callback:function(e){t.$set(t.$store.state.currentModule,"comment",e)},expression:"$store.state.currentModule.comment"}}),i("v-text-field",{attrs:{label:"Проблемный вопрос",required:""},model:{value:t.$store.state.currentModule.problematic_question,callback:function(e){t.$set(t.$store.state.currentModule,"problematic_question",e)},expression:"$store.state.currentModule.problematic_question"}}),i("v-row",[i("v-col",[i("v-text-field",{attrs:{label:"Предмет",required:""},model:{value:t.$store.state.currentModule.subject,callback:function(e){t.$set(t.$store.state.currentModule,"subject",e)},expression:"$store.state.currentModule.subject"}})],1),i("v-col",[i("v-text-field",{attrs:{label:"Класс",required:""},model:{value:t.$store.state.currentModule.step,callback:function(e){t.$set(t.$store.state.currentModule,"step",e)},expression:"$store.state.currentModule.step"}})],1),i("v-col",[i("v-text-field",{attrs:{label:"Академических часов",required:""},model:{value:t.$store.state.currentModule.work_hours,callback:function(e){t.$set(t.$store.state.currentModule,"work_hours",e)},expression:"$store.state.currentModule.work_hours"}})],1)],1),i("v-file-input",{attrs:{"show-size":"","truncate-length":"15",label:"Изображение обложки"}})],1):t._e(),"scheme"===t.$route.params.detail?i("v-row",[i("v-col",{attrs:{cols:"12",md:"8"}},[i("GoalList"),i("TaskList")],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("ModuleContentPreview")],1)],1):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"rb-ModuleContentPreview pa-6",attrs:{tile:"",height:"100%"}},[i("v-card-title",[t._v("ModuleContentPreview")])],1)},c=[],l={name:"ModuleContentPreview"},u=l,h=i("2877"),d=i("6544"),f=i.n(d),v=i("b0af"),p=i("99d9"),m=Object(h["a"])(u,r,c,!1,null,"754392e6",null),g=m.exports;f()(m,{VCard:v["a"],VCardTitle:p["c"]});var b=i("9fb0"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rb-TaskList"},[t._v(" TaskList "),i("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[i("v-col",{attrs:{sm:"3",md:"6"}},[i("TaskCard")],1),i("v-col",{attrs:{sm:"3",md:"6"}},[i("TaskCard")],1)],1)],1)},x=[],C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"rb-TaskCard",attrs:{tile:""}},[i("v-card-title",[t._v("Task Card 2")]),i("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",t._l(t.items,(function(e,n){return i("v-list-item",{key:n},[i("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1)},O=[],$={name:"TaskCard",data:function(){return{items:[{title:"- не выбран -"},{title:"Цель 2.0 Научиться..."},{title:"Цель 2.0 Уметь ..."},{title:"Цель 3.0 Получить навык ..."}]}}},w=$,_=i("8336"),k=i("132d"),A=i("8860"),T=i("da13"),M=i("5d23"),j=(i("99af"),i("7db0"),i("a630"),i("caad"),i("c975"),i("a9e3"),i("2532"),i("3ca3"),i("498a"),i("ade3")),S=i("2909"),I=i("5530"),L=(i("ee6f"),i("7560")),V=L["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:L["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}}),E=(i("45fc"),i("b0c0"),i("b64b"),i("53ca")),B=i("2b0e"),D=B["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),N=i("f2e7"),W=i("58df"),P=i("80d2"),z=i("d9bd"),F=Object(W["a"])(D,N["a"]),H=F.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(E["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(P["m"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(z["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(P["l"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(P["l"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),q=i("b848"),Y=(i("4160"),i("159b"),i("9d65"));function G(t){var e=Object(E["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var R=Object(W["a"])(Y["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:G},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(P["k"])(this.$vnode,"context.$options._scopeId");return t&&Object(j["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(z["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),X=(i("d3b7"),i("fe6c")),J=B["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(P["n"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(P["n"])(e)],n=[].concat(Object(S["a"])(document.getElementsByClassName("v-menu__content--active")),Object(S["a"])(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<n.length;a++)t.includes(n[a])||i.push(Object(P["n"])(n[a]));return Math.max.apply(Math,i)}}}),Z=Object(W["a"])(J,X["a"],H),K=Z.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),a=0;if(a+=this.left?i-(n-t.width):i,this.offsetX){var s=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-s:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(P["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(P["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,a=this.dimensions.content.height,s=t+a,o=i<s;return o&&this.offsetOverflow&&n.top>a?t=this.pageYOffset+(n.top-a):o&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=H.options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(I["a"])({},this.dimensions.activator),content:Object(I["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),U=B["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),Q=i("a236"),tt=i("a293"),et=i("dc22"),it=Object(W["a"])(q["a"],D,R,K,U,Q["a"],N["a"],L["a"]),nt=it.extend({name:"v-menu",provide:function(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:tt["a"],Resize:et["a"]},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(P["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(P["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(P["f"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(P["f"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(P["f"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(P["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(z["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==P["q"].tab){if(t.keyCode===P["q"].down)this.nextTile();else if(t.keyCode===P["q"].up)this.prevTile();else{if(t.keyCode!==P["q"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=H.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(I["a"])(Object(I["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=K.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(S["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(I["a"])(Object(I["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(I["a"])(Object(I["a"])(Object(I["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(j["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===P["q"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[P["q"].up,P["q"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(V,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}}),at=Object(h["a"])(w,C,O,!1,null,"c364fc94",null),st=at.exports;f()(at,{VBtn:_["a"],VCard:v["a"],VCardTitle:p["c"],VIcon:k["a"],VList:A["a"],VListItem:T["a"],VListItemTitle:M["b"],VMenu:nt});var ot={name:"TaskList",components:{TaskCard:st}},rt=ot,ct=i("62ad"),lt=i("0fd9"),ut=Object(h["a"])(rt,y,x,!1,null,"fcfd5c70",null),ht=ut.exports;f()(ut,{VCol:ct["a"],VRow:lt["a"]});var dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rb-GoalList"},[t._v(" GoalList "),i("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[i("v-col",{attrs:{sm:"3",md:"6"}},[i("GoalCard")],1),i("v-col",{attrs:{sm:"3",md:"6"}},[i("GoalCard")],1),i("v-col",{attrs:{sm:"3",md:"6"}},[i("GoalCard")],1)],1)],1)},ft=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"rb-GoalCard pa-6",attrs:{tile:""}},[i("v-card-title",[t._v("GoalCard")])],1)},pt=[],mt={name:"GoalCard"},gt=mt,bt=Object(h["a"])(gt,vt,pt,!1,null,"1d67e7c8",null),yt=bt.exports;f()(bt,{VCard:v["a"],VCardTitle:p["c"]});var xt={name:"GoalList",components:{GoalCard:yt}},Ct=xt,Ot=Object(h["a"])(Ct,dt,ft,!1,null,"3cd1708f",null),$t=Ot.exports;f()(Ot,{VCol:ct["a"],VRow:lt["a"]});var wt={name:"ModuleMain",components:{GoalList:$t,TaskList:ht,ModuleContentPreview:g},mounted:function(){"new-module"===this.$route.params.id?console.log("Новый модуь"):(console.log("Существующий модуль"),this.$store.dispatch(b["h"],this.$route.params.id))}},_t=wt,kt=(i("cd00"),i("a523")),At=(i("a623"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("5803"),i("2677")),Tt=(i("4de4"),i("3835")),Mt=(i("8adc"),i("0789")),jt=i("9d26"),St=i("a9ad"),It=i("4e82"),Lt=i("1c87"),Vt=i("af2b"),Et=Object(W["a"])(St["a"],Vt["a"],Lt["a"],L["a"],Object(It["a"])("chipGroup"),Object(N["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(I["a"])(Object(I["a"])(Object(I["a"])(Object(I["a"])({"v-chip":!0},Lt["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(Lt["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(Tt["a"])(e,2),n=i[0],a=i[1];t.$attrs.hasOwnProperty(n)&&Object(z["a"])(n,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(jt["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(Mt["b"],t)},genClose:function(){var t=this;return this.$createElement(jt["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(I["a"])(Object(I["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var s=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(s,a),e)}}),Bt=i("d9f7"),Dt=At["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(P["w"])(t).every((function(t){return null!=t&&"object"===Object(E["a"])(t)}))}}},computed:{classes:function(){return Object(I["a"])(Object(I["a"])({},At["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(P["o"])(e,1024===this.base))},internalArrayValue:function(){return Object(P["w"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,a=e.size,s=void 0===a?0:a,o=t.truncateText(n);return t.showSize?"".concat(o," (").concat(Object(P["o"])(s,1024===t.base),")"):o})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(z["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(P["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(Et,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=At["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(Bt["b"])(t.data.style,{display:"none"})),t},genInput:function(){var t=At["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=At["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(I["a"])(Object(I["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(S["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),Nt=i("8654"),Wt=Object(h["a"])(_t,s,o,!1,null,"4a5557b4",null),Pt=Wt.exports;f()(Wt,{VCol:ct["a"],VContainer:kt["a"],VFileInput:Dt,VRow:lt["a"],VTextField:Nt["a"]});var zt={name:"Login",components:{ModuleMain:Pt}},Ft=zt,Ht=Object(h["a"])(Ft,n,a,!1,null,"4193525a",null);e["default"]=Ht.exports},"615b":function(t,e,i){},"8adc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c}));var n=i("b0af"),a=i("80d2"),s=Object(a["g"])("v-card__actions"),o=Object(a["g"])("v-card__subtitle"),r=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");n["a"]},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var n=i("5530"),a=(i("615b"),i("10d2")),s=i("297c"),o=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(s["a"],o["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},cd00:function(t,e,i){"use strict";var n=i("58d7"),a=i.n(n);a.a},ee6f:function(t,e,i){}}]);