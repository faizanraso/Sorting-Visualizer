import { GetSpeed } from "./GetSpeed";

export const InsertionSort = async (arr: number[], speedLevel: number) => {
  var i, j, key, bar1, bar2;
  for (i = 1; i < arr.length; i++) {
    
    bar1 = document.getElementById(`bar-${i}`);
    
    key = arr[i];

    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
};
