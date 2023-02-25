import React, { useEffect, useState } from "react";
import { Bar } from "./Bar";

export const Visualization = () => {
  const [array, setArray] = useState([] as number[]);

  function setBarsArray() {
    const newArray: number[] = [];
    for (var i = 0; i < 25; i++) {
      newArray.push(randomNumber(5, 500));
    }
    setArray(newArray);
  }

  useEffect(() => {
    setBarsArray();
  }, []);

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="py-10 flex mx-auto">
      {array!.map((val, index) => (
        <div key={index} className="flex flex-row h-[50vh] block">
          <Bar key={index} value={val} />
        </div>
      ))}
    </div>
  );
};
