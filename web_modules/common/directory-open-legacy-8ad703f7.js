// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpenLegacy = async(e={})=>(e.recursive=e.recursive||!1,e.multiple=e.multiple||!1,new Promise(t=>{const i=document.createElement("input");i.type="file",i.webkitdirectory=!0,i.multiple=e.multiple,i.addEventListener("change",()=>{let l=Array.from(i.files);if(e.recursive||(l=l.filter(e=>2===e.webkitRelativePath.split("/").length)),e.multiple){const e=new Set,t=[];l.forEach(t=>{e.add(t.webkitRelativePath.split("/")[0]);});for(const i of e)t.push(l.filter(e=>e.webkitRelativePath.startsWith(i)));l=t;}t(l);}),i.click();}));

export default directoryOpenLegacy;
