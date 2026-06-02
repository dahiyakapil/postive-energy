const path = require("path");


const filePath = path.join("folder", "upload", "resume.pdf");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName)

const entensionName = path.extname(filePath);
console.log(entensionName);

const directoryName = path.dirname(filePath)
console.log(directoryName);

const resolvedPath = path.resolve(filePath);
console.log(resolvedPath);