import s from"fast-glob";var p=async(r,e,t)=>{for(const[o,a]of e){const l=await s(r,{cwd:o,onlyFiles:!0});for(const n of l)t.set(`${a}${n}`,`${o}${n}`)}return t};export{p as default};
