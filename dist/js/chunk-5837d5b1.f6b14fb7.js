(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5837d5b1"],{"1deb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{staticClass:"my-16",attrs:{"justify-left":"","align-left":"",column:"","py-16":""}},[a("div",{staticClass:"text-h1 font-weight-black black--text text-decoration-underline text-left"},[t._v(" Support! ")]),a("div",{staticClass:"text-subtitle-1 font-weight-black black--text text-left mt-10"},[t._v(" A contact page built from scratch using Vue/Vuex/Routers ")])]),a("hr"),a("v-layout",{attrs:{"justify-center":"","align-center":"",column:""}},[a("div",[a("h1",{staticClass:"font-weight-black black--text mt-10",staticStyle:{"font-size":"3em"}},[t._v(" Winning 101 ")])]),a("div",[a("p",{staticClass:"subtitle-2"},[t._v("Learn the basics of how to not lose")])]),a("my-video")],1),a("hr"),a("v-layout",[a("setup")],1),a("hr"),a("v-layout",[a("expand-menu")],1),a("hr"),a("v-layout",[a("requirements")],1)],1)},i=[],r=a("5e13"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-col",{staticClass:"text-h6 font-weight-bold mt-5",attrs:{cols:"12",lg:"3",md:"3"}},[t._v("Setup for Success")]),s("v-col",{attrs:{cols:"9"}},[s("v-layout",{staticClass:"background my-5",attrs:{row:"",wrap:""}},[s("v-col",[s("div",{staticClass:"text-h3 font-weight-bold"},[t._v("Careers")]),s("p",[t._v(" Looking to be apart of the greatest thing on the face of the earth?? ")]),s("v-btn",{staticClass:"my-10 button font-weight-black",attrs:{"align-bottom":"","justify-left":"",dark:"",to:"/contact",color:"green"}},[t._v(" Hit me up! ")])],1),s("v-col",{attrs:{cols:"12",md:"5",lg:"5"}},[s("v-img",{attrs:{src:a("3da0"),height:"300",contain:""}})],1)],1)],1)],1)],1)},l=[],o={name:"Careers"},c=o,u=(a("9d36"),a("2877")),d=a("6544"),m=a.n(d),h=a("8336"),v=a("62ad"),f=a("a523"),p=a("adda"),g=a("a722"),b=Object(u["a"])(c,n,l,!1,null,"bb6f3644",null),y=b.exports;m()(b,{VBtn:h["a"],VCol:v["a"],VContainer:f["a"],VImg:p["a"],VLayout:g["a"]});var _=a("620f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluit:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-col",{staticClass:"text-h6 font-weight-bold mt-5",attrs:{cols:"12",md:"3"}},[t._v("System Requirements")]),a("v-col",{staticClass:"mt-5 pr-16",attrs:{cols:"12",md:"4"}},t._l(Object.keys(t.system).slice(0,1),(function(e,s){return a("v-simple-table",{key:s,staticClass:"mytable",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left black--text",staticStyle:{"font-size":"1em"}},[t._v(" "+t._s(e)+" ")])])]),a("tbody",t._l(t.system[e],(function(e,s){return a("tr",{key:s},[a("td",[a("span",{staticClass:"text--disabled",staticStyle:{"font-size":"0.95em"}},[t._v(t._s(e.name))]),a("br"),t._v(" "+t._s(e.details)+" ")])])})),0)]},proxy:!0}],null,!0)})})),1),a("v-col",{staticClass:"mt-5 pr-16",attrs:{cols:"12",md:"4"}},t._l(Object.keys(t.system).slice(1,2),(function(e,s){return a("v-simple-table",{key:s,staticClass:"mytable",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left black--text",staticStyle:{"font-size":"1em"}},[t._v(" "+t._s(e)+" ")])])]),a("tbody",t._l(t.system[e],(function(e,s){return a("tr",{key:s},[a("td",[a("span",{staticClass:"text--disabled",staticStyle:{"font-size":"0.95em"}},[t._v(t._s(e.name))]),a("br"),t._v(" "+t._s(e.details)+" ")])])})),0)]},proxy:!0}],null,!0)})})),1)],1)],1)},C=[],k=(a("96cf"),a("1da1")),B={name:"Requirements",data:function(){return{system:{}}},created:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getSystem");case 2:a=e.sent,t.system=a.system;case 4:case"end":return e.stop()}}),e)})))()}},V=B,q=(a("82df"),a("1f4f")),w=Object(u["a"])(V,x,C,!1,null,"546e19a0",null),j=w.exports;m()(w,{VCol:v["a"],VContainer:f["a"],VLayout:g["a"],VSimpleTable:q["a"]});var S={components:{MyVideo:r["a"],Setup:y,ExpandMenu:_["a"],Requirements:j},name:"Support"},O=S,$=Object(u["a"])(O,s,i,!1,null,"73bc4ec8",null);e["default"]=$.exports;m()($,{VContainer:f["a"],VLayout:g["a"]})},"297c":function(t,e,a){"use strict";a("a9e3");var s=a("2b0e"),i=(a("c7cd"),a("5530")),r=a("ade3"),n=(a("6ece"),a("0789")),l=a("a9ad"),o=a("fe6c"),c=a("a452"),u=a("7560"),d=a("80d2"),m=a("58df"),h=Object(m["a"])(l["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],u["a"]),v=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(r["a"])(t,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(r["a"])(t,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["b"]:n["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["l"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=v;e["a"]=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"3da0":function(t,e,a){t.exports=a.p+"img/LeviKnows.ac15d2fd.jpg"},"615b":function(t,e,a){},"620f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-col",{staticClass:"text-h6 font-weight-bold mt-5",attrs:{cols:"12",lg:"2"}},[t._v("Frequently Asked Questions")]),a("v-col",{attrs:{cols:"10"}},[a("v-layout",[a("v-col",{staticClass:"shrink",attrs:{cols:"12"}},t._l(t.faqs,(function(e,s){return a("v-col",{key:s},[a("v-layout",[a("v-col",{staticClass:"ma-2;",attrs:{cols:"11",color:"primary"},on:{click:function(t){e.expand=!e.expand}}},[t._v(" "+t._s(e.title)+" ")]),a("v-col",{attrs:{cols:"1"},on:{click:function(t){e.expand=!e.expand}}},[e.expand?t._e():a("v-icon",{attrs:{medium:"",color:"black"}},[t._v("mdi-plus")]),e.expand?a("v-icon",{attrs:{medium:"",color:"black"}},[t._v("mdi-close")]):t._e()],1)],1),a("v-expand-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"item.expand"}],staticClass:"mx-auto",attrs:{elevation:"0"}},[t._v(t._s(e.text))])],1),a("v-divider")],1)})),1)],1)],1)],1)],1)},i=[],r={name:"ExpandMenu",data:function(){return{faqs:[{title:"Title #1",expand:!1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero."},{title:"Title #2",expand:!1,text:"Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae."},{title:"Title #3",expand:!1,text:"Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum."},{title:"Title #4",expand:!1,text:"Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. "},{title:"Title #5",expand:!1,text:"Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus."},{title:"Title #6",expand:!1,text:"Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero."}]}}},n=r,l=a("2877"),o=a("6544"),c=a.n(o),u=a("b0af"),d=a("62ad"),m=a("a523"),h=a("ce7e"),v=a("0789"),f=a("132d"),p=a("a722"),g=Object(l["a"])(n,s,i,!1,null,null,null);e["a"]=g.exports;c()(g,{VCard:u["a"],VCol:d["a"],VContainer:m["a"],VDivider:h["a"],VExpandTransition:v["a"],VIcon:f["a"],VLayout:p["a"]})},"6ece":function(t,e,a){},"82df":function(t,e,a){"use strict";a("e09e")},"89ac":function(t,e,a){},"8ce9":function(t,e,a){},"9d36":function(t,e,a){"use strict";a("89ac")},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var s=a("5530"),i=(a("615b"),a("10d2")),r=a("297c"),n=a("1c87"),l=a("58df");e["a"]=Object(l["a"])(r["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},ce7e:function(t,e,a){"use strict";var s=a("5530"),i=(a("8ce9"),a("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},e09e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5837d5b1.f6b14fb7.js.map