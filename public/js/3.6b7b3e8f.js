(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0c3b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{border:"1px solid","border-radius":"20px",overflow:"hidden"}},[a("q-item",{staticStyle:{height:"auto",width:"auto"}},[a("q-item-section",[a("q-item-label",{staticClass:"q-ma-sm",staticStyle:{"font-size":"25px"}},[t._v(t._s(t.title))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{staticClass:"q-mb-xs",attrs:{flat:"",round:"",color:"black",icon:"more_vert"}})],1)],1),a("q-separator",{staticStyle:{color:"black",height:"2px"}}),a("q-item",{staticStyle:{height:"auto",width:"auto",flex:"1"}},[a("q-item-section",t._l(t.widgets,(function(e,s){return a("div",{key:s,style:{height:t.height+"px",width:"auto"}},["button"===e.type?a("q-btn",{style:{position:"absolute",left:e.x+"px",top:e.y+"px",height:e.height+"px",width:e.width+"px"},attrs:{color:e.color,label:e.label}}):t._e(),"input"===e.type?a("q-input",{style:{position:"absolute",left:e.x+"px",top:e.y+"px",height:e.height+"px",width:e.width+"px"},attrs:{outlined:"",color:"primary",label:e.label}}):t._e(),"text"===e.type?a("div",{class:e.size,style:{position:"absolute",left:e.x+"px",top:e.y+"px",height:e.height+"px",width:e.width+"px"},attrs:{outlined:"",color:"black","v-bind":t.handleText(e)}},[t._v(t._s(e.label))]):t._e(),"toggle"===e.type?a("q-toggle",{style:{position:"absolute",left:e.x+"px",top:e.y+"px",height:e.height+"px",width:e.width+"px"},attrs:{color:"primary"},model:{value:e.state,callback:function(a){t.$set(e,"state",a)},expression:"widget.state"}}):t._e(),"slider"===e.type?a("q-slider",{style:{position:"absolute",left:e.x+"px",top:e.y+"px",height:e.height+"px",width:e.width+"px"},attrs:{min:e.min,max:e.max,step:e.step,label:"","label-always":"",color:"primary"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"widget.value"}}):t._e(),"plot"===e.type?a("plot",{style:{position:"absolute",left:e.x+"px",top:e.y+20+"px",height:e.height+"px",width:e.width+"px"},attrs:{unitX:e.unitX,unitY:e.unitY,URL:e.data,update:e.update,usews:e.usews}}):t._e(),"rect"===e.type?a("div",{staticStyle:{"vertical-align":"top",display:"block"}},[a("svg",[a("rect",{staticStyle:{fill:"red","stroke-width":"3",stroke:"rgb(0,0,0)"},attrs:{x:e.x+"px",y:e.y+"px",width:e.width+"px",height:e.height+"px"}})])]):t._e()],1)})),0)],1)],1)},i=[],o=a("bc3a"),n=a.n(o),l={data:function(){return{checkbox:!0}},components:{plot:a("eb34").default},methods:{handleText:function(t){t.dynamic&&(t.usews||setInterval(function(){var e=this;n.a.get(t.data).then((function(a){e.$store.commit("putWidgets",t.label=a.data)})).catch((function(t){}))}.bind(this),3e3))}},computed:{},props:["title","widgets","height"]},r=l,c=(a("2a04"),a("2877")),d=a("eebe"),u=a.n(d),p=a("66e5"),h=a("4074"),y=a("0170"),x=a("9c40"),g=a("eb85"),f=a("27f9"),m=a("9564"),w=a("c1d0"),b=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=b.exports;u()(b,"components",{QItem:p["a"],QItemSection:h["a"],QItemLabel:y["a"],QBtn:x["a"],QSeparator:g["a"],QInput:f["a"],QToggle:m["a"],QSlider:w["a"]})},1:function(t,e){},2:function(t,e){},"2a04":function(t,e,a){"use strict";var s=a("89ae"),i=a.n(s);i.a},8041:function(t,e,a){"use strict";var s=a("af78"),i=a.n(s);i.a},"89ae":function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-ma-md"},[a("transition-group",{attrs:{name:"list"}},[t._l(t.elements,(function(t,e){return a("thing",{key:e+1,staticClass:"q-ma-xs",attrs:{title:t.title,height:t.height,widgets:t.widgets}})})),0==t.elementsReceived?a("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],key:1,staticClass:"absolute-center text-primary text-h5"},[t._v("No things ... try to add new ones!")]):t._e(),t.isLoggedIn?t._e():a("div",{attrs:{to:"/login"}})],2),a("q-dialog",{attrs:{seamless:"",position:"bottom"},model:{value:t.seamless,callback:function(e){t.seamless=e},expression:"seamless"}},[a("q-card",{staticClass:"bg-red-10",staticStyle:{width:"400px"}},[a("q-card-section",{staticClass:"row items-center no-wrap red"},[a("div",[a("div",{staticClass:"text-weight-bold"},[t._v("No widgets received!")]),a("div",{staticClass:"text-grey"},[t._v("Please Log In to receive widgets!")])]),a("q-space"),a("q-btn",{staticClass:"bg-red-8",attrs:{flat:"",label:"To Login"},on:{click:t.toLogin}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",icon:"close"}})],1)],1)],1),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"add",color:"primary"}})],1)],1)},i=[],o=(a("9490"),a("bc3a")),n=a.n(o),l={name:"PageIndex",data:function(){return{elementsReceived:!1,elements:null,isLoggedIn:!1,seamless:!0}},components:{thing:a("0c3b").default},methods:{toLogin:function(){this.$router.push("login")}},computed:{showLoading:function(){var t=this;t.$store.state.isLoggedIn?(t.elements=t.$store.state.widgets,t.elementsReceived=!0,t.seamless=!1):n.a.get("https://iotdev.htlwy.ac.at/thing/iotusecases2020/widgets").then((function(e){if("done"!=e.data)t.elements=e.data,t.elementsReceived=!1;else{var a=t.$store.state.defaultDashboard;t.elements=a,t.elementsReceived=!0}})).catch((function(t){console.log()}))}}},r=l,c=(a("8041"),a("2877")),d=a("eebe"),u=a.n(d),p=a("9989"),h=a("24e8"),y=a("f09f"),x=a("a370"),g=a("2c91"),f=a("9c40"),m=a("de5e"),w=a("7f67"),b=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=b.exports;u()(b,"components",{QPage:p["a"],QDialog:h["a"],QCard:y["a"],QCardSection:x["a"],QSpace:g["a"],QBtn:f["a"],QPageSticky:m["a"]}),u()(b,"directives",{ClosePopup:w["a"]})},af78:function(t,e,a){},eb34:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("svg",{staticStyle:{overflow:"visible"},attrs:{width:"100%",height:"100%"}},[a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"2"},attrs:{x1:"5",y1:"115",x2:"300",y2:"115"}}),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"2"},attrs:{x1:"10",y1:"120",x2:"10",y2:"20"}}),a("polygon",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{points:"5,30 10,20 15,30"}}),a("polygon",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{points:"285,110 300,115 285,120"}}),a("text",{staticStyle:{overflow:"visible"},attrs:{fill:"black",x:"5",y:"10"}},[t._v(t._s(t.unitX))]),a("text",{staticStyle:{overflow:"visible"},attrs:{fill:"black",x:"305",y:"120"}},[t._v(t._s(t.unitY))]),t._l(t.dataset,(function(e,s){return a("circle",{key:s,attrs:{cx:t.calculatedCoordinatesX[s]+10,cy:t.calculatedCoordinatesY[s]/2+45,r:"3",fill:"green"}})})),t._l(t.dataset,(function(e,s){return a("line",{key:s+t.dataset.length,staticStyle:{stroke:"green","stroke-width":"1"},attrs:{x1:t.calculatedCoordinatesX[s]+10,y1:t.calculatedCoordinatesY[s]/2+45,x2:s>=t.dataset.length-1?t.calculatedCoordinatesX[s]+10:t.calculatedCoordinatesX[s+1]+10,y2:s>=t.dataset.length-1?t.calculatedCoordinatesY[s]/2+45:t.calculatedCoordinatesY[s+1]/2+45}})})),t._l(t.dataset,(function(e,s){return a("line",{key:s+2*t.dataset.length,staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:t.calculatedCoordinatesX[s]+10,y1:120,x2:t.calculatedCoordinatesX[s]+10,y2:110}})})),t._l(t.dataset,(function(e,s){return a("text",{key:s+3*t.dataset.length,staticStyle:{overflow:"visible:size:15"},attrs:{fill:"black",x:t.calculatedCoordinatesX[s]+10,y:140,"font-size":"10",transform:"rotate(-60 "+(t.calculatedCoordinatesX[s]+15)+",150)"}},[t._v(t._s(t.dataset[s].time))])})),t._l(t.dataset,(function(e,s){return a("line",{directives:[{name:"show",rawName:"v-show",value:t.dataset[s].data==t.yMax||t.dataset[s].data==t.yMin,expression:"dataset[index1].data == yMax || dataset[index1].data == yMin"}],key:s+4*t.dataset.length,staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:5,y1:t.calculatedCoordinatesY[s]/2+45,x2:15,y2:t.calculatedCoordinatesY[s]/2+45}})})),t._l(t.dataset,(function(e,s){return a("text",{directives:[{name:"show",rawName:"v-show",value:t.dataset[s].data==t.yMax||t.dataset[s].data==t.yMin,expression:"dataset[index1].data == yMax || dataset[index1].data == yMin"}],key:s+5*t.dataset.length,staticStyle:{overflow:"visible:size:15"},attrs:{fill:"black","text-anchor":"end",x:0,y:t.calculatedCoordinatesY[s]/2+48,"font-size":"10"}},[t._v(t._s(t.dataset[s].data))])})),t.wsStart?a("text",{staticStyle:{overflow:"visible",size:"15"},attrs:{fill:"black","text-anchor":"end",x:280,y:t.calculatedCoordinatesY[0]/2+48,"font-size":"10"}},[t._v(t._s(t.dataset[0].data))]):t._e()],2),t.usesWebSockets?a("q-btn",{staticStyle:{position:"absolute",top:"0px",left:"230px",scale:"80%"},attrs:{unelevated:"",rounded:"",color:t.wsStartButtonColor,label:t.wsStartButtonText},on:{click:function(e){t.wsStart=!t.wsStart}}}):t._e()],1)},i=[],o=(a("a481"),a("bc3a")),n=a.n(o),l={props:["unitX","unitY","URL","update","usews"],data:function(){return{usesWebSockets:!1,wsStart:!1,wsStartButtonColor:"primary",wsStartButtonText:"Start",plotingDone:!1,dynamicElement:null,newestValue:0,dataset:[],yMin:null,yMax:null,minMax:[],calculatedCoordinatesX:[],calculatedCoordinatesY:[]}},methods:{makePlot:function(){var t=this;0==t.$props.usews?(t.yMin=Math.min.apply(null,t.getDataArray(t.dataset))/100,t.yMax=Math.max.apply(null,t.getDataArray(t.dataset))/100):(t.yMin=0,t.yMax=255),t.calculatedCoordinatesX=t.calculateCoordinates(t.dataset,!0),t.calculatedCoordinatesY=t.calculateCoordinates(t.dataset,!1),t.minMax.push(t.calculateCoordinate(t.yMin)),t.minMax.push(t.calculateCoordinate(t.yMax))},calculateCoordinate:function(t){var e=this,a=parseInt(115-95*(parseFloat(t)-e.yMin)/(e.yMax-e.yMin));return a},calculateCoordinates:function(t,e){var a=this,s=[];if(e)for(var i=0;i<t.length;i++)s.push(Math.round(260/t.length*i));else for(i=0;i<t.length;i++){var o=parseFloat(a.dataset[i].data);s.push(parseInt(115-115*(o-a.yMin)/(a.yMax-a.yMin)))}return s},getDataArray:function(t){for(var e=this,a=[],s=0;s<e.dataset.length;s++){var i=String(e.dataset[s].data).replace(" C",""),o=parseFloat(i);a.push(parseInt(100*o))}return a}},computed:{},created:function(){var t=this;if(0==t.$props.usews)setInterval(function(){n.a.get(t.$props.URL).then((function(e){t.dataset=e.data,t.makePlot()})).catch((function(t){}))}.bind(t),2e3);else{this.usesWebSockets=!0;var e=new WebSocket("ws://192.168.0.100:81/");e.onopen=function(t){},e.onerror=function(t){console.log("[PLOT] An error occured with the socket")},e.onmessage=function(e){if(1==t.wsStart){t.wsStartButtonColor="red",t.wsStartButtonText="Stop",t.newestValue=e.data;(new Date).toLocaleTimeString("en-GB",{hour:"numeric",minute:"numeric",second:"numeric"});void 0==t.dataset&&(t.dataset=[]),t.dataset.push({time:"",data:e.data}),t.dataset.length>=20&&t.dataset.shift(),t.makePlot()}else t.dataset=[],t.makePlot(),t.wsStartButtonColor="primary",t.wsStartButtonText="Start"}}}},r=l,c=a("2877"),d=a("eebe"),u=a.n(d),p=a("9989"),h=a("9c40"),y=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=y.exports;u()(y,"components",{QPage:p["a"],QBtn:h["a"]})}}]);