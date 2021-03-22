function sortedFrequency(arr, numToFindFrequencyOf) {
    let startIdx = 0;
    let endIdx = arr.length - 1;
  
    debugger;
    while (endIdx >= startIdx) {
      let midIdx = Math.floor((startIdx + endIdx) / 2);
      let midVal = arr[midIdx];
  
      if (midVal === numToFindFrequencyOf) {
        const firstOcc = findFirstOccurance(arr, midIdx, midVal);
        const lastOcc = findLastOccurance(arr, midIdx, midVal);
        return (lastOcc - firstOcc) + 1;
      } else if (midVal < numToFindFrequencyOf) {
          startIdx = midIdx + 1;
      } else if (midVal > numToFindFrequencyOf) {
          endIdx = midIdx - 1;
      }
    }
    return -1;
}

function findFirstOccurance(arr, idx, val) {
    let firstOccuranceIdx = idx;
    let counter = 1;
    while (arr[idx - counter] === val) {
        firstOccuranceIdx = idx - counter;
        counter++;
    }
    return firstOccuranceIdx;
}

function findLastOccurance(arr, idx, val) {
    let lastOccuranceIdx = idx;
    let counter = 1;
    while (arr[idx + counter] === val) {
        lastOccuranceIdx = idx + counter;
        counter++;
    }
    return lastOccuranceIdx;
}

module.exports = sortedFrequency