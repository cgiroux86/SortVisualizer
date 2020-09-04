export const insertionSort = (arr, setArr) => {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let j = i;
    const copy1 = [...arr];
    setTimeout(() => {
      setArr(copy1);
    }, 2000);
    while (j > 0 && current <= arr[j - 1]) {
      arr[j] = arr[j - 1];
      const copy = [...arr];
      setTimeout(() => {
        setArr(copy);
        console.log(copy);
      }, 2000);
      j--;
    }
    arr[j] = current;
  }
};
