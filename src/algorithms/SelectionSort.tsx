import { GetSpeed } from "./GetSpeed";

export const SelectionSort = async (arr: number[], speedLevel: number) => {
  let i, j, val, indx, bar1, bar2;
  const delay = GetSpeed(speedLevel);

  for (i = 0; i < arr.length; i++) {
    val = arr[i];
    indx = i;
    j = i + 1;

    bar1 = document.getElementById(`bar-${i}`);

    if (bar1) {
      bar1.style.backgroundColor = "#2AA7E1";
      await new Promise((r) => setTimeout(r, delay));
    }

    while (j < arr.length) {
      bar2 = document.getElementById(`bar-${j}`);

      if (bar2) {
        bar2.style.backgroundColor = "#2AA7E1";
        await new Promise((r) => setTimeout(r, delay));
        bar2.style.backgroundColor = "white";
      }

      if (arr[j] < val) {
        val = arr[j];
        indx = j;
      }

      j++;
    }

    bar2 = document.getElementById(`bar-${indx}`);
    if (bar1 && bar2) {
      bar1.style.backgroundColor = "#ffa500";
      bar2.style.backgroundColor = "#ffa500";
      bar1.style.height = `${Math.floor((arr[indx] / 500) * 100)}%`;
      bar2.style.height = `${Math.floor((arr[i] / 500) * 100)}%`;
      await new Promise((r) => setTimeout(r, delay));
      bar1.style.backgroundColor = "white";
      bar2.style.backgroundColor = "white";
    }

    arr[indx] = arr[i];
    arr[i] = val;
  }

  const bars = document.getElementsByClassName(
    "bars"
  ) as HTMLCollectionOf<HTMLElement>;
  for (var k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "#00ff00";
  }
};
