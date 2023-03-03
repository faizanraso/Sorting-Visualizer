import React, { useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";

export const Description = (props: {
  algorithm: string | null | undefined;
  description: string | null | undefined;
  code: string | undefined;
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="description-section flex flex-col md:flex-row w-10/12 pb-10 font-mono"
      style={{ display: !props.algorithm ? "none" : "flex" }}
    >
      <div className="description w-full md:w-6/12 bg-zinc-900 border border-zinc-800 p-3">
        <h1 className="font-bold text-lg">{props.algorithm}</h1>
        <p className="text-xs pt-4">{props.description}</p>
      </div>
      <div
        className="code w-full md:w-6/12 border border-zinc-800"
        ref={editorRef}
      >
        <CodeMirror
          value={props.code}
          height="350px"
          extensions={[javascript({ jsx: true })]}
          theme={githubDark}
          basicSetup={true}
          editable={false}
        />
      </div>
    </div>
  );
};
