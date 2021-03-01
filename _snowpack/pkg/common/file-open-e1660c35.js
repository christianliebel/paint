// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = async(e={})=>new Promise(((t,n)=>{const i=document.createElement("input");i.type="file";const s=[...e.mimeTypes?e.mimeTypes:[],e.extensions?e.extensions:[]].join();i.multiple=e.multiple||!1,i.accept=s||"*/*";const o=()=>{window.removeEventListener("focus",o),0===i.files.length&&n(new DOMException("The user aborted a request.","AbortError"));};i.addEventListener("click",(()=>{window.addEventListener("focus",o,!0);})),i.addEventListener("change",(()=>{t(i.multiple?i.files:i.files[0]);})),i.click();}));

export default fileOpen;
