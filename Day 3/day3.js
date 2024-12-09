// i went with node's file system because i couldn't parse
// that mountain of text adequately
const fs = require("fs");
const path = require("path");

const input = fs.readFileSync("day3Data.txt", "utf8").toString();

// regex to parse out the valid, numeric entries
const product = input
  .matchAll(/mul\((\d+),(\d+)\)/g)
  .map(([, a, b]) => +a * +b)
  .reduce((a, b) => a + b);

console.log(product);
