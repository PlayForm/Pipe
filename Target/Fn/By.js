var f=async(r,e,t)=>{for(const[a,o]of e)for(const n of await(await import("fast-glob")).async(r,{cwd:a,onlyFiles:!0}))t.set(`${o}${n}`,`${a}${n}`);return t};export{f as default};
