import{constants as w}from"fs";import{access as m,writeFile as y,mkdir as B,stat as O}from"fs/promises";import{dirname as p}from"path";var _=async(l,{Fulfilled:a,Failed:i,Accomplished:s,Changed:f,Passed:r,Read:u,Wrote:c})=>{let t=l;for(const[e,g]of t.Results)try{if(t.On.Input=g,t.On.Output=e,t.On.Before=(await O(t.On.Input)).size,u&&c){t.On.Buffer=await u(t.On);const o=await c(t.On);if(!o)continue;if(t.On.Buffer=o,r&&await r(t.On)){try{await m(p(t.On.Output),w.W_OK)}catch{await B(p(t.On.Output),{recursive:!0})}if(await y(t.On.Output,t.On.Buffer,"utf-8"),t.On.After=(await O(t.On.Output)).size,t.Logger>0&&(t.Files++,f&&(t=await f(t))),t.Logger>1&&typeof s=="function"){const n=await s(t.On);n&&n.length>0&&console.log(n)}}}}catch(o){if(t.Results.delete(e),typeof i=="function"){const n=await i(t.On,o);n&&n.length>0&&console.log(n)}else t.Logger>1&&console.log(o)}if(t.Logger>0&&t.Results.size>0&&typeof a=="function"){const e=await a(t);e&&e.length>0&&console.log(e)}return t};export{_ as default};
