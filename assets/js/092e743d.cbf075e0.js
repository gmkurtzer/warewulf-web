(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[855],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2080:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c},default:function(){return s}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),i={id:"kernel",title:"wwctl kernel"},a={unversionedId:"wwctl/kernel",id:"wwctl/kernel",isDocsHomePage:!1,title:"wwctl kernel",description:"This command is for management of Warewulf Kernels to be used for bootstrapping nodes.",source:"@site/docs/wwctl/kernel.md",sourceDirName:"wwctl",slug:"/wwctl/kernel",permalink:"/docs/wwctl/kernel",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/wwctl/kernel.md",version:"current",frontMatter:{id:"kernel",title:"wwctl kernel"},sidebar:"someSidebar",previous:{title:"wwctl controller",permalink:"/docs/wwctl/controller"},next:{title:"wwctl node",permalink:"/docs/wwctl/node"}},c=[{value:"import",id:"import",children:[{value:"-a, --all",id:"-a---all",children:[]},{value:"-n, --node",id:"-n---node",children:[]},{value:"-r, --root",id:"-r---root",children:[]},{value:"--setdefault",id:"--setdefault",children:[]}]},{value:"list, ls",id:"list-ls",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This command is for management of Warewulf Kernels to be used for bootstrapping nodes."),(0,l.kt)("h2",{id:"import"},"import"),(0,l.kt)("p",null,"This will import a Kernel version from the control node into Warewulf for nodes to be configured to boot on."),(0,l.kt)("h3",{id:"-a---all"},"-a, --all"),(0,l.kt)("p",null,"Build all overlays (runtime and system)"),(0,l.kt)("h3",{id:"-n---node"},"-n, --node"),(0,l.kt)("p",null,"Build overlay for a particular node(s)"),(0,l.kt)("h3",{id:"-r---root"},"-r, --root"),(0,l.kt)("p",null,"Import kernel from root (chroot) directory"),(0,l.kt)("h3",{id:"--setdefault"},"--setdefault"),(0,l.kt)("p",null,"Set this kernel for the default profile"),(0,l.kt)("h2",{id:"list-ls"},"list, ls"),(0,l.kt)("p",null,"This command will list the kernels that have been imported into Warewulf."))}s.isMDXComponent=!0}}]);