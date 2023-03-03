import { GetSpeed } from "./GetSpeed";

export const bubbleSort = async (arr: number[], speedLevel: number) => {
  var swapped = false;
  var greenSet = false;
  const delay = GetSpeed(speedLevel);
  console.log(speedLevel);
  console.log(delay);

  while (true) {
    swapped = false;
    for (var i = 0; i < arr.length; i++) {
      const bar1 = document.getElementById(`bar-${i}`);
      const bar2 = document.getElementById(`bar-${i + 1}`);
      greenSet = false;

      if (bar1 && bar2) {
        bar1.style.backgroundColor = "#2AA7E1";
        bar2.style.backgroundColor = "#2AA7E1";
        await new Promise((r) => setTimeout(r, delay));
      }

      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        if (bar1 && bar2) {
          bar1.style.height = `${Math.floor((arr[i] / 500) * 100)}%`;
          bar2.style.height = `${Math.floor((arr[i + 1] / 500) * 100)}%`;
          bar1.style.backgroundColor = "#ffa500";
          bar2.style.backgroundColor = "#ffa500";
          await new Promise((r) => setTimeout(r, delay));
        }
        swapped = true;
      }

      if (bar1 && bar2) {
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
      }
    }

    if (!swapped) {
      const bars = document.getElementsByClassName(
        "bar"
      ) as HTMLCollectionOf<HTMLElement>;
      for (var j = 0; j < bars.length; j++) {
        bars[j].style.backgroundColor = "#00ff00";
      }
      break;
    }
  }
};
