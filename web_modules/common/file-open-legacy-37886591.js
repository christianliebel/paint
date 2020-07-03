// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpenLegacy = async(e={})=>new Promise(t=>{const i=document.createElement("input");i.type="file";const n=[...e.mimeTypes?e.mimeTypes:[],e.extensions?e.extensions.map(e=>"."+e):[]].join();i.multiple=e.multiple||!1,i.accept=n||"*/*",i.addEventListener("change",()=>{t(i.multiple?i.files:i.files[0]);}),i.click();});

export default fileOpenLegacy;
