"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[6878],{5649:function(r,t,n){var e=n(67697),o=n(92297),u=TypeError,i=Object.getOwnPropertyDescriptor,c=e&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(r){return r instanceof TypeError}}();r.exports=c?function(r,t){if(o(r)&&!i(r,"length").writable)throw new u("Cannot set read only .length");return r.length=t}:function(r,t){return r.length=t}},9015:function(r,t,n){var e=n(27578),o=n(6310),u=n(76522),i=Array,c=Math.max;r.exports=function(r,t,n){for(var a=o(r),f=e(t,a),s=e(void 0===n?a:n,a),p=i(c(s-f,0)),l=0;f<s;f++,l++)u(p,l,r[f]);return p.length=l,p}},96004:function(r,t,n){var e=n(68844);r.exports=e([].slice)},50382:function(r,t,n){var e=n(9015),o=Math.floor,u=function(r,t){var n=r.length,a=o(n/2);return n<8?i(r,t):c(r,u(e(r,0,a),t),u(e(r,a),t),t)},i=function(r,t){var n,e,o=r.length,u=1;while(u<o){e=u,n=r[u];while(e&&t(r[e-1],n)>0)r[e]=r[--e];e!==u++&&(r[e]=n)}return r},c=function(r,t,n,e){var o=t.length,u=n.length,i=0,c=0;while(i<o||c<u)r[i+c]=i<o&&c<u?e(t[i],n[c])<=0?t[i++]:n[c++]:i<o?t[i++]:n[c++];return r};r.exports=u},50926:function(r,t,n){var e=n(23043),o=n(69985),u=n(6648),i=n(44201),c=i("toStringTag"),a=Object,f="Arguments"===u(function(){return arguments}()),s=function(r,t){try{return r[t]}catch(n){}};r.exports=e?u:function(r){var t,n,e;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(n=s(t=a(r),c))?n:f?u(t):"Object"===(e=u(t))&&o(t.callee)?"Arguments":e}},76522:function(r,t,n){var e=n(18360),o=n(72560),u=n(75684);r.exports=function(r,t,n){var i=e(t);i in r?o.f(r,i,u(0,n)):r[i]=n}},55565:function(r){var t=TypeError,n=9007199254740991;r.exports=function(r){if(r>n)throw t("Maximum allowed index exceeded");return r}},97365:function(r,t,n){var e=n(30071),o=e.match(/firefox\/(\d+)/i);r.exports=!!o&&+o[1]},37298:function(r,t,n){var e=n(30071);r.exports=/MSIE|Trident/.test(e)},27922:function(r,t,n){var e=n(30071),o=e.match(/AppleWebKit\/(\d+)\./);r.exports=!!o&&+o[1]},56610:function(r,t,n){var e=n(68844),o=Error,u=e("".replace),i=function(r){return String(new o(r).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,a=c.test(i);r.exports=function(r,t){if(a&&"string"==typeof r&&!o.prepareStackTrace)while(t--)r=u(r,c,"");return r}},65411:function(r,t,n){var e=n(75773),o=n(56610),u=n(49599),i=Error.captureStackTrace;r.exports=function(r,t,n,c){u&&(i?i(r,t):e(r,"stack",o(n,c)))}},49599:function(r,t,n){var e=n(3689),o=n(75684);r.exports=!e((function(){var r=new Error("a");return!("stack"in r)||(Object.defineProperty(r,"stack",o(1,7)),7!==r.stack)}))},61735:function(r,t,n){var e=n(97215),o=Function.prototype,u=o.apply,i=o.call;r.exports="object"==typeof Reflect&&Reflect.apply||(e?i.bind(u):function(){return i.apply(u,arguments)})},54071:function(r,t,n){var e=n(46576),o=n(10509),u=n(97215),i=e(e.bind);r.exports=function(r,t){return o(r),void 0===t?r:u?i(r,t):function(){return r.apply(t,arguments)}}},46576:function(r,t,n){var e=n(6648),o=n(68844);r.exports=function(r){if("Function"===e(r))return o(r)}},92643:function(r,t,n){var e=n(68844),o=n(92297),u=n(69985),i=n(6648),c=n(34327),a=e([].push);r.exports=function(r){if(u(r))return r;if(o(r)){for(var t=r.length,n=[],e=0;e<t;e++){var f=r[e];"string"==typeof f?a(n,f):"number"!=typeof f&&"Number"!==i(f)&&"String"!==i(f)||a(n,c(f))}var s=n.length,p=!0;return function(r,t){if(p)return p=!1,t;if(o(this))return t;for(var e=0;e<s;e++)if(n[e]===r)return t}}}},33457:function(r,t,n){var e=n(69985),o=n(48999),u=n(49385);r.exports=function(r,t,n){var i,c;return u&&e(i=t.constructor)&&i!==n&&o(c=i.prototype)&&c!==n.prototype&&u(r,c),r}},62570:function(r,t,n){var e=n(48999),o=n(75773);r.exports=function(r,t){e(t)&&"cause"in t&&o(r,"cause",t.cause)}},92297:function(r,t,n){var e=n(6648);r.exports=Array.isArray||function(r){return"Array"===e(r)}},13841:function(r,t,n){var e=n(34327);r.exports=function(r,t){return void 0===r?arguments.length<2?"":t:e(r)}},38055:function(r,t,n){var e=n(72560).f;r.exports=function(r,t,n){n in r||e(r,n,{configurable:!0,get:function(){return t[n]},set:function(r){t[n]=r}})}},23043:function(r,t,n){var e=n(44201),o=e("toStringTag"),u={};u[o]="z",r.exports="[object z]"===String(u)},34327:function(r,t,n){var e=n(50926),o=String;r.exports=function(r){if("Symbol"===e(r))throw new TypeError("Cannot convert a Symbol value to a string");return o(r)}},51064:function(r,t,n){var e=n(76058),o=n(36812),u=n(75773),i=n(23622),c=n(49385),a=n(8758),f=n(38055),s=n(33457),p=n(13841),l=n(62570),v=n(65411),h=n(67697),g=n(53931);r.exports=function(r,t,n,y){var d="stackTraceLimit",x=y?2:1,b=r.split("."),E=b[b.length-1],w=e.apply(null,b);if(w){var m=w.prototype;if(!g&&o(m,"cause")&&delete m.cause,!n)return w;var S=e("Error"),k=t((function(r,t){var n=p(y?t:r,void 0),e=y?new w(r):new w;return void 0!==n&&u(e,"message",n),v(e,k,e.stack,2),this&&i(m,this)&&s(e,this,k),arguments.length>x&&l(e,arguments[x]),e}));if(k.prototype=m,"Error"!==E?c?c(k,S):a(k,S,{name:!0}):h&&d in w&&(f(k,w,d),f(k,w,"prepareStackTrace")),a(k,w),!g)try{m.name!==E&&u(m,"name",E),m.constructor=k}catch(T){}return k}}},70560:function(r,t,n){var e=n(79989),o=n(90690),u=n(6310),i=n(5649),c=n(55565),a=n(3689),f=a((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}},p=f||!s();e({target:"Array",proto:!0,arity:1,forced:p},{push:function(r){var t=o(this),n=u(t),e=arguments.length;c(n+e);for(var a=0;a<e;a++)t[n]=arguments[a],n++;return i(t,n),n}})},21057:function(r,t,n){var e=n(79989),o=n(19037),u=n(61735),i=n(51064),c="WebAssembly",a=o[c],f=7!==new Error("e",{cause:7}).cause,s=function(r,t){var n={};n[r]=i(r,t,f),e({global:!0,constructor:!0,arity:1,forced:f},n)},p=function(r,t){if(a&&a[r]){var n={};n[r]=i(c+"."+r,t,f),e({target:c,stat:!0,constructor:!0,arity:1,forced:f},n)}};s("Error",(function(r){return function(t){return u(r,this,arguments)}})),s("EvalError",(function(r){return function(t){return u(r,this,arguments)}})),s("RangeError",(function(r){return function(t){return u(r,this,arguments)}})),s("ReferenceError",(function(r){return function(t){return u(r,this,arguments)}})),s("SyntaxError",(function(r){return function(t){return u(r,this,arguments)}})),s("TypeError",(function(r){return function(t){return u(r,this,arguments)}})),s("URIError",(function(r){return function(t){return u(r,this,arguments)}})),p("CompileError",(function(r){return function(t){return u(r,this,arguments)}})),p("LinkError",(function(r){return function(t){return u(r,this,arguments)}})),p("RuntimeError",(function(r){return function(t){return u(r,this,arguments)}}))},48324:function(r,t,n){var e=n(79989),o=n(76058),u=n(61735),i=n(22615),c=n(68844),a=n(3689),f=n(69985),s=n(30734),p=n(96004),l=n(92643),v=n(50146),h=String,g=o("JSON","stringify"),y=c(/./.exec),d=c("".charAt),x=c("".charCodeAt),b=c("".replace),E=c(1..toString),w=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,k=!v||a((function(){var r=o("Symbol")("stringify detection");return"[null]"!==g([r])||"{}"!==g({a:r})||"{}"!==g(Object(r))})),T=a((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),A=function(r,t){var n=p(arguments),e=l(t);if(f(e)||void 0!==r&&!s(r))return n[1]=function(r,t){if(f(e)&&(t=i(e,this,h(r),t)),!s(t))return t},u(g,null,n)},F=function(r,t,n){var e=d(n,t-1),o=d(n,t+1);return y(m,r)&&!y(S,o)||y(S,r)&&!y(m,e)?"\\u"+E(x(r,0),16):r};g&&e({target:"JSON",stat:!0,arity:3,forced:k||T},{stringify:function(r,t,n){var e=p(arguments),o=u(k?A:g,null,e);return T&&"string"==typeof o?b(o,w,F):o}})}}]);