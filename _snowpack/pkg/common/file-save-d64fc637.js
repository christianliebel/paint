// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = async(e,t={},i=null)=>{t.fileName=t.fileName||"Untitled";const a={};t.mimeTypes?(t.mimeTypes.push(e.type),t.mimeTypes.map((e=>{a[e]=t.extensions||[];}))):a[e.type]=t.extensions||[],i=i||await window.showSaveFilePicker({suggestedName:t.fileName,types:[{description:t.description||"",accept:a}]});const s=await i.createWritable();return await s.write(e),await s.close(),i};

export default fileSave;
