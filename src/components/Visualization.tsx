// https://www.material-tailwind.com/docs/react/select

import React, { useEffect, useState } from "react";
import { Bar } from "./Bar";

export const Visualization = () => {
  const [array, setArray] = useState([] as number[]);
  const [arrayLength, setArrayLength] = useState<Number>(30);

  function setBarsArray() {
    const newArray: number[] = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomNumber(5, 500));
    }
    setArray(newArray);
  }

  useEffect(() => {
    setBarsArray();
  }, [arrayLength]);

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="w-full pt-5">
      <div className="flex flex-row items-center w-full justify-center items-center pt-5">
        <div className="algorithm-selector">
          <select
            id="algoritms"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select an algorithm</option>
            <option value="bubble-sort">Bubble Sort</option>
            <option value="inersetion-sort">Insertion Sort</option>
            <option value="quick-sort">Quick Sort</option>
            <option value="selection-sort">Selection Sort</option>
          </select>
        </div>
        <div className="length-slider md:ml-5 text-center">
          <label htmlFor="length-slider p-2.5">
            {" "}
            <span className="text-xs font-semibold block mb-1 ">
              Array Length
            </span>
          </label>
          <input
            id="length-slider"
            className=""
            type="range"
            defaultValue={30}
            min={10}
            max={75}
            step={5}
            onChange={(e) => setArrayLength(Number(e.target.value))}
          />
        </div>
        <div className="md:ml-5">
          <button className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-md">
            Run{" "}
            <svg
              className="ml-2"
              fill="#ffffff"
              width="10px"
              height="10px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M175 .024V1920l1570.845-959.927z" fill-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="py-8 h-[50vh] flex justify-center ">
        {array!.map((val, index) => (
          <div key={index} className="">
            <Bar key={index} value={val} color="white" />
          </div>
        ))}
      </div>
    </div>
  );
};
