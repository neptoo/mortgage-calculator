import React from "react";
import SliderItem from "./common/SliderItem";

const SliderSelect = ({ data, setData }) => {
  // console.log(data)
  return (
    <>
      <SliderItem
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        step={100}
        onChange={(e, value) => setData({ homeValue: value })}
        label="房屋价值"
        amount={data.homeValue}
        value={data.homeValue}
        unit="￥"
      />
      <SliderItem
        min={0}
        max={100}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={10}
        onChange={(e, value) => setData({ downPayment: value })}
        label="首付款"
        amount={data.downPayment}
        unit="￥"
      />
      <SliderItem
        min={0}
        max={100}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={10}
        onChange={(e, value) => console.log(value)}
        label="贷款金额"
        amount={data.loanAmount}
        unit="￥"
      />
      <SliderItem
        min={0}
        max={100}
        defaultValue={data.loanTerm}
        value={data.loanTerm}
        step={10}
        onChange={(e, value) => console.log(value)}
        label="利息"
        amount={data.loanTerm}
        unit="%"
      />
    </>
  );
};

export default SliderSelect;
