(function(){var n={6989:function(n,t,e){async function r(){const n=await Promise.all([e.e(793),e.e(189)]).then(e.bind(e,5309));self.onmessage=function(t){const e=t.data.input,r=t.data.artifacts,o=n.TeamOptimizationWasm.optimize_team2(e,r);self.postMessage({type:"result",data:{result:o}})},self.postMessage({type:"ready"})}e(3948),r()}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=n,e.x=function(){var n=e.O(void 0,[948],(function(){return e(6989)}));return n=e.O(n),n},function(){var n="function"===typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(n){n&&(n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},i=function(n){!--n.r&&n()},u=function(n,t){n?n.push(t):i(t)},f=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var f=[];e.then((function(n){c[t]=n,o(f),f=0}),(function(n){c[r]=n,o(f),f=0}));var c={};return c[n]=function(n,t){u(f,n),e["catch"](t)},c}}var a={};return a[n]=function(n){i(n)},a[t]=e,a}))};e.a=function(e,c,a){var s,p,l,b=a&&[],h=e.exports,d=!0,m=!1,y=function(t,e,r){m||(m=!0,e.r+=t.length,t.map((function(t,o){t[n](e,r)})),m=!1)},v=new Promise((function(n,t){l=t,p=function(){n(h),o(b),b=0}}));v[t]=h,v[n]=function(n,t){if(d)return i(n);s&&y(s,n,t),u(b,n),v["catch"](t)},e.exports=v,c((function(n){var e;s=f(n);var o=function(){return s.map((function(n){if(n[r])throw n[r];return n[t]}))},i=new Promise((function(n,t){e=function(){n(o)},e.r=0,y(s,e,t)}));return e.r?i:o()}),(function(n){n&&l(v[r]=n),p()})),d=!1}}(),function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var f=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(f=!1,i<u&&(u=i));if(f){n.splice(s--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{189:"6effb7d2",793:"366efe16",948:"fd7ef36f"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.v=function(n,t,r,o){var i=fetch(e.p+""+r+".module.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,o).then((function(t){return Object.assign(n,t.instance.exports)})):i.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,o)})).then((function(t){return Object.assign(n,t.instance.exports)}))}}(),function(){e.p="/genshin_artifact/"}(),function(){var n={989:1},t=function(t){var r=t[0],i=t[1],u=t[2];for(var f in i)e.o(i,f)&&(e.m[f]=i[f]);u&&u(e);while(r.length)n[r.pop()]=1;o(t)};e.f.i=function(t,r){n[t]||importScripts(e.p+e.u(t))};var r=self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[],o=r.push.bind(r);r.push=t}(),function(){var n=e.x;e.x=function(){return e.e(948).then(n)}}();e.x()})();