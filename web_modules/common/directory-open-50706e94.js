// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = async(e={})=>(e.recursive=e.recursive||!1,new Promise(t=>{const r=document.createElement("input");r.type="file",r.webkitdirectory=!0,r.addEventListener("change",()=>{let i=Array.from(r.files);e.recursive||(i=i.filter(e=>2===e.webkitRelativePath.split("/").length)),t(i);}),r.click();}));

export default directoryOpen;
