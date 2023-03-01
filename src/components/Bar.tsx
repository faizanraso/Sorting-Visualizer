import React from "react";

export const Bar = (props: {
  indexID: string | undefined;
  color: string | undefined;
  value: number;
}) => {
  const barHeight = Math.floor((props.value / 500) * 100);
  const barStyle = `${barHeight}%`;

  return (
    <div
      id={`bar-${props.indexID}`}
      className="flex mx-1 px-0.5 sm:w-px rounded-sm inline-block bar"
      style={{ height: barStyle, backgroundColor: props.color }}
    ></div>
  );
};
