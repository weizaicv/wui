(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{12:function(t,e,n){var r=n(37),i=n(29);t.exports=function(t){return r(i(t))}},131:function(t,e,n){},132:function(t,e,n){},133:function(t,e,n){},134:function(t,e,n){},18:function(t,e,n){var r=n(60)("keys"),i=n(53);t.exports=function(t){return r[t]||(r[t]=i(t))}},19:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},215:function(t,e,n){"use strict";var r=n(131);n.n(r).a},216:function(t,e,n){"use strict";var r=n(132);n.n(r).a},217:function(t,e,n){"use strict";var r=n(133);n.n(r).a},218:function(t,e,n){"use strict";var r=n(134);n.n(r).a},22:function(t,e){t.exports={}},24:function(t,e,n){var r=n(27),i=n(19);t.exports=Object.keys||function(t){return r(t,i)}},243:function(t,e,n){"use strict";n.r(e);n(45);var r=n(57),i=n.n(r),o=(n(58),n(49),{name:"WLayout",data:function(){return{layoutClass:{hasSider:!1}}},created:function(){},mounted:function(){var t=this;this.$children.forEach((function(e){"WAside"==e.$options.name&&(t.layoutClass.hasSider=!0)}))}}),s=(n(215),n(1)),a=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"52d535e7",null).exports,u={name:"WHeader"},c=Object(s.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,"5573b3be",null).exports,l={name:"WFooter"},f=Object(s.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,"3b17b0be",null).exports,p={name:"WAside",data:function(){return{visible:!0}},methods:{hide:function(){this.visible=!1}}},h=(n(216),Object(s.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[this.visible?e("div",{staticClass:"aside"},[this._t("default")],2):this._e()])}),[],!1,null,"694d6e8a",null).exports),v={name:"WContent"},d=(n(217),{components:{"w-layout":a,"w-header":c,"w-footer":f,"w-aside":h,"w-content":Object(s.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"78d2efcc",null).exports},data:function(){return{code_groupBtn:'\n<w-layout style="height: 40vh;">\n    <w-aside class="aside">aside</w-aside>\n    <w-layout>\n        <w-header class="header">header</w-header>\n        <w-content class="wcontent">content</w-content>\n        <w-footer class="footer">footer</w-footer>\n    </w-layout>\n</w-layout>           \n            '.replace(/\t+/g,"").trim()}},mounted:function(){i.a.highlightAll()}}),y=(n(218),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("如果页面布局格式固定")]),t._v(" "),n("p",[t._v("分为左部导航，头部，内容，尾部，各个组件互相独立，可以保留需要的组件")]),t._v(" "),n("div",{staticClass:"com"},[n("w-layout",{staticStyle:{height:"40vh"}},[n("w-aside",{staticClass:"aside"},[t._v("aside")]),t._v(" "),n("w-layout",[n("w-header",{staticClass:"header"},[t._v("header")]),t._v(" "),n("w-content",{staticClass:"wcontent"},[t._v("content")]),t._v(" "),n("w-footer",{staticClass:"footer"},[t._v("footer")])],1)],1)],1),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v(t._s(t.code_groupBtn))])])])}),[],!1,null,null,null));e.default=y.exports},27:function(t,e,n){var r=n(13),i=n(12),o=n(36)(!1),s=n(18)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~o(c,n)||c.push(n));return c}},30:function(t,e,n){var r=n(15),i=n(38),o=n(19),s=n(18)("IE_PROTO"),a=function(){},u=function(){var t,e=n(66)("iframe"),r=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},31:function(t,e,n){var r=n(14).f,i=n(13),o=n(11)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},36:function(t,e,n){var r=n(12),i=n(43),o=n(39);t.exports=function(t){return function(e,n,s){var a,u=r(e),c=i(u.length),l=o(s,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},37:function(t,e,n){var r=n(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},38:function(t,e,n){var r=n(14),i=n(15),o=n(24);t.exports=n(16)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),a=s.length,u=0;a>u;)r.f(t,n=s[u++],e[n]);return t}},39:function(t,e,n){var r=n(55),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},40:function(t,e,n){var r=n(20).document;t.exports=r&&r.documentElement},49:function(t,e,n){for(var r=n(64),i=n(24),o=n(26),s=n(20),a=n(17),u=n(22),c=n(11),l=c("iterator"),f=c("toStringTag"),p=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(h),d=0;d<v.length;d++){var y,_=v[d],m=h[_],w=s[_],b=w&&w.prototype;if(b&&(b[l]||a(b,l,p),b[f]||a(b,f,_),u[_]=p,m))for(y in r)b[y]||o(b,y,r[y],!0)}},50:function(t,e,n){var r=n(11)("unscopables"),i=Array.prototype;null==i[r]&&n(17)(i,r,{}),t.exports=function(t){i[r][t]=!0}},51:function(t,e,n){"use strict";var r=n(65),i=n(23),o=n(26),s=n(17),a=n(22),u=n(54),c=n(31),l=n(56),f=n(11)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,d,y,_){u(n,e,v);var m,w,b,g=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",O="values"==d,L=!1,S=t.prototype,C=S[f]||S["@@iterator"]||d&&S[d],j=C||g(d),T=d?O?g("entries"):j:void 0,k="Array"==e&&S.entries||C;if(k&&(b=l(k.call(new t)))!==Object.prototype&&b.next&&(c(b,x,!0),r||"function"==typeof b[f]||s(b,f,h)),O&&C&&"values"!==C.name&&(L=!0,j=function(){return C.call(this)}),r&&!_||!p&&!L&&S[f]||s(S,f,j),a[e]=j,a[x]=h,d)if(m={values:O?j:g("values"),keys:y?j:g("keys"),entries:T},_)for(w in m)w in S||o(S,w,m[w]);else i(i.P+i.F*(p||L),e,m);return m}},54:function(t,e,n){"use strict";var r=n(30),i=n(33),o=n(31),s={};n(17)(s,n(11)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},56:function(t,e,n){var r=n(13),i=n(44),o=n(18)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},58:function(t,e,n){var r=n(14).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(16)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},64:function(t,e,n){"use strict";var r=n(50),i=n(67),o=n(22),s=n(12);t.exports=n(51)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},67:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}}}]);