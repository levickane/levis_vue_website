(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a03e0a"],{"190c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{staticClass:"my-16",attrs:{"justify-left":"","align-left":"",column:"","py-16":""}},[a("div",{staticClass:"text-h1 font-weight-black black--text text-left my-8"},[t._v(" The Goods ")]),a("div",{staticClass:"text-subtitle-1 font-weight-black black--text text-left mt-10"},[a("ul",{staticStyle:{"list-style-type":"none",display:"inline-block",float:"left"}},[a("li",[a("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-linkedin")]),a("a",{attrs:{href:"https://www.linkedin.com/in/levi-kane-8a94a155/"}},[t._v("LinkedIn")])],1),a("li",[a("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-github")]),a("a",{attrs:{href:"www.github.com/levickane"}},[t._v("Github")])],1),a("li",[a("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-gmail")]),a("a",{attrs:{href:"mailto:oneleggedlevi09@gmail.com"}},[t._v("oneleggedlevi09@gmail.com")])],1),a("li",[a("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-phone-outgoing")]),a("a",{attrs:{href:"tel:+1(773)558-3112"}},[t._v("(773) 558-3112")])],1)])])]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-col",{staticClass:"mb-10 ml-5",attrs:{cols:"12",sm:"3"}},[a("v-divider"),a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"Levi_Kane_Cover_Letter.pdf",target:"_blank",download:""}},[a("v-img",{attrs:{height:"100",width:"200",src:""+t.pictures.picture2}}),a("br"),a("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"1.5em"}},[t._v("Levi's Cover Letter")]),a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-collapse-down")])],1)],1),a("v-col",{staticClass:"mb-10 ml-5",attrs:{cols:"12",sm:"3"}},[a("v-divider"),a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"RESUME.pdf",download:""}},[a("v-img",{attrs:{height:"100",width:"200",src:""+t.pictures.picture1}}),a("br"),a("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"1.5em"}},[t._v("Levi's Resume")]),a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-collapse-down")])],1)],1)],1),a("have-questions")],1)},s=[],o=a("b2df"),r={components:{HaveQuestions:o["a"]},name:"ClientHome",data:function(){return{pictures:{picture1:"https://images.squarespace-cdn.com/content/v1/5e7e1657b7fbbc04365b0e3e/1585750174266-UET5OOQHNEKP3DF0J4KT/ke17ZwdGBToddI8pDm48kHceFWXZ3GxxjMg-cSd1ZwgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc0V-u8h3USQFsKiw8AT3Zcwk_AqyZn8ddWJf_7EaT4-kMmwMqu46asTcbuI6O7Ivb/cash+pile.png",picture2:"https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer-by-vexels.png"}}}},l=r,n=a("2877"),c=a("6544"),v=a.n(c),d=a("62ad"),u=a("a523"),m=a("ce7e"),b=a("132d"),h=a("adda"),f=a("a722"),p=Object(n["a"])(l,i,s,!1,null,"08eabcb4",null);e["default"]=p.exports;v()(p,{VCol:d["a"],VContainer:u["a"],VDivider:m["a"],VIcon:b["a"],VImg:h["a"],VLayout:f["a"]})},2657:function(t,e,a){"use strict";a("c165")},"50ba":function(t,e,a){t.exports=a.p+"img/Headshot.58d15b9e.jpg"},"8ce9":function(t,e,a){},b2df:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{staticClass:"background",attrs:{row:"",wrap:""}},[i("v-col",[i("div",{staticClass:"text-h3 font-weight-bold"},[t._v("Have any Questions?")]),i("v-btn",{staticClass:"my-10 button font-weight-black",attrs:{"align-bottom":"","justify-left":"",dark:"",to:"/contact",color:"green"}},[t._v(" Cick here! ")])],1),i("v-col",{attrs:{cols:"12",md:"5",lg:"5"}},[i("v-img",{attrs:{src:a("50ba"),height:"300",contain:""}})],1)],1)],1)},s=[],o={name:"HaveQuestions"},r=o,l=(a("2657"),a("2877")),n=a("6544"),c=a.n(n),v=a("8336"),d=a("62ad"),u=a("a523"),m=a("adda"),b=a("a722"),h=Object(l["a"])(r,i,s,!1,null,"2ee3a0b1",null);e["a"]=h.exports;c()(h,{VBtn:v["a"],VCol:d["a"],VContainer:u["a"],VImg:m["a"],VLayout:b["a"]})},c165:function(t,e,a){},ce7e:function(t,e,a){"use strict";a("8ce9");var i=a("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-10a03e0a.8260a01c.js.map