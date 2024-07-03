import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <SliderSelect />
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
