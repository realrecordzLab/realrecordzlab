(function(t){function e(e){for(var a,n,l=e[0],o=e[1],c=e[2],p=0,u=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2697:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid p-0",attrs:{id:"app"}},[s("router-view")],1)},r=[],n=(s("5c0b"),s("2877")),l={},o=Object(n["a"])(l,i,r,!1,null,null,null),c=o.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row m-0"},[t._m(0),s("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 px-lg-5 pt-lg-5 pb-5 mt-lg-5 h-75"},[t._m(1),s("small",{staticClass:"text-left d-block"},[s("a",{ref:"",attrs:{"data-extension-name":"derive-suburbane"},on:{click:function(e){return e.preventDefault(),t.detailsPanel(e.target)}}},[t._v("Description")])])]),t._m(2),t._m(3),t._m(4),s("transition",{attrs:{name:"slide"}},[t.isVisible?s("div",{ref:"elementDescription",staticClass:"col-sm-12 col-md-12 col-lg-12 description-panel position-fixed text-white px-lg-5 pt-lg-5 pb-lg-5"},[s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return e.preventDefault(),t.closePanel()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._l(t.details,(function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],key:a},[e.title?s("h1",{staticClass:"text-capitalize"},[t._v(t._s(e.title))]):t._e(),e.description?s("p",{staticClass:"lead"},[t._v(t._s(e.description))]):t._e()])}))],2):t._e()])],1)},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 col-lg-6 p-0 d-none d-md-block pt-5 pb-5 mt-5 h-75"},[s("img",{staticClass:"img-fluid img-overlay h-100 w-100",attrs:{src:"assets/derivesuburbane_screen_web.png"}}),s("div",{staticClass:"overlay position-relative"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-block pt-5 pb-3 store-badge h-100"},[s("h1",{staticClass:"text-overlay text-left font-weight-bold"},[t._v("Derive suburbane new tab")]),s("p",{staticClass:"lead text-left"},[t._v("Customize your browser home screen experience with urbex wallpapers from "),s("a",{attrs:{href:"https://derivesuburbane.it"}},[t._v("https://derivesuburbane.it")])]),s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-6 p-0 text-left"},[s("a",{staticClass:"chrome-badge",attrs:{href:"#",target:"_blank"}},[s("img",{staticClass:"img-fluid chrome",attrs:{src:"assets/ChromeWebStore_Badge_v2_496x150.png",width:"180"}})])]),s("div",{staticClass:"col-6 p-0"},[s("a",{staticClass:"moz-badge",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid moz",attrs:{src:"assets/get-the-addon.png",width:"180"}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12 col-lg-12 text-left px-lg-5"},[s("h4",{staticClass:"font-weight-bold"},[t._v("Products showcase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 pt-5 pb-5 mt-md-5 p-0 product-overview vh-75"},[s("h2",{staticClass:"text-left text-lg-center px-3"},[s("img",{staticClass:"img-fluid d-none d-md-inline-block ext-icon",attrs:{src:"assets/raiplay_party.png",width:"45"}}),t._v(" Raiplay downloader")]),s("p",{staticClass:"lead text-left text-lg-center px-3"},[t._v("Create video party with friends while watching raiplay!")]),s("p"),s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-6 px-sm-2 p-md-0 text-left text-lg-center"},[s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/raiplay-downloader/mjmldbaenmnkmefmakoiefnkcbhckbpe",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/ChromeWebStore_Badge_v2_496x150.png",width:"180"}})])]),s("div",{staticClass:"col-6 px-sm-2 p-md-0 text-lg-center"},[s("a",{attrs:{href:"https://addons.mozilla.org/it/firefox/addon/raiplay-downloader/"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/get-the-addon.png",width:"180"}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 pt-5 pb-5 mt-md-5 p-0 product-overview vh-75"},[s("h2",{staticClass:"text-left text-lg-center px-3"},[s("img",{staticClass:"img-fluid d-none d-md-inline-block ext-icon",attrs:{src:"assets/instagram_watcher_icon.png",width:"45"}}),t._v(" Instagram watcher")]),s("p",{staticClass:"lead text-left text-lg-center px-3"},[t._v("Watch public Instagram profiles without login")]),s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-6 px-sm-2 p-md-0 text-left text-lg-center"},[s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/instagram-watcher/plbmepbldbcfnjekckmcemchpakiofdd",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/ChromeWebStore_Badge_v2_496x150.png",width:"180"}})])]),s("div",{staticClass:"col-6 px-sm-2 p-md-0 text-lg-center"},[s("a",{attrs:{href:"https://addons.mozilla.org/it/firefox/addon/instagram-watcher/"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/get-the-addon.png",width:"180"}})])])])])}],f=(s("4de4"),s("a15b"),s("d3b7"),s("ac1f"),s("1276"),{name:"Home",data:function(){return{isVisible:!1,details:[]}},methods:{detailsPanel:function(t){var e=this;this.isVisible?this.isVisible=!1:this.isVisible=!0;var s=t.dataset.extensionName.split("-").join(" ");fetch("products.json").then((function(t){return t.json()})).then((function(t){console.log(t.products),e.details=t.products.filter((function(t){if(console.log(t),t.title===s)return t}))}))},closePanel:function(){this.isVisible?this.isVisible=!1:this.isVisible=!0}}}),m=f,h=(s("ae5b"),Object(n["a"])(m,p,u,!1,null,"4f657400",null)),g=h.exports;a["a"].use(d["a"]);var b=[{path:"/",name:"Home",component:g}],v=new d["a"]({routes:b}),_=v;s("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:_,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"9c0c":function(t,e,s){},ae5b:function(t,e,s){"use strict";var a=s("2697"),i=s.n(a);i.a}});
//# sourceMappingURL=app.901d1801.js.map