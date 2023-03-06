// https://www.material-tailwind.com/docs/react/select
import React, { useEffect, useState } from "react";

import { Bar } from "./Bar";
import { Description } from "./Description";
import { BubbleSort } from "../algorithms/BubbleSort";
import { SelectionSort } from "../algorithms/SelectionSort";

export const Visualization = () => {
  const [array, setArray] = useState([] as number[]);
  const [arrayLength, setArrayLength] = useState<number>(30);
  const [isRunning, setisRunning] = useState<boolean | undefined>(false);
  const [algorithm, setAlgorithm] = useState<string | undefined>();
  const [sortSpeed, setSortSpeed] = useState<number>(2);

  const setBarsArray = () => {
    const newArray: number[] = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomNumber(5, 500));
    }
    setArray(newArray);
  };

  useEffect(() => {
    setBarsArray();
    resetBarsColour();
  }, [arrayLength, sortSpeed]);

  useEffect(() => {
    resetBarsColour();
  }, [algorithm]);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const resetBarsColour = () => {
    const bars = document.getElementsByClassName(
      "bar"
    ) as HTMLCollectionOf<HTMLElement>;
    for (var j = 0; j < bars.length; j++) {
      bars[j].style.backgroundColor = "white";
    }
  };

  const runVisualizer = async () => {
    setisRunning(true);
    switch (algorithm) {
      case "bubble-sort":
        await BubbleSort(array, sortSpeed);
        setisRunning(false);
        break;
      case "selection-sort":
        await SelectionSort(array, sortSpeed);
        setisRunning(false);
        break;
      default:
        alert("Please select an algorithm");
        setisRunning(false);
        break;
    }
  };

  return (
    <div className="w-full pt-5">
      <div className="flex flex-col md:flex-row w-full justify-center items-center pt-5 ">
        <div className="algorithm-selector sm:mx-auto md:mx-0 mt-5 md:mt-0">
          <select
            id="algoritms"
            disabled={isRunning}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select an algorithm</option>
            <option value="bubble-sort">Bubble Sort</option>
            <option value="selection-sort">Selection Sort</option>
          </select>
        </div>

        <div className="length-slider md:ml-5 text-center mt-5 md:mt-0">
          <label htmlFor="length-slider p-2.5">
            {" "}
            <span className="text-xs font-semibold block mb-1">
              Array Length
            </span>
          </label>
          <input
            id="length-slider"
            disabled={isRunning}
            type="range"
            defaultValue={30}
            min={10}
            max={75}
            step={5}
            onChange={(e) => setArrayLength(Number(e.target.value))}
            className={"w-[175px] h-2.5 bg-gray-50 dark:bg-gray-700"}
          />
        </div>
        <div className="length-slider md:ml-5 text-center mt-5 md:mt-0">
          <label htmlFor="length-slider p-2.5">
            {" "}
            <span className="text-xs font-semibold block mb-1">
              Sorting Speed
            </span>
          </label>
          <input
            id="length-slider"
            disabled={isRunning}
            type="range"
            defaultValue={2}
            min={1}
            max={5}
            step={1}
            onChange={(e) => setSortSpeed(Number(e.target.value))}
            className={"w-[175px] h-2.5 bg-gray-50 dark:bg-gray-700"}
          />
        </div>
        <div className="mt-5 md:ml-5 md:mt-0">
          <button
            onClick={runVisualizer}
            disabled={isRunning}
            className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-md"
          >
            {!isRunning ? "Run " : "Running... "}
            <svg
              className="ml-2"
              style={{ display: isRunning ? "none" : "inline-block" }}
              fill="#ffffff"
              width="10px"
              height="10px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M175 .024V1920l1570.845-959.927z" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="py-4 mt-6 h-[50vh] flex justify-center">
        {array!.map((val, index) => (
          <div key={index} className="">
            <Bar
              indexID={index.toString()}
              key={index}
              value={val}
              color="white"
            />
          </div>
        ))}
      </div>
      <div className="flex w-full mx-auto justify-center items-center mt-4">
        <Description algorithm={algorithm} />
      </div>
    </div>
  );
};
