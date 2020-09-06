const updates = [];
let sorted = [];

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
  const results = _mergeSort(
    arr.map((el, i) => [el, i]),
    updates,
    start,
    end,
    [...arr.slice(0)]
  );
  handleTimeout(funcObj, setSorting, results);
}

function _mergeSort(arr, updates, start, end, startArr) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    let half = Math.floor((start + end) / 2);
    left = _mergeSort(left, updates, 0, half, startArr);
    right = _mergeSort(right, updates, half, arr.length, startArr);
    return merge(left, right, start, end, startArr);
  }
  return arr;
}
function merge(arr1, arr2, start, end, startArr) {
  const arr = [];
  let idx = start;
  while (arr1.length && arr2.length) {
    updates.push([arr1[0][1], arr2[0][1]]);
    if (arr1[0][0] <= arr2[0][0]) {
      idx++;
      arr.push(arr1.shift());
    } else {
      updates.push([arr1[0][1], arr2[0][1], true]);
      arr2[0][1] = idx++;
      arr.push(arr2.shift());
      arr1.forEach((array) => array[1]++);
    }
  }

  if (start === 0) {
    sorted = arr
      .map((el) => el[0])
      .concat(arr1.map((el) => el[0]))
      .concat(arr2.map((el) => el[0]))
      .concat(startArr.slice(0).slice(end + 1));
  } else {
    sorted = sorted
      .slice(0, start)
      .concat(arr.map((el) => el[0]))
      .concat(arr1.map((el) => el[0]))
      .concat(arr2.map((el) => el[0]))
      .concat(sorted.slice(end + 1));
  }
  console.log(sorted, "theEND", arr1, arr2);
  updates.push([...sorted, idx - 1, idx]);
  return arr.concat(arr1).concat(arr2);
}
function handleTimeout(funcObj, setSorting, arr) {
  if (!updates.length) {
    funcObj.setArr(arr.map((el) => el[0]));
    setSorting(false);
    return;
  } else if (updates[0].length > 3) {
    const toSort = updates.shift();
    funcObj.setSwapping([]);
    funcObj.currentSorted([]);
    funcObj.setSwapping([toSort[toSort.length - 2], toSort[toSort.length - 1]]);
    funcObj.currentSorted([
      toSort[toSort.length - 2],
      toSort[toSort.length - 1],
    ]);
    funcObj.setArr(toSort.slice(0, toSort.length - 2));
  } else if (
    (updates[0].length === 3 && updates[0][2] === true) ||
    !updates.length
  ) {
    funcObj.setSwapping(updates.shift());
  } else if (updates[0].length === 2 && updates[0][0] === true) {
    funcObj.currentSorted(updates.shift());
  } else {
    updates.shift();
  }
  setTimeout(() => {
    handleTimeout(funcObj, setSorting, arr);
  }, 100);
}
