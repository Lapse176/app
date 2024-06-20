import{h as j,a1 as c,H as d,a2 as z,a3 as B,a4 as W,J as u,al as E,a6 as I,g as X,am as D,an as Q,ao as $}from"./index.b340747c.js";const M={ratio:[String,Number]};function F(e,n){return d(()=>{const s=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}function A(e,n){return e!==void 0&&e()||n}const C=new Set;function G(e){const{hostname:n}=new URL(e);C.add(n)}function J(e){if(e.startsWith("blob:"))return!1;const{hostname:n}=new URL(e);return C.has(n)}const x=16/9;async function _(e){const n=await X({url:e,responseType:"arraybuffer"});if(n.status>299)throw n;return{src:URL.createObjectURL(new Blob([typeof n.data=="object"?n.data:D(n.data)]))}}var V=j({name:"QImg",props:{...M,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:x},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:s}){const y=c(e.initialRatio),b=F(e,y);let a=null,v=!1;const r=[c(null),c(S())],l=c(0),f=c(!1),g=c(!1),L=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),T=d(()=>({width:e.width,height:e.height})),q=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),H=d(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));z(()=>m(),h);function m(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}async function h(t){a!==null&&(clearTimeout(a),a=null),g.value=!1,t===null?(f.value=!1,r[l.value^1].value=S()):f.value=!0,t&&J(t.src)?r[l.value].value=await _(t.src):r[l.value].value=t}function U(t){const i=t.target;v!==!0&&(a!==null&&(clearTimeout(a),a=null),y.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,R(i,1))}function R(t,i){v===!0||i===1e3||(t.complete===!0?N(t):a=setTimeout(()=>{a=null,R(t,i+1)},50))}function N(t){v!==!0&&(l.value=l.value^1,r[l.value].value=null,f.value=!1,g.value=!1,t.src.startsWith("blob:")&&URL.revokeObjectURL(t.src),s("load",t.currentSrc||t.src))}async function k(t){try{const i=t.target,o=i.currentSrc||i.src;if(o.startsWith("blob:"))throw URL.revokeObjectURL(o),new Error("blob: url not re-try fetch");G(o),h(await _(o))}catch{a!==null&&(clearTimeout(a),a=null),f.value=!1,g.value=!0,r[l.value].value=null,r[l.value^1].value=S(),s("error",t)}}function w(t){const i=r[t].value,o={key:"img_"+t,class:q.value,style:H.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...i};return l.value===t?(o.class+=" q-img__image--waiting",Object.assign(o,{onLoad:U,onError:k})):o.class+=" q-img__image--loaded",u("div",{class:"q-img__container absolute-full",key:"img"+t},u("img",o))}function O(){return f.value!==!0?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},A(n[g.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[u(I,{color:e.spinnerColor,size:e.spinnerSize})])}return typeof window!="undefined"?B(()=>{h(m())}):h(m()),W(()=>{v=!0,a!==null&&(clearTimeout(a),a=null)}),()=>{const t=[];return b.value!==null&&t.push(u("div",{key:"filler",style:b.value})),g.value!==!0&&(r[0].value!==null&&t.push(w(0)),r[1].value!==null&&t.push(w(1))),t.push(u(E,{name:"q-transition--fade"},O)),u("div",{class:L.value,style:T.value,role:"img","aria-label":e.alt},t)}}});function K(e){return e.replace(Q,$)}function Y(e){return e=K(e),e.startsWith("http://")?"https"+e.slice(4):e}export{V as Q,Y as f,K as r};
