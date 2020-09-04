export const bubbleSort = (arr, setArr) => {
  const copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      setArr(arr);
      console.log(arr);
      return;
    }, 900);
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        let p = arr[j];
        arr[j] = arr[i];
        arr[i] = p;
      }
    }
  }

  return copy;
};
