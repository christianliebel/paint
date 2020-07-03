// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSaveNativefs = async(e,t={},i=null)=>{try{t.fileName=t.fileName||"Untitled",i=i||await window.chooseFileSystemEntries({type:"save-file",accepts:[{description:t.description||"",mimeTypes:[e.type],extensions:t.extensions||[""]}]});const a=await i.createWritable();return await a.write(e),await a.close(),i}catch(e){throw e}};

export default fileSaveNativefs;
