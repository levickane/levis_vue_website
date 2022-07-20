(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d6e3798"],{"0bc6":function(t,e,s){},"19ad":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=(t,e,s,i)=>{if(0===e)return+(i-t).toFixed(4)/s;e/=100;const n=t*Math.pow(1+e,s/12);if(n.toFixed(2)===i.toFixed(2))return 0;const a=e/12;return+(i-n).toFixed(4)*a/(Math.pow(1+a,s)-1)};e.default=i},"2a22":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s("4445"),n=s("bfe1"),a=s("4db6"),l=s("7637"),r=s("19ad");e.getMonthlyPayments=(t,e,s)=>{if(!t||null==e||!s||isNaN(t)||isNaN(e)||isNaN(s)||s<0||t<0)throw'Either there are missing/invalid params, or one of "loanAmount" or "months" is equal to 0 or is negative, which is not possible';return+i.default(+t,+e,+s).toFixed(2)},e.getMaximumBorrowingCapacity=(t,e,s,i)=>{if(!t||null==e||!s||!i||isNaN(t)||isNaN(e)||isNaN(s)||isNaN(i)||i<0||i>100||s<0||t<0)throw'Either there are missing/invalid params, or one of "availableRevenue", "months" or "maximumDebtRatio" is equal to 0 or is negative, which is not possible';return n.default(+t,+e,+s,+i)},e.getInterestRate=(t,e,s)=>{if(!t||!e||!s||isNaN(t)||isNaN(e)||isNaN(s)||t<0||s<0||e<0)throw'Either there are missing/invalid params, or one of "loanAmount", "months" or "monthlyPayments" is equal to 0 or is negative, which is not possible';return a.default(+t,+e,+s)},e.getSavingsCapitalAtMaturity=(t,e,s,i)=>{if(!s||null==t||null==e||null!=i&&isNaN(i)||isNaN(t)||isNaN(e)||isNaN(s)||t<0||s<0)throw'Either there are missing/invalid params, or "months" is <= 0 or "initialCapital" is negative, which is not possible';return+l.default(+t,+e,+s,+i).toFixed(2)},e.getSavingsMonthlyObjective=(t,e,s,i)=>{if(!s||null==i||null==e||null==t||isNaN(t)||isNaN(e)||isNaN(i)||isNaN(s)||s<0||t<0||i<0||i<=t)throw'Either there are missing/invalid params, or one of the followings: "months" is <= 0, "initialCapital" or "objectiveCapital" is negative, or objectiveCapital is lower than initialCapital which is not allowed';return+r.default(+t,+e,+s,+i).toFixed(2)},e.default={getMonthlyPayments:e.getMonthlyPayments,getMaximumBorrowingCapacity:e.getMaximumBorrowingCapacity,getInterestRate:e.getInterestRate,getSavingsCapitalAtMaturity:e.getSavingsCapitalAtMaturity,getSavingsMonthlyObjective:e.getSavingsMonthlyObjective}},"326d":function(t,e,s){"use strict";var i=s("e449");e["a"]=i["a"]},4445:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=(t,e,s)=>{if(0===e)return t/s;const i=e/100/12,n=Math.pow(i+1,s);return i*t*n/(n-1)};e.default=i},"4db6":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=(t,e,s)=>{if(e*s===t)return 0;const i=12*e/t;try{return+(100*n(i,s,0,100)).toFixed(3)}catch(a){throw"Couldn't find corresponding interest rate, the computation may be too hard for JavaScript (try reducing the amount of decimals if possible) OR the interest rate is negative, this is not supported"}},n=(t,e,s,i)=>{if(i<s)throw"could not find interest rate";const a=(s+i)/2,l=a/(1-1/Math.pow(1+a/12,e));return l===t?a:l>t?n(t,e,s,a):n(t,e,a,i)};e.default=i},"615b":function(t,e,s){},"68dd":function(t,e,s){},7637:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=(t,e,s,i)=>{if(0===e)return t+i*s;e/=100;const n=t*Math.pow(1+e,s/12);if(i){const t=e/12;return n+i*(Math.pow(1+t,s)-1)/t}return n};e.default=i},"8adc":function(t,e,s){},"8ce9":function(t,e,s){},9595:function(t,e,s){"use strict";function i(t){for(var s in t)e.hasOwnProperty(s)||(e[s]=t[s])}Object.defineProperty(e,"__esModule",{value:!0});var n=s("2a22");e.default=n.default,i(s("2a22"))},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return o}));var i=s("b0af"),n=s("80d2");const a=Object(n["h"])("v-card__actions"),l=Object(n["h"])("v-card__subtitle"),r=Object(n["h"])("v-card__text"),o=Object(n["h"])("v-card__title");i["a"]},b0af:function(t,e,s){"use strict";s("615b");var i=s("10d2"),n=s("297c"),a=s("1c87"),l=s("58df");e["a"]=Object(l["a"])(n["a"],a["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b810:function(t,e,s){"use strict";var i=s("ce7e");e["a"]=i["a"]},b8dc:function(t,e,s){"use strict";s("bb00")},bb00:function(t,e,s){},bfe1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=(t,e,s,i)=>{i/=100;const n=t*i,a=n*s;if(0===e)return{loanAmount:+a.toFixed(2),monthlyPayment:+n.toFixed(2),interestsAmount:0};const l=e/100/12,r=Math.pow(1+l,s),o=(r-1)*n/(l*r);return{loanAmount:+o.toFixed(2),monthlyPayment:+n.toFixed(2),interestsAmount:+(a-o).toFixed(2)}};e.default=i},ce7e:function(t,e,s){"use strict";s("8ce9");var i=s("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},cf36:function(t,e,s){},e964:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"hero",attrs:{fluid:""}},[s("v-layout",{staticClass:"my-16",attrs:{"justify-left":"","align-left":"",column:"","py-16":""}},[s("div",{staticClass:"text-h1 font-weight-black white--text text-left"},[t._v(" Real Estate! ")]),s("div",{staticClass:"text-h6 font-weight-black grey--text darken-4 text-left mt-10"},[t._v(" Easily calculate your ROI when investing in multi-units ")])]),s("hr",{staticClass:"mb-14"}),s("v-layout",{staticClass:"d-flex justify-center",attrs:{row:"",wrap:""}},[s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-card",{staticClass:"pa-5 rounded-lg",attrs:{color:"rgb(255, 255, 255, 0.8)"}},[s("v-card-title",{staticClass:"text-center"},[t._v("Calculate your monthly ROI")]),s("v-card-text",{staticClass:"text-center"},[t._v("***For best results, be conservative in your projections***")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("v-layout",{staticClass:"d-flex justify-center",attrs:{row:"",wrap:""}},[s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{rules:[t.rules.number],label:"Money On Hand","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.potentialMoney,callback:function(e){t.potentialMoney=e},expression:"potentialMoney"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Purchase Price","append-icon":"mdi-currency-usd",required:"",type:"number"},model:{value:t.purchasePrice,callback:function(e){t.purchasePrice=e},expression:"purchasePrice"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Annual Tax Amount","append-icon":"mdi-currency-usd",required:"",type:"number"},model:{value:t.annualTax,callback:function(e){t.annualTax=e},expression:"annualTax"}}),s("v-select",{attrs:{items:t.dpOptions,label:"Down Payment Amount","data-vv-name":"PercentDown",type:"text",required:""},model:{value:t.percentDown,callback:function(e){t.percentDown=e},expression:"percentDown"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Interest Rate"},model:{value:t.interestRate,callback:function(e){t.interestRate=e},expression:"interestRate"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Monthly Insurance Amount","append-icon":"mdi-currency-usd",required:"",type:"number"},model:{value:t.insurance,callback:function(e){t.insurance=e},expression:"insurance"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Est. Monthly Utilities","append-icon":"mdi-currency-usd",required:"",type:"number"},model:{value:t.utilities,callback:function(e){t.utilities=e},expression:"utilities"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{rules:[t.rules.number],label:"Unit 1 Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.unit1,callback:function(e){t.unit1=e},expression:"unit1"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Unit 2 Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.unit2,callback:function(e){t.unit2=e},expression:"unit2"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Unit 3 Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.unit3,callback:function(e){t.unit3=e},expression:"unit3"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Unit 4 Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.unit4,callback:function(e){t.unit4=e},expression:"unit4"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Unit 5 Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.unit5,callback:function(e){t.unit5=e},expression:"unit5"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Bonus Unit Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.bonusUnit,callback:function(e){t.bonusUnit=e},expression:"bonusUnit"}}),s("v-text-field",{attrs:{rules:[t.rules.number],label:"Parking Rent","append-icon":"mdi-currency-usd",type:"number"},model:{value:t.parkingRent,callback:function(e){t.parkingRent=e},expression:"parkingRent"}})],1),s("v-col",{staticClass:"d-flex justify-end mb-2",attrs:{cols:"12"}},[s("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[t._v(" submit ")]),s("v-btn",{on:{click:t.clear}},[t._v(" clear ")])],1)],1)],1)],1),s("v-card",{staticClass:"pa-5 mt-10 rounded-lg",attrs:{color:"rgb(255, 255, 255, 0.8)"}},[s("h4",[t._v(" Down Payment: $"+t._s("100%"!==t.percentDown?t.downPayment.toFixed(2):t.downPayment)+" ")]),s("h4",[t._v(" Money left in your bank after purchase: $"+t._s(t.leftOverMoney.toFixed(2))+" ")]),s("h4",[t._v(" Estimated monthly payment (with Utilities"+t._s(t.PMIincluded)+"): $"+t._s(t.MonthlyPayment.toFixed(2))+" ")]),s("h2",[t._v("Potential Income: $"+t._s(t.Income.toFixed(2)))])])],1)],1)],1)},n=[],a=s("9595"),l=s.n(a),r={name:"RealEstate",data:function(){return{rules:{number:function(t){var e=/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;return e.test(t)||"Please enter numbers only"}},potentialMoney:"",purchasePrice:"",annualTax:"",dpOptions:["3.5%","5%","10%","15%","20%","25%","100%"],percentDown:null,interestRate:0,insurance:150,utilities:400,unit1:0,unit2:0,unit3:0,unit4:0,unit5:0,bonusUnit:0,parkingRent:0,downPayment:0,leftOverMoney:0,MonthlyPayment:0,Income:0,PMIincluded:"",googleQuery:""}},methods:{submit:function(){var t=function(t){switch(t){case"3.5%":return.035;case"5%":return.05;case"10%":return.1;case"15%":return.15;case"20%":return.2;case"25%":return.25;case"100%":return 1}},e=t(this.percentDown);this.downPayment=e<=.25?this.purchasePrice*e:this.purchasePrice;var s=this.purchasePrice-this.downPayment,i=e<=.25?l.a.getMonthlyPayments(s,parseFloat(this.interestRate),360):0,n=parseInt(this.unit1),a=parseInt(this.unit2),r=parseInt(this.unit3),o=parseInt(this.unit4),c=parseInt(this.unit5),u=parseInt(this.bonusUnit),h=parseInt(this.parkingRent),d=parseFloat(this.annualTax)/12,p=n+a+r+o+c+u+h;this.leftOverMoney=this.potentialMoney-this.downPayment;var m=i+d+parseInt(this.utilities)+parseInt(this.insurance),v=d+parseInt(this.utilities)+parseInt(this.insurance);e<.2?(this.MonthlyPayment=m+250,this.PMIincluded=" & PMI"):e>.25?(this.MonthlyPayment=v,this.PMIincluded=""):(this.MonthlyPayment=m,this.PMIincluded=""),this.Income=p-this.MonthlyPayment},clear:function(){this.potentialMoney="",this.purchasePrice="",this.annualTax="",this.percentDown=null,this.interestRate="",this.insurance="",this.utilities="",this.unit1=0,this.unit2=0,this.unit3=0,this.unit4=0,this.unit5=0,this.bonusUnit=0,this.parkingRent=0,this.$refs.observer.reset()}}},o=r,c=(s("b8dc"),s("2877")),u=s("6544"),h=s.n(u),d=s("8336"),p=s("b0af"),m=s("99d9"),v=s("62ad"),f=s("a523"),b=s("a722"),g=(s("4ff9"),s("68dd"),s("8adc"),s("58df")),y=s("0789"),x=s("9d26"),I=s("a9ad"),C=s("4e82"),$=s("7560"),k=s("f2e7"),M=s("1c87"),w=s("af2b"),S=s("d9bd"),O=Object(g["a"])(I["a"],w["a"],M["a"],$["a"],Object(C["a"])("chipGroup"),Object(k["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...M["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(M["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(S["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(x["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(y["b"],t)},genClose(){return this.$createElement(x["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const n=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(n,i),e)}}),P=O,T=s("326d"),_=(s("cf36"),s("5607")),A=s("2b0e"),D=s("132d"),j=s("d9f7"),V=s("80d2"),B=A["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:_["a"]},props:{...I["a"].options.props,...$["a"].options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:s,listeners:i}){const n=[];let a=e.offIcon;if(e.indeterminate?a=e.indeterminateIcon:e.value&&(a=e.onIcon),n.push(t(D["a"],I["a"].options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),a)),e.ripple&&!e.disabled){const s=t("div",I["a"].options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));n.push(s)}return t("div",Object(j["a"])(s,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled},on:{click:t=>{t.stopPropagation(),s.on&&s.on.input&&!e.disabled&&Object(V["y"])(s.on.input).forEach(t=>t(!e.value))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},n)])}}),E=s("b810"),F=(s("0bc6"),Object(g["a"])($["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})),N=F,L=s("da13"),R=s("1800"),U=s("5d23"),H=s("8860"),q=Object(g["a"])(I["a"],$["a"]).extend({name:"v-select-list",directives:{ripple:_["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(t=>this.getValue(t))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(L["a"],t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(R["a"],[this.$createElement(B,{props:{color:this.color,value:e,ripple:!1},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(E["a"],{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return Object(V["j"])(t);const{start:e,middle:s,end:i}=this.getMaskedCharacters(t);return`${Object(V["j"])(e)}${this.genHighlight(s)}${Object(V["j"])(i)}`},genHeader(t){return this.$createElement(N,{props:t},t.header)},genHighlight(t){return`<span class="v-list-item__mask">${Object(V["j"])(t)}</span>`},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),s=t.toLocaleLowerCase().indexOf(e);if(s<0)return{start:t,middle:"",end:""};const i=t.slice(0,s),n=t.slice(s,s+e.length),a=t.slice(s+e.length);return{start:i,middle:n,end:a}},genTile({item:t,index:e,disabled:s=null,value:i=!1}){i||(i=this.hasItem(t)),t===Object(t)&&(s=null!==s?s:this.getDisabled(t));const n={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>s||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:s,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(L["a"],n,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,i):null,this.genTileContent(t,e)]);const a=this,l=this.$scopedSlots.item({parent:a,item:t,attrs:{...n.attrs,...n.props},on:n.on});return this.needsTile(l)?this.$createElement(L["a"],n,l):l},genTileContent(t,e=0){const s=this.genFilteredText(this.getText(t));return this.$createElement(U["a"],[this.$createElement(U["b"],{domProps:{innerHTML:s}})])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean(Object(V["n"])(t,this.itemDisabled,!1))},getText(t){return String(Object(V["n"])(t,this.itemText,t))},getValue(t){return Object(V["n"])(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let s=0;s<e;s++){const e=this.items[s];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:s})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:s})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(H["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),z=s("c37a"),G=s("8654"),J=s("8547"),K=s("b848"),W=A["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),Q=s("a293");const Y={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},X=Object(g["a"])(G["a"],J["a"],K["a"],W);var Z=X.extend().extend({name:"v-select",directives:{ClickOutside:Q["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>Y},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...G["a"].options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return"list-"+this._uid},computedCounterValue(){var t;const e=this.multiple?this.selectedItems:(null!=(t=this.getText(this.selectedItems[0]))?t:"").toString();return"function"===typeof this.counterValue?this.counterValue(e):e.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(S["b"])("assert: staticList should not be called if slots are used"),this.$createElement(q,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((t,e)=>(t[e.trim()]=!0,t),{})),{...Y,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems(),this.multiple&&this.$nextTick(()=>{var t;null==(t=this.$refs.menu)||t.updateDimensions()})},isMenuActive(t){window.setTimeout(()=>this.onMenuActiveChange(t))},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))}),this.setSelectedItems()}}},methods:{blur(t){G["a"].options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let s=0;s<t.length;++s){const i=t[s];if(null==i)continue;if(i.header||i.divider){e.set(i,i);continue}const n=this.getValue(i);!e.has(n)&&e.set(n,i)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex(t=>this.valueComparator(this.getValue(t),e))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const s=this.isDisabled||this.getDisabled(t),i=!s&&this.isInteractive;return this.$createElement(P,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&i,disabled:s,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{i&&(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,s){const i=e===this.selectedIndex&&this.computedColor,n=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":n},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${s?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,s){const i=z["a"].options.methods.genIcon.call(this,t,e,s);return"append"===t&&(i.children[0].data=Object(j["a"])(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const t=G["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=Object(j["a"])(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(V["m"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(V["m"])(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=G["a"].options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter(t=>this.$slots[t]).map(t=>this.$createElement("template",{slot:t},this.$slots[t]));return this.$createElement(q,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(T["a"],{attrs:{role:void 0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let s;s=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=s(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return Object(V["n"])(t,this.itemDisabled,!1)},getText(t){return Object(V["n"])(t,this.itemText,t)},getValue(t){return Object(V["n"])(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||!this.isInteractive||this.disableLookup)return;const e=1e3,s=performance.now();s-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=s;const i=this.allItems.findIndex(t=>{var e;const s=(null!=(e=this.getText(t))?e:"").toString();return s.toLowerCase().startsWith(this.keyboardLookupPrefix)}),n=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?n:this.getValue(n)),this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(i)))},onKeyDown(t){if(this.isReadonly&&t.keyCode!==V["s"].tab)return;const e=t.keyCode,s=this.$refs.menu;return this.$emit("keydown",t),s?(this.isMenuActive&&[V["s"].up,V["s"].down,V["s"].home,V["s"].end,V["s"].enter].includes(e)&&this.$nextTick(()=>{s.changeListIndex(t),this.$emit("update:list-index",s.listIndex)}),[V["s"].enter,V["s"].space].includes(e)&&this.activateMenu(),!this.isMenuActive&&[V["s"].up,V["s"].down,V["s"].home,V["s"].end].includes(e)?this.onUpDown(t):e===V["s"].esc?this.onEscDown(t):e===V["s"].tab?this.onTabDown(t):e===V["s"].space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(let t=0;t<e.tiles.length;t++)if("true"===e.tiles[t].getAttribute("aria-selected")){this.setMenuIndex(t);break}}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick(()=>this.isMenuActive=!this.isMenuActive),G["a"].options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame(()=>this.getContent().scrollTop=0)},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const s=e.activeTile;!this.multiple&&s&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),s.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const s=t.keyCode;e.isBooted=!0,window.requestAnimationFrame(()=>{if(e.getTiles(),!e.hasClickableTiles)return this.activateMenu();switch(s){case V["s"].up:e.prevTile();break;case V["s"].down:e.nextTile();break;case V["s"].home:e.firstTile();break;case V["s"].end:e.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])})},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),s=this.findExistingIndex(t);if(-1!==s?e.splice(s,1):e.push(t),this.setValue(e.map(t=>this.returnObject?t:this.getValue(t))),this.hideSelected)this.setMenuIndex(-1);else{const e=this.allItems.indexOf(t);~e&&(this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(e)))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const s of e){const e=this.allItems.findIndex(t=>this.valueComparator(this.getValue(t),this.getValue(s)));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}}),tt=Object(c["a"])(o,i,n,!1,null,"207b6d04",null);e["default"]=tt.exports;h()(tt,{VBtn:d["a"],VCard:p["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:v["a"],VContainer:f["a"],VLayout:b["a"],VSelect:Z,VTextField:G["a"]})}}]);
//# sourceMappingURL=chunk-2d6e3798.a7e939a7.js.map