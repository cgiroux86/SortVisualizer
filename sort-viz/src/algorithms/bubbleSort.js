export const bubbleSort = (arr, setArr, sorting) => {
  let copy = [...arr];
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // sorted.push([i,j])
      if (copy[j] > copy[i]) {
        let p = copy[j];
        copy[j] = copy[i];
        copy[i] = p;
        sorted.push([...copy]);
      }
    }
    handleTimeout(sorted, setArr);
  }

  function handleTimeout(copy, setArr) {
    if (!sorted.length) {
      sorting(false);
      return;
    }
    setArr(copy.shift());
    setTimeout(() => {
      handleTimeout(copy, setArr);
    }, 1000);
  }
};
