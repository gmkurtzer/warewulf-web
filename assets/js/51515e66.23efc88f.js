(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[579],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"introduction",title:"Introduction",slug:"/"},l={unversionedId:"about/introduction",id:"about/introduction",isDocsHomePage:!1,title:"Introduction",description:"Summary",source:"@site/docs/about/introduction.md",sourceDirName:"about",slug:"/",permalink:"/docs/",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/about/introduction.md",version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"someSidebar",next:{title:"Architecture",permalink:"/docs/about/architecture"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Warewulf Design Tenants",id:"warewulf-design-tenants",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Warewulf is an operating system provisioning system for Linux that is designed to produce simple, turnkey HPC deployment solutions that maintain flexibility and configurability at scale."),(0,i.kt)("p",null,"Since its initial release in 2001, Warewulf has become the most popular open source and vendor-agnostic provisioning system within the global HPC community. Warewulf is known for its massive scalability and simple management of stateless (disk optional) provisioning."),(0,i.kt)("p",null,'In a nutshell, cluster node operating system images are containers. These containers are built into a bootable format called a "Virtual Node File System" (VNFS) image which is provisioned out to nodes when they boot. A VNFS and kernel pair can be distributed to any number of nodes, which means you could have all of your nodes booting the exact same container VNFS image. To avoid the administrative headache of too many customized VNFS images, subtle differences between node operating system configurations are handled with "overlays". '),(0,i.kt)("p",null,"On boot, each node receives, in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"iPXE boot image (tftp)"),(0,i.kt)("li",{parentName:"ol"},"Linux kernel (http)"),(0,i.kt)("li",{parentName:"ol"},"VNFS image (http)"),(0,i.kt)("li",{parentName:"ol"},"Kernel module overlay (http)"),(0,i.kt)("li",{parentName:"ol"},"System overlay (http)")),(0,i.kt)("p",null,"Once the node has booted, it will request a runtime overlay (privileged http) at a periodic interval."),(0,i.kt)("p",null,"All the images, which are transferred for provisioning, are prebuilt static components and the per node connection processing is minimal. This means that Warewulf is as scalable as the physical infrastructure."),(0,i.kt)("h2",{id:"warewulf-design-tenants"},"Warewulf Design Tenants"),(0,i.kt)("p",null,"To enable simple, scalable and flexible operating system management at scale."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lightweight"),': Warewulf needs to do its job and stay out of the way. There should be no underlying system dependencies, changes or "stack" for the controller or worker nodes.\n'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple"),": Warewulf is used by hobbyists, researchers, scientists, engineers and systems administrators. This means that Warewulf must be simple to use and understand.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexible"),": Warewulf is highly flexible and can address the needs of any environment-- from a computer lab with graphical workstations, to under-the-desk clusters, to massive supercomputing centers providing traditional HPC capabilities to thousands of users.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Agnostic"),": From the Linux distribution to the underlying hardware, Warewulf should be as agnostic and standards compliant as possible. From ARM to x86, Atos to Dell, Warewulf can provision it all equally well with no favorites.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open Source"),": It is imperative that Warewulf be and remain absolutely Open Source.")))}c.isMDXComponent=!0}}]);