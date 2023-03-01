import React from "react";

export const Bar = (props: {
  id: string | number | undefined;
  color: string | undefined;
  value: number;
}) => {
  const barHeight = Math.floor((props.value / 500) * 100);
  const barStyle = `${barHeight}%`;

  return (
    <div
      id={props.id}
      className="flex mx-1 px-0.5 sm:w-px rounded-sm inline-block"
      style={{ height: barStyle, backgroundColor: props.color }}
    ></div>
  );
};
