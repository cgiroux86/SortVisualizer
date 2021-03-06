const updates = [];

export function quickSort(
  array,
  setArray,
  setSorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping,
  speed,
  setComparing
) {
  let arr = array.slice();
  let sorted = _quickSort(arr, 0, arr.length - 1);
  handleTimeOut(funcObj, setSorting, arr, speed, setComparing);
  return sorted;
}
function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      updates.push([i, j]);
      i++;
    }
    while (items[j] > pivot) {
      updates.push([j, pivot]);
      j--;
    }
    if (i <= j) {
      let temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      updates.push([i, j, true]);
      i++;
      j--;
    }
    updates.push([pivot]);
    updates.push(items.slice());
  }
  return i;
}

function _quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      //more elements on the left side of the pivot
      _quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      _quickSort(items, index, right);
    }
  }
}

function handleTimeOut(funcObj, sorting, arr, speed, setComparing) {
  function fnToCall(array) {
    if (array[0].length > 3) {
      funcObj.setArr(array.shift());
    } else if (array[0].length === 3 && array[0][2] === true) {
      setComparing([]);
      funcObj.setSwapping(array.shift());
    } else if (array[0].length === 2) {
      funcObj.setSwapping([]);
      setComparing(array.shift());
    } else {
      funcObj.currentSorted(array.shift());
    }
  }
  if (!updates.length) {
    setTimeout(() => {
      funcObj.setSwapping([]);
      funcObj.currentSorted(arr.map((_, i) => i));
      sorting(false);
    }, 200);
    return;
  }
  fnToCall(updates);
  setTimeout(() => {
    handleTimeOut(funcObj, sorting, arr, speed, setComparing);
  }, speed);
}
// let array = [6, 8, 3, 2, 2, 1, 5, 7, 0, 9];
// console.log(quickSort(array, 0, array.length - 1));
