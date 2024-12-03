import { rawNums } from "./day1data";

/*
PART ONE
*/

// sanitizes data from rawNums into a 2D array
// with each inner array as a pair of numbers
const nums = rawNums
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

// transform each numbers in both columns to their respective
// arrays and sort them ascendingly to return the total distance
function findTotalDistance(arr2D) {
  const leftArr = [];
  const rightArr = [];
  // PART ONE ANSWER
  let totalDistance = 0;
  // PART TWO ANSWER
  let similarityScore = 0;
  const similarityCache = {};

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

    // populate the cache to see the frequency of each # in the right array
    similarityCache[rightArr[i]]
      ? similarityCache[rightArr[i]]++
      : (similarityCache[rightArr[i]] = 1);
  }

  // determine the similarity score for each number's frequency
  for (let i = 0; i < leftArr.length; i++) {
    if (similarityCache[leftArr[i]]) {
      similarityScore += leftArr[i] * similarityCache[leftArr[i]];
    }
  }

  // return answers for both parts in an array
  return [totalDistance, similarityScore];
}

console.log(findTotalDistance(nums));
