(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{12:function(t,n,e){var r=e(37),i=e(29);t.exports=function(t){return r(i(t))}},140:function(t,n,e){},141:function(t,n,e){},18:function(t,n,e){var r=e(60)("keys"),i=e(53);t.exports=function(t){return r[t]||(r[t]=i(t))}},19:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},22:function(t,n){t.exports={}},224:function(t,n,e){"use strict";var r=e(140);e.n(r).a},225:function(t,n,e){"use strict";var r=e(141);e.n(r).a},24:function(t,n,e){var r=e(27),i=e(19);t.exports=Object.keys||function(t){return r(t,i)}},254:function(t,n,e){"use strict";e.r(n);e(45);var r=e(57),i=e.n(r),o=(e(92),e(93),{components:{WScroll:a},data:function(){return{scrollBarVisible:!1,isScrolling:!1,startPosition:void 0,endPosition:void 0,translateX:0,translateY:0,scrollBarY:0,contentY:0,parentHeight:void 0,childHeight:void 0}},beforeDestroy:function(){},mounted:function(){this.listenToDocument(),this.childHeight=this.$refs.child.getBoundingClientRect().height,this.parentHeight=this.$refs.parent.getBoundingClientRect().height,this.updateScrollBar(),this.listenToRemoteResources(),this.listenToDomChange()},watch:{scrollBarY:function(t){this.contentY=-this.childHeight*t/this.parentHeight}},methods:{listenToDomChange:function(){var t=this,n=this.$refs.child;new MutationObserver((function(){t.listenToRemoteResources()})).observe(n,{attributes:!0,childList:!0,subtree:!0})},listenToRemoteResources:function(){var t=this;if(this.$refs.parent){var n=this.$refs.parent.querySelectorAll("img, video, audio");console.log(n),Array.from(n).map((function(n){n.hasAttribute("data-w-listened")||(n.setAttribute("data-w-listened","yes"),n.addEventListener("load",(function(){console.log("load new child Height"),t.childHeight=t.$refs.child.getBoundingClientRect().height,t.updateScrollBar()})))}))}},listenToDocument:function(){var t=this;document.addEventListener("mousemove",(function(n){t.onMouseMoveScrollBar(n)})),document.addEventListener("mouseup",(function(n){t.onMouseUpScrollBar(n)}))},onWheel:function(t){this.updateContentY(t),this.updateScrollBar()},updateContentY:function(t){var n,e=this.CalContentYMax();t.wheelDelta&&(n=t.wheelDelta/150),t.detail&&(n=-t.detail/3),this.isMac()&&(this.contentY-=50*n,this.contentY<=0?this.contentY=0:this.contentY>e?this.contentY=e:t.preventDefault()),this.isWindows()&&(n>0?this.$emit("wheelChange",1):this.$emit("wheelChange",-1),this.contentY+=50*n,this.contentY>=0?(this.contentY=0,this.$emit("borderChange",0)):this.contentY<-e?(this.contentY=-e,this.$emit("borderChange",1)):t.preventDefault())},CalContentYMax:function(){var t=window.getComputedStyle(this.$refs.parent),n=t.borderTopWidth,e=t.borderBottomWidth,r=t.paddingTop,i=t.paddingBottom;return n=parseInt(n),e=parseInt(e),r=parseInt(r),i=parseInt(i),this.childHeight-this.parentHeight+(n+e+r+i)},updateScrollBar:function(){this.barHeight=this.parentHeight*this.parentHeight/this.childHeight,this.$refs.bar.style.height=this.barHeight+"px",this.scrollBarY=this.direction()*(this.contentY*this.parentHeight/this.childHeight),this.$refs.bar.style.transform="translateY(".concat(this.scrollBarY,"px)")},onMouseDownScrollBar:function(t){this.isScrolling=!0;var n=t.screenX,e=t.screenY;this.startPosition={x:n,y:e}},onMouseMoveScrollBar:function(t){var n=this.parentHeight-this.barHeight;if(this.isScrolling){var e=t.screenX,r=t.screenY;this.endPosition={x:e,y:r};this.endPosition.x,this.startPosition.x;var i=this.endPosition.y-this.startPosition.y;this.scrollBarY=parseInt(this.scrollBarY)+i,this.scrollBarY<0?this.scrollBarY=0:this.scrollBarY>n&&(this.scrollBarY=n),this.contentY=this.direction()*(this.childHeight*this.scrollBarY/this.parentHeight),this.startPosition=this.endPosition,this.$refs.bar.style.transform="translate(0px,".concat(this.scrollBarY,"px)")}},onMouseUpScrollBar:function(t){this.isScrolling=!1},onMouseEnter:function(){this.scrollBarVisible=!0},onMouseLeave:function(){this.isScrolling||(this.scrollBarVisible=!1)},onSelectStartScrollBar:function(t){t.preventDefault()},direction:function(){return this.isMac()?1:(this.isWindows(),-1)},isMac:function(){return/macintosh|mac os x/i.test(navigator.userAgent)},isWindows:function(){return/windows|win32/i.test(navigator.userAgent)}}}),s=(e(224),e(1)),a=Object(s.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"parent",staticClass:"w-scroll-wrapper",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,wheel:t.onWheel}},[e("div",{ref:"child",staticClass:"w-scroll",style:{transform:"translateY("+this.contentY+"px)"}},[t._t("default")],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollBarVisible,expression:"scrollBarVisible"}],staticClass:"w-scroll-track"},[e("div",{ref:"bar",staticClass:"w-scroll-bar",on:{mousedown:t.onMouseDownScrollBar,selectstart:t.onSelectStartScrollBar}},[e("div",{staticClass:"w-scroll-bar-inner"})])])])}),[],!1,null,"4de7e259",null).exports,c={components:{WScroll:a},data:function(){return{code_groupBtn:'\n<w-scroll style="border:1px solid #ddd;width:50vw;height:50vh;margin:0 auto;overflow:hidden;">\n    <p>1</p>\n    <p>2</p>\n    <p>3</p>\n    <p id="test2">4 i am special</p>\n    <p>5</p>\n    <p>6</p>\n    <p>7</p>\n    <p>8</p>\n    <p>9</p>\n    <p>10</p>\n    <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">\n    <p>11</p>\n    <p>12</p>\n    <p>13</p>\n    <p>14</p>\n    <p>15</p>\n    <p>16</p>\n    <p>17</p>\n    <p>18</p>\n    <p>19</p>\n    <p>20</p>\n    <p>21</p>\n    <p>22</p>\n    <p>23</p>\n    <p>24</p>\n    <p>25</p>\n    <p>26</p>\n    <p>27</p>\n    <p>28</p>\n    <p>29</p>\n    <p>30</p>\n</w-scroll>                \n            '.replace(/\t+/g,"").trim()}},mounted:function(){i.a.highlightAll();var t=document.getElementById("test2");setTimeout((function(){var n=document.createElement("img");n.src="https://developer.mozilla.org/static/browsers/samsung-internet.8faa2ee1b8a1.svg",n.height=100,t.appendChild(n)}),2e3)}},l=(e(225),Object(s.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("\n        替换原生滚动，自定义滚动条，并且有异步加载的图片或者数据可以使得滚动条长度\n        自动发生变化，内部原理 var observer = new MutationObserver(callback);\n    ")]),t._v(" "),e("p",{staticStyle:{"margin-bottom":"20px"}},[t._v("滚动内容包裹在内部")]),t._v(" "),e("w-scroll",{staticStyle:{border:"1px solid #ddd",width:"50vw",height:"50vh",margin:"0 auto",overflow:"hidden"}},[e("p",[t._v("1")]),t._v(" "),e("p",[t._v("2")]),t._v(" "),e("p",[t._v("3")]),t._v(" "),e("p",{attrs:{id:"test2"}},[t._v("4 i am special")]),t._v(" "),e("p",[t._v("5")]),t._v(" "),e("p",[t._v("6")]),t._v(" "),e("p",[t._v("7")]),t._v(" "),e("p",[t._v("8")]),t._v(" "),e("p",[t._v("9")]),t._v(" "),e("p",[t._v("10")]),t._v(" "),e("img",{attrs:{src:"https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg",alt:""}}),t._v(" "),e("p",[t._v("11")]),t._v(" "),e("p",[t._v("12")]),t._v(" "),e("p",[t._v("13")]),t._v(" "),e("p",[t._v("14")]),t._v(" "),e("p",[t._v("15")]),t._v(" "),e("p",[t._v("16")]),t._v(" "),e("p",[t._v("17")]),t._v(" "),e("p",[t._v("18")]),t._v(" "),e("p",[t._v("19")]),t._v(" "),e("p",[t._v("20")]),t._v(" "),e("p",[t._v("21")]),t._v(" "),e("p",[t._v("22")]),t._v(" "),e("p",[t._v("23")]),t._v(" "),e("p",[t._v("24")]),t._v(" "),e("p",[t._v("25")]),t._v(" "),e("p",[t._v("26")]),t._v(" "),e("p",[t._v("27")]),t._v(" "),e("p",[t._v("28")]),t._v(" "),e("p",[t._v("29")]),t._v(" "),e("p",[t._v("30")])]),t._v(" "),e("pre",[e("code",{staticClass:"language-html"},[t._v(t._s(t.code_groupBtn))])])],1)}),[],!1,null,null,null));n.default=l.exports},27:function(t,n,e){var r=e(13),i=e(12),o=e(36)(!1),s=e(18)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,l=[];for(e in a)e!=s&&r(a,e)&&l.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(l,e)||l.push(e));return l}},30:function(t,n,e){var r=e(15),i=e(38),o=e(19),s=e(18)("IE_PROTO"),a=function(){},c=function(){var t,n=e(66)("iframe"),r=o.length;for(n.style.display="none",e(40).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[s]=t):e=c(),void 0===n?e:i(e,n)}},31:function(t,n,e){var r=e(14).f,i=e(13),o=e(11)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},36:function(t,n,e){var r=e(12),i=e(43),o=e(39);t.exports=function(t){return function(n,e,s){var a,c=r(n),l=i(c.length),u=o(s,l);if(t&&e!=e){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===e)return t||u||0;return!t&&-1}}},37:function(t,n,e){var r=e(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},38:function(t,n,e){var r=e(14),i=e(15),o=e(24);t.exports=e(16)?Object.defineProperties:function(t,n){i(t);for(var e,s=o(n),a=s.length,c=0;a>c;)r.f(t,e=s[c++],n[e]);return t}},39:function(t,n,e){var r=e(55),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},40:function(t,n,e){var r=e(20).document;t.exports=r&&r.documentElement},51:function(t,n,e){"use strict";var r=e(65),i=e(23),o=e(26),s=e(17),a=e(22),c=e(54),l=e(31),u=e(56),p=e(11)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,f,d,g,_){c(e,n,f);var m,w,y,b=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},x=n+" Iterator",B="values"==d,Y=!1,S=t.prototype,O=S[p]||S["@@iterator"]||d&&S[d],C=O||b(d),M=d?B?b("entries"):C:void 0,H="Array"==n&&S.entries||O;if(H&&(y=u(H.call(new t)))!==Object.prototype&&y.next&&(l(y,x,!0),r||"function"==typeof y[p]||s(y,p,v)),B&&O&&"values"!==O.name&&(Y=!0,C=function(){return O.call(this)}),r&&!_||!h&&!Y&&S[p]||s(S,p,C),a[n]=C,a[x]=v,d)if(m={values:B?C:b("values"),keys:g?C:b("keys"),entries:M},_)for(w in m)w in S||o(S,w,m[w]);else i(i.P+i.F*(h||Y),n,m);return m}},54:function(t,n,e){"use strict";var r=e(30),i=e(33),o=e(31),s={};e(17)(s,e(11)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(s,{next:i(1,e)}),o(t,n+" Iterator")}},56:function(t,n,e){var r=e(13),i=e(44),o=e(18)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},92:function(t,n,e){"use strict";var r=e(83)(!0);e(51)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},93:function(t,n,e){"use strict";var r=e(63),i=e(23),o=e(44),s=e(94),a=e(95),c=e(43),l=e(96),u=e(97);i(i.S+i.F*!e(98)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,p,h=o(t),v="function"==typeof this?this:Array,f=arguments.length,d=f>1?arguments[1]:void 0,g=void 0!==d,_=0,m=u(h);if(g&&(d=r(d,f>2?arguments[2]:void 0,2)),null==m||v==Array&&a(m))for(e=new v(n=c(h.length));n>_;_++)l(e,_,g?d(h[_],_):h[_]);else for(p=m.call(h),e=new v;!(i=p.next()).done;_++)l(e,_,g?s(p,d,[i.value,_],!0):i.value);return e.length=_,e}})},94:function(t,n,e){var r=e(15);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},95:function(t,n,e){var r=e(22),i=e(11)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},96:function(t,n,e){"use strict";var r=e(14),i=e(33);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},97:function(t,n,e){var r=e(85),i=e(11)("iterator"),o=e(22);t.exports=e(70).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},98:function(t,n,e){var r=e(11)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:e=!0}},o[r]=function(){return s},t(o)}catch(t){}return e}}}]);