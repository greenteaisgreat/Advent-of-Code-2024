import { rawData } from "./day2Data";

// sanitize data
const data = rawData
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

function findSafeReports(arr2D) {
  let totalSafe = 0;

  // nested loops because I'm a savage
  for (let i = 0; i < arr2D.length; i++) {
    let isIncreasing = false;

    for (let j = 0; j < arr2D[i].length; j++) {
      let first = arr2D[i][j];
      let next = arr2D[i][j + 1];
      let diff = Math.abs(first - next);

      // find out if the initial two numbers are increasing or decreasing
      if (arr2D[i][0] < arr2D[i][1]) isIncreasing = true;

      // logic to guage if each report is safe or not, based off
      // the challenges paramters (strictly increasing/decreasing,
      // each adjacent number is at least one or no more than 3 in value)
      if (isIncreasing && next) {
        if (first >= next) {
          break;
        }
        if (diff > 3 || diff < 1) break;
      } else if (!isIncreasing && next) {
        if (first <= next) {
          break;
        }
        if (diff > 3 || diff < 1) break;
      } else totalSafe++;
    }
  }
  return totalSafe;
}

console.log(findSafeReports(data));
