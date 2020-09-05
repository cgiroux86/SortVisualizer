const updates = [];
export function mergeSort(
  arr,
  setArr,
  setSorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping
) {
  let start = 0;
  let end = arr.length - 1;
  const results = _mergeSort(arr, updates, start, end);
  console.log("funcObj", funcObj);

  handleTimeout(funcObj, setSorting);
}

function _mergeSort(arr, updates, start, end) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    let half = Math.floor((start + end) / 2);
    left = _mergeSort(left, updates, 0, half);
    right = _mergeSort(right, updates, half, arr.length);
    return merge(left, right, start, end, updates);
  }
  return arr;
}
function merge(arr1, arr2, start, end) {
  const arr = [];
  while (arr1.length && arr2.length) {
    updates.push([arr1[0], arr2[0]]);
    if (arr1[0] <= arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  arr.push(...arr1, ...arr2);
  updates.push([...arr]);
  console.log(updates, arr);
  return arr;
}

function handleTimeout(funcObj, setSorting) {
  if (!updates.length) {
    setSorting(false);
    return;
  }
  funcObj.setArr(updates.shift());
  setTimeout(() => {
    handleTimeout(funcObj, setSorting);
  }, 100);
}
