var fs=require('fs');
var source=fs.readFileSync('../buffer/logo.png');
fs.writeFileSync('strea_copylogo.png',source);
