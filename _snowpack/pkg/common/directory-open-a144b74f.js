// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = async(e={})=>(e.recursive=e.recursive||!1,new Promise(((t,r)=>{const i=document.createElement("input");i.type="file",i.webkitdirectory=!0;const n=()=>{window.removeEventListener("focus",n),setTimeout((()=>{0===i.files.length&&r(new DOMException("The user aborted a request.","AbortError"));}),500);};i.addEventListener("click",(()=>{window.addEventListener("focus",n,!0);})),i.addEventListener("change",(()=>{let r=Array.from(i.files);e.recursive||(r=r.filter((e=>2===e.webkitRelativePath.split("/").length))),t(r);})),i.click();})));

export default directoryOpen;
