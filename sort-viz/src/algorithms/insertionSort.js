export const insertionSort = (
  arr,
  setArr,
  sorting,
  funcObj,
  currentSorted,
  setCurrentSorted,
  setSwapping,
  swapping,
  speed
) => {
  const updates = [];
  const copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const current = copy[i];
    let j = i;
    updates.push([i]);
    while (j > 0 && current <= copy[j - 1]) {
      copy[j] = copy[j - 1];
      updates.push([i, j]);
      j--;
    }
    copy[j] = current;
    updates.push([i, j, true]);
    updates.push(copy.slice(0));
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
    speed
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
  speed
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
      arr,
      speed
    );
  }, speed);
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
    console.log("first item", firstItem);
    func.setArr(updates.shift());
    return;
  } else if (firstItem.length === 0 || firstItem.length === 3) {
    func.setSwapping(updates.shift());
    return;
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
