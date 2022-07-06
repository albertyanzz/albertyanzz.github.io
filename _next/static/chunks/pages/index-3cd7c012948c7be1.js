(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5282)}])},8038:function(e,n,t){"use strict";t.d(n,{U:function(){return i}});var i=900},6097:function(e,n,t){"use strict";t.d(n,{nN:function(){return r},jD:function(){return o},pl:function(){return a}});var i=t(7294),r=(0,i.createContext)({state:"",dispatch:function(){return null}}),o=(0,i.createContext)({state:[],dispatch:function(){return null}}),a=(0,i.createContext)({selected:0,dispatch:function(){return null}})},5282:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var i=t(5893),r=t(7160),o=t.n(r),a=t(1193),s=t.n(a),c=t(9475),l=t.n(c),u=t(7294),m=t(6348),d=t.n(m),p=t(6097),f=function(e){var n=e.input,t=e.children,r=e.print,o=e.path,a=(0,u.useState)(""),s=a[0],c=a[1],l=(0,u.useContext)(p.jD).dispatch;return r?(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:t})}):(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:d().light_green,children:"visitor@albertyanzz.github.io"}),(0,i.jsx)("span",{className:d().white,children:":"}),(0,i.jsx)("span",{className:d().light_cyan,children:o.join("/")}),(0,i.jsx)("span",{className:d().white,children:"$"}),n?(0,i.jsx)("input",{id:"input-line",className:d().input,value:s,onChange:function(e){c(e.currentTarget.value)},spellCheck:!1,onKeyDown:function(e){"Enter"===e.key&&(l(s),c(""))}}):(0,i.jsx)("span",{className:d().children,children:t})]})},_={name:"~",subDirectories:[{name:"About",subDirectories:[],files:[{name:"about.txt",content:[{type:"text",content:"My name is Albert and whether it's through programming, dancing, writing, giving speeches, or other media forms, I'm always looking to innovate and create something that's uniquely me."}]}]},{name:"Links",subDirectories:[],files:[{name:"linkedin",content:[{type:"link",content:"Click to go to linkedin",link:"https://www.linkedin.com/in/albertzyan/"}]},{name:"github",content:[{type:"link",content:"Click to go to github",link:"https://github.com/albertyanzz/"}]},{name:"instagram",content:[{type:"link",content:"Click to go to instagram",link:"https://www.instagram.com/albertzzyan/"}]}]},{name:"Experience",subDirectories:[],files:[{name:"encore",content:[{content:"Software Intern"},{content:"Jan 2022 - May 2022"},{content:"- Worked on responsive frontend components for a webpage built on ReactJs, Typescript, and MaterialUI"},{content:"- Made dynamic web pages using Axios and React hooks to connect components to the company\u2019s public API"},{content:"- Set up a payment gateway using Stripe and Express"},{content:"- Used ReactJs, Typescript, Stripe, ExpressJs, MaterialUI, Figma"}]},{name:"course_producer",content:[{content:"USC Course Producer"},{content:"Aug 2021 - Present"},{content:"- Held 4 hours of office hours per week assisting students with their algorithm homework and course-related questions"},{content:"- Managed homework grading platform (Gradescope) for a class of 222 students"},{content:"- Held 4 hours of office hours per week to answer student questions about their C++ programming assignments and assisted in debugging code"}]}]},{name:"Projects",subDirectories:[],files:[{name:"tgif_website",content:[{content:"Website for TGIF Toastmasters"},{content:"SPA made with NextJs, Material UI, and custom React components."},{type:"link",content:"link",link:"https://www.tgiftoastmaster.com"}]},{name:"microplanner",content:[{content:"Microplanner"},{content:"To-do list web application with achievements and subtasks. Supports Google login."},{type:"link",content:"link",link:"https://elastic-poincare-f4a4a3.netlify.app/"}]}]}],files:[]},h=t(6486),g=t.n(h),b=t(1852),w=t(8038);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function y(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=function(){var e=(0,b.useMediaQuery)({query:"(max-width: ".concat(w.U,"px)")}),n=(0,u.useState)(!1),t=n[0],r=n[1],o=(0,u.useState)([]),a=o[0],c=o[1],m=(0,u.useState)([_]),d=m[0],h=m[1],x=(0,u.useState)(_),k=x[0],v=x[1],j=0,C=function(){setTimeout((function(){var e=document.getElementById("terminal");e&&(e.scrollTop=e.scrollHeight)}),0)},T=function(e){var n=e.substring(0,e.indexOf(" ")).toLowerCase(),t=e.substring(e.indexOf(" ")+1).toLowerCase();switch(n||t){case"help":H(["Commands:","<ls>: View contents. Directories are capitalized, files are lowercase.","<cd> <path>: Switch directory to <path> (paths can be subdirectories or .. for previous directory)","<cat> <file>: View contents of file in current directory","<clear>: Clear terminal","<exit>: Minimize terminal window"]);break;case"cd":if(!n||".."!==t&&!k.subDirectories.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))H(["Please input valid path."]);else if(".."===t){if(d.length>1){var i=d;i.pop(),h(i),v(d[d.length-1])}}else{var o=k.subDirectories.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));o&&(h((function(e){return y(e).concat([o])})),v(o))}break;case"ls":var a=k.subDirectories.map((function(e){return e.name})),s=k.files.map((function(e){return e.name}));H(a.concat(s));break;case"cat":if(n&&k.files.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))){var l=k.files.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));l&&N(l.content)}else H(["Please input valid file."]);break;case"clear":c([]);break;case"exit":r(!0);break;default:H(["Unknown command. Type <help> to see commands."])}},N=function(e){var n=(0,i.jsx)("div",{className:l().console_print,children:e.map((function(e){return"link"===e.type?(0,i.jsx)("span",{children:(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.content})},j++):(0,i.jsx)("span",{children:e.content},j++)}))});c((function(e){return y(e).concat([n])})),C()},H=function(e){var n=(0,i.jsx)("div",{className:l().console_print,children:e.map((function(e){return(0,i.jsx)("span",{children:e},j++)}))});c((function(e){return y(e).concat([n])})),C()},S=(0,i.jsxs)("div",{id:"terminal",className:e?l().mobile_terminal:l().terminal_container,children:[(0,i.jsx)("p",{className:l().welcome_text,children:"Welcome to Albert's site. Type <help> to see options."}),a.map((function(e){return e})),(0,i.jsx)(f,{path:d.map((function(e){return e.name})),input:!0})]});return(0,i.jsx)(p.jD.Provider,{value:{state:[],dispatch:function(e){c((function(n){return y(n).concat([(0,i.jsx)(f,{path:g().cloneDeep(d.map((function(e){return e.name}))),input:!1,children:e},j++)])})),e&&T(e),C()}},children:t?(0,i.jsx)("div",{className:l().minimized,onClick:function(){r(!1),C()},children:"[ / ]"}):(0,i.jsx)("label",{htmlFor:"input-line",children:e?S:(0,i.jsx)(s(),{axis:"both",children:S})})})},v=t(1664),j=function(){return(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)(k,{}),(0,i.jsx)(v.default,{href:"/selection",passHref:!0,children:(0,i.jsx)("button",{className:o().button,children:"Continue to main site"})})]})}},7160:function(e){e.exports={footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",nav_container:"Home_nav_container__w4OWY",background_container:"Home_background_container__5ndee",background_img:"Home_background_img__d96pj",container:"Home_container__bCOhY",menu:"Home_menu__2ncGe",button:"Home_button__Zs7A2"}},9475:function(e){e.exports={terminal_container:"Terminal_terminal_container__aW8Vz",mobile_terminal:"Terminal_mobile_terminal__snB79",welcome_text:"Terminal_welcome_text__y96bl",console_print:"Terminal_console_print__MOqXO",minimized:"Terminal_minimized__KsTOD"}},6348:function(e){e.exports={input:"TerminalLine_input__z3f35",white:"TerminalLine_white__6bA6H",light_green:"TerminalLine_light_green__FWzKW",light_cyan:"TerminalLine_light_cyan__9gaSI",children:"TerminalLine_children__fHGBZ"}}},function(e){e.O(0,[662,434,193,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);