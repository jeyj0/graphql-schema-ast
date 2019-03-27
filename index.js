function lineHandler(acc, line) {
  return acc + line + "\n";
}

function getASTFromString(string) {
  const lines = string.split("\n");
  const ast = lines.reduce(lineHandler);
  return ast;
}

module.exports = getASTFromString;
