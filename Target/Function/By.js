var f=async(r,n,t)=>{for(const[a,o]of n)for(const e of await(await import("fast-glob")).default(r,{cwd:a,onlyFiles:!0}))t.set(`${o}${e}`,`${a}${e}`);return t};export{f as default};
