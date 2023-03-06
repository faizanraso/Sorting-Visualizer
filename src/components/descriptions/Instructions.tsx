export const Instructions = () => {
  return (
    <div className="text-sm p-5">
      <p>
        <ol className="list-decimal">
          <li>
            Select an algorithm: Choose the sorting algorithm you want to
            visualize. We currently support Bubble Sort and Selection Sort, but
            we're always adding more! 🚀
          </li>
          <br />
          <li>
            Choose array size: Pick the size of the array you want to sort.
            Levels range from 10 to 75.
          </li>
          <br />

          <li>
            Choose speed: Adjust the speed at which the algorithm is executed.
            You can choose between 5 different levels.
          </li>
          <br />

          <li>
            Click the "Run" button to start the visualization. You'll see the
            array displayed as a set of bars. Blue bars indicate the elements
            being scanned, while orange bars indicate the elements being
            swapped.
          </li>
          <br />

          <li>
            When the array turns green, you know that the algorithm has
            successfully sorted the array.
          </li>
        </ol>
      </p>
    </div>
  );
};
