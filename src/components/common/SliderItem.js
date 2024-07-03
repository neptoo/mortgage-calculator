import React from "react";
import Slider from "@mui/material/Slider";

const SliderItem = ({ defaultValue, min, max, step }) => {
  return (
    <Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      aria-label="Default"
      valueLabelDisplay="auto"
      marks
      step={step}
    />
  );
};

export default SliderItem;
