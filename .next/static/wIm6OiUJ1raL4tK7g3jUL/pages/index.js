(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(e,t,n){"use strict";n.r(t);var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var a in o.open(t.method||"get",e),t.headers)o.setRequestHeader(a,t.headers[a]);function i(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,a,i){t.push(a=a.toLowerCase()),n.push([a,i]),e=r[a],r[a]=e?e+","+i:i}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(t.body)})};t.default=r},111:function(e,t,n){e.exports=n(109)},112:function(e,t,n){e.exports=window.fetch||(window.fetch=n(110).default||n(110))},2:function(e,t,n){e.exports=n(86)},208:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(232),{page:e.exports.default}})},221:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,u=[],s=!1,p=-1;function f(){s&&l&&(s=!1,l.length?u=l.concat(u):p=-1,u.length&&d())}function d(){if(!s){var e=c(f);s=!0;for(var t=u.length;t;){for(l=u,u=[];++p<t;)l&&l[p].run();p=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||s||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},232:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),c=n.n(a),l=n(111),u=n.n(l),s=n(112),p=n.n(s);function f(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var d=n(76),h=function(){var e,t=(e=o.a.mark(function e(t){var n,r,a,i,c,l,u,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,n=t.action,r=t.addObj,a=t.delObj,i=t.updateObj,c=t.prevObj,l=d.UPDATE_URL,{action:n,addObj:r,delObj:a,updateObj:i,prevObj:c},u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:n,addObj:r,delObj:a,updateObj:i,prevObj:c})},console.log(u),e.next=9,p()(l,u);case 9:return s=e.sent,e.abrupt("return",s.ok);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[1,13]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,c,"next",e)}function c(e){f(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,c,"next",e)}function c(e){y(a,r,o,i,c,"throw",e)}i(void 0)})}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=w(t).call(this,e),n=!a||"object"!==m(a)&&"function"!=typeof a?g(r):a,O(g(n),"UpdateRecord",function(){var e=b(o.a.mark(function e(t){var n,r,a,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,n=t.action,r=t.updateObj,a=t.prevObj,e.next=5,h({action:n,updateObj:r,prevObj:a});case 5:if(!(i=e.sent)){e.next=10;break}return e.abrupt("return",i.ok);case 10:return e.abrupt("return",null);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}()),O(g(n),"handleEdit",function(){var e=b(o.a.mark(function e(t){var r,a,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=n.props.product,a=n.getName.value,i=n.getType.value,""!==a&""!==i&&n.setState({prevObj:{name:r.name,type:r.type},updateObj:{name:a,type:i},action:"updateMeClick",edit:!n.state.edit},function(){console.log(n.state),n.UpdateRecord(n.state),window.location.reload()});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n.state={action:"",edit:!1},n.handleRowClick=n.handleRowClick.bind(g(n)),n.handleFilterTextChange=n.handleFilterTextChange.bind(g(n)),n.handleFilterTypeChange=n.handleFilterTypeChange.bind(g(n)),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a["Component"]),n=t,(r=[{key:"handleRowClick",value:function(e){var t=this;console.log(this.state),this.setState({edit:!this.state.edit},function(){console.log(t.state)})}},{key:"handleFilterTextChange",value:function(e){this.setState({action:""}),e.preventDefault()}},{key:"handleFilterTypeChange",value:function(e){this.setState({action:""}),e.preventDefault()}},{key:"render",value:function(){var e,t=this,n=this.state.edit,r=this.props.product,o=c.a.createElement("div",{style:{color:"red"}},r.name),i=c.a.createElement("div",{style:{color:"red"}},r.type);return e=n?c.a.createElement(a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleEdit},c.a.createElement("div",{className:"input-wrappers"},c.a.createElement("div",{className:"left-wrapper",onDoubleClick:this.handleRowClick},c.a.createElement("input",{type:"text",defaultValue:r.name,ref:function(e){return t.getName=e}})),c.a.createElement("div",{className:"right-wrapper"},c.a.createElement("select",{className:"select-type",onChange:this.handleFilterTypeChange,defaultValue:r.type,ref:function(e){return t.getType=e}},c.a.createElement("option",{value:"select"},"--Select Type--"),c.a.createElement("option",{value:"string"},"string"),c.a.createElement("option",{value:"number"},"number"),c.a.createElement("option",{value:"object"},"object")))),c.a.createElement("button",null,"update"))):c.a.createElement("div",{className:"flex-rows-container"},c.a.createElement("div",{className:"left-wrapper",onDoubleClick:this.handleRowClick},o),c.a.createElement("div",{className:"right-wrapper"},i)),c.a.createElement(a.Fragment,null,e)}}])&&v(n.prototype,r),i&&v(n,i),t}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,S(t).call(this,e))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.filterText,n=e.filterType,r=e.products,o=[];return r.forEach(function(e){null!==e.name&&-1===e.name.indexOf(t)||null!==e.type&&"select"!==n&&-1===e.type.indexOf(n)||o.push(c.a.createElement(T,{product:e,key:e.name}))}),c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"flex-rows-container"},c.a.createElement("div",{className:"left-wrapper"},c.a.createElement("b",null,"Name")),c.a.createElement("div",{className:"right-wrapper"},c.a.createElement("b",null,"Type"))),c.a.createElement("div",null,o))}}])&&x(n.prototype,r),o&&x(n,o),t}();function P(e){return c.a.createElement("em",null,"No suggestions, you're on your own!")}function N(e){return c.a.createElement("em",null,"Add success. See DB values.")}function F(e){return c.a.createElement("em",null,"Delete success. See DB values.")}function R(e){return c.a.createElement("em",null,"Fail to add new item... Maybe not uniqe (For example: aa->string and aa->number are not allow)")}var L=function(e){var t=e.action;return"addMeClick"===t?c.a.createElement(N,null):"deleteMeClick"===t?c.a.createElement(F,null):"failToAdd"===t?c.a.createElement(R,null):c.a.createElement(P,null)},A=n(77),M=n.n(A);function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function B(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){I(a,r,o,i,c,"next",e)}function c(e){I(a,r,o,i,c,"throw",e)}i(void 0)})}}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V={},K=V.node,X=V.input,z=V.preview,W=V.products,Z=V.fileContent,$=["text/plain"],Q=[];function Y(e,t){var n=e.concat(t),r=U(new Set(e.map(function(e){return e.name})));console.log(r);var o=U(new Set(t.map(function(e){return e.name})));console.log(o);var a=[];return n.map(function(e){!r.includes(e.name)&&o.includes(e.name)&&a.push(e)}),console.log(a),a}var ee=function(e){function t(e){var n,r,a,i,c,l,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(a=H(t).call(this,e))||"object"!==D(a)&&"function"!=typeof a?q(r):a,c=q(n),l="handleSubmit",i=B(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==Z&&(Z=JSON.parse(Z)),Q=Y(W,Z),console.log(Q),Z=[],"addMeClick",Q.forEach(function(){var e=B(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({action:"addMeClick",addObj:t});case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),window.location.reload();case 7:case"end":return e.stop()}},e)})),u=function(e){return i.apply(this,arguments)},l in c?Object.defineProperty(c,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):c[l]=u,n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){K=M.a.findDOMNode(this),X=K.querySelector("input"),z=K.querySelector(".preview"),W=this.props.products}},{key:"displayFile",value:function(){for(;z.firstChild;)z.removeChild(z.firstChild);var e=X.files;if(0===e.length){var t=document.createElement("em");t.textContent="No files currently selected for upload",z.appendChild(t)}else{var n=document.createElement("div");z.appendChild(n);var r=document.createElement("div"),o=document.createElement("em");if(function(e){if(e.type===$[0])return!0;return!1}(e[0])){o.textContent="File name "+e[0].name+", file size "+function(e){if(e<1024)return e+"bytes";if(e>=1024&&e<1048576)return(e/1024).toFixed(1)+"KB";if(e>=1048576)return(e/1048576).toFixed(1)+"MB"}(e[0].size)+".";var a=new FileReader,c=document.createElement("textarea");a.onload=function(e){c.value=e.target.result,c.className="file-content",c.rows="10",c.cols="50",c.onselect=function(e){var t=c.selectionEnd-c.selectionStart;Z=c.value.substr(c.selectionStart,t).trim()}},a.readAsText(e[0]),r.appendChild(o),o.appendChild(c)}else o.textContent="File name "+e[i].name+": Not a valid file type. Update your selection.",r.appendChild(o);n.appendChild(r)}}},{key:"render",value:function(){return c.a.createElement(a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("input",{onChange:this.displayFile,type:"file",accept:".txt"})),c.a.createElement("div",{className:"preview"},c.a.createElement("em",null,"No file currently selected for upload")),c.a.createElement("div",null,c.a.createElement("button",{onClick:this.handleSubmit},"Submit"))))}}])&&G(n.prototype,r),l&&G(n,l),t}();function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=oe(t).call(this,e),n=!a||"object"!==te(a)&&"function"!=typeof a?ae(r):a,ce(ae(n),"deleteMeClick",function(e){var t=n.props.products,r=n.props.filterText,o={name:r},a=Object.keys(t).find(function(e){return t[e].name===r});-1!==a&&void 0!==a&&(o=t[a],t.splice(a,1)),n.setState({action:"deleteMeClick",delObj:o},function(){n.UpdateRecord(n.state),window.location.reload()})}),ce(ae(n),"addMeClick",function(e){var t=n.props,r=t.products,o=t.filterText,a=t.filterType,i={name:o,type:"select"===a?null:a};null!==i.type&&n.setState({action:"addMeClick",addObj:i},function(){var e=Object.keys(r).find(function(e){return r[e].name===i.name});-1===e||void 0===e?(r.push(i),n.UpdateRecord(n.state),window.location.reload()):n.setState({action:"failToAdd"})})}),ce(ae(n),"UpdateRecord",function(){var e,t=(e=o.a.mark(function e(t){var n,r,a,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),e.prev=1,n=t.action,r=t.addObj,a=t.delObj,!n||!r&&!a){e.next=14;break}return e.next=6,h({action:n,addObj:r,delObj:a});case 6:if(!(i=e.sent)){e.next=11;break}return e.abrupt("return",i.ok);case 11:return e.abrupt("return",null);case 12:e.next=15;break;case 14:return e.abrupt("return",null);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(1);case 19:case"end":return e.stop()}},e,null,[[1,17]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){ne(a,r,o,i,c,"next",e)}function c(e){ne(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()),n.handleFilterTextChange=n.handleFilterTextChange.bind(ae(n)),n.handleFilterTypeChange=n.handleFilterTypeChange.bind(ae(n)),n.state={action:"",delObj:{},addObj:{}},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,a["Component"]),n=t,(r=[{key:"handleFilterTextChange",value:function(e){this.setState({action:""}),e.preventDefault(),this.props.onFilterTextChange(e.target.value)}},{key:"handleFilterTypeChange",value:function(e){this.setState({action:""}),e.preventDefault(),this.props.onFilterTypeChange(e.target.value)}},{key:"render",value:function(){var e,t=this;return"select"!==this.props.filterType&&this.props.filterText&&this.props.products.filter(function(e){return e.name===t.props.filterText&&e.type===t.props.filterType}).length>=1?e=c.a.createElement("button",{onClick:this.deleteMeClick},"delete"):"select"!==this.props.filterType&&this.props.filterText&&1!==this.props.products.filter(function(e){return e.name===t.props.filterText&&e.type===t.props.filterType}).length&&(e=c.a.createElement(a.Fragment,null,c.a.createElement("button",{onClick:this.addMeClick},"add"),c.a.createElement("div",{className:"no-suggestions"},c.a.createElement(L,{action:this.state.action})))),c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"input-wrappers"},c.a.createElement("div",{className:"left-wrapper"},c.a.createElement("input",{type:"text",placeholder:"Start type name...",value:this.props.filterText,onChange:this.handleFilterTextChange})),c.a.createElement("div",{className:"right-wrapper"},c.a.createElement("select",{className:"select-type",onChange:this.handleFilterTypeChange,value:this.props.filterType},c.a.createElement("option",{value:"select"},"--Select Type--"),c.a.createElement("option",{value:"string"},"string"),c.a.createElement("option",{value:"number"},"number"),c.a.createElement("option",{value:"object"},"object")))),e,c.a.createElement("div",null,c.a.createElement(ee,{products:this.props.products})))}}])&&re(n.prototype,r),i&&re(n,i),t}();function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(76);var he=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=pe(t).call(this,e))||"object"!==ue(o)&&"function"!=typeof o?fe(r):o).state={filterText:"",filterType:"select",filterLength:null,token:n.props.token},n.handleFilterTextChange=n.handleFilterTextChange.bind(fe(n)),n.handleFilterTypeChange=n.handleFilterTypeChange.bind(fe(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,a["Component"]),n=t,(r=[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e,filterLength:document.getElementsByTagName("tr").length-1})}},{key:"handleFilterTypeChange",value:function(e){this.setState({filterType:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"item11"},c.a.createElement(le,{products:this.props.products,filterText:this.state.filterText,filterType:this.state.filterType,filterLength:this.state.filterLength,onFilterTextChange:this.handleFilterTextChange,onFilterTypeChange:this.handleFilterTypeChange}),c.a.createElement("div",{className:"table-wrapper"},c.a.createElement(k,{products:this.props.products,filterText:this.state.filterText,filterType:this.state.filterType})))}}])&&se(n.prototype,r),o&&se(n,o),t}();function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ee=n(76),Oe=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ve(this,we(t).call(this,e))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.data;return c.a.createElement("div",{className:"grid-container",align:"center"},c.a.createElement(u.a,null,c.a.createElement("title",null,"Bam UI"),c.a.createElement("link",{href:"./static/favicon.ico",rel:"icon",type:"image/x-icon"}),c.a.createElement("link",{href:"./static/style.css",rel:"stylesheet"})),c.a.createElement("div",{className:"item1"},c.a.createElement("img",{src:"./static/Menora_logo.png"}),c.a.createElement("h1",null,"Bam UI")),c.a.createElement(he,{products:e}))}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Ee.VALUES_URL);case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,200==n.status){e.next=8;break}throw Error("Error!!");case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){ye(a,r,o,i,c,"next",e)}function c(e){ye(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&be(n.prototype,r),i&&be(n,i),t}();t.default=Oe},76:function(e,t,n){(function(t){e.exports={SERVICE_NAME:"menora.services.bam-ui",PORT:t.env.PORT||3e3,BASE_API_PATH:"/bamui/api/v1",ZIPKIN_PATH:"http://localhost:9411/api/v1/spans",MONGODB_CONNECTION_STRING:t.env.MONGODB_CONNECTION_STRING||"mongodb://localhost:27017",MONGODB_NAME:t.env.MONGODB_NAME||"digital_bam_ui",MONGODB_COLLECTION:t.env.MONGODB_COLLECTION||"testWithType",PREFIX_PATH:t.env.PREFIX_PATH||"http://localhost",VALUES_URL:"http://localhost:3000/bamui/api/v1/values",TEST_URL:"http://localhost:3000/bamui/api/v1/test",UPDATE_URL:"http://localhost:3000/bamui/api/v1/update",TOKEN_URL:t.env.TOKEN_URL||"https://localhost/api/v1/token",LOGIN_URL:"http://bam-ui:3000/bamui/api/v1/loginAuthentication"}}).call(this,n(221))}},[[208,1,0]]]);