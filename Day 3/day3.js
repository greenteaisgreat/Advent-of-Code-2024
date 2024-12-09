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

// PART TWO
const product2 = input
  .matchAll(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g)
  .map(([match, a, b]) => (b ? +a * +b : match));

const instructions = product2.toArray();

let active = true;
let sum = 0;

for (const instr of instructions) {
  if (active && typeof instr == "number") sum += instr;
  if (active && instr == "don't()") active = false;
  if (!active && instr == "do()") active = true;
}

console.log(sum);
