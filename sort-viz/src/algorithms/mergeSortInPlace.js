function merge(arr, start, mid, end) {
  console.log(arr, mid);
  let startPointer = mid + 1;
  if (arr[mid] <= arr[startPointer]) {
    return;
  }
  while (start <= mid && startPointer <= end) {
    if (arr[start] <= arr[startPointer]) start++;
    else {
      let val = arr[startPointer];
      let idx = startPointer;
      while (idx != start) {
        arr[idx] = arr[idx - 1];
        idx--;
      }
      arr[start] = val;
      start++;
      mid++;
      startPointer++;
    }
  }
}

function mergeSortIP(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSortIP(arr, left, mid);
    mergeSortIP(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
const array = [9, 3, 1, 6, 5, 2, 4, 8, 7];
console.log(mergeSortIP(array, 0, array.length));
