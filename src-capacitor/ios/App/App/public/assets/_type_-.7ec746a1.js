import{g as E,P as F,h as N,i as W,aF as z,j as A,H as L,aU as P,a1 as x,a2 as j,ae as H,o as r,l as m,m as g,n as i,w as l,k as a,F as _,ap as M,aI as U,I as X,t as q,x as T,q as y,s as G,ai as I,e as h,z as J,y as K,R as O}from"./index.b340747c.js";import{Q as Y}from"./QToolbarTitle.440d1fa8.js";import{Q as B}from"./QToolbar.f296e630.js";import{Q as Z}from"./QPullToRefresh.dec1c06c.js";import{B as ee,_ as ae}from"./ScreenError.29d1ac58.js";import{_ as se}from"./CardVertical.bd65ab39.js";import{S as te}from"./ScreenLoading.62a007f7.js";import{u as re}from"./useCache.a72482f3.js";import{s as oe}from"./scrollIntoView.02f1312b.js";import{r as ne}from"./ranks.6b7a2e33.js";import{S as le,a as ce}from"./swiper.min.f3fa348a.js";import"./touch.9d375472.js";import"./selection.b3caa21c.js";import"./index.a60c2c0b.js";import"./forceHttp2.94a52bc8.js";function ie(){return new Worker("assets/[type].914426a7.js",{type:"module"})}async function $(p){return await re(`/bang-xep-hang/${p}`,async()=>{const{data:w}=await E(`/bang-xep-hang/${p!=null?p:""}`);return F(ie,w)})}const ue={class:"fixed w-full z-200 top-0 left-0 bg-dark-page"},fe={class:"overflow-x-scroll whitespace-nowrap text-[#9a9a9a] text-center mb-2"},me=["onClick"],pe={class:"absolute top-0 h-[100%] w-full pt-[100px]"},de=["src"],$e=N({__name:"[type]-",setup(p){const w=W();z();const{t:c}=A(),k=L(()=>[[c("mac-dinh"),""],[c("ngay"),"day"],[c("thang"),"month"],[c("nam"),"year"],[c("danh-gia"),"voted"],[c("mua"),"season"]]),n=P(new Map);let u;async function C(e){var o;if(((o=n.get(e))==null?void 0:o.status)!=="success")try{n.set(e,{status:"pending"}),n.set(e,{status:"success",response:await $(e?`${e}.html`:"")})}catch(t){n.set(e,{status:"error",response:t})}}async function Q(e,o){n.set(o,{status:"success",response:await $(o?`${o}.html`:"")}),e()}const R=x(),f=x(0),b=x();j(f,e=>{C(k.value[e][1])},{immediate:!0}),H(()=>{b.value&&oe(b.value)});function V(e){R.value=e,f.value=e.activeIndex}function D(e){f.value=e.activeIndex}return(e,o)=>(r(),m(_,null,[g("header",ue,[i(B,{class:"relative"},{default:l(()=>[i(M,{flat:"",dense:"",round:"",class:"mr-2",onClick:o[0]||(o[0]=U(t=>a(w).back(),["stop"]))},{default:l(()=>[i(a(X),{icon:"fluent:chevron-left-24-regular",width:"25",height:"25"})]),_:1}),i(Y,{class:"absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[16px] max-w-[calc(100%-34px*2)] line-clamp-1"},{default:l(()=>[q(T(a(c)("bang-xep-hang")),1)]),_:1})]),_:1}),i(B,null,{default:l(()=>[g("div",fe,[(r(!0),m(_,null,y(a(k),([t,v],s)=>G((r(),m("div",{ref_for:!0,ref:d=>void(s===f.value&&(b.value=d)),key:v,class:I(["relative inline-block px-4 py-1",{"c--main text-weight-medium":s===f.value}]),onClick:d=>{var S;return(S=R.value)==null?void 0:S.slideTo(s)}},[g("span",{class:I(s===f.value?"relative inline-block before:content-DEFAULT before:absolute before:h-[2px] before:w-full before:bg-[currentColor] before:bottom-0 pb-[2px] before:rounded":void 0)},T(t),3)],10,me)),[[O]])),128))])]),_:1})]),g("div",pe,[i(a(ce),{"slides-per-view":1,onSwiper:V,onSlideChange:D,class:"h-full"},{default:l(()=>[(r(!0),m(_,null,y(a(k),([,t])=>(r(),h(a(le),{key:t,class:"h-full overflow-y-auto scroll-smooth",style:{"white-space":"pre-wrap"}},{default:l(()=>{var v;return[!(J(u)?u.value=a(n).get(t):u=a(n).get(t))||a(u).status==="pending"?(r(),h(te,{key:0})):a(u).status==="success"?(r(),h(Z,{key:1,onRefresh:s=>Q(s,t)},{default:l(()=>[(r(!0),m(_,null,y(a(u).response,(s,d)=>(r(),h(se,{key:s.name,data:{...s,description:s.othername,process:s.process.replace("T\u1EADp ","")},class:"mt-4 mx-3"},{"img-content":l(()=>[i(ee),d<10?(r(),m("img",{key:0,src:a(ne)[d],class:"h-[1.5rem]"},null,8,de)):K("",!0)]),_:2},1032,["data"]))),128))]),_:2},1032,["onRefresh"])):(r(),h(ae,{key:2,"onClick:retry":s=>C(t),error:(v=a(n).get(t))==null?void 0:v.response},null,8,["onClick:retry","error"]))]}),_:2},1024))),128))]),_:1})])],64))}});export{$e as default};
