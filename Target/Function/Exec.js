var n=async(a,o=t=>console.log(t))=>{try{const t=(await import("child_process")).exec(a);o&&typeof o=="function"&&t.stdout?.on("data",e=>o(e))}catch{}};export{n as default};
