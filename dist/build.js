!function(e){function t(e){delete installedChunks[e]}function r(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=p.p+""+e+"."+j+".hot-update.js",t.appendChild(r)}function n(e){return e=e||1e4,new Promise(function(t,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=p.p+""+j+".hot-update.json";n.open("GET",o,!0),n.timeout=e,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)t();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(n.responseText)}catch(e){return void r(e)}t(e)}}})}function o(e){var t=P[e];if(!t)return p;var r=function(r){return t.hot.active?(P[r]?P[r].parents.indexOf(e)<0&&P[r].parents.push(e):(x=[e],v=r),t.children.indexOf(r)<0&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),x=[]),p(r)};for(var n in p)Object.prototype.hasOwnProperty.call(p,n)&&"e"!==n&&Object.defineProperty(r,n,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(n));return r.e=function(e){function t(){k--,"prepare"===A&&(C[e]||l(e),0===k&&0===I&&h())}return"ready"===A&&s("prepare"),k++,p.e(e).then(t,function(e){throw t(),e})},r}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:c,apply:f,status:function(e){if(!e)return A;E.push(e)},addStatusHandler:function(e){E.push(e)},removeStatusHandler:function(e){var t=E.indexOf(e);t>=0&&E.splice(t,1)},data:O[e]};return v=void 0,t}function s(e){A=e;for(var t=0;t<E.length;t++)E[t].call(null,e)}function a(e){return+e+""===e?+e:e}function c(e){if("idle"!==A)throw new Error("check() is only allowed in idle status");return b=e,s("check"),n(w).then(function(e){if(!e)return s("idle"),null;M={},C={},S=e.c,g=e.h,s("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});y={};return l(0),"prepare"===A&&0===k&&0===I&&h(),t})}function u(e,t){if(S[e]&&M[e]){M[e]=!1;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(y[r]=t[r]);0==--I&&0===k&&h()}}function l(e){S[e]?(M[e]=!0,I++,r(e)):C[e]=!0}function h(){s("ready");var e=m;if(m=null,e)if(b)Promise.resolve().then(function(){return f(b)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&t.push(a(r));e.resolve(t)}}function f(r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}if("ready"!==A)throw new Error("apply() is only allowed in ready status");r=r||{};var o,i,c,u,l,h={},f=[],d={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var m in y)if(Object.prototype.hasOwnProperty.call(y,m)){l=a(m);var b;b=y[m]?function(e){for(var t=[e],r={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),s=i.id,a=i.chain;if((u=P[s])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:s};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:s};for(var c=0;c<u.parents.length;c++){var l=u.parents[c],h=P[l];if(h){if(h.hot._declinedDependencies[s])return{type:"declined",chain:a.concat([l]),moduleId:s,parentId:l};t.indexOf(l)>=0||(h.hot._acceptedDependencies[s]?(r[l]||(r[l]=[]),n(r[l],[s])):(delete r[l],t.push(l),o.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}(l):{type:"disposed",moduleId:m};var w=!1,_=!1,E=!1,I="";switch(b.chain&&(I="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":r.onDeclined&&r.onDeclined(b),r.ignoreDeclined||(w=new Error("Aborted because of self decline: "+b.moduleId+I));break;case"declined":r.onDeclined&&r.onDeclined(b),r.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+I));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(b),r.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":r.onAccepted&&r.onAccepted(b),_=!0;break;case"disposed":r.onDisposed&&r.onDisposed(b),E=!0;break;default:throw new Error("Unexception type "+b.type)}if(w)return s("abort"),Promise.reject(w);if(_){d[l]=y[l],n(f,b.outdatedModules);for(l in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,l)&&(h[l]||(h[l]=[]),n(h[l],b.outdatedDependencies[l]))}E&&(n(f,[b.moduleId]),d[l]=v)}var k=[];for(i=0;i<f.length;i++)l=f[i],P[l]&&P[l].hot._selfAccepted&&k.push({module:l,errorHandler:P[l].hot._selfAccepted});s("dispose"),Object.keys(S).forEach(function(e){!1===S[e]&&t(e)});for(var C,M=f.slice();M.length>0;)if(l=M.pop(),u=P[l]){var D={},T=u.hot._disposeHandlers;for(c=0;c<T.length;c++)(o=T[c])(D);for(O[l]=D,u.hot.active=!1,delete P[l],delete h[l],c=0;c<u.children.length;c++){var U=P[u.children[c]];U&&((C=U.parents.indexOf(l))>=0&&U.parents.splice(C,1))}}var q,H;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(u=P[l]))for(H=h[l],c=0;c<H.length;c++)q=H[c],(C=u.children.indexOf(q))>=0&&u.children.splice(C,1);s("apply"),j=g;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);var R=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(u=P[l])){H=h[l];var L=[];for(i=0;i<H.length;i++)if(q=H[i],o=u.hot._acceptedDependencies[q]){if(L.indexOf(o)>=0)continue;L.push(o)}for(i=0;i<L.length;i++){o=L[i];try{o(H)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:l,dependencyId:H[i],error:e}),r.ignoreErrored||R||(R=e)}}}for(i=0;i<k.length;i++){var N=k[i];l=N.module,x=[l];try{p(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e,originalError:e}),r.ignoreErrored||R||(R=t),R||(R=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:l,error:e}),r.ignoreErrored||R||(R=e)}}return R?(s("fail"),Promise.reject(R)):(s("idle"),new Promise(function(e){e(f)}))}function p(t){if(P[t])return P[t].exports;var r=P[t]={i:t,l:!1,exports:{},hot:i(t),parents:(_=x,x=[],_),children:[]};return e[t].call(r.exports,r,r.exports,o(t)),r.l=!0,r.exports}var d=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){u(e,t),d&&d(e,t)};var v,m,y,g,b=!0,j="2292d7917da463c10804",w=1e4,O={},x=[],_=[],E=[],A="idle",I=0,k=0,C={},M={},S={},P={};p.m=e,p.c=P,p.d=function(e,t,r){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/dist/",p.h=function(){return j},o(6)(p.s=6)}([function(e,t,r){(function(e,n){var o;!function(i){function s(e){throw new RangeError(P[e])}function a(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function c(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),e=e.replace(S,"."),n+a(e.split("."),t).join(".")}function u(e){for(var t,r,n=[],o=0,i=e.length;o<i;)t=e.charCodeAt(o++),t>=55296&&t<=56319&&o<i?(r=e.charCodeAt(o++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--)):n.push(t);return n}function l(e){return a(e,function(e){var t="";return e>65535&&(e-=65536,t+=U(e>>>10&1023|55296),e=56320|1023&e),t+=U(e)}).join("")}function h(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:w}function f(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function p(e,t,r){var n=0;for(e=r?T(e/E):e>>1,e+=T(e/t);e>D*x>>1;n+=w)e=T(e/D);return T(n+(D+1)*e/(e+_))}function d(e){var t,r,n,o,i,a,c,u,f,d,v=[],m=e.length,y=0,g=I,b=A;for(r=e.lastIndexOf(k),r<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&s("not-basic"),v.push(e.charCodeAt(n));for(o=r>0?r+1:0;o<m;){for(i=y,a=1,c=w;o>=m&&s("invalid-input"),u=h(e.charCodeAt(o++)),(u>=w||u>T((j-y)/a))&&s("overflow"),y+=u*a,f=c<=b?O:c>=b+x?x:c-b,!(u<f);c+=w)d=w-f,a>T(j/d)&&s("overflow"),a*=d;t=v.length+1,b=p(y-i,t,0==i),T(y/t)>j-g&&s("overflow"),g+=T(y/t),y%=t,v.splice(y++,0,g)}return l(v)}function v(e){var t,r,n,o,i,a,c,l,h,d,v,m,y,g,b,_=[];for(e=u(e),m=e.length,t=I,r=0,i=A,a=0;a<m;++a)(v=e[a])<128&&_.push(U(v));for(n=o=_.length,o&&_.push(k);n<m;){for(c=j,a=0;a<m;++a)(v=e[a])>=t&&v<c&&(c=v);for(y=n+1,c-t>T((j-r)/y)&&s("overflow"),r+=(c-t)*y,t=c,a=0;a<m;++a)if(v=e[a],v<t&&++r>j&&s("overflow"),v==t){for(l=r,h=w;d=h<=i?O:h>=i+x?x:h-i,!(l<d);h+=w)b=l-d,g=w-d,_.push(U(f(d+b%g,0))),l=T(b/g);_.push(U(f(l,0))),i=p(r,y,n==o),r=0,++n}++r,++t}return _.join("")}function m(e){return c(e,function(e){return C.test(e)?d(e.slice(4).toLowerCase()):e})}function y(e){return c(e,function(e){return M.test(e)?"xn--"+v(e):e})}var g=("object"==typeof t&&t&&t.nodeType,"object"==typeof e&&e&&e.nodeType,"object"==typeof n&&n);var b,j=2147483647,w=36,O=1,x=26,_=38,E=700,A=72,I=128,k="-",C=/^xn--/,M=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,P={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=w-O,T=Math.floor,U=String.fromCharCode;b={version:"1.4.1",ucs2:{decode:u,encode:l},decode:d,encode:v,toASCII:y,toUnicode:m},void 0!==(o=function(){return b}.call(t,r,t,e))&&(e.exports=o)}()}).call(t,r(13)(e),r(1))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,c=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)i.call(r,l)&&(c[l]=r[l]);if(o){a=o(r);for(var h=0;h<a.length;h++)s.call(r,a[h])&&(c[a[h]]=r[a[h]])}}return c}},function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},function(e,t,r){var n=r(25),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t,r){var n=r(4),o=n.Symbol;e.exports=o},function(e,t,r){"use strict";var n=r(7),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r(9),e.hot.accept();var i=document.querySelector("#board");new o.default(i,15).play()},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s=function e(t,r){var o=this;n(this,e),this.play=function(){o.board.innerHTML="",o.fields=[];for(var e=0;e<o._resolution;e++){for(var t=[],r=0;r<o._resolution;r++){var n=new i.default(o,e,r);t.push(n)}o.fields.push(t)}o.board.style.gridTemplate="repeat("+o._resolution+",1fr) / repeat("+o._resolution+",1fr)",o._addMines(),o._countThreats(),o._render()},this.cleanSurround=function(e){var t=0===e.threat;o._getSurroundFields(e,t).forEach(function(e){!e.hidden||e.marked||e.isMine||(e.show(!1),0===e.threat&&o.cleanSurround(e))})},this.checkStatus=function(e){e.isMine&&o._loss();var t=!0;o.fields.forEach(function(e){e.forEach(function(e){!e.isMine&&e.hidden&&(t=!1)})}),t&&o._win()},this._win=function(){setTimeout(function(){alert("Výhra! Gratuluji."),confirm("Chces hrát znovu?")&&o.play()},100)},this._loss=function(){setTimeout(function(){alert("Bohužel, ale prohrál si..."),confirm("Chces hrát znovu?")&&o.play()},100),o._showMines()},this._showMines=function(){o.fields.forEach(function(e){e.forEach(function(e){e.isMine&&e.hidden&&e.show(!1,!0)})})},this._render=function(){o.fields.forEach(function(e){e.forEach(function(e){e.render()})})},this._addMines=function(){for(var e=0;e<o._mineCount;){var t=Math.floor(Math.random()*o._resolution),r=Math.floor(Math.random()*o._resolution);o.fields[t][r].isMine||(o.fields[t][r].setMine(),e++)}},this._countThreats=function(){o.fields.forEach(function(e){e.forEach(function(e){e.isMine||e.setThreat(o._countThreat(e))})})},this._countThreat=function(e){var t=0;return o._getSurroundFields(e).forEach(function(e){e.isMine&&t++}),t},this._getSurroundFields=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=e.x,n=e.y,s=[];return r>=0&&n-1>=0&&o.fields[r][n-1]instanceof i.default&&s.push(o.fields[r][n-1]),r>=0&&n+1<=o._resolution-1&&o.fields[r][n+1]instanceof i.default&&s.push(o.fields[r][n+1]),r-1>=0&&n>=0&&o.fields[r-1][n]instanceof i.default&&s.push(o.fields[r-1][n]),r+1<=o._resolution-1&&n>=0&&o.fields[r+1][n]instanceof i.default&&s.push(o.fields[r+1][n]),t&&(r-1>=0&&n-1>=0&&o.fields[r-1][n-1]instanceof i.default&&s.push(o.fields[r-1][n-1]),r+1<=o._resolution-1&&n+1<=o._resolution-1&&o.fields[r+1][n+1]instanceof i.default&&s.push(o.fields[r+1][n+1]),r+1<=o._resolution-1&&n-1>=0&&o.fields[r+1][n-1]instanceof i.default&&s.push(o.fields[r+1][n-1]),r-1>=0&&n+1<=o._resolution-1&&o.fields[r-1][n+1]instanceof i.default&&s.push(o.fields[r-1][n+1])),s},this.board=t,this.fields=[],this._resolution=r,this._mineCount=1.5*this._resolution};t.default=s},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t,r,o){var i=this;n(this,e),this.setMine=function(){i.isMine=!0},this.setThreat=function(e){i.threat=e},this.show=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i._el;r.classList.remove("hidden"),i.isMine?r.classList.add("mine"):(r.innerHTML=i.threat>0?i.threat:"",r.classList.add("not-mine"),0===i.threat&&e&&i.sweeper.cleanSurround(i)),i.hidden=!1,i.marked=!1,t||i.sweeper.checkStatus(i),i._el.classList.remove("marked"),r.removeEventListener("click",i._clickHandler)},this._clickHandler=function(){i.show()},this.render=function(){var e=document.createElement("div");e.classList.add("field"),e.classList.add("hidden"),e.dataset.x=i.x,e.dataset.y=i.y,i._el=e,i.sweeper.board.appendChild(e),i._el.addEventListener("click",i._clickHandler),i._el.addEventListener("contextmenu",i._mark)},this._mark=function(e){e.preventDefault(),i.hidden&&(i.marked=!i.marked,i._el.classList.toggle("marked"))},this.sweeper=t,this.x=r,this.y=o,this.isMine=!1,this.threat=0,this.hidden=!0,this.marked=!1};t.default=o},function(e,t,r){var n=r(10)(e.i,{fileMap:"{fileName}"});e.hot.dispose(n),e.hot.accept(void 0,n)},function(e,t,r){function n(e,t){if(t||(t=e.href.split("?")[0]),!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",function(){r.isLoaded=!0,e.remove()}),r.addEventListener("error",function(){r.isLoaded=!0,e.remove()}),r.href=t+"?"+Date.now(),e.parentNode.insertBefore(r,e.nextSibling)}}function o(e){var t=document.querySelectorAll("link"),r=!1;return h.call(t,function(t){if(!0!==t.visited){var o=i(t.href,e);o&&(n(t,o),r=!0)}}),r}function i(e,t){e=a(e,{stripWWW:!1});var r;return t.some(function(n){e.indexOf(t)>-1&&(r=n)}),r}function s(){var e=document.querySelectorAll("link");h.call(e,function(e){!0!==e.visited&&n(e)})}var a=r(11),c=Object.create(null),u=r(23),l="undefined"==typeof document,h=Array.prototype.forEach,f=function(){},p=function(e){var t=c[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),n=r[r.length-1];n&&(t=n.src)}c[e]=t}return function(e){var r=/([^\\\/]+)\.js$/.exec(t),n=r&&r[1];return n?e.split(",").map(function(e){var r=new RegExp(n+"\\.js$","g");return a(t.replace(r,e.replace(/{fileName}/g,n)+".css"),{stripWWW:!1})}):[t.replace(".js",".css")]}};e.exports=function(e,t){function r(){var e=n(t.fileMap);o(e)&&!t.reloadAll?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),s())}var n;return l?f:(n=p(e),u(r,10))}},function(e,t,r){"use strict";function n(e,t){return t.some(function(t){return t instanceof RegExp?t.test(e):t===e})}var o=r(12),i=r(0),s=r(18),a=r(20),c=r(21),u=r(2),l={"http:":80,"https:":443,"ftp:":21},h={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};e.exports=function(e,t){if(t=u({normalizeProtocol:!0,normalizeHttps:!1,stripFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeDirectoryIndex:!1},t),"string"!=typeof e)throw new TypeError("Expected a string");var r=0===e.indexOf("//");e=a(e.trim()).replace(/^\/\//,"http://");var f=o.parse(e);if(t.normalizeHttps&&"https:"===f.protocol&&(f.protocol="http:"),!f.hostname&&!f.pathname)throw new Error("Invalid URL");delete f.host,delete f.query,t.stripFragment&&delete f.hash;var p=l[f.protocol];if(Number(f.port)===p&&delete f.port,f.pathname&&(f.pathname=f.pathname.replace(/\/{2,}/g,"/")),f.pathname&&(f.pathname=decodeURI(f.pathname)),!0===t.removeDirectoryIndex&&(t.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(t.removeDirectoryIndex)&&t.removeDirectoryIndex.length){var d=f.pathname.split("/");n(d[d.length-1],t.removeDirectoryIndex)&&(d=d.slice(0,d.length-1),f.pathname=d.slice(1).join("/")+"/")}if(h[f.protocol]){var v=f.protocol+"//"+f.hostname,m=o.resolve(v,f.pathname);f.pathname=m.replace(v,"")}f.hostname&&(f.hostname=i.toUnicode(f.hostname).toLowerCase(),f.hostname=f.hostname.replace(/\.$/,""),t.stripWWW&&(f.hostname=f.hostname.replace(/^www\./,""))),"?"===f.search&&delete f.search;var y=s.parse(f.search);if(Array.isArray(t.removeQueryParameters))for(var g in y)n(g,t.removeQueryParameters)&&delete y[g];return f.search=s.stringify(c(y)),f.search=decodeURIComponent(f.search),e=o.format(f),(t.removeTrailingSlash||"/"===f.pathname)&&(e=e.replace(/\/$/,"")),r&&!t.normalizeProtocol&&(e=e.replace(/^http:\/\//,"//")),e}},function(e,t,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function o(e,t,r){if(e&&u.isObject(e)&&e instanceof n)return e;var o=new n;return o.parse(e,t,r),o}function i(e){return u.isString(e)&&(e=o(e)),e instanceof n?e.format():n.prototype.format.call(e)}function s(e,t){return o(e,!1,!0).resolve(t)}function a(e,t){return e?o(e,!1,!0).resolveObject(t):t}var c=r(0),u=r(14);t.parse=o,t.resolve=s,t.resolveObject=a,t.format=i,t.Url=n;var l=/^([a-z0-9.+-]+:)/i,h=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","\t"],d=["{","}","|","\\","^","`"].concat(p),v=["'"].concat(d),m=["%","/","?",";","#"].concat(v),y=["/","?","#"],g=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,j={javascript:!0,"javascript:":!0},w={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},x=r(15);n.prototype.parse=function(e,t,r){if(!u.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),o=-1!==n&&n<e.indexOf("#")?"?":"#",i=e.split(o),s=/\\/g;i[0]=i[0].replace(s,"/"),e=i.join(o);var a=e;if(a=a.trim(),!r&&1===e.split("#").length){var h=f.exec(a);if(h)return this.path=a,this.href=a,this.pathname=h[1],h[2]?(this.search=h[2],this.query=t?x.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var p=l.exec(a);if(p){p=p[0];var d=p.toLowerCase();this.protocol=d,a=a.substr(p.length)}if(r||p||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var _="//"===a.substr(0,2);!_||p&&w[p]||(a=a.substr(2),this.slashes=!0)}if(!w[p]&&(_||p&&!O[p])){for(var E=-1,A=0;A<y.length;A++){var I=a.indexOf(y[A]);-1!==I&&(-1===E||I<E)&&(E=I)}var k,C;C=-1===E?a.lastIndexOf("@"):a.lastIndexOf("@",E),-1!==C&&(k=a.slice(0,C),a=a.slice(C+1),this.auth=decodeURIComponent(k)),E=-1;for(var A=0;A<m.length;A++){var I=a.indexOf(m[A]);-1!==I&&(-1===E||I<E)&&(E=I)}-1===E&&(E=a.length),this.host=a.slice(0,E),a=a.slice(E),this.parseHost(),this.hostname=this.hostname||"";var M="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!M)for(var S=this.hostname.split(/\./),A=0,P=S.length;A<P;A++){var D=S[A];if(D&&!D.match(g)){for(var T="",U=0,q=D.length;U<q;U++)D.charCodeAt(U)>127?T+="x":T+=D[U];if(!T.match(g)){var H=S.slice(0,A),R=S.slice(A+1),L=D.match(b);L&&(H.push(L[1]),R.unshift(L[2])),R.length&&(a="/"+R.join(".")+a),this.hostname=H.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),M||(this.hostname=c.toASCII(this.hostname));var N=this.port?":"+this.port:"",$=this.hostname||"";this.host=$+N,this.href+=this.host,M&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!j[d])for(var A=0,P=v.length;A<P;A++){var F=v[A];if(-1!==a.indexOf(F)){var W=encodeURIComponent(F);W===F&&(W=escape(F)),a=a.split(F).join(W)}}var z=a.indexOf("#");-1!==z&&(this.hash=a.substr(z),a=a.slice(0,z));var B=a.indexOf("?");if(-1!==B?(this.search=a.substr(B),this.query=a.substr(B+1),t&&(this.query=x.parse(this.query)),a=a.slice(0,B)):t&&(this.search="",this.query={}),a&&(this.pathname=a),O[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var N=this.pathname||"",Q=this.search||"";this.path=N+Q}return this.href=this.format(),this},n.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&u.isObject(this.query)&&Object.keys(this.query).length&&(i=x.stringify(this.query));var s=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||O[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),s=s.replace("#","%23"),t+o+r+s+n},n.prototype.resolve=function(e){return this.resolveObject(o(e,!1,!0)).format()},n.prototype.resolveObject=function(e){if(u.isString(e)){var t=new n;t.parse(e,!1,!0),e=t}for(var r=new n,o=Object.keys(this),i=0;i<o.length;i++){var s=o[i];r[s]=this[s]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var a=Object.keys(e),c=0;c<a.length;c++){var l=a[c];"protocol"!==l&&(r[l]=e[l])}return O[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!O[e.protocol]){for(var h=Object.keys(e),f=0;f<h.length;f++){var p=h[f];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||w[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var v=r.pathname||"",m=r.search||"";r.path=v+m}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var y=r.pathname&&"/"===r.pathname.charAt(0),g=e.host||e.pathname&&"/"===e.pathname.charAt(0),b=g||y||r.host&&e.pathname,j=b,x=r.pathname&&r.pathname.split("/")||[],d=e.pathname&&e.pathname.split("/")||[],_=r.protocol&&!O[r.protocol];if(_&&(r.hostname="",r.port=null,r.host&&(""===x[0]?x[0]=r.host:x.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),b=b&&(""===d[0]||""===x[0])),g)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,x=d;else if(d.length)x||(x=[]),x.pop(),x=x.concat(d),r.search=e.search,r.query=e.query;else if(!u.isNullOrUndefined(e.search)){if(_){r.hostname=r.host=x.shift();var E=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");E&&(r.auth=E.shift(),r.host=r.hostname=E.shift())}return r.search=e.search,r.query=e.query,u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var A=x.slice(-1)[0],I=(r.host||e.host||x.length>1)&&("."===A||".."===A)||""===A,k=0,C=x.length;C>=0;C--)A=x[C],"."===A?x.splice(C,1):".."===A?(x.splice(C,1),k++):k&&(x.splice(C,1),k--);if(!b&&!j)for(;k--;k)x.unshift("..");!b||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),I&&"/"!==x.join("/").substr(-1)&&x.push("");var M=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(_){r.hostname=r.host=M?"":x.length?x.shift():"";var E=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");E&&(r.auth=E.shift(),r.host=r.hostname=E.shift())}return b=b||r.host&&x.length,b&&!M&&x.unshift(""),x.length?r.pathname=x.join("/"):(r.pathname=null,r.path=null),u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var e=this.host,t=h.exec(e);t&&(t=t[0],":"!==t&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},function(e,t,r){"use strict";t.decode=t.parse=r(16),t.encode=t.stringify=r(17)},function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var h,f,p,d,v=e[l].replace(a,"%20"),m=v.indexOf(r);m>=0?(h=v.substr(0,m),f=v.substr(m+1)):(h=v,f=""),p=decodeURIComponent(h),d=decodeURIComponent(f),n(s,p)?o(s[p])?s[p].push(d):s[p]=[s[p],d]:s[p]=d}return s};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?n(s(e),function(s){var a=encodeURIComponent(o(s))+r;return i(e[s])?n(e[s],function(e){return a+encodeURIComponent(o(e))}).join(t):a+encodeURIComponent(o(e[s]))}).join(t):a?encodeURIComponent(o(a))+r+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},function(e,t,r){"use strict";function n(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[i(t,e),"[",n,"]"].join(""):[i(t,e),"[",i(n,e),"]=",i(r,e)].join("")};case"bracket":return function(t,r){return null===r?i(t,e):[i(t,e),"[]=",i(r,e)].join("")};default:return function(t,r){return null===r?i(t,e):[i(t,e),"=",i(r,e)].join("")}}}function o(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(n[e]=r);void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return function(e,r,n){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===n[e]?void(n[e]=[r]):void(n[e]=[].concat(n[e],r)):void(n[e]=r)};default:return function(e,t,r){if(void 0===r[e])return void(r[e]=t);r[e]=[].concat(r[e],t)}}}function i(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function s(e){return Array.isArray(e)?e.sort():"object"==typeof e?s(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var a=r(19),c=r(2);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=c({arrayFormat:"none"},t);var r=o(t),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),r(decodeURIComponent(o),i,n)}),Object.keys(n).sort().reduce(function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=s(r):e[t]=r,e},Object.create(null))):n},t.stringify=function(e,t){t=c({encode:!0,strict:!0,arrayFormat:"none"},t);var r=n(t);return e?Object.keys(e).sort().map(function(n){var o=e[n];if(void 0===o)return"";if(null===o)return i(n,t);if(Array.isArray(o)){var s=[];return o.slice().forEach(function(e){void 0!==e&&s.push(r(n,e,s.length))}),s.join("&")}return i(n,t)+"="+i(o,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,r){"use strict";e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string, got "+typeof e);return e=e.trim(),/^\.*\/|^(?!localhost)\w+:/.test(e)?e:e.replace(/^(?!(?:\w+:)?\/\/)/,"http://")}},function(e,t,r){"use strict";var n=r(22);e.exports=function(e,t){if(!n(e))throw new TypeError("Expected a plain object");"function"==typeof(t=t||{})&&(t={compare:t});var r=t.deep,o=[],i=[],s=function(e){var a=o.indexOf(e);if(-1!==a)return i[a];var c={},u=Object.keys(e).sort(t.compare);o.push(e),i.push(c);for(var l=0;l<u.length;l++){var h=u[l],f=e[h];c[h]=r&&n(f)?s(f):f}return c};return s(e)}},function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t;return"[object Object]"===n.call(e)&&(null===(t=Object.getPrototypeOf(e))||t===Object.getPrototypeOf({}))}},function(e,t,r){function n(e,t,r){function n(t){var r=g,n=b;return g=b=void 0,_=t,w=e.apply(n,r)}function l(e){return _=e,O=setTimeout(p,t),E?n(e):w}function h(e){var r=e-x,n=e-_,o=t-r;return A?u(o,j-n):o}function f(e){var r=e-x,n=e-_;return void 0===x||r>=t||r<0||A&&n>=j}function p(){var e=i();if(f(e))return d(e);O=setTimeout(p,h(e))}function d(e){return O=void 0,I&&g?n(e):(g=b=void 0,w)}function v(){void 0!==O&&clearTimeout(O),_=0,g=x=b=O=void 0}function m(){return void 0===O?w:d(i())}function y(){var e=i(),r=f(e);if(g=arguments,b=this,x=e,r){if(void 0===O)return l(x);if(A)return O=setTimeout(p,t),n(x)}return void 0===O&&(O=setTimeout(p,t)),w}var g,b,j,w,O,x,_=0,E=!1,A=!1,I=!0;if("function"!=typeof e)throw new TypeError(a);return t=s(t)||0,o(r)&&(E=!!r.leading,A="maxWait"in r,j=A?c(s(r.maxWait)||0,t):j,I="trailing"in r?!!r.trailing:I),y.cancel=v,y.flush=m,y}var o=r(3),i=r(24),s=r(26),a="Expected a function",c=Math.max,u=Math.min;e.exports=n},function(e,t,r){var n=r(4),o=function(){return n.Date.now()};e.exports=o},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(1))},function(e,t,r){function n(e){if("number"==typeof e)return e;if(i(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=u.test(e);return r||l.test(e)?h(e.slice(2),r?2:8):c.test(e)?s:+e}var o=r(3),i=r(27),s=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,h=parseInt;e.exports=n},function(e,t,r){function n(e){return"symbol"==typeof e||i(e)&&o(e)==s}var o=r(28),i=r(31),s="[object Symbol]";e.exports=n},function(e,t,r){function n(e){return null==e?void 0===e?c:a:u&&u in Object(e)?i(e):s(e)}var o=r(5),i=r(29),s=r(30),a="[object Null]",c="[object Undefined]",u=o?o.toStringTag:void 0;e.exports=n},function(e,t,r){function n(e){var t=s.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[c]=r:delete e[c]),o}var o=r(5),i=Object.prototype,s=i.hasOwnProperty,a=i.toString,c=o?o.toStringTag:void 0;e.exports=n},function(e,t){function r(e){return o.call(e)}var n=Object.prototype,o=n.toString;e.exports=r},function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r}]);