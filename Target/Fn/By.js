import f from"fast-glob";var p=async(a,e,t)=>{for(const[o,n]of e)for(const r of await f(a,{cwd:o,onlyFiles:!0}))t.set(`${n}${r}`,`${o}${r}`);return t};export{p as default};
