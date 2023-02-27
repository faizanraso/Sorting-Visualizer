import React from "react";

export const Description = (props: {
  algorithm: string | null | undefined;
}) => {
  return (
    <div
      className="description-section flex flex-col md:flex-row w-10/12 pb-10"
      style={{ display: !props.algorithm ? "none" : "flex" }}
    >
      <div className="description w-full md:w-6/12 bg-zinc-900 border border-zinc-800 p-3">
        <h1>{props.algorithm}</h1>
      </div>
      <div className="code w-full md:w-6/12 border border-zinc-800 p-3">
        <p>TEST2</p>
      </div>
    </div>
  );
};
