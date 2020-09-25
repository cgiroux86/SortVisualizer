export const insertionSort = (
  arr,
  setArr,
  sorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping,
  speed,
  setComparing
) => {
  const updates = [];
  const copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const current = copy[i];
    let j = i;
    // updates.push([i]);
    while (j > 0 && current <= copy[j - 1]) {
      copy[j] = copy[j - 1];
      j--;
      updates.push([i, j]);
    }
    copy[j] = current;
    updates.push([i, j, true]);
    updates.push(copy.slice(0));
    updates.push([]);
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
    arr,
    speed,
    setComparing
  );
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
  arr,
  speed,
  setComparing
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
    swapping,
    setComparing
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
      arr,
      speed,
      setComparing
    );
  }, speed);
}

function funcToExec(
  func,
  updates,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping,
  setComparing
) {
  const firstItem = updates[0];
  if (firstItem.length > 3) {
    func.setArr(updates.shift());
  } else if (firstItem.length === 3) {
    func.setSwapping(updates.shift());
    setComparing([]);
  } else if (firstItem.length === 2 && firstItem[0] === true) {
    setCurrentSorted(currentSorted.concat(updates.shift()));
  } else if (firstItem.length === 2) {
    setComparing(updates.shift());
    setSwapping([]);
  } else {
    updates.shift();
  }
}
