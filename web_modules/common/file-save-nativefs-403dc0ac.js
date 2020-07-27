// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSaveNativefs = async(e,t={},i=null)=>{t.fileName=t.fileName||"Untitled",i=i||await window.showSaveFilePicker({types:[{description:t.description||"",accept:{[e.type]:t.extensions||[""]}}]});const a=await i.createWritable();return await a.write(e),await a.close(),i};

export default fileSaveNativefs;
