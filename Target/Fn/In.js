import n from"./Apply.js";import{fileURLToPath as s}from"url";var i=async(o,e)=>{const a=await n(t=>t.endsWith("/")?t:`${t}/`,await n(t=>t instanceof URL?s(t):t,o));if(a instanceof Map)for(const[t,r]of a)e.set(t,r);else e.set(a,a);return e};export{i as default};
