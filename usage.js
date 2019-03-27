const fs = require("fs");

const getASTFromString = require("./index.js");

fs.readFile("./example.graphql", { encoding: "utf-8" }, function(err, data) {
  if (!err) {
    const ast = getASTFromString(data);
    console.log(ast);
  } else {
    throw Error(err);
  }
});
