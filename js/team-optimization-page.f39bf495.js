"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[2121],{94234:function(t,e,a){var l=a(66252);const i={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},n=(0,l._)("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"},null,-1),o=(0,l._)("path",{fill:"currentColor",d:"m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"},null,-1),s=[n,o];function c(t,e){return(0,l.wg)(),(0,l.iD)("svg",i,s)}e["Z"]={name:"ep-edit",render:c}},56217:function(t,e,a){var l=a(66252);const i={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},n=(0,l._)("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),o=(0,l._)("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"},null,-1),s=[n,o];function c(t,e){return(0,l.wg)(),(0,l.iD)("svg",i,s)}e["Z"]={name:"ep-lock",render:c}},53723:function(t,e,a){var l=a(66252);const i={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},n=(0,l._)("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),o=(0,l._)("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"},null,-1),s=[n,o];function c(t,e){return(0,l.wg)(),(0,l.iD)("svg",i,s)}e["Z"]={name:"ep-unlock",render:c}},85524:function(t,e,a){a.d(e,{Y:function(){return l}});a(33948),a(60285),a(41637);function l(t,e,l=12e4,i=!1){const n=new Worker(new URL(a.p+a.u(3857),a.b));let o=null,s=-1;const c=new Promise(((a,i)=>{o=()=>{i("计算被中止")},s=setTimeout((()=>{i("计算超时")}),l),n.onmessage=l=>{if("ready"===l.data.type)n.postMessage({optimizeConfig:t,artifacts:e});else{const t=l.data.data.results;a(t)}},n.onerror=()=>{i("计算发生错误")}})).finally((()=>{n.terminate(),clearTimeout(s)}));return i?[c,o]:c}},27328:function(t,e,a){a.d(e,{Z:function(){return W}});var l=a(25791),i=(a(20048),a(66252)),n=a(3577);const o={key:1,class:"no-item",style:{padding:"8px"}};function s(t,e,a,l,s,c){return(0,i.wg)(),(0,i.iD)("div",null,[c.list.length>0?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(c.list,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.name,class:"item"},[(0,i._)("span",null,(0,n.zw)(t.name),1),(0,i._)("span",null,(0,n.zw)(t.value.toFixed(3)),1)])))),128)):((0,i.wg)(),(0,i.iD)("div",o," 无加成 "))])}a(2707);var c={name:"AttributeComposition",props:["composition"],computed:{list(){let t=[];for(const e in this.composition)t.push({name:e,value:this.composition[e]});return t.sort(((t,e)=>t.name.localeCompare(e.name))),t}}},u=a(83744);const r=(0,u.Z)(c,[["render",s],["__scopeId","data-v-a1776db8"]]);var m=r;const p={class:"attribute-item"},d={class:"title"},v={class:"value"};function f(t,e,a,o,s,c){const u=m,r=l.Q0;return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(r,null,{content:(0,i.w5)((()=>[(0,i.Wm)(u,{composition:a.composition},null,8,["composition"])])),default:(0,i.w5)((()=>[(0,i._)("span",d,(0,n.zw)(a.title),1)])),_:1}),(0,i._)("span",v,(0,n.zw)(c.displayValue),1)])}var g={name:"AttributeItem",components:{AttributeComposition:m},props:{composition:{},title:{},percentage:{default:!1}},computed:{sum(){let t=0;for(const e in this.composition)t+=this.composition[e];return t},displayValue(){return this.percentage?`${(100*this.sum).toFixed(1)}%`:Math.round(this.sum)}}};const w=(0,u.Z)(g,[["render",f],["__scopeId","data-v-d42f263e"]]);var h=w;const b={class:"class"},_={class:"class"},y={class:"class"};function k(t,e,a,l,o,s){const c=h;return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h3",b,(0,n.zw)(l.t("stat.base")),1),(0,i.Wm)(c,{title:l.t("stat.lifeStatic"),composition:a.attribute.hp},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.attackStatic"),composition:a.attribute.atk},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.defendStatic"),composition:a.attribute.def},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.elementalMastery"),composition:a.attribute.elemental_mastery},null,8,["title","composition"]),(0,i._)("h3",_,(0,n.zw)(l.t("stat.advanced")),1),(0,i.Wm)(c,{title:l.t("stat.critical"),composition:a.attribute.critical,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.criticalDamage"),composition:a.attribute.critical_damage,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.cureEffect"),composition:a.attribute.healing_bonus,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.recharge"),composition:a.attribute.recharge,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.shield"),composition:a.attribute.shield_strength,percentage:!0},null,8,["title","composition"]),(0,i._)("h3",y,(0,n.zw)(l.t("stat.ele")),1),(0,i.Wm)(c,{title:l.t("stat.fireBonus"),composition:a.attribute.bonus_pyro,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.waterBonus"),composition:a.attribute.bonus_hydro,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.dendroBonus"),composition:a.attribute.bonus_dendro,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.thunderBonus"),composition:a.attribute.bonus_electro,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.windBonus"),composition:a.attribute.bonus_anemo,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.iceBonus"),composition:a.attribute.bonus_cryo,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.rockBonus"),composition:a.attribute.bonus_geo,percentage:!0},null,8,["title","composition"]),(0,i.Wm)(c,{title:l.t("stat.physicalBonus"),composition:a.attribute.bonus_physical,percentage:!0},null,8,["title","composition"])])}var U=a(8509),z={name:"AttributePanel",components:{AttributeItem:h},props:{attribute:{type:Object}},computed:{attack(){let t=this.attribute;return t.attackStatic+t.attackBasic+t.attackPercentage},defend(){let t=this.attribute;return t.defendStatic+t.defendBasic+t.defendPercentage},life(){let t=this.attribute;return t.lifeStatic+t.lifeBasic+t.lifePercentage}},setup(){const{t:t}=(0,U.QT)();return{t:t}}};const S=(0,u.Z)(z,[["render",k],["__scopeId","data-v-1b9e2d1d"]]);var W=S},1806:function(t,e){e["Z"]=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},20820:function(t,e,a){a.d(e,{YK:function(){return i},$o:function(){return o},eH:function(){return s}});a(33948);var l=a(7025);a(60285),a(41637);function i(t,e){const l=new Worker(new URL(a.p+a.u(4901),a.b));return new Promise(((a,i)=>{l.onmessage=function(i){const n=i.data.type;if("ready"===n)l.postMessage({input:t,artifacts:e});else if("result"===n){const t=i.data.data.result;l.terminate(),a(t)}},l.onerror=function(t){i(t)}}))}a(85524);var n=a(80065);function o(t,e,l=12e4){const i=new Worker(new URL(a.p+a.u(8435),a.b)),o=(0,n.p$)(t);return new Promise(((t,a)=>{const n=setTimeout((()=>{a("计算超时")}),l);i.onmessage=a=>{if("ready"===a.data.type)i.postMessage({potentialFunctionInterface:o,artifacts:e});else{const e=a.data.data.results;clearTimeout(n),t(e)}},i.onerror=t=>{a("计算发生错误："+t.message),clearTimeout(n)}})).finally((()=>{i.terminate()}))}async function s(t,e,a,i){const n=await(0,l.n)();return n.CommonInterface.get_artifacts_rank_by_character(t,e,a,i)}},16317:function(t,e,a){a.d(e,{Z:function(){return V}});var l=a(77049),i=(a(75915),a(33948),a(66252)),n=a(3577),o=a(2262),s=a(49963),c=a(81880),u=a(1806),r=a(53723),m=a(56217),p=a(21323),d=a(94234),v=a(21811),f=a(8509);const g={class:"up"},w={class:"name"},h={key:1,class:"buttons"},b={key:2,class:"extra fs-12"},_={class:"down"},y=["src"],k={class:"detail-div"},U={class:"main-tag"};function z(){return{setName:"luckyDog",position:"cup",mainTag:{name:"attackPercentage",value:.1},normalTags:[{name:"defendStatic",value:20},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3}],level:20,star:5,omit:!1}}var S=(0,i.aZ)({__name:"ArtifactDisplay",props:{item:{default:z},selectable:{type:Boolean,default:!1},extra:{default:""},buttons:{type:Boolean,default:!1},deleteButton:{type:Boolean,default:!1},lockButton:{type:Boolean,default:!0},editButton:{type:Boolean,default:!1},showBack:{type:Boolean,default:!1},backValue:{default:1}},emits:["click","toggle","delete","edit"],setup(t,{emit:e}){const a=t,{t:z}=(0,f.QT)(),S=(0,i.Fl)((()=>{let t=c.oN[a.item.setName];if(!t)throw"no artifact";let e="not exist";if(t[a.item.position]){const l=(0,v.VO)(a.item.position);e=z("artifact",t.eng,"items",l),Object.prototype.hasOwnProperty.call(a.item,"level")?e+="+"+a.item.level:e+="+??"}return e})),W=(0,i.Fl)((()=>{let t=c.oN[a.item.setName];if(!t)throw"no artifact";if(t[a.item.position])return t[a.item.position].url;throw"error no position"})),B=(0,i.Fl)((()=>(0,v.jH)(a.item.mainTag.name,a.item.mainTag.value))),V=(0,i.Fl)((()=>{let t=[];for(let e of a.item.normalTags)t.push((0,v.jH)(e.name,e.value));return t})),x=(0,i.Fl)((()=>{let t=a.item.star;return u.Z[t-1]}));function D(){a.selectable&&e("click")}return(t,c)=>{const u=l.mi;return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["artifact",{selectable:a.selectable,omit:a.item.omit}]),onClick:D},[(0,i._)("div",g,[a.showBack?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,n.j5)({width:100*a.backValue+"%"}),class:"back"},null,4)):(0,i.kq)("",!0),(0,i._)("span",w,(0,n.zw)((0,o.SU)(S)),1),a.buttons?((0,i.wg)(),(0,i.iD)("div",h,[a.lockButton?((0,i.wg)(),(0,i.j4)(u,{key:0,icon:a.item.omit?(0,o.SU)(r.Z):(0,o.SU)(m.Z),circle:"",size:"small",text:"",title:a.item.omit?(0,o.SU)(z)("misc.unlock"):(0,o.SU)(z)("misc.lock"),class:"mybutton",onClick:c[0]||(c[0]=(0,s.iM)((t=>e("toggle")),["stop"]))},null,8,["icon","title"])):(0,i.kq)("",!0),a.deleteButton?((0,i.wg)(),(0,i.j4)(u,{key:1,icon:(0,o.SU)(p.Z),circle:"",size:"small",text:"",title:(0,o.SU)(z)("misc.del"),class:"mybutton",onClick:c[1]||(c[1]=(0,s.iM)((t=>e("delete")),["stop"]))},null,8,["icon","title"])):(0,i.kq)("",!0),a.editButton?((0,i.wg)(),(0,i.j4)(u,{key:2,icon:(0,o.SU)(d.Z),circle:"",size:"small",text:"",title:(0,o.SU)(z)("misc.edit"),class:"mybutton",onClick:c[2]||(c[2]=(0,s.iM)((t=>e("edit")),["stop"]))},null,8,["icon","title"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),a.extra?((0,i.wg)(),(0,i.iD)("span",b,(0,n.zw)(a.extra),1)):(0,i.kq)("",!0)]),(0,i._)("div",_,[(0,i._)("div",null,[(0,i._)("img",{src:(0,o.SU)(W),alt:"图",class:"myimage",style:(0,n.j5)({background:(0,o.SU)(x)})},null,12,y)]),(0,i._)("div",k,[(0,i._)("p",U,(0,n.zw)((0,o.SU)(B)),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,o.SU)(V),((t,e)=>((0,i.wg)(),(0,i.iD)("p",{key:e,class:"sec-tag"},(0,n.zw)(t),1)))),128))])])],2)}}}),W=a(83744);const B=(0,W.Z)(S,[["__scopeId","data-v-64329ddf"]]);var V=B},94040:function(t,e,a){a.r(e),a.d(e,{default:function(){return Q}});var l=a(79509),i=a(89804),n=a(66252),o=a(35267),s=(a(45177),a(19651)),c=(a(71683),a(31838)),u=(a(87228),a(7810)),r=(a(44163),a(77049)),m=(a(75915),a(21491)),p=(a(72142),a(28785)),d=(a(9638),a(33948),a(2262)),v=a(3577),f=a(26825),g=a(20820),w=a(40195),h=a(81884),b=a(16317),_=a(59818),y=(a(50657),a(60096),a(27554)),k={__name:"SelectPreset",props:{modelValue:String},setup(t){const e=(0,y.B)(),a=(0,n.Fl)((()=>{let t=[];for(let a of e.allFlat.value)t.push(a.name);return t}));return(e,l)=>{const i=_.BT,o=_.km;return(0,n.wg)(),(0,n.j4)(o,{"model-value":t.modelValue,"onUpdate:modelValue":l[0]||(l[0]=t=>e.$emit("update:modelValue",t))},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,d.SU)(a),(t=>((0,n.wg)(),(0,n.j4)(i,{key:t,label:t,value:t},null,8,["label","value"])))),128))])),_:1},8,["model-value"])}}};const U=k;var z=U,S=a(27328),W=a(42516),B=a(7025),V=a(80065),x=a(3024),D=a(69531),C=a(21323),H=a(10157),Z=a(8509);const M=t=>((0,n.dD)("data-v-2110fb4b"),t=t(),(0,n.Cn)(),t),P=(0,n.Uk)("In theory, you should not see this"),T={key:1,style:{padding:"0 20px"}},j={style:{"margin-bottom":"12px"}},F={style:{display:"flex","justify-content":"space-between","align-items":"center"},class:"member-header"},Y={class:"team-title"},A={class:"common-title2"},I={class:"common-title2"},K={class:"result-item-top"},L=M((()=>(0,n._)("div",{class:"result-item-buttons"},null,-1))),q={class:"result-item-content"},R={key:1,style:{display:"flex","justify-content":"center"}};var N=(0,n.aZ)({__name:"TeamOptimizationPage",async setup(t){let e,a;const{t:_}=(0,Z.QT)(),k=(0,W.n)(),U=(0,y.B)(),M=([e,a]=(0,n.mv)((()=>(0,B.n)())),e=await e,a(),e),N=(0,d.iH)([null]),O=(0,d.iH)([0]),$=8;function Q(){N.value.length!==$?(N.value.push(null),O.value.push(0)):(0,l.z8)({message:"最多支持8个成员",type:"error"})}function E(t){1!==N.value.length&&(N.value.splice(t,1),O.value.splice(t,1))}const G=(0,n.Fl)((()=>{let t=[];for(let e of N.value.values())if(e){const a=U.presets.value[e];a&&t.push(a)}return t})),J=(0,d.iH)([]),X=(0,d.iH)(0),tt=(0,n.Fl)((()=>0===J.value.length?null:J.value[X.value]));function et(t){X.value=t-1}const at=(0,d.iH)(!1),lt=(0,d.iH)(null);function it(t){let e=[];if(tt.value){const a=Object.values(tt.value[t]),l=[];for(let t of a){const e=k.artifacts.value.get(t);e&&l.push(e)}e=l.map((t=>(0,f.Lz)(t)))}return{character:G.value[t].item.character,weapon:G.value[t].item.weapon,buffs:G.value[t].item.buffs,artifacts:e}}async function nt(t){const e=it(t);lt.value=await M.CommonInterface.get_attribute(e),at.value=!0}function ot(t){k.toggleArtifact(t)}const st=(0,n.Fl)((()=>{let t=[];for(let e of k.artifacts.value.values())e.level>=16&&!e.omit&&t.push(e);return t})),ct=(0,n.Fl)((()=>st.value.map(f.Lz))),ut=(0,n.Fl)((()=>G.value.map((t=>(0,w.DR)(t.item))))),rt={mva_step:5,work_space:1e3,max_re_optimize:5,max_search:1e6,count:1e3},mt=(0,n.Fl)((()=>({single_interfaces:ut.value,weights:O.value,hyper_param:rt})));function pt(){const t=G.value.length===N.value.length;if(!t)return void(0,l.z8)({message:"请选择计算预设",type:"error"});const e=(0,V.p$)(mt.value),a=ct.value,n=i.kN.service({text:"莫娜占卜中（可能需要数分钟）",lock:!0,fullscreen:!0});(0,g.YK)(e,a).then((t=>{J.value=t.artifacts,X.value=0})).catch((t=>{var e;(0,l.z8)({message:`计算过程发生错误：${null!==(e=t.message)&&void 0!==e?e:t}`,type:"error"}),console.error(t)})).finally((()=>{n.close()}))}return(t,e)=>{const a=p.GT,l=m.zd,i=r.mi,f=u.BM,g=c.Dv,w=s.d6,y=o.dq;return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l,{title:(0,d.SU)(_)("misc.panel"),modelValue:at.value,"onUpdate:modelValue":e[0]||(e[0]=t=>at.value=t),size:(0,d.SU)(h.B)?"30%":"100%"},{default:(0,n.w5)((()=>[lt.value?((0,n.wg)(),(0,n.iD)("div",T,[(0,n.Wm)((0,d.SU)(S.Z),{attribute:lt.value},null,8,["attribute"])])):((0,n.wg)(),(0,n.j4)(a,{key:0},{default:(0,n.w5)((()=>[P])),_:1}))])),_:1},8,["title","modelValue","size"]),(0,n.Wm)(y,{gutter:16},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{md:6,sm:24,class:"mona-scroll-hidden left"},{default:(0,n.w5)((()=>[(0,n._)("div",j,[(0,n.Wm)(i,{type:"primary",icon:(0,d.SU)(x.Z),onClick:pt},{default:(0,n.w5)((()=>[(0,n.Uk)((0,v.zw)((0,d.SU)(_)("teamPage.start")),1)])),_:1},8,["icon"]),(0,n.Wm)(i,{icon:(0,d.SU)(D.Z),onClick:Q},{default:(0,n.w5)((()=>[(0,n.Uk)((0,v.zw)((0,d.SU)(_)("teamPage.add")),1)])),_:1},8,["icon"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(N.value,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"member-item"},[(0,n._)("div",F,[(0,n._)("p",Y,(0,v.zw)((0,d.SU)(_)("teamPage.member"))+(0,v.zw)(e+1),1),(0,n._)("div",null,[(0,n.Wm)(i,{circle:"",text:"",icon:(0,d.SU)(C.Z),onClick:t=>E(e),style:{color:"white"}},null,8,["icon","onClick"])])]),(0,n._)("p",A,(0,v.zw)((0,d.SU)(_)("misc.preset")),1),(0,n.Wm)(z,{modelValue:N.value[e],"onUpdate:modelValue":t=>N.value[e]=t},null,8,["modelValue","onUpdate:modelValue"]),(0,n._)("p",I,(0,v.zw)((0,d.SU)(_)("teamPage.weight")),1),(0,n.Wm)(f,{modelValue:O.value[e],"onUpdate:modelValue":t=>O.value[e]=t,min:0,max:1,step:.01,"show-input":!0,style:{"padding-left":"8px"}},null,8,["modelValue","onUpdate:modelValue","step"])])))),128))])),_:1}),(0,n.Wm)(g,{md:18,sm:24,class:"mona-scroll-hidden right"},{default:(0,n.w5)((()=>[(0,d.SU)(tt)?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(w,{"model-value":X.value+1,"onUpdate:modelValue":et,min:1,max:J.value.length,style:{"margin-bottom":"12px"}},null,8,["model-value","max"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,d.SU)(tt),((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"result-item"},[(0,n._)("div",K,[(0,n._)("div",null,[(0,n.Wm)(i,{icon:(0,d.SU)(H.Z),circle:"",text:"",title:(0,d.SU)(_)("teamPage.showStat"),onClick:t=>nt(e)},null,8,["icon","title","onClick"])]),L]),(0,n._)("div",q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,d.SU)(tt)[e],(t=>((0,n.wg)(),(0,n.j4)(b.Z,{key:t,item:(0,d.SU)(k).artifacts.value.get(t),buttons:!0,"lock-button":!0,"delete-button":!1,"edit-button":!1,onToggle:e=>ot(t)},null,8,["item","onToggle"])))),128))])])))),128))],64)):((0,n.wg)(),(0,n.iD)("div",R,[(0,n.Wm)(a)]))])),_:1})])),_:1})])}}}),O=a(83744);const $=(0,O.Z)(N,[["__scopeId","data-v-2110fb4b"]]);var Q=$}}]);