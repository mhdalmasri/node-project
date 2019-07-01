const fs = require('fs');
const {dependencies,devDependencies, version, name } = require("./package.json");
var text = fs.readFileSync('./package.json','utf8')
console.log(text)
console.log('name: ' + name)
console.log('version: ' + version)
console.log('number of devDepandencies: '+ Object.keys(devDependencies).length)
console.log('number of depandencies: '+ Object.keys(dependencies).length)
const stats = fs.statSync("node_modules");
const fileSizeInBytes = stats.size;
console.log('node_modules size : '+ fileSizeInBytes +' bytes')