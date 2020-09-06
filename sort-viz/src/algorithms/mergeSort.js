export function mergeSort(
  arr,
  setArray,
  setSorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swappin
) {
  const array = arr.slice();
  const updates = [];
  let start = 0;
  let end = arr.length - 1;
  const results = _mergeSort(
    arr.map((el, i) => [el, i]),
    updates,
    start,
    end,
    { arr: array.slice() },
    setSorting,
    funcObj
  );
  handleTimeout(updates, funcObj, array, setSorting);
}

function _mergeSort(arr, updates, start, end, startArr, sorting, funcObj) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let half = Math.floor((1 + start + end) / 2);
    left = _mergeSort(
      left,
      updates,
      start,
      half - 1,
      startArr,
      sorting,
      funcObj
    );
    right = _mergeSort(right, updates, half, end, startArr, sorting, funcObj);
    return merge(left, right, start, end, startArr, updates);
  }
  return arr;
}
function merge(arr1, arr2, start, end, startArr, updates) {
  let arr = [];
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
    startArr.arr = arr
      .map((el) => el[0])
      .concat(arr1.map((el) => el[0]))
      .concat(arr2.map((el) => el[0]))
      .concat(startArr.arr.slice(end + 1));
  } else {
    startArr.arr = startArr.arr
      .slice(0, start)
      .concat(arr.map((el) => el[0]))
      .concat(arr1.map((el) => el[0]))
      .concat(arr2.map((el) => el[0]))
      .concat(startArr.arr.slice(end + 1));
  }
  updates.push(startArr.arr.concat([idx - 1, idx]));
  updates.push([]);
  return arr.concat(arr1).concat(arr2);
}
function handleTimeout(updates, funcObj, arr, sorting) {
  function fnToCall(updated) {
    if (updated[0].length > 3) return "SET";
    if (updated[0].length === 3 && updated[0][2] === true) return "SWAP";
    if (updated[0].length === 2 && updated[0][0]) return "SORTED";
  }
  if (!updates.length) {
    setTimeout(() => {
      funcObj.currentSorted(arr.map((_, i) => i));
      funcObj.setSwapping([]);
      sorting(false);
    }, 200);
  } else {
    const fn = fnToCall(updates);
    const shifted = updates.shift();
    if (fn === "SET") {
      funcObj.setArr(shifted.slice(0, shifted.length - 2));
      funcObj.setSwapping([]);
      funcObj.currentSorted([]);
      funcObj.setSwapping([
        shifted[shifted.length - 2],
        shifted[shifted.length - 1],
      ]);
    } else {
      fn === "SWAP"
        ? funcObj.setSwapping(shifted)
        : fn === "SORTED"
        ? funcObj.currentSorted(shifted)
        : funcObj.setSwapping(shifted);
    }
  }
  setTimeout(() => {
    handleTimeout(updates, funcObj, arr, sorting);
  }, 100);
}
