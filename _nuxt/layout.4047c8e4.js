import{a as r,X as p,z as m,Y as y,l as c,u as f,Z as l,$ as d,a0 as u,T as L,s as _}from"./entry.2a6126ff.js";const h=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const e=await l[s.name]().then(a=>a.default||a);return()=>_(e,t.attrs,t.slots)}}),T=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const e=p("_route"),a=e===m()?y():e,n=c(()=>f(s.name)??a.meta.layout??"default");return()=>{const o=n.value&&n.value in l,i=a.meta.layoutTransition??d;return u(L,o&&i,{default:()=>u(h,o&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}});export{T as _};
