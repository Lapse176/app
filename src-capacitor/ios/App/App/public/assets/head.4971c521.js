import{c as n,v as u,u as i,r as h,d as f,V as b,b as l}from"./index.b340747c.js";function p(r,t){const s=n(t||{}),d={unhead:s,install(e){u.startsWith("3")&&(e.config.globalProperties.$head=s,e.provide("usehead",s))},use(e){s.use(e)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(e,a){return s.push(e,a)},addEntry(e,a){return s.push(e,a)},addHeadObjs(e,a){return s.push(e,a)},addReactiveEntry(e,a){const o=i(e,a);return typeof o!="undefined"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(e,a){a?h(s,{document:e}):f(s,{delayFn:o=>setTimeout(()=>o(),50),document:e})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=d.addHeadObjs,s.updateDOM=d.updateDOM,s.hooks.hook("dom:beforeRender",e=>{for(const a of d.hooks["before:dom"])a()===!1&&(e.shouldRender=!1)}),r&&d.addHeadObjs(r),d}var c=l(({app:r})=>{const t=p();r.use(t)});export{c as default};
