import React from "react";

export const Bar = (props: { value: number }) => {
  const divHeight = Math.floor((props.value / 500) * 100);
  console.log(props.value);
  console.log(divHeight);

  const divStyle = `${divHeight}%`;

  return (
    <div>
      <p className="text-white text-xs text-center">{props.value}</p>
      <div
        className="bg-white mx-1 px-1 w-8"
        style={{ height: divStyle }}
      ></div>
    </div>
  );
};
