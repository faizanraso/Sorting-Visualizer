import React, { useRef, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";
import { Instructions } from "./descriptions/Instructions";
import { BubbleSortDescription } from "./descriptions/BubbleSortDescription";
import { SelectionSortDescription } from "./descriptions/SelectionSortDescription";

export const Description = (props: {
  algorithm: string | null | undefined;
}) => {
  const getHeader = () => {
    if (props.algorithm === "bubble-sort") {
      return "Bubble Sort";
    } else if (props.algorithm === "selection-sort") {
      return "Selection Sort";
    } else {
      return "Instructions";
    }
  };

  const getDescription = () => {
    if (props.algorithm === "bubble-sort") {
      return <BubbleSortDescription />;
    } else if (props.algorithm === "selection-sort") {
      return <SelectionSortDescription />;
    } else {
      return <Instructions />;
    }
  };

  return (
    <div className="description-section flex flex-col md:flex-row w-10/12 pb-10 font-mono ">
      <div className="description w-full md:w-6/12 bg-zinc-900 border border-zinc-800 p-3">
        <h1 className="font-bold text-lg text-center">{getHeader()}</h1>
        {getDescription()}
      </div>
      <div className="code w-full md:w-6/12 border border-zinc-800">
        <CodeMirror
          value={"Coming soon..."}
          height={`635px`}
          extensions={[javascript({ jsx: true })]}
          theme={githubDark}
          basicSetup={true}
          editable={false}
        />
      </div>
    </div>
  );
};
