(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,14,16,22,23,26],{247:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"c",(function(){return f}));n(46);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),r=function(t){const e=t.match(i);if(e)return e[0]}(e);if(r&&n!==r)return!1;return o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}},248:function(t,e,n){},249:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},r=(n(252),n(4)),s=Object(r.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},250:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"f",(function(){return h})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"e",(function(){return m}));n(46);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function u(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function c(t,e){const n=decodeURIComponent(t.hash),r=function(t){const e=t.match(i);if(e)return e[0]}(e);if(r&&n!==r)return!1;return o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:u(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return d(t);const o=a.sidebar||s.sidebar;if(o){const{base:n,config:i}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return"auto"===i?d(t):i?i.map(t=>function t(e,n,i,r=1){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}}(t,r,n)):[]}return[]}function d(t){const e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function f(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},251:function(t,e,n){"use strict";n.r(e);var i=n(247),r={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},s=n(4),a=Object(s.a)(r,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},252:function(t,e,n){"use strict";n(248)},253:function(t,e,n){},254:function(t,e,n){},255:function(t,e,n){"use strict";n(253)},257:function(t,e,n){},258:function(t,e,n){"use strict";n.r(e);var i=n(251),r=n(249),s=n(93),a=n.n(s),o={name:"DropdownLink",components:{NavLink:i.default,DropdownTransition:r.default},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>a()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(255),n(4)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},259:function(t,e,n){"use strict";n.r(e);var i=n(258),r=n(250),s={name:"NavLinks",components:{NavLink:n(251).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(r=>{const s=t[r],a=i[r]&&i[r].label||s.lang;let o;return s.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,r),n.some(t=>t.path===o)||(o=r)),{text:a,link:o}})};return[...this.userNav,r]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(r.e)(t),{items:(t.items||[]).map(r.e)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},a=(n(260),n(4)),o=Object(a.a)(s,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=o.exports},260:function(t,e,n){"use strict";n(254)},265:function(t,e,n){},267:function(t,e,n){"use strict";n(257)},268:function(t,e,n){"use strict";n.r(e);var i=n(283),r=n(270),s=n(247);function a(t,e){if("group"===e.type){const n=e.path&&Object(s.e)(t,e.path),i=e.children.some(e=>"group"===e.type?a(t,e):"page"===e.type&&Object(s.e)(t,e.path));return n||i}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:r.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(a(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.e)(this.$route,t.regularPath)}}},l=n(4),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:i===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},270:function(t,e,n){"use strict";n.r(e);var i=n(247);function r(t,e,n,i,r){const s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function s(t,e,n,a,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[r(t,n+"#"+e.slug,e.title,u,e.level-1),s(t,e.children,n,a,o,l+1)])}))}var a={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:a,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(i.e)(a,u.path),h="auto"===u.type?p||u.children.some(t=>Object(i.e)(a,u.basePath+"#"+t.slug)):p,d="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):r(t,u.path,u.title||u.path,h),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),m=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[d,s(t,u.children,u.basePath,a,f)];if((h||m)&&u.headers&&!i.d.test(u.path)){return[d,s(t,Object(i.c)(u.headers),u.path,a,f)]}return d}},o=(n(267),n(4)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=l.exports},279:function(t,e,n){"use strict";n(265)},280:function(t,e,n){},283:function(t,e,n){"use strict";n.r(e);var i=n(247),r={name:"SidebarGroup",components:{DropdownTransition:n(249).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(268).default},methods:{isActive:i.e}},s=(n(279),n(4)),a=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=a.exports},293:function(t,e,n){"use strict";n(280)},305:function(t,e,n){"use strict";n.r(e);var i=n(268),r=n(259),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.default},props:["items"]},a=(n(293),n(4)),o=Object(a.a)(s,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);