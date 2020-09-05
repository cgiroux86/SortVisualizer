function mergeSort(arr) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  }
  return arr;
}
function merge(arr1, arr2) {
  const arr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  arr.push(...arr1, ...arr2);
  return arr;
}

console.log(mergeSort([5, 2, 1, 9, 3, 4, 8, 2, 6]));
