// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpenNativefs = async(e={})=>{try{const t=await window.chooseFileSystemEntries({accepts:[{description:e.description||"",mimeTypes:e.mimeTypes||["*/*"],extensions:e.extensions||[""]}],multiple:e.multiple||!1});if(e.multiple){const e=[];for(const i of t){const t=await i.getFile();t.handle=i,e.push(t);}return e}const i=await t.getFile();return i.handle=t,i}catch(e){throw e}};

export default fileOpenNativefs;
