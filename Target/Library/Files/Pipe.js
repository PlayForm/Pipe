import{constants as w}from"fs";import{access as m,writeFile as y,mkdir as B,stat as c}from"fs/promises";import{dirname as l}from"path";var E=async(p,{Fulfilled:a,Failed:s,Accomplished:o,Changed:f,Passed:u,Read:r,Wrote:O})=>{let t=p;for(const[e,g]of t.Results)try{if(t.On.Input=g,t.On.Output=e,t.On.Before=(await c(t.On.Input)).size,r&&O){t.On.Buffer=await r(t.On);const i=await O(t.On);if(!i)continue;if(t.On.Buffer=i,u&&await u(t.On)){try{await m(l(t.On.Output),w.W_OK)}catch{await B(l(t.On.Output),{recursive:!0})}if(await y(t.On.Output,t.On.Buffer,"utf-8"),t.On.After=(await c(t.On.Output)).size,t.Debug>0&&(t.Files++,f&&(t=await f(t))),t.Debug>1&&typeof o=="function"){const n=await o(t.On);n&&n.length>0&&console.log(n)}}}}catch(i){if(t.Results.delete(e),typeof s=="function"){const n=await s(t.On,i);n&&n.length>0&&console.log(n)}else t.Debug>1&&console.log(i)}if(t.Debug>0&&t.Results.size>0&&typeof a=="function"){const e=await a(t);e&&e.length>0&&console.log(e)}return t};export{E as default};
//# sourceMappingURL=Pipe.js.map
