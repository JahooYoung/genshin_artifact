(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[9103,6094],{73344:function(t){function r(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=73344,t.exports=r},23013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(t,r,n){"use strict";var e,o,i,a=n(23013),u=n(19781),_=n(17854),c=n(60614),f=n(70111),s=n(92597),d=n(70648),g=n(66330),l=n(68880),p=n(98052),y=n(3070).f,b=n(47976),w=n(79518),h=n(27674),v=n(5112),m=n(69711),A=n(29909),x=A.enforce,T=A.get,E=_.Int8Array,S=E&&E.prototype,F=_.Uint8ClampedArray,j=F&&F.prototype,I=E&&w(E),k=S&&w(S),R=Object.prototype,O=_.TypeError,C=v("toStringTag"),z=m("TYPED_ARRAY_TAG"),U="TypedArrayConstructor",D=a&&!!h&&"Opera"!==d(_.opera),Y=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},N=function(t){if(!f(t))return!1;var r=d(t);return"DataView"===r||s(M,r)||s(P,r)},V=function(t){var r=w(t);if(f(r)){var n=T(r);return n&&s(n,U)?n[U]:V(r)}},B=function(t){if(!f(t))return!1;var r=d(t);return s(M,r)||s(P,r)},G=function(t){if(B(t))return t;throw O("Target is not a typed array")},W=function(t){if(c(t)&&(!h||b(I,t)))return t;throw O(g(t)+" is not a typed array constructor")},J=function(t,r,n,e){if(u){if(n)for(var o in M){var i=_[o];if(i&&s(i.prototype,t))try{delete i.prototype[t]}catch(a){try{i.prototype[t]=r}catch(c){}}}k[t]&&!n||p(k,t,n?r:D&&S[t]||r,e)}},L=function(t,r,n){var e,o;if(u){if(h){if(n)for(e in M)if(o=_[e],o&&s(o,t))try{delete o[t]}catch(i){}if(I[t]&&!n)return;try{return p(I,t,n?r:D&&I[t]||r)}catch(i){}}for(e in M)o=_[e],!o||o[t]&&!n||p(o,t,r)}};for(e in M)o=_[e],i=o&&o.prototype,i?x(i)[U]=o:D=!1;for(e in P)o=_[e],i=o&&o.prototype,i&&(x(i)[U]=o);if((!D||!c(I)||I===Function.prototype)&&(I=function(){throw O("Incorrect invocation")},D))for(e in M)_[e]&&h(_[e],I);if((!D||!k||k===R)&&(k=I.prototype,D))for(e in M)_[e]&&h(_[e].prototype,k);if(D&&w(j)!==k&&h(j,k),u&&!s(k,C))for(e in Y=!0,y(k,C,{get:function(){return f(this)?this[z]:void 0}}),M)_[e]&&l(_[e],z,e);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_TAG:Y&&z,aTypedArray:G,aTypedArrayConstructor:W,exportTypedArrayMethod:J,exportTypedArrayStaticMethod:L,getTypedArrayConstructor:V,isView:N,isTypedArray:B,TypedArray:I,TypedArrayPrototype:k}},9671:function(t,r,n){var e=n(49974),o=n(68361),i=n(47908),a=n(26244),u=function(t){var r=1==t;return function(n,u,_){var c,f,s=i(n),d=o(s),g=e(u,_),l=a(d);while(l-- >0)if(c=d[l],f=g(c,l,s),f)switch(t){case 0:return c;case 1:return l}return r?-1:void 0}};t.exports={findLast:u(0),findLastIndex:u(1)}},83658:function(t,r,n){"use strict";var e=n(19781),o=n(43157),i=TypeError,a=Object.getOwnPropertyDescriptor,u=e&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,r){if(o(t)&&!a(t,"length").writable)throw i("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r}},41589:function(t,r,n){var e=n(51400),o=n(26244),i=n(86135),a=Array,u=Math.max;t.exports=function(t,r,n){for(var _=o(t),c=e(r,_),f=e(void 0===n?_:n,_),s=a(u(f-c,0)),d=0;c<f;c++,d++)i(s,d,t[c]);return s.length=d,s}},50206:function(t,r,n){var e=n(1702);t.exports=e([].slice)},94362:function(t,r,n){var e=n(41589),o=Math.floor,i=function(t,r){var n=t.length,_=o(n/2);return n<8?a(t,r):u(t,i(e(t,0,_),r),i(e(t,_),r),r)},a=function(t,r){var n,e,o=t.length,i=1;while(i<o){e=i,n=t[i];while(e&&r(t[e-1],n)>0)t[e]=t[--e];e!==i++&&(t[e]=n)}return t},u=function(t,r,n,e){var o=r.length,i=n.length,a=0,u=0;while(a<o||u<i)t[a+u]=a<o&&u<i?e(r[a],n[u])<=0?r[a++]:n[u++]:a<o?r[a++]:n[u++];return t};t.exports=i},70648:function(t,r,n){var e=n(51694),o=n(60614),i=n(84326),a=n(5112),u=a("toStringTag"),_=Object,c="Arguments"==i(function(){return arguments}()),f=function(t,r){try{return t[r]}catch(n){}};t.exports=e?i:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=f(r=_(t),u))?n:c?i(r):"Object"==(e=i(r))&&o(r.callee)?"Arguments":e}},86135:function(t,r,n){"use strict";var e=n(34948),o=n(3070),i=n(79114);t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,i(0,n)):t[a]=n}},7207:function(t){var r=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw r("Maximum allowed index exceeded");return t}},68886:function(t,r,n){var e=n(88113),o=e.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},30256:function(t,r,n){var e=n(88113);t.exports=/MSIE|Trident/.test(e)},98008:function(t,r,n){var e=n(88113),o=e.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},11060:function(t,r,n){var e=n(1702),o=Error,i=e("".replace),a=function(t){return String(o(t).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,_=u.test(a);t.exports=function(t,r){if(_&&"string"==typeof t&&!o.prepareStackTrace)while(r--)t=i(t,u,"");return t}},22914:function(t,r,n){var e=n(47293),o=n(79114);t.exports=!e((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},22104:function(t,r,n){var e=n(34374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(e?a.bind(i):function(){return a.apply(i,arguments)})},49974:function(t,r,n){var e=n(21470),o=n(19662),i=n(34374),a=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},21470:function(t,r,n){var e=n(84326),o=n(1702);t.exports=function(t){if("Function"===e(t))return o(t)}},79587:function(t,r,n){var e=n(60614),o=n(70111),i=n(27674);t.exports=function(t,r,n){var a,u;return i&&e(a=r.constructor)&&a!==n&&o(u=a.prototype)&&u!==n.prototype&&i(t,u),t}},58340:function(t,r,n){var e=n(70111),o=n(68880);t.exports=function(t,r){e(r)&&"cause"in r&&o(t,"cause",r.cause)}},43157:function(t,r,n){var e=n(84326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},56277:function(t,r,n){var e=n(41340);t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:e(t)}},2626:function(t,r,n){var e=n(3070).f;t.exports=function(t,r,n){n in t||e(t,n,{configurable:!0,get:function(){return r[n]},set:function(t){r[n]=t}})}},84590:function(t,r,n){var e=n(73002),o=RangeError;t.exports=function(t,r){var n=e(t);if(n%r)throw o("Wrong offset");return n}},73002:function(t,r,n){var e=n(19303),o=RangeError;t.exports=function(t){var r=e(t);if(r<0)throw o("The argument can't be less than 0");return r}},51694:function(t,r,n){var e=n(5112),o=e("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},41340:function(t,r,n){var e=n(70648),o=String;t.exports=function(t){if("Symbol"===e(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},89191:function(t,r,n){"use strict";var e=n(35005),o=n(92597),i=n(68880),a=n(47976),u=n(27674),_=n(99920),c=n(2626),f=n(79587),s=n(56277),d=n(58340),g=n(11060),l=n(22914),p=n(19781),y=n(31913);t.exports=function(t,r,n,b){var w="stackTraceLimit",h=b?2:1,v=t.split("."),m=v[v.length-1],A=e.apply(null,v);if(A){var x=A.prototype;if(!y&&o(x,"cause")&&delete x.cause,!n)return A;var T=e("Error"),E=r((function(t,r){var n=s(b?r:t,void 0),e=b?new A(t):new A;return void 0!==n&&i(e,"message",n),l&&i(e,"stack",g(e.stack,2)),this&&a(x,this)&&f(e,this,E),arguments.length>h&&d(e,arguments[h]),e}));if(E.prototype=x,"Error"!==m?u?u(E,T):_(E,T,{name:!0}):p&&w in A&&(c(E,A,w),c(E,A,"prepareStackTrace")),_(E,A),!y)try{x.name!==m&&i(x,"name",m),x.constructor=E}catch(S){}return E}}},57658:function(t,r,n){"use strict";var e=n(82109),o=n(47908),i=n(26244),a=n(83658),u=n(7207),_=n(47293),c=_((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();e({target:"Array",proto:!0,arity:1,forced:c||f},{push:function(t){var r=o(this),n=i(r),e=arguments.length;u(n+e);for(var _=0;_<e;_++)r[n]=arguments[_],n++;return a(r,n),n}})},21703:function(t,r,n){var e=n(82109),o=n(17854),i=n(22104),a=n(89191),u="WebAssembly",_=o[u],c=7!==Error("e",{cause:7}).cause,f=function(t,r){var n={};n[t]=a(t,r,c),e({global:!0,constructor:!0,arity:1,forced:c},n)},s=function(t,r){if(_&&_[t]){var n={};n[t]=a(u+"."+t,r,c),e({target:u,stat:!0,constructor:!0,arity:1,forced:c},n)}};f("Error",(function(t){return function(r){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(r){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(r){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(r){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(r){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(r){return i(t,this,arguments)}})),f("URIError",(function(t){return function(r){return i(t,this,arguments)}})),s("CompileError",(function(t){return function(r){return i(t,this,arguments)}})),s("LinkError",(function(t){return function(r){return i(t,this,arguments)}})),s("RuntimeError",(function(t){return function(r){return i(t,this,arguments)}}))},35837:function(t,r,n){var e=n(82109),o=n(17854);e({global:!0,forced:o.globalThis!==o},{globalThis:o})},38862:function(t,r,n){var e=n(82109),o=n(35005),i=n(22104),a=n(46916),u=n(1702),_=n(47293),c=n(43157),f=n(60614),s=n(70111),d=n(52190),g=n(50206),l=n(36293),p=o("JSON","stringify"),y=u(/./.exec),b=u("".charAt),w=u("".charCodeAt),h=u("".replace),v=u(1..toString),m=/[\uD800-\uDFFF]/g,A=/^[\uD800-\uDBFF]$/,x=/^[\uDC00-\uDFFF]$/,T=!l||_((function(){var t=o("Symbol")();return"[null]"!=p([t])||"{}"!=p({a:t})||"{}"!=p(Object(t))})),E=_((function(){return'"\\udf06\\ud834"'!==p("\udf06\ud834")||'"\\udead"'!==p("\udead")})),S=function(t,r){var n=g(arguments),e=r;if((s(r)||void 0!==t)&&!d(t))return c(r)||(r=function(t,r){if(f(e)&&(r=a(e,this,t,r)),!d(r))return r}),n[1]=r,i(p,null,n)},F=function(t,r,n){var e=b(n,r-1),o=b(n,r+1);return y(A,t)&&!y(x,o)||y(x,t)&&!y(A,e)?"\\u"+v(w(t,0),16):t};p&&e({target:"JSON",stat:!0,arity:3,forced:T||E},{stringify:function(t,r,n){var e=g(arguments),o=i(T?S:p,null,e);return E&&"string"==typeof o?h(o,m,F):o}})},48675:function(t,r,n){"use strict";var e=n(90260),o=n(26244),i=n(19303),a=e.aTypedArray,u=e.exportTypedArrayMethod;u("at",(function(t){var r=a(this),n=o(r),e=i(t),u=e>=0?e:n+e;return u<0||u>=n?void 0:r[u]}))},14590:function(t,r,n){"use strict";var e=n(90260),o=n(9671).findLastIndex,i=e.aTypedArray,a=e.exportTypedArrayMethod;a("findLastIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},63408:function(t,r,n){"use strict";var e=n(90260),o=n(9671).findLast,i=e.aTypedArray,a=e.exportTypedArrayMethod;a("findLast",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3462:function(t,r,n){"use strict";var e=n(17854),o=n(46916),i=n(90260),a=n(26244),u=n(84590),_=n(47908),c=n(47293),f=e.RangeError,s=e.Int8Array,d=s&&s.prototype,g=d&&d.set,l=i.aTypedArray,p=i.exportTypedArrayMethod,y=!c((function(){var t=new Uint8ClampedArray(2);return o(g,t,{length:1,0:3},1),3!==t[1]})),b=y&&i.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new s(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));p("set",(function(t){l(this);var r=u(arguments.length>1?arguments[1]:void 0,1),n=_(t);if(y)return o(g,this,n,r);var e=this.length,i=a(n),c=0;if(i+r>e)throw f("Wrong length");while(c<i)this[r+c]=n[c++]}),!y||b)},33824:function(t,r,n){"use strict";var e=n(17854),o=n(21470),i=n(47293),a=n(19662),u=n(94362),_=n(90260),c=n(68886),f=n(30256),s=n(7392),d=n(98008),g=_.aTypedArray,l=_.exportTypedArrayMethod,p=e.Uint16Array,y=p&&o(p.prototype.sort),b=!!y&&!(i((function(){y(new p(2),null)}))&&i((function(){y(new p(2),{})}))),w=!!y&&!i((function(){if(s)return s<74;if(c)return c<67;if(f)return!0;if(d)return d<602;var t,r,n=new p(516),e=Array(516);for(t=0;t<516;t++)r=t%4,n[t]=515-t,e[t]=t-2*r+3;for(y(n,(function(t,r){return(t/4|0)-(r/4|0)})),t=0;t<516;t++)if(n[t]!==e[t])return!0})),h=function(t){return function(r,n){return void 0!==t?+t(r,n)||0:n!==n?-1:r!==r?1:0===r&&0===n?1/r>0&&1/n<0?1:-1:r>n}};l("sort",(function(t){return void 0!==t&&a(t),w?y(this,t):u(g(this),h(t))}),!w||b)},69103:function(t,r,n){"use strict";n.a(t,(async function(t,e){try{n.r(r),n.d(r,{BonusPerStat:function(){return o.uy},CalcArtifactBestSet:function(){return o.yU},CalculatorInterface:function(){return o.Eq},CommonInterface:function(){return o.sw},DSLInterface:function(){return o.H},OptimizeSingleWasm:function(){return o.ZN},PotentialInterface:function(){return o.NY},TeamOptimizationWasm:function(){return o.fn},TransformativeDamage:function(){return o.Tw},__wbg_buffer_397eaa4d72ee94dd:function(){return o.jp},__wbg_call_888d259a5fefc347:function(){return o.BT},__wbg_crypto_9e3521ed42436d35:function(){return o.cF},__wbg_error_09919627ac0992f5:function(){return o.gk},__wbg_getRandomValues_3e46aa268da0fed1:function(){return o.cR},__wbg_globalThis_3f735a5746d41fbd:function(){return o.ud},__wbg_global_1bc0b39582740e95:function(){return o.PT},__wbg_length_1eb8fc608a0d4cdb:function(){return o.A7},__wbg_log_3445347661d4505e:function(){return o.JV},__wbg_modulerequire_0a83c0c31d12d2c7:function(){return o.GX},__wbg_msCrypto_c429c3f8f7a70bb5:function(){return o.vG},__wbg_new_693216e109162396:function(){return o.Ih},__wbg_new_a7ce447f15ff496f:function(){return o.y4},__wbg_newnoargs_be86524d73f67598:function(){return o.wg},__wbg_newwithlength_929232475839a482:function(){return o.b0},__wbg_node_ee3f6da4130bd35f:function(){return o.GS},__wbg_process_f2b73829dbd321da:function(){return o.MF},__wbg_randomFillSync_59fcc2add91fe7b3:function(){return o._8},__wbg_self_c6fbdfc2918d5e58:function(){return o.JX},__wbg_set_969ad0a60e51d320:function(){return o.YQ},__wbg_stack_0ddaca5d1abfb52f:function(){return o.yq},__wbg_subarray_8b658422a224f479:function(){return o.uf},__wbg_versions_cd82f79c98672a9f:function(){return o.Y8},__wbg_window_baec038b5ab35c54:function(){return o.xd},__wbindgen_is_object:function(){return o.Wl},__wbindgen_is_string:function(){return o.eY},__wbindgen_is_undefined:function(){return o.XP},__wbindgen_json_parse:function(){return o.t$},__wbindgen_json_serialize:function(){return o.r1},__wbindgen_memory:function(){return o.oH},__wbindgen_object_clone_ref:function(){return o.m_},__wbindgen_object_drop_ref:function(){return o.ug},__wbindgen_string_new:function(){return o.h4},__wbindgen_throw:function(){return o.Or}});var o=n(82518),i=t([o]);o=(i.then?(await i)():i)[0],e()}catch(a){e(a)}}))},82518:function(t,r,n){"use strict";n.a(t,(async function(e,o){try{n.d(r,{A7:function(){return lt},BT:function(){return ot},Eq:function(){return O},GS:function(){return Q},GX:function(){return K},H:function(){return z},Ih:function(){return G},JV:function(){return nt},JX:function(){return at},MF:function(){return X},NY:function(){return D},Or:function(){return bt},PT:function(){return ct},Tw:function(){return M},Wl:function(){return H},XP:function(){return ft},Y8:function(){return $},YQ:function(){return gt},ZN:function(){return U},_8:function(){return q},b0:function(){return pt},cF:function(){return tt},cR:function(){return L},eY:function(){return Z},fn:function(){return Y},gk:function(){return J},h4:function(){return V},jp:function(){return st},m_:function(){return it},oH:function(){return wt},r1:function(){return N},sw:function(){return C},t$:function(){return P},ud:function(){return _t},uf:function(){return yt},ug:function(){return B},uy:function(){return k},vG:function(){return rt},wg:function(){return et},xd:function(){return ut},y4:function(){return dt},yU:function(){return R},yq:function(){return W}});n(48675),n(63408),n(14590),n(3462),n(33824),n(57658),n(21703),n(38862),n(35837);var i=n(6858);t=n.hmd(t);var a=e([i]);i=(a.then?(await a)():a)[0];const _="undefined"===typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder;let c=new _("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let f=null;function s(){return null!==f&&f.buffer===i.memory.buffer||(f=new Uint8Array(i.memory.buffer)),f}function d(t,r){return c.decode(s().subarray(t,t+r))}const g=new Array(32).fill(void 0);g.push(void 0,null,!0,!1);let l=g.length;function p(t){l===g.length&&g.push(g.length+1);const r=l;return l=g[r],g[r]=t,r}function y(t){return g[t]}let b=0;const w="undefined"===typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder;let h=new w("utf-8");const v="function"===typeof h.encodeInto?function(t,r){return h.encodeInto(t,r)}:function(t,r){const n=h.encode(t);return r.set(n),{read:t.length,written:n.length}};function m(t,r,n){if(void 0===n){const n=h.encode(t),e=r(n.length);return s().subarray(e,e+n.length).set(n),b=n.length,e}let e=t.length,o=r(e);const i=s();let a=0;for(;a<e;a++){const r=t.charCodeAt(a);if(r>127)break;i[o+a]=r}if(a!==e){0!==a&&(t=t.slice(a)),o=n(o,e,e=a+3*t.length);const r=s().subarray(o+a,o+e),i=v(t,r);a+=i.written}return b=a,o}let A=null;function x(){return null!==A&&A.buffer===i.memory.buffer||(A=new Int32Array(i.memory.buffer)),A}function T(t){t<36||(g[t]=l,l=t)}function E(t){const r=y(t);return T(t),r}let S=32;function F(t){if(1==S)throw new Error("out of js stack");return g[--S]=t,S}function j(t,r){try{return t.apply(this,r)}catch(n){i.__wbindgen_export_3(p(n))}}function I(t,r){return s().subarray(t/1,t/1+r)}class k{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_bonusperstat_free(t)}static bonus_per_stat(t){try{var r=i.bonusperstat_bonus_per_stat(F(t));return E(r)}finally{g[S++]=void 0}}}class R{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_calcartifactbestset_free(t)}static calc_artifact_best_set(t){try{var r=i.calcartifactbestset_calc_artifact_best_set(F(t));return E(r)}finally{g[S++]=void 0}}}class O{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_calculatorinterface_free(t)}static get_damage_analysis(t,r){try{var n=i.calculatorinterface_get_damage_analysis(F(t),F(r));return E(n)}finally{g[S++]=void 0,g[S++]=void 0}}static get_transformative_damage(t){try{var r=i.calculatorinterface_get_transformative_damage(F(t));return M.__wrap(r)}finally{g[S++]=void 0}}}class C{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_commoninterface_free(t)}static get_attribute(t){try{var r=i.commoninterface_get_attribute(F(t));return E(r)}finally{g[S++]=void 0}}static get_artifacts_rank_by_character(t,r,n,e){try{var o=i.commoninterface_get_artifacts_rank_by_character(F(t),F(r),F(n),F(e));return E(o)}finally{g[S++]=void 0,g[S++]=void 0,g[S++]=void 0,g[S++]=void 0}}}class z{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_dslinterface_free(t)}static run(t,r,n){try{var e=m(t,i.__wbindgen_export_0,i.__wbindgen_export_1),o=b,a=i.dslinterface_run(e,o,F(r),F(n));return E(a)}finally{g[S++]=void 0,g[S++]=void 0}}}class U{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_optimizesinglewasm_free(t)}static optimize(t,r){try{var n=i.optimizesinglewasm_optimize(F(t),F(r));return E(n)}finally{g[S++]=void 0,g[S++]=void 0}}}class D{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_potentialinterface_free(t)}static get_potential(t,r){try{var n=i.potentialinterface_get_potential(F(t),F(r));return E(n)}finally{g[S++]=void 0,g[S++]=void 0}}}class Y{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_teamoptimizationwasm_free(t)}static optimize_team2(t,r){try{var n=i.teamoptimizationwasm_optimize_team2(F(t),F(r));return E(n)}finally{g[S++]=void 0,g[S++]=void 0}}}class M{static __wrap(t){const r=Object.create(M.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_transformativedamage_free(t)}get swirl_cryo(){var t=i.__wbg_get_transformativedamage_swirl_cryo(this.ptr);return t}set swirl_cryo(t){i.__wbg_set_transformativedamage_swirl_cryo(this.ptr,t)}get swirl_hydro(){var t=i.__wbg_get_transformativedamage_swirl_hydro(this.ptr);return t}set swirl_hydro(t){i.__wbg_set_transformativedamage_swirl_hydro(this.ptr,t)}get swirl_pyro(){var t=i.__wbg_get_transformativedamage_swirl_pyro(this.ptr);return t}set swirl_pyro(t){i.__wbg_set_transformativedamage_swirl_pyro(this.ptr,t)}get swirl_electro(){var t=i.__wbg_get_transformativedamage_swirl_electro(this.ptr);return t}set swirl_electro(t){i.__wbg_set_transformativedamage_swirl_electro(this.ptr,t)}get overload(){var t=i.__wbg_get_transformativedamage_overload(this.ptr);return t}set overload(t){i.__wbg_set_transformativedamage_overload(this.ptr,t)}get electro_charged(){var t=i.__wbg_get_transformativedamage_electro_charged(this.ptr);return t}set electro_charged(t){i.__wbg_set_transformativedamage_electro_charged(this.ptr,t)}get shatter(){var t=i.__wbg_get_transformativedamage_shatter(this.ptr);return t}set shatter(t){i.__wbg_set_transformativedamage_shatter(this.ptr,t)}get superconduct(){var t=i.__wbg_get_transformativedamage_superconduct(this.ptr);return t}set superconduct(t){i.__wbg_set_transformativedamage_superconduct(this.ptr,t)}get bloom(){var t=i.__wbg_get_transformativedamage_bloom(this.ptr);return t}set bloom(t){i.__wbg_set_transformativedamage_bloom(this.ptr,t)}get hyperbloom(){var t=i.__wbg_get_transformativedamage_hyperbloom(this.ptr);return t}set hyperbloom(t){i.__wbg_set_transformativedamage_hyperbloom(this.ptr,t)}get burgeon(){var t=i.__wbg_get_transformativedamage_burgeon(this.ptr);return t}set burgeon(t){i.__wbg_set_transformativedamage_burgeon(this.ptr,t)}get burning(){var t=i.__wbg_get_transformativedamage_burning(this.ptr);return t}set burning(t){i.__wbg_set_transformativedamage_burning(this.ptr,t)}get crystallize(){var t=i.__wbg_get_transformativedamage_crystallize(this.ptr);return t}set crystallize(t){i.__wbg_set_transformativedamage_crystallize(this.ptr,t)}}function P(t,r){var n=JSON.parse(d(t,r));return p(n)}function N(t,r){const n=y(r);var e=JSON.stringify(void 0===n?null:n),o=m(e,i.__wbindgen_export_0,i.__wbindgen_export_1),a=b;x()[t/4+1]=a,x()[t/4+0]=o}function V(t,r){var n=d(t,r);return p(n)}function B(t){E(t)}function G(){var t=new Error;return p(t)}function W(t,r){var n=y(r).stack,e=m(n,i.__wbindgen_export_0,i.__wbindgen_export_1),o=b;x()[t/4+1]=o,x()[t/4+0]=e}function J(t,r){try{console.error(d(t,r))}finally{i.__wbindgen_export_2(t,r)}}function L(){return j((function(t,r){y(t).getRandomValues(y(r))}),arguments)}function q(){return j((function(t,r,n){y(t).randomFillSync(I(r,n))}),arguments)}function X(t){var r=y(t).process;return p(r)}function H(t){const r=y(t);var n="object"===typeof r&&null!==r;return n}function $(t){var r=y(t).versions;return p(r)}function Q(t){var r=y(t).node;return p(r)}function Z(t){var r="string"===typeof y(t);return r}function K(){return j((function(t,r){var e=n(73344)(d(t,r));return p(e)}),arguments)}function tt(t){var r=y(t).crypto;return p(r)}function rt(t){var r=y(t).msCrypto;return p(r)}function nt(t){console.log(y(t))}function et(t,r){var n=new Function(d(t,r));return p(n)}function ot(){return j((function(t,r){var n=y(t).call(y(r));return p(n)}),arguments)}function it(t){var r=y(t);return p(r)}function at(){return j((function(){var t=self.self;return p(t)}),arguments)}function ut(){return j((function(){var t=window.window;return p(t)}),arguments)}function _t(){return j((function(){var t=globalThis.globalThis;return p(t)}),arguments)}function ct(){return j((function(){var t=n.g.global;return p(t)}),arguments)}function ft(t){var r=void 0===y(t);return r}function st(t){var r=y(t).buffer;return p(r)}function dt(t){var r=new Uint8Array(y(t));return p(r)}function gt(t,r,n){y(t).set(y(r),n>>>0)}function lt(t){var r=y(t).length;return r}function pt(t){var r=new Uint8Array(t>>>0);return p(r)}function yt(t,r,n){var e=y(t).subarray(r>>>0,n>>>0);return p(e)}function bt(t,r){throw new Error(d(t,r))}function wt(){var t=i.memory;return p(t)}o()}catch(u){o(u)}}))},6858:function(t,r,n){"use strict";n.a(t,(async function(e,o){try{var i=n(82518),a=e([i]),[i]=a.then?(await a)():a;await n.v(r,t.id,"eb6779506563840a",{"./mona_wasm_bg.js":{__wbindgen_json_parse:i.t$,__wbindgen_json_serialize:i.r1,__wbindgen_string_new:i.h4,__wbindgen_object_drop_ref:i.ug,__wbg_new_693216e109162396:i.Ih,__wbg_stack_0ddaca5d1abfb52f:i.yq,__wbg_error_09919627ac0992f5:i.gk,__wbg_getRandomValues_3e46aa268da0fed1:i.cR,__wbg_randomFillSync_59fcc2add91fe7b3:i._8,__wbg_process_f2b73829dbd321da:i.MF,__wbindgen_is_object:i.Wl,__wbg_versions_cd82f79c98672a9f:i.Y8,__wbg_node_ee3f6da4130bd35f:i.GS,__wbindgen_is_string:i.eY,__wbg_modulerequire_0a83c0c31d12d2c7:i.GX,__wbg_crypto_9e3521ed42436d35:i.cF,__wbg_msCrypto_c429c3f8f7a70bb5:i.vG,__wbg_log_3445347661d4505e:i.JV,__wbg_newnoargs_be86524d73f67598:i.wg,__wbg_call_888d259a5fefc347:i.BT,__wbindgen_object_clone_ref:i.m_,__wbg_self_c6fbdfc2918d5e58:i.JX,__wbg_window_baec038b5ab35c54:i.xd,__wbg_globalThis_3f735a5746d41fbd:i.ud,__wbg_global_1bc0b39582740e95:i.PT,__wbindgen_is_undefined:i.XP,__wbg_buffer_397eaa4d72ee94dd:i.jp,__wbg_new_a7ce447f15ff496f:i.y4,__wbg_set_969ad0a60e51d320:i.YQ,__wbg_length_1eb8fc608a0d4cdb:i.A7,__wbg_newwithlength_929232475839a482:i.b0,__wbg_subarray_8b658422a224f479:i.uf,__wbindgen_throw:i.Or,__wbindgen_memory:i.oH}}),o()}catch(u){o(u)}}),1)}}]);