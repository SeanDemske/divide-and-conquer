function findFloor(arr, floorVal) {
    let rightIdx = arr.length - 1;
    let leftIdx = 0;
    let midIdx;

    if (floorVal < arr[0]) return -1;

    do {
      midIdx = Math.floor((rightIdx + leftIdx) / 2);

      if (arr[midIdx] === floorVal) {
        return arr[midIdx - 1];
      } else if (arr[midIdx] > floorVal) {
        rightIdx = midIdx - 1;
      } else if (arr[midIdx] < floorVal) {
        leftIdx = midIdx + 1;
      }
    } while (rightIdx >= leftIdx)

    return arr[midIdx] > floorVal ? arr[midIdx - 1] : arr[midIdx];
}

module.exports = findFloor