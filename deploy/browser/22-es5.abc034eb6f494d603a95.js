var __generator=this&&this.__generator||function(n,l){var u,t,e,r,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&r[0]?t.return:r[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,r[1])).done)return e;switch(t=0,e&&(r=[2&r[0],e.value]),r[0]){case 0:case 1:e=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,t=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!e||r[1]>e[0]&&r[1]<e[3])){o.label=r[1];break}if(6===r[0]&&o.label<e[1]){o.label=e[1],e=r;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(r);break}e[2]&&o.ops.pop(),o.trys.pop();continue}r=l.call(n,o)}catch(i){r=[6,i],t=0}finally{u=e=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{w4GT:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),e=function(){},r=u("pMnS"),o=u("MKJQ"),i=u("sZkV"),s=u("s7LF"),b=u("mrSG"),a=function(){function n(n,l){this.alertCtrl=n,this.toastCtrl=l,this.submitted=!1}return n.prototype.ionViewDidEnter=function(){return b.a(this,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({message:"This does not actually send a support request.",duration:3e3})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},n.prototype.submit=function(n){return b.a(this,void 0,void 0,(function(){return __generator(this,(function(l){switch(l.label){case 0:return this.submitted=!0,n.valid?(this.supportMessage="",this.submitted=!1,[4,this.toastCtrl.create({message:"Your support request has been sent.",duration:3e3})]):[3,3];case 1:return[4,l.sent().present()];case 2:l.sent(),l.label=3;case 3:return[2]}}))}))},n}(),c=t.pb({encapsulation:0,styles:[[".support-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function p(n){return t.Mb(0,[(n()(),t.rb(0,0,null,null,10,"ion-header",[],null,null,null,o.P,o.j)),t.qb(1,49152,null,0,i.B,[t.h,t.k,t.x],null,null),(n()(),t.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.lb,o.F)),t.qb(3,49152,null,0,i.zb,[t.h,t.k,t.x],null,null),(n()(),t.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.J,o.d)),t.qb(5,49152,null,0,i.l,[t.h,t.k,t.x],null,null),(n()(),t.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.W,o.r)),t.qb(7,49152,null,0,i.R,[t.h,t.k,t.x],null,null),(n()(),t.rb(8,0,null,0,2,"ion-title",[],null,null,null,o.jb,o.D)),t.qb(9,49152,null,0,i.xb,[t.h,t.k,t.x],null,null),(n()(),t.Kb(-1,0,["Support"])),(n()(),t.rb(11,0,null,null,32,"ion-content",[],null,null,null,o.L,o.f)),t.qb(12,49152,null,0,i.u,[t.h,t.k,t.x],null,null),(n()(),t.rb(13,0,null,0,1,"div",[["class","support-logo"]],null,null,null,null,null)),(n()(),t.rb(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(n()(),t.rb(15,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,u){var e=!0,r=n.component;return"submit"===l&&(e=!1!==t.Db(n,17).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.Db(n,17).onReset()&&e),"ngSubmit"===l&&(e=!1!==r.submit(t.Db(n,17))&&e),e}),null,null)),t.qb(16,16384,null,0,s.v,[],null,null),t.qb(17,4210688,[["submitForm",4]],0,s.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Hb(2048,null,s.c,null,[s.l]),t.qb(19,16384,null,0,s.k,[[4,s.c]],null,null),(n()(),t.rb(20,0,null,null,15,"ion-list",[["lines","none"]],null,null,null,o.V,o.o)),t.qb(21,49152,null,0,i.O,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(22,0,null,0,13,"ion-item",[],null,null,null,o.S,o.m)),t.qb(23,49152,null,0,i.H,[t.h,t.k,t.x],null,null),(n()(),t.rb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,o.T,o.n)),t.qb(25,49152,null,0,i.N,[t.h,t.k,t.x],{color:[0,"color"],position:[1,"position"]},null),(n()(),t.Kb(-1,0,["Enter your support message below"])),(n()(),t.rb(27,0,null,0,8,"ion-textarea",[["name","supportQuestion"],["required",""],["rows","6"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,r=n.component;return"ionBlur"===l&&(e=!1!==t.Db(n,30)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Db(n,30)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(r.supportMessage=u)&&e),e}),o.ib,o.C)),t.qb(28,16384,null,0,s.q,[],{required:[0,"required"]},null),t.Hb(1024,null,s.g,(function(n){return[n]}),[s.q]),t.qb(30,16384,null,0,i.Kb,[t.k],null,null),t.Hb(1024,null,s.h,(function(n){return[n]}),[i.Kb]),t.qb(32,671744,[["supportQuestion",4]],0,s.m,[[2,s.c],[6,s.g],[8,null],[6,s.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,s.i,null,[s.m]),t.qb(34,16384,null,0,s.j,[[4,s.i]],null,null),t.qb(35,49152,null,0,i.vb,[t.h,t.k,t.x],{name:[0,"name"],required:[1,"required"],rows:[2,"rows"]},null),(n()(),t.rb(36,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,o.hb,o.B)),t.qb(37,49152,null,0,i.ub,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.rb(38,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(n()(),t.Kb(-1,null,[" Support message is required "])),(n()(),t.rb(40,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),t.rb(41,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,null,null,o.I,o.c)),t.qb(42,49152,null,0,i.k,[t.h,t.k,t.x],{expand:[0,"expand"],type:[1,"type"]},null),(n()(),t.Kb(-1,0,["Submit"]))],(function(n,l){var u=l.component;n(l,21,0,"none"),n(l,25,0,"primary","stacked"),n(l,28,0,""),n(l,32,0,"supportQuestion",u.supportMessage),n(l,35,0,"supportQuestion","","6"),n(l,37,0,"danger"),n(l,42,0,"block","submit")}),(function(n,l){var u=l.component;n(l,15,0,t.Db(l,19).ngClassUntouched,t.Db(l,19).ngClassTouched,t.Db(l,19).ngClassPristine,t.Db(l,19).ngClassDirty,t.Db(l,19).ngClassValid,t.Db(l,19).ngClassInvalid,t.Db(l,19).ngClassPending),n(l,27,0,t.Db(l,28).required?"":null,t.Db(l,34).ngClassUntouched,t.Db(l,34).ngClassTouched,t.Db(l,34).ngClassPristine,t.Db(l,34).ngClassDirty,t.Db(l,34).ngClassValid,t.Db(l,34).ngClassInvalid,t.Db(l,34).ngClassPending),n(l,38,0,t.Db(l,32).valid||!1===u.submitted)}))}var d=t.nb("page-support",a,(function(n){return t.Mb(0,[(n()(),t.rb(0,0,null,null,1,"page-support",[],null,null,null,p,c)),t.qb(1,49152,null,0,a,[i.a,i.Lb],null,null)],null,null)}),{},{},[]),g=u("SVse"),h=u("iInd"),m=function(){};u.d(l,"SupportModuleNgFactory",(function(){return f}));var f=t.ob(e,[],(function(n){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[r.a,d]],[3,t.j],t.v]),t.Bb(4608,g.o,g.n,[t.s,[2,g.I]]),t.Bb(4608,s.t,s.t,[]),t.Bb(4608,i.b,i.b,[t.x,t.g]),t.Bb(4608,i.Eb,i.Eb,[i.b,t.j,t.p]),t.Bb(4608,i.Hb,i.Hb,[i.b,t.j,t.p]),t.Bb(1073742336,g.b,g.b,[]),t.Bb(1073742336,s.s,s.s,[]),t.Bb(1073742336,s.f,s.f,[]),t.Bb(1073742336,i.Bb,i.Bb,[]),t.Bb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),t.Bb(1073742336,m,m,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);