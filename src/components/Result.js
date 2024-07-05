import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
  // 计算总月数
  const totalLoanMoths = loanTerm * 12;
  // 计算每月的利息
  const interestPerMonth = interestRate / 100 / 12; // inerestRate5 => 一年5% => 每个月5%/12

  // chatGPT
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMoths) /
    ((1 + interestPerMonth) ** totalLoanMoths - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMoths - loanAmount;

  const pieChartData = {
    labels: ["本金", "利息"],
    datasets: [
      {
        label: "本金和利息的比率",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={2}>
      <Typography variant="h5" textAlign="center">
        每月应付：￥{monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
