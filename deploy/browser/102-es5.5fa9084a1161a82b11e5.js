var __values=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],o=0;return e?e.call(t):{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{QtHV:function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return d})),o.d(e,"shadow",(function(){return l})),o("54nT"),o("AfW+"),o("aiEM");var a=o("iAHb"),r=(o("kBU6"),o("Uch9")),n=function(t){return document.querySelector(t+".ion-cloned-element")},l=function(t){return t.shadowRoot||t},i=function(t){return t.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},s=function(t,e){var o,a,r=t.querySelectorAll("ion-buttons");try{for(var n=__values(r),l=n.next();!l.done;l=n.next()){var i=l.value,s=i.closest("ion-header"),c=s&&!s.classList.contains("header-collapse-condense-inactive"),f=i.querySelector("ion-back-button"),d=i.classList.contains("buttons-collapse"),p="start"===i.slot||""===i.slot;if(null!==f&&p&&(d&&c&&e||!d))return f}}catch(y){o={error:y}}finally{try{l&&!l.done&&(a=n.return)&&a.call(n)}finally{if(o)throw o.error}}return null},c=function(t,e,o,r,i,s){var c=e?"calc(100% - "+(s.right+4)+"px)":s.left-4+"px",f=e?"7px":"-7px",d=e?"-4px":"4px",p=e?"-4px":"4px",y=e?"right":"left",m=e?"left":"right",u=o?[{offset:0,opacity:1,transform:"translate3d("+d+", "+(s.top-46)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+f+", "+(i.top-40)+"px, 0) scale(2.1)"}]:[{offset:0,opacity:0,transform:"translate3d("+f+", "+(i.top-40)+"px, 0) scale(2.1)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+(s.top-46)+"px, 0) scale(1)"}],b=o?[{offset:0,opacity:1,transform:"translate3d("+p+", "+(s.top-46)+"px, 0) scale(1)"},{offset:.2,opacity:0,transform:"translate3d("+p+", "+(s.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:0,transform:"translate3d("+p+", "+(s.top-41)+"px, 0) scale(0.6)"}]:[{offset:0,opacity:0,transform:"translate3d("+p+", "+(s.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+p+", "+(s.top-46)+"px, 0) scale(1)"}],v=Object(a.a)(),S=Object(a.a)(),x=n("ion-back-button"),T=l(x).querySelector(".button-text"),h=l(x).querySelector("ion-icon");x.text=r.text,x.mode=r.mode,x.icon=r.icon,x.color=r.color,x.disabled=r.disabled,x.style.setProperty("display","block"),x.style.setProperty("position","fixed"),S.addElement(h),v.addElement(T),v.beforeStyles({"transform-origin":y+" center"}).beforeAddWrite((function(){r.style.setProperty("display","none"),x.style.setProperty(y,c)})).afterAddWrite((function(){r.style.setProperty("display",""),x.style.setProperty("display","none"),x.style.removeProperty(y)})).keyframes(u),S.beforeStyles({"transform-origin":m+" center"}).keyframes(b),t.addAnimation([v,S])},f=function(t,e,o,r,l,i){var s,c=e?"calc(100% - "+r.right+"px)":r.left+"px",f=e?"-18px":"18px",d=e?"right":"left",p=o?[{offset:0,opacity:0,transform:"translate3d("+f+", "+(i.top-4)+"px, 0) scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, "+(l.top-2)+"px, 0) scale(1)"}]:[{offset:0,opacity:.99,transform:"translate3d(0, "+(l.top-2)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+f+", "+(i.top-4)+"px, 0) scale(0.5)"}],y=n("ion-title"),m=Object(a.a)();y.innerText=r.innerText,y.size=r.size,y.color=r.color,m.addElement(y),m.beforeStyles((s={"transform-origin":d+" center",height:"46px",display:"",position:"relative"},s[d]=c,s)).beforeAddWrite((function(){r.style.setProperty("display","none")})).afterAddWrite((function(){r.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(p),t.addAnimation(m)},d=function(t,e){try{var o="rtl"===t.ownerDocument.dir,n=o?"-99.5%":"99.5%",d=o?"33%":"-33%",p=e.enteringEl,y=e.leavingEl,m="back"===e.direction,u=p.querySelector(":scope > ion-content"),b=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=p.querySelectorAll(":scope > ion-header > ion-toolbar"),S=Object(a.a)(),x=Object(a.a)();if(S.addElement(p).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),y&&t){var T=Object(a.a)();T.addElement(t),S.addAnimation(T)}if(u||0!==v.length||0!==b.length?(x.addElement(u),x.addElement(b)):x.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),S.addAnimation(x),m?x.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+d+")","translateX(0%)").fromTo("opacity",.8,1):x.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+n+")","translateX(0%)"),u){var h=l(u).querySelector(".transition-effect");if(h){var g=h.querySelector(".transition-cover"),X=h.querySelector(".transition-shadow"),E=Object(a.a)(),A=Object(a.a)(),q=Object(a.a)();E.addElement(h).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),A.addElement(g).beforeClearStyles(["opacity"]).fromTo("opacity",0,.1),q.addElement(X).beforeClearStyles(["opacity"]).fromTo("opacity",.03,.7),E.addAnimation([A,q]),x.addAnimation([E])}}var j=p.querySelector("ion-header.header-collapse-condense"),O=function(t,e,o,a,r){var n=s(a,o),l=i(r),d=i(a),p=s(r,o),y=null!==n&&null!==l&&!o,m=null!==d&&null!==p&&o;if(y){var u=l.getBoundingClientRect(),b=n.getBoundingClientRect();f(t,e,o,l,u,b),c(t,e,o,n,u,b)}else if(m){var v=d.getBoundingClientRect(),S=p.getBoundingClientRect();f(t,e,o,d,v,S),c(t,e,o,p,v,S)}return{forward:y,backward:m}}(S,o,m,p,y),C=O.forward,k=O.backward;if(v.forEach((function(t){var e,r=Object(a.a)();r.addElement(t),S.addAnimation(r);var i=Object(a.a)();i.addElement(t.querySelector("ion-title"));var s,c=Object(a.a)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),p=t.closest("ion-header"),y=p&&p.classList.contains("header-collapse-condense-inactive");s=f.filter(m?function(t){var e=t.classList.contains("buttons-collapse");return e&&!y||!e}:function(t){return!t.classList.contains("buttons-collapse")}),c.addElement(s);var u=Object(a.a)();u.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=Object(a.a)();b.addElement(l(t).querySelector(".toolbar-background"));var v=Object(a.a)(),x=t.querySelector("ion-back-button");if(x&&v.addElement(x),r.addAnimation([i,c,u,b,v]),c.fromTo("opacity",.01,1),u.fromTo("opacity",.01,1),m)y||i.fromTo("transform","translateX("+d+")","translateX(0%)").fromTo("opacity",.01,1),u.fromTo("transform","translateX("+d+")","translateX(0%)"),v.fromTo("opacity",.01,1);else if(j||i.fromTo("transform","translateX("+n+")","translateX(0%)").fromTo("opacity",.01,1),u.fromTo("transform","translateX("+n+")","translateX(0%)"),b.beforeClearStyles(["opacity","transform"]),(null===(e=p)||void 0===e?void 0:e.translucent)?b.fromTo("transform",o?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo("opacity",.01,1),C||v.fromTo("opacity",.01,1),x&&!C){var T=Object(a.a)();T.addElement(l(x).querySelector(".button-text")).fromTo("transform",o?"translateX(-100px)":"translateX(100px)","translateX(0px)"),r.addAnimation(T)}})),y){var w=Object(a.a)(),P=y.querySelector(":scope > ion-content");if(w.addElement(P),w.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),S.addAnimation(w),m){w.beforeClearStyles(["opacity"]).fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)");var L=Object(r.b)(y);S.afterAddWrite((function(){"normal"===S.getDirection()&&L.style.setProperty("display","none")}))}else w.fromTo("transform","translateX(0%)","translateX("+d+")").fromTo("opacity",1,.8);if(P){var R=l(P).querySelector(".transition-effect");if(R){var W=R.querySelector(".transition-cover"),_=R.querySelector(".transition-shadow"),B=Object(a.a)(),z=Object(a.a)(),D=Object(a.a)();B.addElement(R).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),z.addElement(W).beforeClearStyles(["opacity"]).fromTo("opacity",.1,0),D.addElement(_).beforeClearStyles(["opacity"]).fromTo("opacity",.7,.03),B.addAnimation([z,D]),w.addAnimation([B])}}y.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(t){var e,r=Object(a.a)();r.addElement(t);var n=Object(a.a)();n.addElement(t.querySelector("ion-title"));var i=Object(a.a)(),s=t.querySelectorAll("ion-buttons,[menuToggle]"),c=t.closest("ion-header"),f=c&&c.classList.contains("header-collapse-condense-inactive"),p=Array.from(s).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!f||!e}));i.addElement(p);var y=Object(a.a)(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&y.addElement(u);var b=Object(a.a)();b.addElement(l(t).querySelector(".toolbar-background"));var v=Object(a.a)(),x=t.querySelector("ion-back-button");if(x&&v.addElement(x),r.addAnimation([n,i,y,v,b]),S.addAnimation(r),v.fromTo("opacity",.99,0),i.fromTo("opacity",.99,0),y.fromTo("opacity",.99,0),m){if(f||n.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)").fromTo("opacity",.99,0),y.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles(["opacity","transform"]),(null===(e=c)||void 0===e?void 0:e.translucent)?b.fromTo("transform","translateX(0px)",o?"translateX(-100%)":"translateX(100%)"):b.fromTo("opacity",.99,0),x&&!k){var T=Object(a.a)();T.addElement(l(x).querySelector(".button-text")).fromTo("transform","translateX(0%)","translateX("+(o?-124:124)+"px)"),r.addAnimation(T)}}else f||n.fromTo("transform","translateX(0%)","translateX("+d+")").fromTo("opacity",.99,0).afterClearStyles(["transform","opacity"]),y.fromTo("transform","translateX(0%)","translateX("+d+")").afterClearStyles(["transform","opacity"]),v.afterClearStyles(["opacity"]),n.afterClearStyles(["opacity"]),i.afterClearStyles(["opacity"])}))}return S}catch(H){throw H}}}}]);