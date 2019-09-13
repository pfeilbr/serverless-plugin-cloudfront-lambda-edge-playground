const fs = require("fs");
const path = require("path");
const stackFilePath = path.resolve(__dirname, "..", ".build/stack.json");
const stack = JSON.parse(fs.readFileSync(stackFilePath));
console.log(stack[process.argv[2]]);
