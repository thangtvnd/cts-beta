var __awaiter=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{l(n.next(t))}catch(e){r(e)}}function s(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){t.done?i(t.value):new o((function(e){e(t.value)})).then(a,s)}l((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{K9Nc:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_app",(function(){return d})),o.d(e,"ion_buttons",(function(){return p})),o.d(e,"ion_content",(function(){return h})),o.d(e,"ion_footer",(function(){return m})),o.d(e,"ion_header",(function(){return k})),o.d(e,"ion_router_outlet",(function(){return x})),o.d(e,"ion_title",(function(){return j})),o.d(e,"ion_toolbar",(function(){return O}));var n=o("54nT"),i=o("AfW+"),r=o("aiEM"),a=o("0AIG"),s=(o("kBU6"),o("Dl6n")),l=o("m9yc"),c=o("Uch9"),d=function(){function t(t){Object(n.k)(this,t)}return t.prototype.componentDidLoad=function(){b((function(){var t=Object(i.f)(window,"hybrid");i.b.getBoolean("_testing")||o.e(8).then(o.bind(null,"a7BO")).then((function(t){return t.startTapClick(i.b)})),i.b.getBoolean("statusTap",t)&&o.e(6).then(o.bind(null,"AhaL")).then((function(t){return t.startStatusTap()})),i.b.getBoolean("inputShims",u())&&o.e(5).then(o.bind(null,"aoIK")).then((function(t){return t.startInputShims(i.b)})),i.b.getBoolean("hardwareBackButton",t)&&o.e(4).then(o.bind(null,"XRsP")).then((function(t){return t.startHardwareBackButton()})),o.e(3).then(o.bind(null,"3YLQ")).then((function(t){return t.startFocusVisible()}))}))},t.prototype.render=function(){var t,e=Object(n.d)(this);return Object(n.i)(n.a,{class:(t={},t[e]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=i.b.getBoolean("_forceStatusbarPadding"),t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:!0,configurable:!0}),t}(),u=function(){return Object(i.f)(window,"ios")&&Object(i.f)(window,"mobile")},b=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},p=function(){function t(t){Object(n.k)(this,t),this.collapse=!1}return t.prototype.render=function(){var t,e=Object(n.d)(this);return Object(n.i)(n.a,{class:(t={},t[e]=!0,t["buttons-collapse"]=this.collapse,t)})},Object.defineProperty(t,"style",{get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:currentColor}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"},enumerable:!0,configurable:!0}),t}(),h=function(){function t(t){Object(n.k)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(n.d)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(n.e)(this,"ionScrollStart",7),this.ionScroll=Object(n.e)(this,"ionScroll",7),this.ionScrollEnd=Object(n.e)(this,"ionScrollEnd",7)}return t.prototype.disconnectedCallback=function(){this.onScrollEnd()},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},t.prototype.shouldForceOverscroll=function(){var t=this.forceOverscroll,e=this.mode;return void 0===t?"ios"===e&&Object(i.f)("ios"):t},t.prototype.resize=function(){this.fullscreen?Object(n.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},t.prototype.readDimensions=function(){var t=g(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())},t.prototype.onScroll=function(t){var e=this,o=Date.now(),i=!this.isScrolling;this.lastScroll=o,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(n.g)((function(o){e.queued=!1,e.detail.event=t,f(e.detail,e.scrollEl,o,i),e.ionScroll.emit(e.detail)})))},t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},t.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},t.prototype.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},t.prototype.scrollByPoint=function(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)},t.prototype.scrollToPoint=function(t,e,o){return void 0===o&&(o=0),__awaiter(this,void 0,void 0,(function(){var n,i,r,a,s,l,c,d,u;return __generator(this,(function(b){return n=this.scrollEl,o<32?[2,(null!=e&&(n.scrollTop=e),void(null!=t&&(n.scrollLeft=t)))]:(r=0,a=new Promise((function(t){return i=t})),s=n.scrollTop,l=n.scrollLeft,c=null!=e?e-s:0,d=null!=t?t-l:0,u=function(t){var e=Math.min(1,(t-r)/o)-1,a=Math.pow(e,3)+1;0!==c&&(n.scrollTop=Math.floor(a*c+s)),0!==d&&(n.scrollLeft=Math.floor(a*d+l)),a<1?requestAnimationFrame(u):i()},[2,(requestAnimationFrame((function(t){r=t,u(t)})),a)])}))}))},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()}),100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},t.prototype.render=function(){var t,e=this,o=this.scrollX,r=this.scrollY,a=Object(n.d)(this),l=this.shouldForceOverscroll(),c="ios"===a&&i.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(n.i)(n.a,{class:Object.assign(Object.assign({},Object(s.a)(this.color)),(t={},t[a]=!0,t["content-sizing"]=Object(s.c)("ion-popover",this.el),t.overscroll=l,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},Object(n.i)("div",{id:"background-content"}),Object(n.i)("main",{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":r,overscroll:(o||r)&&l},ref:function(t){return e.scrollEl=t},onScroll:this.scrollEvents?function(t){return e.onScroll(t)}:void 0},Object(n.i)("slot",null)),c?Object(n.i)("div",{class:"transition-effect"},Object(n.i)("div",{class:"transition-cover"}),Object(n.i)("div",{class:"transition-shadow"})):null,Object(n.i)("slot",{name:"fixed"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}#background-content{background:var(--background)}#background-content,.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute}.inner-scroll{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}'},enumerable:!0,configurable:!0}),t}(),g=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},f=function(t,e,o,n){var i=t.currentX,r=t.currentY,a=e.scrollLeft,s=e.scrollTop,l=o-t.currentTime;if(n&&(t.startTime=o,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.currentTime=o,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-r)/l;t.velocityX=(a-i)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},m=function(){function t(t){Object(n.k)(this,t),this.translucent=!1}return t.prototype.render=function(){var t,e=Object(n.d)(this),o=this.translucent;return Object(n.i)(n.a,{role:"contentinfo",class:(t={},t[e]=!0,t["footer-"+e]=!0,t["footer-translucent"]=o,t["footer-translucent-"+e]=o,t)},"ios"===e&&o&&Object(n.i)("div",{class:"footer-background"}),Object(n.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md.ion-no-border:before{display:none}'},enumerable:!0,configurable:!0}),t}(),v=function(t){var e=document.querySelector(t+".ion-cloned-element");if(null!==e)return e;var o=document.createElement(t);return o.classList.add("ion-cloned-element"),o.style.setProperty("display","none"),document.body.appendChild(o),o},y=function(t){if(t){var e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map((function(t){var e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[]}}},w=function(t,e){void 0===e?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",e.toString())},A=function(t,e){void 0===e&&(e=!0),e?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")},k=function(){function t(t){Object(n.k)(this,t),this.collapsibleHeaderInitialized=!1,this.translucent=!1}return t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentDidUnload=function(){this.destroyCollapsibleHeader()},t.prototype.checkCollapsibleHeader=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,o,i;return __generator(this,(function(r){switch(r.label){case 0:return t="condense"===this.collapse,(e=!(!t||"ios"!==Object(n.d)(this))&&t)||!this.collapsibleHeaderInitialized?[3,1]:(this.destroyCollapsibleHeader(),[3,3]);case 1:return!e||this.collapsibleHeaderInitialized?[3,3]:(o=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),i=o?o.querySelector("ion-content"):null,[4,this.setupCollapsibleHeader(i,o)]);case 2:r.sent(),r.label=3;case 3:return[2]}}))}))},t.prototype.destroyCollapsibleHeader=function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)},t.prototype.setupCollapsibleHeader=function(t,e){return __awaiter(this,void 0,void 0,(function(){var o,i,a,s,l=this;return __generator(this,(function(c){switch(c.label){case 0:return t&&e?(o=this,[4,t.getScrollElement()]):[2,void console.error("ion-header requires a content to collapse, make sure there is an ion-content.")];case 1:return o.scrollEl=c.sent(),i=e.querySelectorAll("ion-header"),this.collapsibleMainHeader=Array.from(i).find((function(t){return"condense"!==t.collapse})),this.collapsibleMainHeader?(a=y(this.collapsibleMainHeader),s=y(this.el),a&&s&&(A(a,!1),a.toolbars.forEach((function(t){w(t,0)})),this.intersectionObserver=new IntersectionObserver((function(t){!function(t,e,o){Object(n.l)((function(){!function(t,e){if(t[0].isIntersecting){var o=t[0].intersectionRatio>.9?0:100*(1-t[0].intersectionRatio)/75;e.toolbars.forEach((function(t){w(t,1===o?void 0:o)}))}}(t,e);var n=t[0],i=n.intersectionRect,r=i.width*i.height,a=0===r&&0==n.rootBounds.width*n.rootBounds.height,s=Math.abs(i.left-n.boundingClientRect.left),l=Math.abs(i.right-n.boundingClientRect.right);a||r>0&&(s>=5||l>=5)||(n.isIntersecting?(A(e,!1),A(o)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(A(e),A(o,!1),w(e.toolbars[0])))}))}(t,a,s)}),{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(s.toolbars[s.toolbars.length-1].el),this.contentScrollCallback=function(){!function(t,e,o){Object(n.g)((function(){var i=t.scrollTop,a=Object(r.c)(1,1+-i/500,1.1);null===o.querySelector("ion-refresher.refresher-native")&&Object(n.l)((function(){!function(t,e,o){void 0===t&&(t=[]),void 0===e&&(e=1),void 0===o&&(o=!1),t.forEach((function(t){var n=t.ionTitleEl,i=t.innerTitleEl;n&&"large"===n.size&&(i.style.transformOrigin="left center",i.style.transition=o?"all 0.2s ease-in-out":"",i.style.transform="scale3d("+e+", "+e+", 1)")}))}(e.toolbars,a)}))}))}(l.scrollEl,s,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),Object(n.l)((function(){v("ion-title"),v("ion-back-button"),l.collapsibleMainHeader.classList.add("header-collapse-main")})),this.collapsibleHeaderInitialized=!0),[2]):[2]}}))}))},t.prototype.render=function(){var t,e=this.translucent,o=Object(n.d)(this),i=this.collapse||"none";return Object(n.i)(n.a,{role:"banner",class:(t={},t[o]=!0,t["header-"+o]=!0,t["header-translucent"]=this.translucent,t["header-collapse-"+i]=!0,t["header-translucent-"+o]=this.translucent,t)},"ios"===o&&e&&Object(n.i)("div",{class:"header-background"}),Object(n.i)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md.ion-no-border:after{display:none}'},enumerable:!0,configurable:!0}),t}(),x=function(){function t(t){Object(n.k)(this,t),this.animationEnabled=!0,this.mode=Object(n.d)(this),this.animated=!0,this.ionNavWillLoad=Object(n.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(n.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(n.e)(this,"ionNavDidChange",3)}return t.prototype.swipeHandlerChanged=function(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)},t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e=this;return __generator(this,(function(n){switch(n.label){case 0:return t=this,[4,o.e(2).then(o.bind(null,"vYiJ"))];case 1:return t.gesture=n.sent().createSwipeBackGesture(this.el,(function(){return!!e.swipeHandler&&e.swipeHandler.canStart()&&e.animationEnabled}),(function(){return e.swipeHandler&&e.swipeHandler.onStart()}),(function(t){return e.ani&&e.ani.progressStep(t)}),(function(t,o,n){if(e.ani){e.animationEnabled=!1,e.ani.onFinish((function(){e.animationEnabled=!0,e.swipeHandler&&e.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});var i=t?-.001:.001;t?i+=Object(a.a)([0,0],[.32,.72],[0,1],[1,1],o)[0]:(e.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(a.a)([0,0],[1,0],[.68,.28],[1,1],o)[0]),e.ani.progressEnd(t?1:0,i,n)}})),this.swipeHandlerChanged(),[2]}}))}))},t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.commit=function(t,e,o){return __awaiter(this,void 0,void 0,(function(){var n,i,r;return __generator(this,(function(a){switch(a.label){case 0:return[4,this.lock()];case 1:n=a.sent(),i=!1,a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.transition(t,e,o)];case 3:return i=a.sent(),[3,5];case 4:return r=a.sent(),console.error(r),[3,5];case 5:return[2,(n(),i)]}}))}))},t.prototype.setRouteId=function(t,e,o){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(i){switch(i.label){case 0:return n={},[4,this.setRoot(t,e,{duration:"root"===o?0:void 0,direction:"back"===o?"back":"forward"})];case 1:return[2,(n.changed=i.sent(),n.element=this.activeEl,n)]}}))}))},t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]}))}))},t.prototype.setRoot=function(t,e,o){return __awaiter(this,void 0,void 0,(function(){var n,i;return __generator(this,(function(r){switch(r.label){case 0:return this.activeComponent===t?[2,!1]:(n=this.activeEl,[4,Object(l.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)]);case 1:return i=r.sent(),this.activeComponent=t,this.activeEl=i,[4,this.commit(i,n,o)];case 2:return r.sent(),[4,Object(l.b)(this.delegate,n)];case 3:return[2,(r.sent(),!0)]}}))}))},t.prototype.transition=function(t,e,o){return void 0===o&&(o={}),__awaiter(this,void 0,void 0,(function(){var n,r,a,s,l,d=this;return __generator(this,(function(u){switch(u.label){case 0:return e===t?[2,!1]:(this.ionNavWillChange.emit(),r=(n=this).el,a=n.mode,s=this.animated&&i.b.getBoolean("animated",!0),l=this.animation||o.animationBuilder||i.b.get("navAnimation"),[4,Object(c.e)(Object.assign({mode:a,animated:s,animationBuilder:l,enteringEl:t,leavingEl:e,baseEl:r,progressCallback:o.progressAnimation?function(t){return d.ani=t}:void 0},o))]);case 1:return[2,(u.sent(),this.ionNavDidChange.emit(),!0)]}}))}))},t.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(o){switch(o.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0!==t?[4,t]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,e]}}))}))},t.prototype.render=function(){return Object(n.i)("slot",null)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{swipeHandler:["swipeHandlerChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}(),j=function(){function t(t){Object(n.k)(this,t),this.ionStyle=Object(n.e)(this,"ionStyle",7)}return t.prototype.sizeChanged=function(){this.emitStyle()},t.prototype.connectedCallback=function(){this.emitStyle()},t.prototype.emitStyle=function(){var t,e=this.getSize();this.ionStyle.emit(((t={})["title-"+e]=!0,t))},t.prototype.getSize=function(){return void 0!==this.size?this.size:"default"},t.prototype.render=function(){var t,e=Object(n.d)(this),o=this.getSize();return Object(n.i)(n.a,{class:Object.assign((t={},t[e]=!0,t["title-"+o]=!0,t),Object(s.a)(this.color))},Object(n.i)("div",{class:"toolbar-title"},Object(n.i)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{size:["sizeChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:400}"},enumerable:!0,configurable:!0}),t}(),O=function(){function t(t){Object(n.k)(this,t),this.childrenStyles=new Map}return t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),e=t.find((function(t){return"start"===t.slot}));e&&e.classList.add("buttons-first-slot");var o=t.reverse(),n=o.find((function(t){return"end"===t.slot}))||o.find((function(t){return"primary"===t.slot}))||o.find((function(t){return"secondary"===t.slot}));n&&n.classList.add("buttons-last-slot")},t.prototype.childrenStyle=function(t){t.stopPropagation();var e=t.target.tagName,o=t.detail,n={},i=this.childrenStyles.get(e)||{},r=!1;Object.keys(o).forEach((function(t){var e="toolbar-"+t,a=o[t];a!==i[e]&&(r=!0),a&&(n[e]=!0)})),r&&(this.childrenStyles.set(e,n),this.el.forceUpdate())},t.prototype.render=function(){var t,e=Object(n.d)(this),o={};return this.childrenStyles.forEach((function(t){Object.assign(o,t)})),Object(n.i)(n.a,{class:Object.assign(Object.assign((t={"in-toolbar":Object(s.c)("ion-toolbar",this.el)},t[e]=!0,t),o),Object(s.a)(this.color))},Object(n.i)("div",{class:"toolbar-background"}),Object(n.i)("div",{class:"toolbar-container"},Object(n.i)("slot",{name:"start"}),Object(n.i)("slot",{name:"secondary"}),Object(n.i)("div",{class:"toolbar-content"},Object(n.i)("slot",null)),Object(n.i)("slot",{name:"primary"}),Object(n.i)("slot",{name:"end"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),t}()}}]);