(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(9065)}])},6304:function(e,n,t){"use strict";t.d(n,{n:function(){return f}});var i,r,o,c=t(5893),a=t(1499),s=t(7294);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},u.apply(this,arguments)}var l=function(e){return s.createElement("svg",u({width:40,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=s.createElement("rect",{width:40,height:6,rx:3,fill:"#fff"})),r||(r=s.createElement("rect",{y:13,width:40,height:6,rx:3,fill:"#fff"})),o||(o=s.createElement("rect",{y:26,width:40,height:6,rx:3,fill:"#fff"})))},_=t(1564),d=t.n(_),h=t(1664),f=function(){var e=(0,s.useState)(!0),n=e[0],t=e[1];return(0,c.jsx)("div",{className:d().container,children:(0,c.jsxs)("div",{className:d().menu,children:[(0,c.jsx)(a.Z,{component:l,style:{height:"50px",width:"50px",cursor:"pointer",zIndex:9},viewBox:"0 0 48 48",inheritViewBox:!0,onClick:function(){t(!n)}}),!n&&(0,c.jsx)("div",{className:d().links,children:["About","Experience","Projects","Links"].map((function(e){return(0,c.jsx)(h.default,{href:e.toLowerCase(),children:(0,c.jsx)("a",{className:d().link,children:e})},e)}))})]})})}},8888:function(e,n,t){"use strict";t.d(n,{f:function(){return l}});var i=t(5893),r=t(7825),o=t.n(r),c=t(6097),a=t(7294),s=t(1664),u=function(e){var n=e.length,t=e.text,r=e.id,u=e.link,l=(e.onClick,{backgroundColor:"#FFFFFF",height:"12px",borderRadius:"6px",width:"".concat(n,"px"),marginRight:"10px"}),_=(0,a.useContext)(c.pl),d=_.selected,h=_.dispatch,f=(0,i.jsxs)("div",{className:o().bar_container,onMouseEnter:function(){h(r)},onClick:function(){},children:[(0,i.jsx)("div",{style:l}),(0,i.jsx)("div",{className:o().bar,children:0===d?"":t})]});return u?(0,i.jsx)(s.default,{href:"/".concat(u),children:f}):f},l=function(e){e.selection;var n=(0,a.useState)(0),t=n[0],r=n[1],s=function(e,n,t){var i=n/2,r=Math.abs(e-t);return 100*Math.pow(Math.E,-Math.pow((r-0)/i,2)/2)},l=["About","Experience","Projects","Links"];return(0,i.jsx)("div",{className:o().menu_container,onMouseLeave:function(){r(0)},children:(0,i.jsx)(c.pl.Provider,{value:{selected:t,dispatch:r},children:l.map((function(e,n){return(0,i.jsx)(u,{id:n+1,length:0===t?30:s(n+1,l.length,t),text:e,link:e.toLowerCase()},n)}))})})}},8038:function(e,n,t){"use strict";t.d(n,{U:function(){return i}});var i=900},6097:function(e,n,t){"use strict";t.d(n,{nN:function(){return r},jD:function(){return o},pl:function(){return c}});var i=t(7294),r=(0,i.createContext)({state:"",dispatch:function(){return null}}),o=(0,i.createContext)({state:[],dispatch:function(){return null}}),c=(0,i.createContext)({selected:0,dispatch:function(){return null}})},9065:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m},default:function(){return x}});var i,r,o=t(5893),c=t(9825),a=t.n(c),s=t(8888),u=t(1499),l=t(7294);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_.apply(this,arguments)}var d=function(e){return l.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve"},e),i||(i=l.createElement("path",{d:"M312.5 132.5v30H455v285H30v-285h142.5v-30H0v345h485v-345z"})),r||(r=l.createElement("path",{d:"m171.894 255.606 70.606 70.607 70.606-70.607-21.212-21.212-34.394 34.393V7.5h-30v261.287l-34.394-34.393z"})))},h=t(1852),f=t(8038),b=t(6304),m=!0,x=function(e){var n=e.aboutData,t=(0,h.useMediaQuery)({query:"(max-width: ".concat(f.U,"px)")});return(0,o.jsxs)("div",{className:t?a().mobile_container:a().container,children:[t?(0,o.jsx)(b.n,{}):(0,o.jsx)("div",{className:a().side_bar,children:(0,o.jsx)(s.f,{})}),(0,o.jsxs)("div",{className:t?a().mobile_content:a().content,children:[(0,o.jsx)("div",{className:a().title,children:n.title}),(0,o.jsx)("div",{className:a().about_content,dangerouslySetInnerHTML:{__html:n.contentHtml}}),(0,o.jsxs)("div",{className:a().bottom,children:[(0,o.jsxs)("a",{className:a().resume,href:"/Albert_Yan_Resume.pdf",download:!0,children:[(0,o.jsx)(u.Z,{component:d,inheritViewBox:!0}),(0,o.jsx)("div",{className:a().download,children:"Download resume"})]}),(0,o.jsx)("div",{className:a().signature,children:"Albert Yan"})]})]}),t?null:(0,o.jsx)("div",{className:a().side_pic})]})}},9825:function(e){e.exports={about_content:"About_about_content__BUHlV",title:"About_title__mGjZR",container:"About_container__rRFE8",mobile_container:"About_mobile_container__NN0mX",side_bar:"About_side_bar__ixjLA",content:"About_content__X0uk3",mobile_content:"About_mobile_content__LbJqv",side_pic:"About_side_pic__bK8CQ",bottom:"About_bottom__8MNFT",resume:"About_resume___gYOe",download:"About_download__Y_U2u",signature:"About_signature__OlUZt"}},1564:function(e){e.exports={container:"MobileMenu_container__kqXd6",menu:"MobileMenu_menu__5czkx",links:"MobileMenu_links__Denh1",link:"MobileMenu_link__qm0Ak"}},7825:function(e){e.exports={menu_container:"SideMenu_menu_container__ou4dE",bar_container:"SideMenu_bar_container__NDeCa",bar:"SideMenu_bar__WHWZF"}}},function(e){e.O(0,[434,499,774,888,179],(function(){return n=4613,e(e.s=n);var n}));var n=e.O();_N_E=n}]);