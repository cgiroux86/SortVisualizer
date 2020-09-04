export const bubbleSort = (arr, setArr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        let p = arr[j];
        arr[j] = arr[i];
        arr[i] = p;
      }
      const copy = [...arr];
      setTimeout(() => {
        setArr(copy);
      }, 1000);
    }
  }
  setArr(arr);
};
