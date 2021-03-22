function findRotatedIndex(arr, numToFind) {
  const pivotIdx = findPivot(arr);
  if (numToFind >= arr[0] && numToFind <= arr[pivotIdx]) {
    return binarySearch(arr, 0, pivotIdx, numToFind);
  } else {
    return binarySearch(arr, pivotIdx + 1, arr.length - 1, numToFind);
  }
}

function binarySearch(arr, start, end, numToFind) {
  debugger;
  while (end >= start) {
    let midIdx = Math.floor((start + end) / 2);
    if (arr[midIdx] === numToFind) {
      return midIdx;
    } else if (arr[midIdx] > numToFind) {
      end = midIdx - 1;
    } else if (arr[midIdx] < numToFind) {
      start = midIdx + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (rightIdx >= leftIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (arr[midIdx] > arr[midIdx + 1] && arr[midIdx] > arr[midIdx - 1]) {
      return midIdx;
    } else if (arr[leftIdx] <= arr[midIdx]) {
      leftIdx = midIdx + 1;
    } else if (arr[leftIdx] >= arr[midIdx]) {
      rightIdx = midIdx - 1;
    }
  }
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8);

module.exports = findRotatedIndex