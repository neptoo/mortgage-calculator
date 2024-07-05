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
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
          })
        }
        label="房屋价值"
        amount={data.homeValue}
        value={data.homeValue}
        unit="￥"
      />
      <SliderItem
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value,
          })
        }
        label="首付款"
        amount={data.downPayment}
        unit="￥"
      />
      <SliderItem
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,
          })
        }
        label="贷款金额"
        amount={data.loanAmount}
        unit="￥"
      />
      <SliderItem
        min={2}
        max={10}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        label="利息"
        amount={data.interestRate}
        unit="%"
      />
    </>
  );
};

export default SliderSelect;
