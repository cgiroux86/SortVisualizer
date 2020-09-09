export const bubbleSort = (
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
  let copy = [...arr];
  let sorted = false;
  let updates = [];
  let total = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      updates.push([i, i + 1]);
      if (copy[i] > copy[i + 1]) {
        updates.push([i, i + 1, true]);
        sorted = false;
        let p = copy[i];
        copy[i] = copy[i + 1];
        copy[i + 1] = p;
        updates.push(copy.slice(0));
        updates.push([]);
      }
    }
    updates.push([true, arr.length - 1 - total]);
    total++;
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
    setTimeout(() => {
      setCurrentSorted(arr.map((_, i) => i));
      setSwapping([]);
    });
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
    return func.setArr(updates.shift());
  }
  if (firstItem.length === 0 || firstItem.length === 3) {
    return func.setSwapping(updates.shift());
  }
  if (firstItem.length === 2 && firstItem[0] === true) {
    setCurrentSorted(currentSorted.concat(updates.shift()));
    return;
  } else if (firstItem.length == 2) {
    setSwapping(updates.shift());
    return;
  }
}
