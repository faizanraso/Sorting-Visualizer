import React from "react";

export const BubbleSortDescription = () => {
  return (
    <div className="text-sm p-5">
      <p>
        Bubble Sort is a simple sorting algorithm that works by repeatedly
        swapping adjacent elements if they are in the wrong order. The algorithm
        gets its name from the way smaller elements "bubble" to the top of the
        array during each pass.
      </p>
      <br />
      <p>
        Bubble Sort begins by comparing the first two elements of the array,
        swapping them if the first element is greater than the second. The
        algorithm then moves to the next pair of elements and continues this
        process until it reaches the end of the array.
      </p>
      <br />
      <p>
        At this point, the largest element is guaranteed to be at the end of the
        array. The algorithm then repeats the process, comparing and swapping
        adjacent elements until the second largest element is at the
        second-to-last position. The algorithm continues this way until the
        entire array is sorted.
      </p>
      <br />
      <p>
        While Bubble Sort is one of the simplest sorting algorithms to
        understand and implement, it is not very efficient for large data sets.
        Bubble Sort has a time complexity of O(n^2), making it impractical for
        use in production environments with large data sets.
      </p>
    </div>
  );
};
