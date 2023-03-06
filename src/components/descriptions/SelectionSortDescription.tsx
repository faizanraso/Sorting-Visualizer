import React from "react";

export const SelectionSortDescription = () => {
  return (
    <div className="text-sm p-5">
      <p>
        Selection Sort is a simple sorting algorithm that works by repeatedly
        finding the minimum element from an unsorted list and moving it to the
        beginning of the list. The algorithm divides the input list into two
        parts: the sublist of items already sorted and the sublist of items
        remaining to be sorted. Initially, the sorted sublist is empty, and the
        unsorted sublist is the entire input list. The algorithm proceeds by
        finding the smallest element in the unsorted sublist, swapping it with
        the leftmost unsorted element (putting it in sorted order), and moving
        the sublist boundaries one element to the right. This process is
        repeated until the entire list is sorted.
      </p>
      <br />
      <p>
        Selection Sort has a time complexity of O(n^2) in both the best and
        worst cases, making it inefficient for large lists. However, it has the
        advantage of requiring only O(1) additional memory space, making it
        useful in situations where memory is at a premium.
      </p>
    </div>
  );
};
