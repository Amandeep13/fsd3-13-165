import {mkdir} from "fs/promises";
//await mkdir("upload");
//console.log("folder created");
await mkdir ("upload/resume");
console.log("resume created under upload folder");

await mkdir("images/profile/logos",{recursive:tree});
console.log("all folders created");