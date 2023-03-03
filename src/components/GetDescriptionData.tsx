export const GetDescriptionData = (algorithm: string | undefined) => {
  var title;
  var description;
  var code;

  switch (algorithm) {
    case "bubble-sort":
      title = "Bubble Sort 🫧";
      description =
        "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.";
      code = "";
      break;
    case "insertion-sort":
      title = "Insertion Sort 🧩";
      description = "";
      code = ``;
      break;
    case "quick-sort":
      title = "Quick Sort 🏎️";
      break;
    case "selection-sort":
      title = "Selection Sort 🎯";
      break;
    default:
      title = "Instructions";
      description = "";
      code = `Code will appear here!`;
      break;
  }

  return [title, description, code];
};
