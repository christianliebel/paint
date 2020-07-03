// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t=async(e,i,r=[])=>{for await(const s of e)s.isFile?r.push(await s.getFile()):s.isDirectory&&i&&await t(await s.getEntries(),i,r);return r};var directoryOpenNativefs = async(e={})=>{e.recursive=e.recursive||!1,e.multiple=e.multiple||!1;try{const i=await window.chooseFileSystemEntries({type:"open-directory",multiple:e.multiple});if(e.multiple){const r=[];for(const s of i){const i=await s.getEntries();r.push(await t(i,e.recursive));}return r}const r=await i.getEntries();return await t(r,e.recursive)}catch(t){throw t}};

export default directoryOpenNativefs;
