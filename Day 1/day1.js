import { rawNums } from "./day1data";

// sanitizes data from rawNums into a 2D array
// with each inner array as a pair of numbers
const nums = rawNums
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

// transform each numbers in both columns to their respective
// arrays and sort them ascendingly to return the total distance
function sortNumbers(arr2D) {
  const leftArr = [];
  const rightArr = [];
  let totalDistance = 0;

  // populate each arr with each column's numbers
  for (let i = 0; i < arr2D.length; i++) {
    leftArr.push(arr2D[i][0]);
    rightArr.push(arr2D[i][1]);
  }

  leftArr.sort((a, b) => a - b);
  rightArr.sort((a, b) => a - b);

  // can iterate through one array, since both are of the same length
  for (let i = 0; i < leftArr.length; i++) {
    totalDistance += Math.abs(leftArr[i] - rightArr[i]);
  }

  return totalDistance;
}

console.log(sortNumbers(nums));
