# 贷款计算器

![效果图](https://s3.bmp.ovh/imgs/2024/07/06/9c81d17a24fa481a.png)

## 简介

### 技术栈

`React` + `Material UI`+ `react-chartjs-2`

参考文档：

[Material UI](https://mui.com/material-ui/)

[react-chartjs-2](https://react-chartjs-2-two.vercel.app/)

### 特性

- 网站主题切换（Light / Dark）

- 调整房屋价值，首付款默认值为房屋价值的20%，贷款金额默认为80%
- 房屋价值固定，调整首付款，贷款金额默认为两者之差；反之同理
- 本金/利息占比图表可视化

计算规则：

房屋价值 = 首付款 + 贷款金额

贷款金额 * 利息 = 每月应付金额 * 12 * 年限

首付款和贷款金额的最大值，由房屋价值动态决定

## 开发运行

```bash
npm install

npm run start
```



