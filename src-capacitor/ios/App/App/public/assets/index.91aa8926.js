import{Q as h}from"./QSkeleton.fe02f028.js";import{Q as V}from"./QResponsive.78e99726.js";import{Q as Y}from"./QPullToRefresh.dec1c06c.js";import{g as A,P as W,_ as H,h as U,i as w,j as G,a as J,k as a,o as n,l as i,m as e,n as s,w as f,p as K,F as _,q as E,e as S,s as O,t as b,x as l,y as z,I as R,z as B,A as N,R as M,B as X,C as Z}from"./index.b340747c.js";import{u as tt}from"./useCache.a72482f3.js";import{u as et}from"./index.es.9bf2f817.js";import{S as Q,Q as at,a as st,C as F}from"./SkeletonCard.3d677a39.js";import"./dayjs.937bb0b8.js";import{_ as P,a as q}from"./SkeletonGridCard.a0609b5c.js";import{Q as ot,f as nt}from"./forceHttp2.94a52bc8.js";import{_ as lt}from"./ScreenError.29d1ac58.js";import{u as it}from"./useAliveScrollBehavior.af4f2067.js";import{g as j,n as rt,S as ct,a as ut}from"./swiper.min.f3fa348a.js";import"./touch.9d375472.js";import"./selection.b3caa21c.js";import"./ranks.6b7a2e33.js";import"./index.a60c2c0b.js";var dt="assets/icon_tool_alp.f8f541f8.png",_t="assets/icon_tool_calc.33a76efe.png",pt="assets/icon_tool_rank.18c76391.png";function mt(){return new Worker("assets/index.8eb5ca3c.js",{type:"module"})}async function ft(){return await tt("/",async()=>{const{data:t}=await A("/");return W(mt,t)})}function ht({swiper:t,extendParams:D,on:u,emit:d}){let c;t.autoplay={running:!1,paused:!1},D({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function y(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const r=t.slides.eq(t.activeIndex);let m=t.params.autoplay.delay;r.attr("data-swiper-autoplay")&&(m=r.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(c),c=rt(()=>{let v;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),v=t.slidePrev(t.params.speed,!0,!0),d("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?g():(v=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),d("autoplay")):(v=t.slidePrev(t.params.speed,!0,!0),d("autoplay")):t.params.loop?(t.loopFix(),v=t.slideNext(t.params.speed,!0,!0),d("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?g():(v=t.slideTo(0,t.params.speed,!0,!0),d("autoplay")):(v=t.slideNext(t.params.speed,!0,!0),d("autoplay")),(t.params.cssMode&&t.autoplay.running||v===!1)&&y()},m)}function C(){return typeof c!="undefined"||t.autoplay.running?!1:(t.autoplay.running=!0,d("autoplayStart"),y(),!0)}function g(){return!t.autoplay.running||typeof c=="undefined"?!1:(c&&(clearTimeout(c),c=void 0),t.autoplay.running=!1,d("autoplayStop"),!0)}function I(r){!t.autoplay.running||t.autoplay.paused||(c&&clearTimeout(c),t.autoplay.paused=!0,r===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,y()):["transitionend","webkitTransitionEnd"].forEach(m=>{t.$wrapperEl[0].addEventListener(m,k)}))}function p(){const r=j();r.visibilityState==="hidden"&&t.autoplay.running&&I(),r.visibilityState==="visible"&&t.autoplay.paused&&(y(),t.autoplay.paused=!1)}function k(r){!t||t.destroyed||!t.$wrapperEl||r.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(m=>{t.$wrapperEl[0].removeEventListener(m,k)}),t.autoplay.paused=!1,t.autoplay.running?y():g())}function $(){t.params.autoplay.disableOnInteraction?g():(d("autoplayPause"),I()),["transitionend","webkitTransitionEnd"].forEach(r=>{t.$wrapperEl[0].removeEventListener(r,k)})}function L(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,d("autoplayResume"),y())}function x(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",$),t.$el.on("mouseleave",L))}function o(){t.$el.off("mouseenter",$),t.$el.off("mouseleave",L)}u("init",()=>{t.params.autoplay.enabled&&(C(),j().addEventListener("visibilitychange",p),x())}),u("beforeTransitionStart",(r,m,v)=>{t.autoplay.running&&(v||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(m):g())}),u("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?g():I())}),u("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&y()}),u("destroy",()=>{o(),t.autoplay.running&&g(),j().removeEventListener("visibilitychange",p)}),Object.assign(t.autoplay,{pause:I,run:y,start:C,stop:g})}const T=t=>(X("data-v-4a64a340"),t=t(),Z(),t),yt={key:0,class:"absolute w-full h-[calc(100%+50px)] overflow-hidden loader"},vt={class:"row text-grey text-[14px] mx-4 text-center mb-4"},gt={class:"col-4 relative py-2"},xt={class:"col-4 relative py-2"},bt={class:"col-4 relative py-2"},kt={class:"px-4 mt-4"},Et={class:"wpa-grid"},St={class:"ctnr"},Tt={class:"px-4 mt-4"},It={class:"px-4 mt-4"},Ct={class:"wpa-grid"},$t={class:"ctnr"},Ot={class:"px-4 mt-4"},Rt={class:"wpa-grid"},Mt={class:"ctnr"},Dt={class:"px-4 mt-4"},Lt=T(()=>e("div",{class:"drop-left"},null,-1)),Qt=T(()=>e("div",{class:"drop-center"},null,-1)),Ft=T(()=>e("div",{class:"drop-right"},null,-1)),jt={class:"info"},zt={class:"flex line-clamp-2 items-center"},Bt={class:"text-weight-medium"},Nt={class:"focus-item-info"},Pt={class:"focus-item-score"},qt={class:"focus-item-year"},Vt={class:"focus-item-update"},Yt={key:0,class:"focus-item-tags"},At={class:"focus-item-desc"},Wt={class:"row text-grey text-[12px] mx-4 text-center mb-4"},Ht=T(()=>e("img",{src:dt,width:"30",class:"mx-auto mb-2"},null,-1)),Ut={class:"mt-2"},wt=T(()=>e("img",{src:_t,width:"30",class:"mx-auto mb-2"},null,-1)),Gt=T(()=>e("img",{src:pt,width:"30",class:"mx-auto mb-2"},null,-1)),Jt={class:"px-4"},Kt={class:"wpa-grid"},Xt={class:"ctnr"},Zt={class:"block px-4 mt-4"},te={class:"px-4 mt-4"},ee={class:"wpa-grid"},ae={class:"ctnr"},se={class:"px-4 mt-4"},oe={class:"wpa-grid"},ne={class:"ctnr"},le={class:"coming_soon-timeline absolute top-0 left-0"},ie=T(()=>e("div",{class:"coming_soon-line"},null,-1)),re=T(()=>e("div",{class:"coming_soon-dot"},null,-1)),ce={class:"coming_soon-time-wrapper"},ue={key:0},de={class:"coming_soon-text-date"},_e={class:"coming_soon-text-day"},pe={class:"coming_soon-text-date"},me={class:"coming_soon-text-day capitalize"},fe={key:1,class:"coming_soon-text-unknown"},he={class:"px-4 mt-4"},ye=U({__name:"index",setup(t){it();const D=w(),{t:u}=G(),d=622/350,{data:c,loading:y,refreshAsync:C,error:g}=et(()=>ft());async function I($){await C(),$()}let p,k=!1;return($,L)=>{const x=J("router-link");return a(y)?(n(),i("div",yt,[e("div",{class:"swiper-hot",style:K({"--aspectRatio":d})},[s(V,{ratio:d,class:"poster"},{default:f(()=>[s(h,{type:"rect",width:"100%",height:"100%"})]),_:1})],4),e("div",vt,[e("div",gt,[s(h,{type:"circle",size:"40px",class:"mx-auto mb-2"}),s(h,{type:"text",width:"3.5rem",height:"1rem",class:"mt-2 mx-auto"})]),e("div",xt,[s(h,{type:"circle",size:"40px",class:"mx-auto mb-2"}),s(h,{type:"text",width:"3.5rem",height:"1rem",class:"mt-2 mx-auto"})]),e("div",bt,[s(h,{type:"circle",size:"40px",class:"mx-auto mb-2"}),s(h,{type:"text",width:"3.5rem",height:"1rem",class:"mt-2 mx-auto"})])]),e("div",kt,[e("div",Et,[e("div",St,[(n(),i(_,null,E(12,o=>s(Q,{key:o,class:"card-wrap inline-block"})),64))])])]),e("div",Tt,[s(h,{type:"text",width:"7rem",class:"text-h6"}),s(P,{count:6})]),e("div",It,[s(h,{type:"text",width:"7rem",class:"text-h6"}),e("div",Ct,[e("div",$t,[(n(),i(_,null,E(12,o=>s(Q,{key:o,class:"card-wrap inline-block"})),64))])])]),e("div",Ot,[s(h,{type:"text",width:"7rem",class:"text-h6"}),e("div",Rt,[s(h,{type:"text",width:"100%"}),e("div",Mt,[(n(),i(_,null,E(12,o=>s(Q,{key:o,class:"card-wrap inline-block"})),64))])])]),e("div",Dt,[s(h,{type:"text",width:"7rem",class:"text-h6"}),s(P,{count:6})])])):a(c)?(n(),S(Y,{key:1,onRefresh:I},{default:f(()=>[s(a(ut),{"slides-per-view":1,"space-between":0,modules:[a(ht)],autoplay:{delay:5e3,disableOnInteraction:!1},class:"swiper-hot"},{default:f(()=>[(n(!0),i(_,null,E(a(c).carousel,(o,r)=>O((n(),S(a(ct),{key:r,onClick:m=>a(D).push(o.path)},{default:f(()=>[s(a(ot),{"no-spinner":"",ratio:d,src:a(nt)(o.image),referrerpolicy:"no-referrer",class:"poster"},null,8,["src"]),Lt,Qt,Ft,e("div",jt,[e("div",zt,[s(at,null,{default:f(()=>[b(l(o.quality),1)]),_:2},1024),e("div",Bt,l(o.name),1)]),e("div",Nt,[e("span",Pt,[s(st),b(" "+l(o.rate),1)]),e("span",qt,l(o.year),1),e("span",Vt,l(o.process),1)]),o.genre.length>0?(n(),i("div",Yt,[(n(!0),i(_,null,E(o.genre,(m,v)=>(n(),i(_,{key:m.name},[s(x,{class:"c--main",to:m.path},{default:f(()=>[b(l(m.name),1)]),_:2},1032,["to"]),v<o.genre.length-1?(n(),i(_,{key:0},[b(", ")],64)):z("",!0)],64))),128))])):z("",!0),e("div",At,l(o.description),1)])]),_:2},1032,["onClick"])),[[M]])),128))]),_:1},8,["modules"]),e("div",Wt,[O((n(),S(x,{to:"/muc-luc",class:"col-4 relative py-2"},{default:f(()=>[Ht,e("span",Ut,l(a(u)("muc-luc")),1)]),_:1})),[[M]]),O((n(),S(x,{to:"/lich-chieu-phim",class:"col-4 relative py-2"},{default:f(()=>[wt,e("span",null,l(a(u)("lich-chieu")),1)]),_:1})),[[M]]),O((n(),S(x,{to:"/bang-xep-hang",class:"col-4 relative py-2"},{default:f(()=>[Gt,e("span",null,l(a(u)("bang-xep-hang")),1)]),_:1})),[[M]])]),e("div",Jt,[e("div",Kt,[e("div",Xt,[(n(!0),i(_,null,E(a(c).thisSeason,o=>(n(),S(F,{key:o.name,class:"card-wrap",data:o,"quality-float-right":""},null,8,["data"]))),128))])])]),e("div",Zt,[s(x,{to:"/bang-xep-hang/day",class:"text-subtitle1 text-weight-normal mx-2 flex items-center justify-between"},{default:f(()=>[b(l(a(u)("de-xuat"))+" ",1),s(a(R),{icon:"fluent:chevron-right-24-regular",class:"text-grey",width:"18",height:"18"})]),_:1}),s(q,{items:a(c).nominate},null,8,["items"])]),e("div",te,[s(x,{to:"/bang-xep-hang/day",class:"text-subtitle1 text-weight-normal mx-2 flex items-center justify-between"},{default:f(()=>[b(l(a(u)("top"))+" ",1),s(a(R),{icon:"fluent:chevron-right-24-regular",class:"text-grey",width:"18",height:"18"})]),_:1}),e("div",ee,[e("div",ae,[(n(!0),i(_,null,E(a(c).hotUpdate,(o,r)=>(n(),S(F,{key:o.name,class:"card-wrap",data:o,trending:r+1},null,8,["data","trending"]))),128))])])]),e("div",se,[s(x,{to:"/anime-sap-chieu",class:"text-subtitle1 text-weight-normal mx-2 flex items-center justify-between"},{default:f(()=>[b(l(a(u)("sap-chieu"))+" ",1),s(a(R),{icon:"fluent:chevron-right-24-regular",class:"text-grey",width:"18",height:"18"})]),_:1}),e("div",oe,[e("div",ne,[(n(!0),i(_,null,E(a(c).preRelease,o=>(n(),i("div",{key:o.name,class:"relative card-wrap"},[e("div",le,[ie,re,e("div",ce,[(B(p)?p.value=o.time_release?a(N)(o.time_release):null:p=o.time_release?a(N)(o.time_release):null)?(n(),i("div",ue,[(B(k)?k.value=a(p).isToday():k=a(p).isToday())||a(p).isTomorrow()?(n(),i(_,{key:0},[e("div",de,l(a(p).format("HH:mm")),1),e("div",_e,[a(k)?(n(),i(_,{key:0},[b(l(a(u)("hom-nay")),1)],64)):(n(),i(_,{key:1},[b(l(a(u)("ngay-mai")),1)],64))])],64)):(n(),i(_,{key:1},[e("div",pe,l(a(p).format(a(p).year()===new Date().getFullYear()?"M-DD":"YYYY-MM-DD")),1),e("div",me,l(a(p).locale("vi").format("dddd")),1)],64))])):(n(),i("span",fe,l(a(u)("sap-chieu")),1))])]),s(F,{data:o},null,8,["data"])]))),128))])])]),e("div",he,[s(x,{to:"/anime-moi",class:"text-subtitle1 text-weight-normal mx-2 flex items-center justify-between"},{default:f(()=>[b(l(a(u)("moi-cap-nhat"))+" ",1),s(a(R),{icon:"fluent:chevron-right-24-regular",class:"text-grey",width:"18",height:"18"})]),_:1}),s(q,{items:a(c).lastUpdate},null,8,["items"])])]),_:1})):(n(),S(lt,{key:2,class:"absolute","onClick:retry":a(C),error:a(g)},null,8,["onClick:retry","error"]))}}});var Fe=H(ye,[["__scopeId","data-v-4a64a340"]]);export{Fe as default};
