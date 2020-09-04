export const selectionSort = (arr, setArr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const copy = [...arr];
      setTimeout(() => {
        setArr(copy);
      }, 2000);
      if (arr[i] > arr[j]) {
        let p = arr[i];
        arr[i] = arr[j];
        arr[j] = p;
      }
    }
  }
};
