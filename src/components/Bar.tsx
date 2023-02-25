import React from "react";

export const Bar = (props: { value: number }) => {
  const divHeight = Math.floor((props.value / 500) * 100);
  console.log(props.value);
  console.log(divHeight);

  const divClasses = `bg-white mx-1 px-1 w-8 h-[${divHeight}%] block`;

  return (
    <div className={divClasses}>
      <p className="text-black text-xs text-center">{props.value}</p>
    </div>
  );
};
