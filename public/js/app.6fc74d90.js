(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),r=n.n(a),o=(n("96cf"),n("fa84")),u=n.n(o),i=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),s=n("1f91"),c=n("42d2"),l=n("b05d"),p=n("7ff0"),f=n("429bb"),d=n("7460"),h=n("7867"),b=n("1c1c"),m=n("66e5"),g=n("4074"),w=n("0170"),x=n("24e8"),y=n("f09f"),v=n("a370"),Q=n("4b7e"),k=n("27f9"),P=n("52ee"),T=n("7cbe"),I=n("ca78"),C=n("7f67"),D=n("436b"),L=n("2a19"),S=n("696d"),A=n("f508");i["a"].use(l["a"],{config:{},lang:s["a"],iconSet:c["a"],components:{QFooter:p["a"],QTabs:f["a"],QTab:d["a"],QRouteTab:h["a"],QList:b["a"],QItem:m["a"],QItemSection:g["a"],QItemLabel:w["a"],QDialog:x["a"],QCard:y["a"],QCardSection:v["a"],QCardActions:Q["a"],QInput:k["a"],QDate:P["a"],QPopupProxy:T["a"],QTime:I["a"]},directives:{ClosePopup:C["a"]},plugins:{Dialog:D["a"],Notify:L["a"],AddressbarColor:S["a"],Loading:A["a"]}});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},_=[],j={name:"App"},q=j,B=n("2877"),E=Object(B["a"])(q,U,_,!1,null,null,null),J=E.exports,M=n("4360"),N=n("8c4f"),O=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))}},{path:"/settings",component:function(){return n.e(9).then(n.bind(null,"b41f"))}},{path:"/about",component:function(){return n.e(7).then(n.bind(null,"a1d1"))}},{path:"/gui_editor",component:function(){return n.e(8).then(n.bind(null,"023c"))}}]},{path:"/login",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"4632"))}}];O.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"e51e"))}});var V=O;i["a"].use(N["a"]);var $=function(){var e=new N["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:V,mode:"hash",base:""});return e},F=function(){return H.apply(this,arguments)};function H(){return H=u()(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof M["a"]){e.next=6;break}return e.next=3,Object(M["a"])({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=M["a"];case 7:if(t=e.t0,"function"!==typeof $){e.next=14;break}return e.next=11,$({Vue:i["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=$;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(J)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function R(){return W.apply(this,arguments)}function W(){return W=u()(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.app,t.store,t.router,new i["a"](n);case 7:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}R()},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62");a["a"].use(r["a"]),t["a"]=function(){var e=new r["a"].Store({state:{defaultDashboard:[{title:"UI Test Thing",height:30,widgets:[{type:"text",name:"text1",label:"All upper case",width:150,height:50,x:15,y:15},{type:"toggle",name:"toggle1",label:"Toggle Here",state:!0,width:150,height:50,x:100,y:0,onToggle:"storeUpdate"},{type:"input",name:"input1",label:"Enter Name:",width:250,height:50,x:10,y:50},{type:"button",name:"button1",label:"Send",width:80,height:50,x:265,y:50,onClick:"alert('Button 1 pressed!')"},{type:"slider",name:"slider1",min:0,max:4095,step:1,value:3e3,width:250,height:50,x:15,y:120}]}],firstname:"Max",lastname:"Muster",username:null,password:null,isLoggedIn:!1,widgets:null},mutations:{putUsername:function(e,t){e.username=t},putPassword:function(e,t){e.password=t},putWidgets:function(e,t){e.widgets=t,e.isLoggedIn=!0}},getters:{defaultDashboard:function(e){return e.defaultDashboard},firstname:function(e){return e.firstname},lastname:function(e){return e.lastname},username:function(e){return e.username},password:function(e){return e.password},widgets:function(e){return e.widgets}},modules:{},strict:!1});return e}}},[[0,2,0]]]);