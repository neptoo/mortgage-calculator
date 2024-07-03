import React from "react";
import SliderItem from "./common/SliderItem";

const SliderSelect = () => {
  return (
    <>
      <SliderItem min={0} max={100} defaultValue={30} step={10} />
    </>
  );
};

export default SliderSelect;
