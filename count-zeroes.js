function countZeroes(arr) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let numOfZeros = 0;

  while (endIdx >= startIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    let midVal = arr[midIdx];

    debugger;
    if (midVal === 0) {
      numOfZeros += (endIdx - midIdx) + 1;
      endIdx = midIdx - 1;
    } else if (midVal === 1) {
      startIdx = midIdx + 1;
    }
  }
  return numOfZeros;
}

module.exports = countZeroes