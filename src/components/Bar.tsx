import React from "react";

export const Bar = (props: { color: string | undefined; value: number }) => {
  const barHeight = Math.floor((props.value / 500) * 100);
  const barStyle = `${barHeight}%`;

  return (
    <div
      className="flex mx-1 px-0.5 sm:w-px rounded-sm inline-block"
      style={{ height: barStyle, backgroundColor: props.color }}
    ></div>
  );
};
