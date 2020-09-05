export const insertionSort = (
  arr,
  setArr,
  sorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping
) => {
  const updates = [];
  const copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let j = i;
    updates.push([i]);
    while (j > 0 && current <= arr[j - 1]) {
      arr[j] = arr[j - 1];
      updates.push([i, j]);
      j--;
    }
    arr[j] = current;
    updates.push([i, j, true]);
    updates.push(arr.slice(0));
  }
  handleTimeout(
    updates,
    setArr,
    sorting,
    funcObj,
    currentSorted,
    setCurrentSorted,
    setSwapping,
    swapping,
    arr
  );
  console.log(arr);
  return copy;
};
function handleTimeout(
  updates,
  setArr,
  sorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping,
  arr
) {
  if (!updates.length) {
    sorting(false);
    setCurrentSorted(arr.map((_, i) => i));
    setSwapping([]);
    return;
  }
  funcToExec(
    funcObj,
    updates,
    currentSorted,
    setCurrentSorted,
    setSwapping,
    swapping
  );
  setTimeout(() => {
    handleTimeout(
      updates,
      setArr,
      sorting,
      funcObj,
      currentSorted,
      setCurrentSorted,
      setSwapping,
      swapping,
      arr
    );
  }, 100);
}

function funcToExec(
  func,
  updates,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping
) {
  const firstItem = updates[0];
  if (firstItem.length > 3) {
    return func.setArr(updates.shift());
  } else if (firstItem.length === 0 || firstItem.length === 3) {
    return func.setSwapping(updates.shift());
  } else if (firstItem.length === 2 && firstItem[0] === true) {
    setCurrentSorted(currentSorted.concat(updates.shift()));
    return;
  } else if (firstItem.length == 2) {
    setSwapping(updates.shift());
    return;
  } else {
    updates.shift();
  }
}
