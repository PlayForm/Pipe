var i=async(...[a,r,t])=>{for(const[e,p]of r)for(const o of await f(a,{cwd:e??s(),onlyFiles:!0}))t.set(`${p}${o}`,`${e}${o}`);return t};const{cwd:s}=await import("process"),{default:f}=await import("fast-glob");export{f as FastGlob,s as cwd,i as default};
