import l from"fast-glob";var m=async(e,n,r)=>(n.forEach(([t,o])=>t&&o&&l(e,{cwd:t,onlyFiles:!0}).then(f=>f.forEach(a=>r.set(`${o}${a}`,`${t}${a}`)))),r);export{m as default};
