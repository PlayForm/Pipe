import{constants as m}from"fs";import{access as w,writeFile as y,mkdir as h,stat as O}from"fs/promises";import{dirname as p}from"path";var L=async(a,{Fulfilled:i,Failed:r,Accomplished:s,Changed:f,Passed:c,Read:u,Wrote:l})=>{let t=a;try{console.log(a.Cache),console.log(import.meta.url)}catch{}for(const[n,g]of t.Results)try{if(t.On.Input=g,t.On.Output=n,t.On.Before=(await O(t.On.Input)).size,u&&l){t.On.Buffer=await u(t.On);const o=await l("./Cache",t.On);if(!o)continue;if(t.On.Buffer=o,c&&await c(t.On)){try{await w(p(t.On.Output),m.W_OK)}catch{await h(p(t.On.Output),{recursive:!0})}if(await y(t.On.Output,t.On.Buffer,"utf-8"),t.On.After=(await O(t.On.Output)).size,t.Logger>0&&(t.Files++,f&&(t=await f(t))),t.Logger>1&&typeof s=="function"){const e=await s(t.On);e&&e.length>0&&console.log(e)}}}}catch(o){if(t.Results.delete(n),typeof r=="function"){const e=await r(t.On,o);e&&e.length>0&&console.log(e)}else t.Logger>1&&console.log(o)}if(t.Logger>0&&t.Results.size>0&&typeof i=="function"){const n=await i(t);n&&n.length>0&&console.log(n)}return t};export{L as default};
