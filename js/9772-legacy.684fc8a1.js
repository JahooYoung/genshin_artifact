(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[9772],{73344:function(t){function r(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=73344,t.exports=r},24019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(t,r,n){"use strict";var e,o,_,i=n(24019),a=n(19781),u=n(17854),c=n(60614),f=n(70111),s=n(92597),d=n(70648),g=n(66330),w=n(68880),b=n(98052),l=n(3070).f,y=n(47976),p=n(79518),h=n(27674),v=n(5112),m=n(69711),A=u.Int8Array,T=A&&A.prototype,x=u.Uint8ClampedArray,R=x&&x.prototype,E=A&&p(A),I=T&&p(T),Y=Object.prototype,j=u.TypeError,F=v("toStringTag"),O=m("TYPED_ARRAY_TAG"),C=m("TYPED_ARRAY_CONSTRUCTOR"),S=i&&!!h&&"Opera"!==d(u.opera),U=!1,k={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},P=function(t){if(!f(t))return!1;var r=d(t);return"DataView"===r||s(k,r)||s(D,r)},V=function(t){if(!f(t))return!1;var r=d(t);return s(k,r)||s(D,r)},z=function(t){if(V(t))return t;throw j("Target is not a typed array")},M=function(t){if(c(t)&&(!h||y(E,t)))return t;throw j(g(t)+" is not a typed array constructor")},N=function(t,r,n,e){if(a){if(n)for(var o in k){var _=u[o];if(_&&s(_.prototype,t))try{delete _.prototype[t]}catch(i){try{_.prototype[t]=r}catch(c){}}}I[t]&&!n||b(I,t,n?r:S&&T[t]||r,e)}},G=function(t,r,n){var e,o;if(a){if(h){if(n)for(e in k)if(o=u[e],o&&s(o,t))try{delete o[t]}catch(_){}if(E[t]&&!n)return;try{return b(E,t,n?r:S&&E[t]||r)}catch(_){}}for(e in k)o=u[e],!o||o[t]&&!n||b(o,t,r)}};for(e in k)o=u[e],_=o&&o.prototype,_?w(_,C,o):S=!1;for(e in D)o=u[e],_=o&&o.prototype,_&&w(_,C,o);if((!S||!c(E)||E===Function.prototype)&&(E=function(){throw j("Incorrect invocation")},S))for(e in k)u[e]&&h(u[e],E);if((!S||!I||I===Y)&&(I=E.prototype,S))for(e in k)u[e]&&h(u[e].prototype,I);if(S&&p(R)!==I&&h(R,I),a&&!s(I,F))for(e in U=!0,l(I,F,{get:function(){return f(this)?this[O]:void 0}}),k)u[e]&&w(u[e],O,e);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:S,TYPED_ARRAY_CONSTRUCTOR:C,TYPED_ARRAY_TAG:U&&O,aTypedArray:z,aTypedArrayConstructor:M,exportTypedArrayMethod:N,exportTypedArrayStaticMethod:G,isView:P,isTypedArray:V,TypedArray:E,TypedArrayPrototype:I}},9671:function(t,r,n){var e=n(49974),o=n(68361),_=n(47908),i=n(26244),a=function(t){var r=1==t;return function(n,a,u){var c,f,s=_(n),d=o(s),g=e(a,u),w=i(d);while(w-- >0)if(c=d[w],f=g(c,w,s),f)switch(t){case 0:return c;case 1:return w}return r?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},84590:function(t,r,n){var e=n(73002),o=RangeError;t.exports=function(t,r){var n=e(t);if(n%r)throw o("Wrong offset");return n}},73002:function(t,r,n){var e=n(19303),o=RangeError;t.exports=function(t){var r=e(t);if(r<0)throw o("The argument can't be less than 0");return r}},35837:function(t,r,n){var e=n(82109),o=n(17854);e({global:!0},{globalThis:o})},48675:function(t,r,n){"use strict";var e=n(90260),o=n(26244),_=n(19303),i=e.aTypedArray,a=e.exportTypedArrayMethod;a("at",(function(t){var r=i(this),n=o(r),e=_(t),a=e>=0?e:n+e;return a<0||a>=n?void 0:r[a]}))},14590:function(t,r,n){"use strict";var e=n(90260),o=n(9671).findLastIndex,_=e.aTypedArray,i=e.exportTypedArrayMethod;i("findLastIndex",(function(t){return o(_(this),t,arguments.length>1?arguments[1]:void 0)}))},63408:function(t,r,n){"use strict";var e=n(90260),o=n(9671).findLast,_=e.aTypedArray,i=e.exportTypedArrayMethod;i("findLast",(function(t){return o(_(this),t,arguments.length>1?arguments[1]:void 0)}))},3462:function(t,r,n){"use strict";var e=n(17854),o=n(46916),_=n(90260),i=n(26244),a=n(84590),u=n(47908),c=n(47293),f=e.RangeError,s=e.Int8Array,d=s&&s.prototype,g=d&&d.set,w=_.aTypedArray,b=_.exportTypedArrayMethod,l=!c((function(){var t=new Uint8ClampedArray(2);return o(g,t,{length:1,0:3},1),3!==t[1]})),y=l&&_.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new s(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));b("set",(function(t){w(this);var r=a(arguments.length>1?arguments[1]:void 0,1),n=u(t);if(l)return o(g,this,n,r);var e=this.length,_=i(n),c=0;if(_+r>e)throw f("Wrong length");while(c<_)this[r+c]=n[c++]}),!l||y)},33824:function(t,r,n){"use strict";var e=n(17854),o=n(1702),_=n(47293),i=n(19662),a=n(94362),u=n(90260),c=n(68886),f=n(30256),s=n(7392),d=n(98008),g=u.aTypedArray,w=u.exportTypedArrayMethod,b=e.Uint16Array,l=b&&o(b.prototype.sort),y=!!l&&!(_((function(){l(new b(2),null)}))&&_((function(){l(new b(2),{})}))),p=!!l&&!_((function(){if(s)return s<74;if(c)return c<67;if(f)return!0;if(d)return d<602;var t,r,n=new b(516),e=Array(516);for(t=0;t<516;t++)r=t%4,n[t]=515-t,e[t]=t-2*r+3;for(l(n,(function(t,r){return(t/4|0)-(r/4|0)})),t=0;t<516;t++)if(n[t]!==e[t])return!0})),h=function(t){return function(r,n){return void 0!==t?+t(r,n)||0:n!==n?-1:r!==r?1:0===r&&0===n?1/r>0&&1/n<0?1:-1:r>n}};w("sort",(function(t){return void 0!==t&&i(t),p?l(this,t):a(g(this),h(t))}),!p||y)},85493:function(t,r,n){n(14590)},37380:function(t,r,n){n(63408)},70015:function(t,r,n){"use strict";n.a(t,(async function(t,e){try{n.r(r),n.d(r,{BonusPerStat:function(){return o.uy},CalculatorInterface:function(){return o.Eq},CommonInterface:function(){return o.sw},DSLInterface:function(){return o.H},OptimizeSingleWasm:function(){return o.ZN},PotentialInterface:function(){return o.NY},TeamOptimizationWasm:function(){return o.fn},TransformativeDamage:function(){return o.Tw},__wbg_buffer_397eaa4d72ee94dd:function(){return o.jp},__wbg_call_888d259a5fefc347:function(){return o.BT},__wbg_crypto_9e3521ed42436d35:function(){return o.cF},__wbg_error_09919627ac0992f5:function(){return o.gk},__wbg_getRandomValues_3e46aa268da0fed1:function(){return o.cR},__wbg_globalThis_3f735a5746d41fbd:function(){return o.ud},__wbg_global_1bc0b39582740e95:function(){return o.PT},__wbg_length_1eb8fc608a0d4cdb:function(){return o.A7},__wbg_log_3445347661d4505e:function(){return o.JV},__wbg_modulerequire_0a83c0c31d12d2c7:function(){return o.GX},__wbg_msCrypto_c429c3f8f7a70bb5:function(){return o.vG},__wbg_new_693216e109162396:function(){return o.Ih},__wbg_new_a7ce447f15ff496f:function(){return o.y4},__wbg_newnoargs_be86524d73f67598:function(){return o.wg},__wbg_newwithlength_929232475839a482:function(){return o.b0},__wbg_node_ee3f6da4130bd35f:function(){return o.GS},__wbg_process_f2b73829dbd321da:function(){return o.MF},__wbg_randomFillSync_59fcc2add91fe7b3:function(){return o._8},__wbg_self_c6fbdfc2918d5e58:function(){return o.JX},__wbg_set_969ad0a60e51d320:function(){return o.YQ},__wbg_stack_0ddaca5d1abfb52f:function(){return o.yq},__wbg_subarray_8b658422a224f479:function(){return o.uf},__wbg_versions_cd82f79c98672a9f:function(){return o.Y8},__wbg_window_baec038b5ab35c54:function(){return o.xd},__wbindgen_is_object:function(){return o.Wl},__wbindgen_is_string:function(){return o.eY},__wbindgen_is_undefined:function(){return o.XP},__wbindgen_json_parse:function(){return o.t$},__wbindgen_json_serialize:function(){return o.r1},__wbindgen_memory:function(){return o.oH},__wbindgen_object_clone_ref:function(){return o.m_},__wbindgen_object_drop_ref:function(){return o.ug},__wbindgen_string_new:function(){return o.h4},__wbindgen_throw:function(){return o.Or}});var o=n(79770),_=t([o]);o=(_.then?(await _)():_)[0],e()}catch(i){e(i)}}))},79770:function(t,r,n){"use strict";n.a(t,(async function(e,o){try{n.d(r,{A7:function(){return gt},BT:function(){return et},Eq:function(){return O},GS:function(){return $},GX:function(){return K},H:function(){return S},Ih:function(){return B},JV:function(){return G},JX:function(){return _t},MF:function(){return L},NY:function(){return k},Or:function(){return lt},PT:function(){return ut},Tw:function(){return P},Wl:function(){return H},XP:function(){return ct},Y8:function(){return Q},YQ:function(){return dt},ZN:function(){return U},_8:function(){return J},b0:function(){return wt},cF:function(){return tt},cR:function(){return X},eY:function(){return Z},fn:function(){return D},gk:function(){return W},h4:function(){return M},jp:function(){return ft},m_:function(){return ot},oH:function(){return yt},r1:function(){return z},sw:function(){return C},t$:function(){return V},ud:function(){return at},uf:function(){return bt},ug:function(){return N},uy:function(){return F},vG:function(){return rt},wg:function(){return nt},xd:function(){return it},y4:function(){return st},yq:function(){return q}});n(48675),n(3462),n(33824),n(37380),n(85493),n(21703),n(38862),n(35837);var _=n(6858);t=n.hmd(t);var i=e([_]);_=(i.then?(await i)():i)[0];const u="undefined"===typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder;let c=new u("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let f=null;function s(){return null!==f&&f.buffer===_.memory.buffer||(f=new Uint8Array(_.memory.buffer)),f}function d(t,r){return c.decode(s().subarray(t,t+r))}const g=new Array(32).fill(void 0);g.push(void 0,null,!0,!1);let w=g.length;function b(t){w===g.length&&g.push(g.length+1);const r=w;return w=g[r],g[r]=t,r}function l(t){return g[t]}let y=0;const p="undefined"===typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder;let h=new p("utf-8");const v="function"===typeof h.encodeInto?function(t,r){return h.encodeInto(t,r)}:function(t,r){const n=h.encode(t);return r.set(n),{read:t.length,written:n.length}};function m(t,r,n){if(void 0===n){const n=h.encode(t),e=r(n.length);return s().subarray(e,e+n.length).set(n),y=n.length,e}let e=t.length,o=r(e);const _=s();let i=0;for(;i<e;i++){const r=t.charCodeAt(i);if(r>127)break;_[o+i]=r}if(i!==e){0!==i&&(t=t.slice(i)),o=n(o,e,e=i+3*t.length);const r=s().subarray(o+i,o+e),_=v(t,r);i+=_.written}return y=i,o}let A=null;function T(){return null!==A&&A.buffer===_.memory.buffer||(A=new Int32Array(_.memory.buffer)),A}function x(t){t<36||(g[t]=w,w=t)}function R(t){const r=l(t);return x(t),r}let E=32;function I(t){if(1==E)throw new Error("out of js stack");return g[--E]=t,E}function Y(t,r){try{return t.apply(this,r)}catch(n){_.__wbindgen_export_3(b(n))}}function j(t,r){return s().subarray(t/1,t/1+r)}class F{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_bonusperstat_free(t)}static bonus_per_stat(t){try{var r=_.bonusperstat_bonus_per_stat(I(t));return R(r)}finally{g[E++]=void 0}}}class O{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_calculatorinterface_free(t)}static get_damage_analysis(t,r){try{var n=_.calculatorinterface_get_damage_analysis(I(t),I(r));return R(n)}finally{g[E++]=void 0,g[E++]=void 0}}static get_transformative_damage(t){try{var r=_.calculatorinterface_get_transformative_damage(I(t));return P.__wrap(r)}finally{g[E++]=void 0}}}class C{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_commoninterface_free(t)}static get_attribute(t){try{var r=_.commoninterface_get_attribute(I(t));return R(r)}finally{g[E++]=void 0}}static get_artifacts_rank_by_character(t,r,n,e){try{var o=_.commoninterface_get_artifacts_rank_by_character(I(t),I(r),I(n),I(e));return R(o)}finally{g[E++]=void 0,g[E++]=void 0,g[E++]=void 0,g[E++]=void 0}}}class S{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_dslinterface_free(t)}static run(t,r,n){try{var e=m(t,_.__wbindgen_export_0,_.__wbindgen_export_1),o=y,i=_.dslinterface_run(e,o,I(r),I(n));return R(i)}finally{g[E++]=void 0,g[E++]=void 0}}}class U{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_optimizesinglewasm_free(t)}static optimize(t,r){try{var n=_.optimizesinglewasm_optimize(I(t),I(r));return R(n)}finally{g[E++]=void 0,g[E++]=void 0}}}class k{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_potentialinterface_free(t)}static get_potential(t,r){try{var n=_.potentialinterface_get_potential(I(t),I(r));return R(n)}finally{g[E++]=void 0,g[E++]=void 0}}}class D{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_teamoptimizationwasm_free(t)}static optimize_team2(t,r){try{var n=_.teamoptimizationwasm_optimize_team2(I(t),I(r));return R(n)}finally{g[E++]=void 0,g[E++]=void 0}}}class P{static __wrap(t){const r=Object.create(P.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_transformativedamage_free(t)}get swirl_cryo(){var t=_.__wbg_get_transformativedamage_swirl_cryo(this.ptr);return t}set swirl_cryo(t){_.__wbg_set_transformativedamage_swirl_cryo(this.ptr,t)}get swirl_hydro(){var t=_.__wbg_get_transformativedamage_swirl_hydro(this.ptr);return t}set swirl_hydro(t){_.__wbg_set_transformativedamage_swirl_hydro(this.ptr,t)}get swirl_pyro(){var t=_.__wbg_get_transformativedamage_swirl_pyro(this.ptr);return t}set swirl_pyro(t){_.__wbg_set_transformativedamage_swirl_pyro(this.ptr,t)}get swirl_electro(){var t=_.__wbg_get_transformativedamage_swirl_electro(this.ptr);return t}set swirl_electro(t){_.__wbg_set_transformativedamage_swirl_electro(this.ptr,t)}get overload(){var t=_.__wbg_get_transformativedamage_overload(this.ptr);return t}set overload(t){_.__wbg_set_transformativedamage_overload(this.ptr,t)}get electro_charged(){var t=_.__wbg_get_transformativedamage_electro_charged(this.ptr);return t}set electro_charged(t){_.__wbg_set_transformativedamage_electro_charged(this.ptr,t)}get shatter(){var t=_.__wbg_get_transformativedamage_shatter(this.ptr);return t}set shatter(t){_.__wbg_set_transformativedamage_shatter(this.ptr,t)}get superconduct(){var t=_.__wbg_get_transformativedamage_superconduct(this.ptr);return t}set superconduct(t){_.__wbg_set_transformativedamage_superconduct(this.ptr,t)}get bloom(){var t=_.__wbg_get_transformativedamage_bloom(this.ptr);return t}set bloom(t){_.__wbg_set_transformativedamage_bloom(this.ptr,t)}get hyperbloom(){var t=_.__wbg_get_transformativedamage_hyperbloom(this.ptr);return t}set hyperbloom(t){_.__wbg_set_transformativedamage_hyperbloom(this.ptr,t)}get burgeon(){var t=_.__wbg_get_transformativedamage_burgeon(this.ptr);return t}set burgeon(t){_.__wbg_set_transformativedamage_burgeon(this.ptr,t)}}function V(t,r){var n=JSON.parse(d(t,r));return b(n)}function z(t,r){const n=l(r);var e=JSON.stringify(void 0===n?null:n),o=m(e,_.__wbindgen_export_0,_.__wbindgen_export_1),i=y;T()[t/4+1]=i,T()[t/4+0]=o}function M(t,r){var n=d(t,r);return b(n)}function N(t){R(t)}function G(t){console.log(l(t))}function B(){var t=new Error;return b(t)}function q(t,r){var n=l(r).stack,e=m(n,_.__wbindgen_export_0,_.__wbindgen_export_1),o=y;T()[t/4+1]=o,T()[t/4+0]=e}function W(t,r){try{console.error(d(t,r))}finally{_.__wbindgen_export_2(t,r)}}function X(){return Y((function(t,r){l(t).getRandomValues(l(r))}),arguments)}function J(){return Y((function(t,r,n){l(t).randomFillSync(j(r,n))}),arguments)}function L(t){var r=l(t).process;return b(r)}function H(t){const r=l(t);var n="object"===typeof r&&null!==r;return n}function Q(t){var r=l(t).versions;return b(r)}function $(t){var r=l(t).node;return b(r)}function Z(t){var r="string"===typeof l(t);return r}function K(){return Y((function(t,r){var e=n(73344)(d(t,r));return b(e)}),arguments)}function tt(t){var r=l(t).crypto;return b(r)}function rt(t){var r=l(t).msCrypto;return b(r)}function nt(t,r){var n=new Function(d(t,r));return b(n)}function et(){return Y((function(t,r){var n=l(t).call(l(r));return b(n)}),arguments)}function ot(t){var r=l(t);return b(r)}function _t(){return Y((function(){var t=self.self;return b(t)}),arguments)}function it(){return Y((function(){var t=window.window;return b(t)}),arguments)}function at(){return Y((function(){var t=globalThis.globalThis;return b(t)}),arguments)}function ut(){return Y((function(){var t=n.g.global;return b(t)}),arguments)}function ct(t){var r=void 0===l(t);return r}function ft(t){var r=l(t).buffer;return b(r)}function st(t){var r=new Uint8Array(l(t));return b(r)}function dt(t,r,n){l(t).set(l(r),n>>>0)}function gt(t){var r=l(t).length;return r}function wt(t){var r=new Uint8Array(t>>>0);return b(r)}function bt(t,r,n){var e=l(t).subarray(r>>>0,n>>>0);return b(e)}function lt(t,r){throw new Error(d(t,r))}function yt(){var t=_.memory;return b(t)}o()}catch(a){o(a)}}))},6858:function(t,r,n){"use strict";n.a(t,(async function(e,o){try{var _=n(79770),i=e([_]),[_]=i.then?(await i)():i;await n.v(r,t.id,"525f9304f1872229",{"./mona_wasm_bg.js":{__wbindgen_json_parse:_.t$,__wbindgen_json_serialize:_.r1,__wbindgen_string_new:_.h4,__wbindgen_object_drop_ref:_.ug,__wbg_log_3445347661d4505e:_.JV,__wbg_new_693216e109162396:_.Ih,__wbg_stack_0ddaca5d1abfb52f:_.yq,__wbg_error_09919627ac0992f5:_.gk,__wbg_getRandomValues_3e46aa268da0fed1:_.cR,__wbg_randomFillSync_59fcc2add91fe7b3:_._8,__wbg_process_f2b73829dbd321da:_.MF,__wbindgen_is_object:_.Wl,__wbg_versions_cd82f79c98672a9f:_.Y8,__wbg_node_ee3f6da4130bd35f:_.GS,__wbindgen_is_string:_.eY,__wbg_modulerequire_0a83c0c31d12d2c7:_.GX,__wbg_crypto_9e3521ed42436d35:_.cF,__wbg_msCrypto_c429c3f8f7a70bb5:_.vG,__wbg_newnoargs_be86524d73f67598:_.wg,__wbg_call_888d259a5fefc347:_.BT,__wbindgen_object_clone_ref:_.m_,__wbg_self_c6fbdfc2918d5e58:_.JX,__wbg_window_baec038b5ab35c54:_.xd,__wbg_globalThis_3f735a5746d41fbd:_.ud,__wbg_global_1bc0b39582740e95:_.PT,__wbindgen_is_undefined:_.XP,__wbg_buffer_397eaa4d72ee94dd:_.jp,__wbg_new_a7ce447f15ff496f:_.y4,__wbg_set_969ad0a60e51d320:_.YQ,__wbg_length_1eb8fc608a0d4cdb:_.A7,__wbg_newwithlength_929232475839a482:_.b0,__wbg_subarray_8b658422a224f479:_.uf,__wbindgen_throw:_.Or,__wbindgen_memory:_.oH}}),o()}catch(a){o(a)}}),1)}}]);