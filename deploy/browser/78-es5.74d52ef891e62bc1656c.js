var __awaiter=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))((function(a,r){function o(t){try{s(i.next(t))}catch(n){r(n)}}function c(t){try{s(i.throw(t))}catch(n){r(n)}}function s(t){t.done?a(t.value):new e((function(n){n(t.value)})).then(o,c)}s((i=i.apply(t,n||[])).next())}))},__generator=this&&this.__generator||function(t,n){var e,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=n.call(t,o)}catch(c){r=[6,c],i=0}finally{e=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{STjf:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_ripple_effect",(function(){return a}));var i=e("54nT");e("AfW+");var a=function(){function t(t){Object(i.k)(this,t),this.type="bounded"}return t.prototype.addRipple=function(t,n){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(a){return[2,new Promise((function(a){Object(i.g)((function(){var s=e.el.getBoundingClientRect(),l=s.width,u=s.height,f=Math.sqrt(l*l+u*u),p=Math.max(u,l),m=e.unbounded?p:f+o,d=Math.floor(p*c),b=m/d,w=t-s.left,h=n-s.top;e.unbounded&&(w=.5*l,h=.5*u);var y=w-.5*d,v=h-.5*d,g=.5*l-w,k=.5*u-h;Object(i.l)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=v+"px",n.left=y+"px",n.width=n.height=d+"px",n.setProperty("--final-scale",""+b),n.setProperty("--translate-end",g+"px, "+k+"px"),(e.el.shadowRoot||e.el).appendChild(t),setTimeout((function(){a((function(){r(t)}))}),325)}))}))}))]}))}))},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),t.prototype.render=function(){var t,n=Object(i.d)(this);return Object(i.i)(i.a,{role:"presentation",class:(t={},t[n]=!0,t.unbounded=this.unbounded,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),t}(),r=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},o=10,c=.5}}]);