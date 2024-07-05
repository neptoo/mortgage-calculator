import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 3000,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect />
          </Grid>
          <Grid item md={6} xs={12}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
