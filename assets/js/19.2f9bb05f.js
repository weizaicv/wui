(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){},219:function(t,e,n){"use strict";var a=n(135);n.n(a).a},220:function(t,e,n){"use strict";var a=n(136);n.n(a).a},221:function(t,e,n){"use strict";var a=n(137);n.n(a).a},222:function(t,e,n){"use strict";var a=n(138);n.n(a).a},245:function(t,e,n){"use strict";n.r(e);n(45);var a=n(57),i=n.n(a),s=(n(58),n(49),{name:"WNav",provide:function(){return{root:this,vertical:this.vertical}},props:{selected:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1}},data:function(){return{items:[],namePath:[]}},mounted:function(){this.updateChildren(),this.listenToChildren()},updated:function(){this.updateChildren()},methods:{addItem:function(t){this.items.push(t)},updateChildren:function(){var t=this;this.items.forEach((function(e){t.selected.indexOf(e.name)>=0?e.selected=!0:e.selected=!1}))},listenToChildren:function(){var t=this;this.items.forEach((function(e){e.$on("add:selected",(function(e){if(t.multiple){var n=JSON.parse(JSON.stringify(t.selected));n.push(e),t.$emit("update:selected",n)}else t.$emit("update:selected",[e])}))}))}}}),v=(n(219),n(1)),c=Object(v.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-nav",class:{vertical:this.vertical}},[this._t("default")],2)}),[],!1,null,"4dbc2e88",null).exports,l={name:"WNavItem",inject:["root","vertical"],props:{name:{type:String,required:!0}},data:function(){return{selected:!1}},created:function(){this.root.addItem(this)},methods:{onClick:function(){this.root.namePath=[],this.$parent.updateNamePath&&this.$parent.updateNamePath(),this.$emit("add:selected",this.name)}}},m=(n(220),Object(v.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-nav-item",class:{selected:this.selected,vertical:this.vertical},on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,"27c9ab68",null).exports),r=n(35),o={name:"WSubNav",inject:["root","vertical"],directives:{ClickOutside:n(118).a},components:{"w-icon":r.a},data:function(){return{open:!1}},props:{name:{type:String,required:!0}},computed:{active:function(){return this.root.namePath.indexOf(this.name)>=0}},methods:{enter:function(t,e){var n=t.getBoundingClientRect().height;t.style.height=0,t.getBoundingClientRect(),t.style.height="".concat(n,"px"),t.addEventListener("transitionend",(function(){e()}))},afterEnter:function(t){t.style.height="auto"},leave:function(t,e){var n=t.getBoundingClientRect().height;t.style.height="".concat(n,"px"),t.getBoundingClientRect(),t.style.height=0,t.addEventListener("transitionend",(function(){e()}))},afterLeave:function(t){t.style.height="auto"},onClick:function(){this.open=!this.open},close:function(){this.open=!1},updateNamePath:function(){this.root.namePath.unshift(this.name),this.$parent.updateNamePath&&this.$parent.updateNamePath(),this.vertical||(this.open=!1)}}},u=(n(221),{components:{WNav:c,WNavItem:m,WSubNav:Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"w-sub-nav",class:{active:t.active,vertical:t.vertical}},[n("span",{staticClass:"w-sub-nav-label",on:{click:t.onClick}},[t._t("title"),t._v(" "),n("span",{staticClass:"w-sub-nav-icon",class:{open:t.open,vertical:t.vertical}},[n("w-icon",{attrs:{name:"nextPage"}})],1)],2),t._v(" "),t.vertical?[n("transition",{on:{enter:t.enter,leave:t.leave,"after-leave":t.afterLeave,"after-enter":t.afterEnter}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"w-sub-nav-popover",class:{vertical:t.vertical}},[t._t("default")],2)])]:[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"w-sub-nav-popover"},[t._t("default")],2)]],2)}),[],!1,null,"46517130",null).exports},data:function(){return{selected1:["home"],selected2:["culture"],code_default:'\n<w-nav :selected.sync="selected1" style=" margin: 20px;">\n    <w-nav-item name="home">首页</w-nav-item>\n    <w-sub-nav name="about">\n      <template slot="title">关于</template>\n      <w-nav-item name="culture">企业文化</w-nav-item>\n      <w-nav-item name="developers">开发团队</w-nav-item>\n      <w-sub-nav name="contacts">\n        <template slot="title">联系方式</template>\n        <w-nav-item name="wechat">微信</w-nav-item>\n        <w-nav-item name="qq">QQ</w-nav-item>\n        <w-sub-nav name="phone">\n          <template slot="title">手机</template>\n          <w-nav-item name="cm">移动</w-nav-item>\n          <w-nav-item name="cu">联通</w-nav-item>\n          <w-nav-item name="cn">电信</w-nav-item>\n        </w-sub-nav>\n      </w-sub-nav>\n    </w-sub-nav>\n    <w-nav-item name="hire">招聘</w-nav-item>\n</w-nav>            \n              '.replace(/\t+/g,"").trim(),code_default2:'\n<w-nav :selected.sync="selected2" vertical style="width: 200px;">\n  <w-nav-item name="home"><a href="https://www.baidu.com" target="_blank">\n      百度link\n    </a></w-nav-item>  \n  <w-sub-nav name="about">\n    <template slot="title">关于</template>\n    <w-nav-item name="culture">企业文化</w-nav-item>\n    <w-nav-item name="developers">developers</w-nav-item>\n    <w-sub-nav name="contacts">\n      <template slot="title">联系方式</template>\n      <w-nav-item name="wechat">微信</w-nav-item>\n      <w-nav-item name="qq">QQ</w-nav-item>\n      <w-sub-nav name="phone">\n        <template slot="title">手机</template>\n        <w-nav-item name="cm">移动</w-nav-item>\n        <w-nav-item name="cu">联通</w-nav-item>\n        <w-nav-item name="cn">电信</w-nav-item>\n      </w-sub-nav>\n    </w-sub-nav>\n  </w-sub-nav>\n  <w-nav-item name="hire">hire</w-nav-item>  \n</w-nav>\n              '.replace(/\t+/g,"").trim()}},mounted:function(){i.a.highlightAll()}}),d=(n(222),Object(v.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticStyle:{"margin-bottom":"50px"}},[t._v("可以实现多级菜单，多级菜单用w-sub-nav>template>w-nav-item固定格式")]),t._v(" "),n("p",[t._v("基础用法-1.水平导航")]),t._v(" "),n("p",[t._v("selected1父级选中的数据，对应name接口："+t._s(t.selected1))]),t._v(" "),n("div",{staticClass:"comp0",staticStyle:{"margin-bottom":"40px"}},[n("w-nav",{staticStyle:{margin:"20px"},attrs:{selected:t.selected1},on:{"update:selected":function(e){t.selected1=e}}},[n("w-nav-item",{attrs:{name:"home"}},[t._v("首页")]),t._v(" "),n("w-sub-nav",{attrs:{name:"about"}},[n("template",{slot:"title"},[t._v("关于")]),t._v(" "),n("w-nav-item",{attrs:{name:"culture"}},[t._v("企业文化")]),t._v(" "),n("w-nav-item",{attrs:{name:"developers"}},[t._v("开发团队")]),t._v(" "),n("w-sub-nav",{attrs:{name:"contacts"}},[n("template",{slot:"title"},[t._v("联系方式")]),t._v(" "),n("w-nav-item",{attrs:{name:"wechat"}},[t._v("微信")]),t._v(" "),n("w-nav-item",{attrs:{name:"qq"}},[t._v("QQ")]),t._v(" "),n("w-sub-nav",{attrs:{name:"phone"}},[n("template",{slot:"title"},[t._v("手机")]),t._v(" "),n("w-nav-item",{attrs:{name:"cm"}},[t._v("移动")]),t._v(" "),n("w-nav-item",{attrs:{name:"cu"}},[t._v("联通")]),t._v(" "),n("w-nav-item",{attrs:{name:"cn"}},[t._v("电信")])],2)],2)],2),t._v(" "),n("w-nav-item",{attrs:{name:"hire"}},[t._v("招聘")])],1)],1),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v(t._s(t.code_default))])]),t._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[t._v("基础用法-2.垂直导航")]),t._v(" "),n("p",[t._v("selected2父级选中的数据，对应name接口："+t._s(t.selected2))]),t._v(" "),n("div",{staticClass:"comp"},[n("w-nav",{staticStyle:{width:"200px"},attrs:{selected:t.selected2,vertical:""},on:{"update:selected":function(e){t.selected2=e}}},[n("w-nav-item",{attrs:{name:"home"}},[n("a",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[t._v("\n        百度link\n      ")])]),t._v(" "),n("w-sub-nav",{attrs:{name:"about"}},[n("template",{slot:"title"},[t._v("关于")]),t._v(" "),n("w-nav-item",{attrs:{name:"culture"}},[t._v("企业文化")]),t._v(" "),n("w-nav-item",{attrs:{name:"developers"}},[t._v("developers")]),t._v(" "),n("w-sub-nav",{attrs:{name:"contacts"}},[n("template",{slot:"title"},[t._v("联系方式")]),t._v(" "),n("w-nav-item",{attrs:{name:"wechat"}},[t._v("微信")]),t._v(" "),n("w-nav-item",{attrs:{name:"qq"}},[t._v("QQ")]),t._v(" "),n("w-sub-nav",{attrs:{name:"phone"}},[n("template",{slot:"title"},[t._v("手机")]),t._v(" "),n("w-nav-item",{attrs:{name:"cm"}},[t._v("移动")]),t._v(" "),n("w-nav-item",{attrs:{name:"cu"}},[t._v("联通")]),t._v(" "),n("w-nav-item",{attrs:{name:"cn"}},[t._v("电信")])],2)],2)],2),t._v(" "),n("w-nav-item",{attrs:{name:"hire"}},[t._v("hire")])],1)],1),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v(t._s(t.code_default2))])])])}),[],!1,null,null,null));e.default=d.exports},58:function(t,e,n){var a=n(14).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})}}]);