"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[4225],{75658:function(e,t,a){a.d(t,{n:function(){return n}});a(33948);async function s(){const e=await a.e(4018).then(a.bind(a,54018));return e}const l=s();async function n(){return await l}},65772:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(66252),l=a(11599),n=(a(74874),a(61715),a(33948),a(57658),a(2262)),r=a(82945),u={__name:"SelectPreset",props:{modelValue:String},setup(e){const t=(0,r.B)(),a=(0,s.Fl)((()=>{let e=[];for(let a of t.allFlat.value)e.push(a.name);return e}));return(t,r)=>{const u=l.BT,i=l.km;return(0,s.wg)(),(0,s.j4)(i,{"model-value":e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=e=>t.$emit("update:modelValue",e))},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(a),(e=>((0,s.wg)(),(0,s.j4)(u,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["model-value"])}}};const i=u;var o=i},82420:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var s=a(2262),l=a(66252),n=a(27739),r=a(42955),u=(a(81010),a(50363),a(77583)),i=(a(10444),a(33948),a(57658),a(3577)),o=a(75658),c=a(65772),p=a(82945),f=(a(60285),a(41637),a(72391));function d(e,t=12e4){const s=new Worker(new URL(a.p+a.u(6673),a.b)),l=(0,f.p$)(e);return new Promise(((e,a)=>{const n=setTimeout((()=>{a("计算超时")}),t);s.onmessage=t=>{if("ready"===t.data.type)s.postMessage({args:[l],dispatch:"best_artifact_set"});else if("result"===t.data.type){const a=t.data.result;clearTimeout(n),e(a)}},s.onerror=e=>{a("计算发生错误："+e.message),clearTimeout(n)}})).finally((()=>{s.terminate()}))}var m=a(32298),y=a(22813);const w={class:"root"},g=["src"],v=["src"],_=["src"],S=["src"];var T=(0,l.aZ)({__name:"ArtifactSetTypeDisplay",props:{setType:null},setup(e){const t=e,a=(0,l.Fl)((()=>{let e=[];if("string"===typeof t.setType)return[];"Set2"in t.setType?e.push(t.setType["Set2"]):"Set4"in t.setType?e.push(t.setType["Set4"]):"Set22"in t.setType&&(e.push(t.setType["Set22"][0]),e.push(t.setType["Set22"][1]));let a=[];for(let t of e){let e=(0,m.y)(t);const s=(0,y.dd)(e);a.push(s)}return a})),n=(0,l.Fl)((()=>"string"!==typeof t.setType&&"Set2"in t.setType)),r=(0,l.Fl)((()=>"string"!==typeof t.setType&&"Set4"in t.setType)),u=(0,l.Fl)((()=>"string"!==typeof t.setType&&"Set22"in t.setType)),i=(0,l.Fl)((()=>"Misc"===t.setType));return(e,t)=>((0,l.wg)(),(0,l.iD)("div",w,[(0,s.SU)(i)?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Uk)("散件")],64)):(0,s.SU)(n)?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("img",{src:(0,s.SU)(a)[0],class:"image"},null,8,g),(0,l.Uk)("×2 ")],64)):(0,s.SU)(r)?((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[(0,l._)("img",{src:(0,s.SU)(a)[0],class:"image"},null,8,v),(0,l.Uk)("×4 ")],64)):(0,s.SU)(u)?((0,l.wg)(),(0,l.iD)(l.HY,{key:3},[(0,l._)("img",{src:(0,s.SU)(a)[0],class:"image"},null,8,_),(0,l._)("img",{src:(0,s.SU)(a)[1],class:"image"},null,8,S)],64)):(0,l.kq)("",!0)]))}}),k=a(83744);const U=(0,k.Z)(T,[["__scopeId","data-v-eae5713a"]]);var h=U,b=a(76456);const F={class:"root"},W={class:"top"},D={class:"right"};var H=(0,l.aZ)({__name:"CalcBestArtifactSetPage",async setup(e){let t,a;const{t:f}=(0,b.QT)(),y=([t,a]=(0,l.mv)((()=>(0,o.n)())),t=await t,a(),(0,p.B)()),w=(0,s.iH)(""),g=(0,l.Fl)((()=>{if(""!==w.value)return y.getPreset(w.value)})),v=(0,l.Fl)((()=>{var e;const t=null===(e=g.value)||void 0===e?void 0:e.item;if(!t)return null;let a=null;"custom"===t.artifactEffectMode&&(a=t.artifactConfig);const s={character:t.character,weapon:t.weapon,target_function:t.targetFunction,buffs:t.buffs,enemy:null,artifact_config:a};return s})),_=(0,s.iH)([]);async function S(){const e=n.kN.service({lock:!0,fullscreen:!0,text:"莫娜占卜中"}),t=await d(v.value,12e4);t.reverse();const a=t[0].value,s=[];for(let l=0;l<t.length;l++){const e=t[l];s.push({stats:e.stats,value:e.value,setType:e.set_type,ratio:e.value/a})}_.value=s,e.close()}function T(e){const t=(0,m.EO)(e);return f("stat",t)}return(e,t)=>{const a=u.mi,n=r.$Y,o=r.eI;return(0,l.wg)(),(0,l.iD)("div",F,[(0,l._)("div",W,[(0,l.Wm)((0,s.SU)(c.Z),{modelValue:(0,s.SU)(w),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.dq)(w)?w.value=e:null),style:{"margin-right":"8px"}},null,8,["modelValue"]),(0,l.Wm)(a,{onClick:S,type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)("Calc")])),_:1})]),(0,l._)("div",D,[(0,l.Wm)(o,{data:(0,s.SU)(_)},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{label:"序号",width:"64"},{default:(0,l.w5)((({$index:e})=>[(0,l.Uk)((0,i.zw)(e+1),1)])),_:1}),(0,l.Wm)(n,{label:"套装","min-width":"120"},{default:(0,l.w5)((({row:e})=>[(0,l.Wm)(h,{setType:e.setType},null,8,["setType"])])),_:1}),(0,l.Wm)(n,{label:"时之沙"},{default:(0,l.w5)((({row:e})=>[(0,l.Uk)((0,i.zw)(T(e.stats[0])),1)])),_:1}),(0,l.Wm)(n,{label:"空之杯"},{default:(0,l.w5)((({row:e})=>[(0,l.Uk)((0,i.zw)(T(e.stats[1])),1)])),_:1}),(0,l.Wm)(n,{label:"理之冠"},{default:(0,l.w5)((({row:e})=>[(0,l.Uk)((0,i.zw)(T(e.stats[2])),1)])),_:1}),(0,l.Wm)(n,{label:"值/百分数"},{default:(0,l.w5)((({row:e})=>[(0,l.Uk)((0,i.zw)(e.value.toFixed(1))+"/"+(0,i.zw)((100*e.ratio).toFixed(1))+"% ",1)])),_:1})])),_:1},8,["data"])])])}}});const V=(0,k.Z)(H,[["__scopeId","data-v-f27624ba"]]);var z=V}}]);