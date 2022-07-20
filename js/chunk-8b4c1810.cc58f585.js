(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b4c1810"],{"297c":function(e,t,s){"use strict";var a=s("2b0e"),i=(s("6ece"),s("0789")),r=s("90a2"),o=s("a9ad"),n=s("fe6c"),l=s("a452"),c=s("7560"),h=s("80d2"),d=s("58df");const u=Object(d["a"])(o["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var m=u.extend({name:"v-progress-linear",directives:{intersect:r["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(h["g"])(this.normalizedValue,"%"),width:Object(h["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i["c"]:i["d"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(h["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(h["o"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,s){this.isVisible=s},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m;t["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"615b":function(e,t,s){},"66d9":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{staticClass:"my-16 px-3",attrs:{"justify-left":"","align-left":"",column:"","py-16":""}},[s("div",{staticClass:"text-h2 font-weight-black black--text text-left"},[e._v(" Testimonials ")]),s("div",{staticClass:"text-subtitle-1 font-weight-black black--text text-left mt-10"},[e._v(" What are they saying? ")])]),s("hr",{staticClass:"mb-10"}),s("v-layout",{staticClass:"px-3",attrs:{row:"",wrap:""}},e._l(e.techReviews,(function(t,a){return s("v-col",{key:a,attrs:{cols:"12"}},[s("v-card",{staticClass:"pa-3"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-col",{attrs:{cols:"6",md:"2"}},[s("v-img",{staticStyle:{"border-radius":"50%"},attrs:{src:""+t.profilePic}})],1),s("v-col",{attrs:{cols:"6",md:"2"}},[s("h4",[e._v(e._s(t.person))]),s("p",[e._v(e._s(t.jobTitle))])]),s("v-col",{attrs:{cols:"12",md:"8"}},[e._v(e._s(t.testimony))])],1)],1)],1)})),1),s("v-layout",{staticClass:"px-3",attrs:{row:"",wrap:""}},[s("v-col",{attrs:{cols:"6",md:"4"}},[s("h2",[e._v("Fitness reviews:")]),s("h4",[e._v(" In case things go south with software engineering, OR you REALLY want me to be your trainer - Check out my reviews in the fitness industry ")])]),s("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"6",md:"3"}},[s("v-btn",{attrs:{color:"primary"}},[s("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"https://www.google.com/maps/place/One+Legged+Levi/@41.9220945,-87.6723672,15z/data=!4m5!3m4!1s0x0:0x221e9b60216a57d0!8m2!3d41.9218638!4d-87.6726538",target:"_blank"}},[e._v("Google Reviews")])])],1)],1)],1)},i=[],r={name:"Testimonials",data:function(){return{techReviews:[{person:"Brian Rojas",profilePic:"https://media-exp1.licdn.com/dms/image/C4E03AQGER2y6mcgGpA/profile-displayphoto-shrink_100_100/0/1517753039495?e=1634169600&v=beta&t=ucdhGNyBDgZvJdIbxSBtzS7PwkAmorFVnhmPoAKv6ug",jobTitle:"Senior Developer - FourSquare",testimony:"As a former client of Levi's and a current software developer mentor of his, I can attest to his ability to quickly learn and adapt. I've watch his skills grow since he started learning how to code and I'm proud of how far he has come! The fact that he has already learned as much as he has during the short time that he has is incredibly impressive. His work ethic is unrivaled and I believe that any company would be lucky to have him!"},{person:"Ben James",profilePic:"https://media-exp1.licdn.com/dms/image/C5603AQFqWcqFqsacTg/profile-displayphoto-shrink_100_100/0/1516582560128?e=1634169600&v=beta&t=pHGtoGsiBGFTIP_HFaNk7ZHY__jzHnCd7K6LautqRuo",jobTitle:"OGAds - CEO",testimony:"Levi's a real go-getter! I used to be one of his personal training clients and when covid basically cancelled his business he didn't waste any time turning to software development, we had talked about it a lot and he was very keen to try it out for himself. As he was someone who came into this industry knowing absolutely nothing about software development, I'm so proud of how far he has come! He is a quick learner, intuitive and eager to learn more - are 3 things that come to mind when I think of Levi!"},{person:"Sara Neves Pereira",profilePic:"https://media-exp1.licdn.com/dms/image/C5603AQHOHOUTOZoWrw/profile-displayphoto-shrink_100_100/0/1595273711043?e=1634169600&v=beta&t=HsEg1O20cKTl2DTVExtNRZe_HjYxdHlT2uQuxDf5Azk",jobTitle:"Full Stack Web Developer",testimony:"As Levi's Coding Tutor, I was extremely impressed at how fast Levi would learn the material he was being taught. Whenever his apps had issues, he would not wait for me to tell him the answer, we would debug his projects together. Levi is a motivated, self-starter individual that is always seeking the opportunity to learn. It was a true pleasure to tutor Levi and I look forward to see where his determination takes him."}]}}},o=r,n=s("2877"),l=s("6544"),c=s.n(l),h=s("8336"),d=s("b0af"),u=s("62ad"),m=s("a523"),g=s("adda"),v=s("a722"),p=Object(n["a"])(o,a,i,!1,null,"6553197f",null);t["default"]=p.exports;c()(p,{VBtn:h["a"],VCard:d["a"],VCol:u["a"],VContainer:m["a"],VImg:g["a"],VLayout:v["a"]})},"6ece":function(e,t,s){},b0af:function(e,t,s){"use strict";s("615b");var a=s("10d2"),i=s("297c"),r=s("1c87"),o=s("58df");t["a"]=Object(o["a"])(i["a"],r["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const e={...a["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-8b4c1810.cc58f585.js.map