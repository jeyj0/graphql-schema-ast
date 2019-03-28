const handler = require("./src/handler");

function separateSymbols(string) {
  return string
    .replace(/;/g, " ; ")
    .replace(/,/g, " , ")
    .replace(/:/g, " : ")
    .replace(/\(/g, " ( ")
    .replace(/\)/g, " ) ")
    .replace(/\[/g, " [ ")
    .replace(/]/g, " ] ")
    .replace(/{/g, " { ")
    .replace(/}/g, " } ")
    .replace(/!/g, " } ");
}

function getASTFromString(string) {
  const separated = separateSymbols(string);
  const simplified = separated.replace(/\s+/g, " ");
  const parts = simplified.split(" ");
  const ast = parts.reduce(handler);
  return ast;
}

module.exports = getASTFromString;
