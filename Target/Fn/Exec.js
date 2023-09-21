import{exec as r}from"child_process";var c=async(e,o=t=>console.log(t))=>{try{const t=r(e);typeof o=="function"&&t.stdout?.on("data",n=>o(n))}catch{}};export{c as default};
