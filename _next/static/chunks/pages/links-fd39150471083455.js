(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{8366:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/links",function(){return n(8542)}])},6304:function(e,t,n){"use strict";n.d(t,{n:function(){return d}});var r,c,i,a=n(5893),o=n(1499),l=n(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=function(e){return l.createElement("svg",s({width:40,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=l.createElement("rect",{width:40,height:6,rx:3,fill:"#fff"})),c||(c=l.createElement("rect",{y:13,width:40,height:6,rx:3,fill:"#fff"})),i||(i=l.createElement("rect",{y:26,width:40,height:6,rx:3,fill:"#fff"})))},f=n(1564),h=n.n(f),p=n(1664),d=function(){var e=(0,l.useState)(!0),t=e[0],n=e[1];return(0,a.jsx)("div",{className:h().container,children:(0,a.jsxs)("div",{className:h().menu,children:[(0,a.jsx)(o.Z,{component:u,style:{height:"50px",width:"50px",cursor:"pointer",zIndex:9},viewBox:"0 0 48 48",inheritViewBox:!0,onClick:function(){n(!t)}}),!t&&(0,a.jsx)("div",{className:h().links,children:["About","Experience","Projects","Links"].map((function(e){return(0,a.jsx)(p.default,{href:e.toLowerCase(),children:(0,a.jsx)("a",{className:h().link,children:e})},e)}))})]})})}},8888:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var r=n(5893),c=n(7825),i=n.n(c),a=n(6097),o=n(7294),l=n(1664),s=function(e){var t=e.length,n=e.text,c=e.id,s=e.link,u=(e.onClick,{backgroundColor:"#FFFFFF",height:"12px",borderRadius:"6px",width:"".concat(t,"px"),marginRight:"10px"}),f=(0,o.useContext)(a.pl),h=f.selected,p=f.dispatch,d=(0,r.jsxs)("div",{className:i().bar_container,onMouseEnter:function(){p(c)},onClick:function(){},children:[(0,r.jsx)("div",{style:u}),(0,r.jsx)("div",{className:i().bar,children:0===h?"":n})]});return s?(0,r.jsx)(l.default,{href:"/".concat(s),children:d}):d},u=function(e){e.selection;var t=(0,o.useState)(0),n=t[0],c=t[1],l=function(e,t,n){var r=t/2,c=Math.abs(e-n);return 100*Math.pow(Math.E,-Math.pow((c-0)/r,2)/2)},u=["About","Experience","Projects","Links"];return(0,r.jsx)("div",{className:i().menu_container,onMouseLeave:function(){c(0)},children:(0,r.jsx)(a.pl.Provider,{value:{selected:n,dispatch:c},children:u.map((function(e,t){return(0,r.jsx)(s,{id:t+1,length:0===n?30:l(t+1,u.length,n),text:e,link:e.toLowerCase()},t)}))})})}},8038:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var r=900},6097:function(e,t,n){"use strict";n.d(t,{nN:function(){return c},jD:function(){return i},pl:function(){return a},sf:function(){return o},xI:function(){return l}});var r=n(7294),c=(0,r.createContext)({state:"",dispatch:function(){return null}}),i=(0,r.createContext)({state:[],dispatch:function(){return null}}),a=(0,r.createContext)({selected:0,dispatch:function(){return null}}),o=(0,r.createContext)({selected:0,dispatch:function(){return null}}),l=(0,r.createContext)({selected:0,dispatch:function(){return null}})},8542:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r,c,i,a,o,l=n(5893),s=n(7294),u=n(8888),f=n(1499),h=n(3694),p=n.n(h);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var m,_,v=function(e){return s.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},e),r||(r=s.createElement("linearGradient",{id:"github_svg__a",x1:4,x2:44,y1:23.508,y2:23.508,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#4c4c4c"}),s.createElement("stop",{offset:1,stopColor:"#343434"}))),c||(c=s.createElement("path",{fill:"url(#github_svg__a)",d:"M24 4C12.954 4 4 12.954 4 24c0 8.887 5.801 16.411 13.82 19.016h12.36C38.199 40.411 44 32.887 44 24c0-11.046-8.954-20-20-20z"})),i||(i=s.createElement("path",{d:"M30.01 41.996 30 36.198c0-.939-.22-1.856-.642-2.687 5.641-1.133 8.386-4.468 8.386-10.177 0-2.255-.665-4.246-1.976-5.92.1-.317.174-.645.22-.981.188-1.369-.023-2.264-.193-2.984l-.027-.116c-.186-.796-.409-1.364-.418-1.388l-.111-.282-.111-.282-.302-.032-.303-.032s-.199-.021-.501-.021c-.419 0-1.04.042-1.627.241l-.196.066c-.74.249-1.439.485-2.417 1.069-.286.171-.599.366-.934.584A20.188 20.188 0 0 0 24 12.69c-1.722 0-3.365.192-4.889.571-.339-.22-.654-.417-.942-.589-.978-.584-1.677-.819-2.417-1.069l-.196-.066c-.585-.199-1.207-.241-1.626-.241-.302 0-.501.021-.501.021l-.302.032-.3.031-.112.281-.113.283c-.01.026-.233.594-.419 1.391l-.027.115c-.17.719-.381 1.615-.193 2.983.048.346.125.685.23 1.011-1.285 1.666-1.936 3.646-1.936 5.89 0 5.695 2.748 9.028 8.397 10.17a6.005 6.005 0 0 0-.452 1.224 3.248 3.248 0 0 1-.538.137 4.963 4.963 0 0 1-.739.054c-.686 0-1.225-.134-1.435-.259-.313-.186-.872-.727-1.414-1.518-.463-.675-1.185-1.558-1.992-1.927-.698-.319-1.437-.502-2.029-.502-.138 0-.265.01-.376.028-.517.082-.949.366-1.184.78a1.313 1.313 0 0 0-.088 1.141c.219.548.851.985 1.343 1.255.242.133.765.619 1.07 1.109.229.368.335.63.482.992.087.215.183.449.313.732.47 1.022 1.937 1.924 2.103 2.023.806.483 2.161.638 3.157.683l.123.003h.001c.24 0 .57-.023 1.004-.071v2.613c.002.529-.537.649-1.25.638l.547.184A19.85 19.85 0 0 0 24 44c2.355 0 4.605-.428 6.703-1.176l.703-.262c-.711-.024-1.39-.14-1.396-.566z",opacity:.05})),a||(a=s.createElement("path",{d:"M30.781 42.797c-.406.047-1.281-.109-1.281-.795v-5.804a5.445 5.445 0 0 0-.936-3.052c5.915-.957 8.679-4.093 8.679-9.812 0-2.237-.686-4.194-2.039-5.822.137-.365.233-.75.288-1.147.175-1.276-.016-2.086-.184-2.801l-.027-.116a10.279 10.279 0 0 0-.397-1.319l-.111-.282-.303-.032s-.178-.019-.449-.019c-.381 0-.944.037-1.466.215l-.196.066c-.714.241-1.389.468-2.321 1.024-.332.198-.702.431-1.101.694-1.533-.401-3.192-.605-4.937-.605-1.762 0-3.435.205-4.979.61a31.394 31.394 0 0 0-1.109-.699c-.932-.556-1.607-.784-2.321-1.024l-.196-.066c-.521-.177-1.085-.215-1.466-.215a4.68 4.68 0 0 0-.449.019l-.302.032-.113.283c-.009.022-.219.558-.397 1.319l-.027.116c-.169.715-.36 1.524-.184 2.8.056.407.156.801.298 1.174-1.327 1.62-1.999 3.567-1.999 5.795 0 5.703 2.766 8.838 8.686 9.806a5.445 5.445 0 0 0-.813 1.964 4.22 4.22 0 0 1-.891.256c-.263.04-.537.06-.814.06-.69 0-1.353-.129-1.69-.329-.44-.261-1.057-.914-1.572-1.665-.35-.51-1.047-1.417-1.788-1.755-.635-.29-1.298-.457-1.821-.457-.11 0-.21.008-.298.022-.366.058-.668.252-.828.534a.815.815 0 0 0-.059.708c.179.448.842.85 1.119 1.002.335.184.919.744 1.254 1.284.251.404.37.697.521 1.067.085.209.178.437.304.712.331.719 1.353 1.472 1.905 1.803.754.452 2.154.578 2.922.612l.111.002c.299 0 .8-.045 1.495-.135v3.177c0 .779-.991.81-1.234.81-.031 0 .503.184.503.184A19.946 19.946 0 0 0 24 44c2.178 0 4.269-.36 6.231-1.003 0 0 .581-.204.55-.2z",opacity:.07})),o||(o=s.createElement("path",{fill:"#fff",d:"M36.744 23.334c0-2.31-.782-4.226-2.117-5.728.145-.325.296-.761.371-1.309.172-1.25-.031-2-.203-2.734s-.375-1.25-.375-1.25-.922-.094-1.703.172-1.453.469-2.422 1.047c-.453.27-.909.566-1.27.806-1.543-.428-3.24-.648-5.025-.648-1.801 0-3.513.221-5.067.652a31.422 31.422 0 0 0-1.277-.811c-.969-.578-1.641-.781-2.422-1.047s-1.703-.172-1.703-.172-.203.516-.375 1.25-.375 1.484-.203 2.734c.077.562.233 1.006.382 1.333-1.31 1.493-2.078 3.397-2.078 5.704 0 5.983 3.232 8.714 9.121 9.435a4.972 4.972 0 0 0-1.303 2.691c-.387.17-.833.33-1.262.394-1.104.167-2.271 0-2.833-.333s-1.229-1.083-1.729-1.813c-.422-.616-1.031-1.331-1.583-1.583-.729-.333-1.438-.458-1.833-.396-.396.063-.583.354-.5.563.083.208.479.521.896.75.417.229 1.063.854 1.438 1.458.418.674.5 1.063.854 1.833.249.542 1.101 1.219 1.708 1.583.521.313 1.562.491 2.688.542.389.018 1.308-.096 2.083-.206v3.75c0 .639-.585 1.125-1.191 1.013 1.945.654 4.022.986 6.189.986 2.166 0 4.243-.332 6.19-.984-.605.111-1.19-.375-1.19-1.014v-5.804a4.97 4.97 0 0 0-1.373-3.425c5.846-.702 9.117-3.368 9.117-9.439zm-25.505 9.393c-.154-.079-.237-.225-.185-.328.052-.103.22-.122.374-.043s.237.225.185.328-.22.122-.374.043zm1.212.755c-.081.088-.255.06-.389-.062s-.177-.293-.096-.381c.081-.088.255-.06.389.062s.177.293.096.381zm.754 1.25c-.102.072-.275.005-.386-.15s-.118-.34-.016-.412.275-.005.386.15c.11.155.118.34.016.412zm1.083.941c-.069.112-.265.117-.437.012s-.256-.281-.187-.393c.069-.112.265-.117.437-.012s.256.281.187.393zm1.024.921c-.213-.026-.371-.159-.353-.297.017-.138.204-.228.416-.202.213.026.371.159.353.297-.017.137-.203.228-.416.202zm1.651.239c-.227-.013-.404-.143-.395-.289.009-.146.2-.255.427-.242.227.013.404.143.395.289-.009.147-.2.255-.427.242zm1.558-.156c-.242 0-.438-.126-.438-.281s.196-.281.438-.281.438.126.438.281-.197.281-.438.281z"})))};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var g,x,w,E,j,y,k,z=function(e){return s.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},e),m||(m=s.createElement("path",{fill:"#0288D1",d:"M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"})),_||(_=s.createElement("path",{fill:"#FFF",d:"M12 19h5v17h-5zm2.485-2h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"})))};function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var M,C,N=function(e){return s.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},e),g||(g=s.createElement("radialGradient",{id:"instagram_svg__a",cx:19.38,cy:42.035,r:44.899,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#fd5"}),s.createElement("stop",{offset:.328,stopColor:"#ff543f"}),s.createElement("stop",{offset:.348,stopColor:"#fc5245"}),s.createElement("stop",{offset:.504,stopColor:"#e64771"}),s.createElement("stop",{offset:.643,stopColor:"#d53e91"}),s.createElement("stop",{offset:.761,stopColor:"#cc39a4"}),s.createElement("stop",{offset:.841,stopColor:"#c837ab"}))),x||(x=s.createElement("path",{fill:"url(#instagram_svg__a)",d:"m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"})),w||(w=s.createElement("radialGradient",{id:"instagram_svg__b",cx:11.786,cy:5.54,r:29.813,gradientTransform:"matrix(1 0 0 .6663 0 1.849)",gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#4168c9"}),s.createElement("stop",{offset:.999,stopColor:"#4168c9",stopOpacity:0}))),E||(E=s.createElement("path",{fill:"url(#instagram_svg__b)",d:"m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"})),j||(j=s.createElement("path",{fill:"#fff",d:"M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"})),y||(y=s.createElement("circle",{cx:31.5,cy:16.5,r:1.5,fill:"#fff"})),k||(k=s.createElement("path",{fill:"#fff",d:"M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"})))};function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var L=function(e){return s.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},e),M||(M=s.createElement("path",{fill:"#1e88e5",d:"M34 42H14c-4.411 0-8-3.589-8-8V14c0-4.411 3.589-8 8-8h20c4.411 0 8 3.589 8 8v20c0 4.411-3.589 8-8 8z"})),C||(C=s.createElement("path",{fill:"#fff",d:"M35.926 17.488 29.414 24l6.511 6.511A1.96 1.96 0 0 0 36 30V18c0-.178-.031-.347-.074-.512zm-9.238 6.411 7.824-7.825A2.017 2.017 0 0 0 34 16H14c-.178 0-.347.031-.512.074l7.824 7.825a3.808 3.808 0 0 0 5.376 0zM24 27.009a5.777 5.777 0 0 1-3.99-1.605l-6.522 6.522c.165.043.334.074.512.074h20c.178 0 .347-.031.512-.074l-6.522-6.522A5.777 5.777 0 0 1 24 27.009zm-11.926-9.521A2.017 2.017 0 0 0 12 18v12c0 .178.031.347.074.512L18.586 24l-6.512-6.512z"})))},S=n(1852),A=n(8038),F=n(6304);function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}var V=function(){var e=(0,S.useMediaQuery)({query:"(max-width: ".concat(A.U,"px)")}),t=(0,s.useState)(!1),n=t[0],r=t[1];(0,s.useEffect)((function(){r(!!e)}),[e]);var c={style:{height:n?"100px":"150px",width:n?"100px":"150px"},viewBox:"0 0 48 48"},i=[{url:"https://www.linkedin.com/in/albertzyan/",icon:z},{url:"https://github.com/albertyanzz",icon:v},{url:"https://www.instagram.com/albertzzyan/",icon:N},{url:"mailto:albertyanalbert@gmail.com",icon:L}];return(0,l.jsxs)("div",{className:n?p().mobile_container:p().container,children:[n?(0,l.jsx)(F.n,{}):(0,l.jsx)("div",{className:p().side_bar,children:(0,l.jsx)(u.f,{})}),(0,l.jsx)("div",{className:n?p().mobile_content:p().content,children:i.map((function(e){return(0,l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:n?p().mobile_link:"",children:(0,l.jsx)(f.Z,H({component:e.icon},c))},e.url)}))})]})}},3694:function(e){e.exports={container:"Links_container__03mPx",mobile_container:"Links_mobile_container__teEws",side_bar:"Links_side_bar__A2Sin",content:"Links_content__i0T8f",mobile_content:"Links_mobile_content__3cMQz",mobile_link:"Links_mobile_link__dhHWx"}},1564:function(e){e.exports={container:"MobileMenu_container__kqXd6",menu:"MobileMenu_menu__5czkx",links:"MobileMenu_links__Denh1",link:"MobileMenu_link__qm0Ak"}},7825:function(e){e.exports={menu_container:"SideMenu_menu_container__ou4dE",bar_container:"SideMenu_bar_container__NDeCa",bar:"SideMenu_bar__WHWZF"}}},function(e){e.O(0,[434,499,774,888,179],(function(){return t=8366,e(e.s=t);var t}));var t=e.O();_N_E=t}]);