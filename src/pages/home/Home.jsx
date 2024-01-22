import { Line } from "react-chartjs-2";
import chartData from "./data/chartData.json";
import { Grid, Container } from "@mui/material";
import chartOptions from "./data/chartOptions.json";
import { TopCard } from "../../components/home/TopCard";

export default function Home() {
  return (
    <>
      <Grid container spacing={3} textAlign="center">
        <Grid item md={4}>
          <TopCard heading="Data 1" text="35" />
        </Grid>
        <Grid item md={4}>
          <TopCard heading="Data 2" text="35" />
        </Grid>
        <Grid item md={4}>
          <TopCard heading="Data 3" text="35" />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Container maxWidth="md">
        <Line data={chartData} options={chartOptions} />
      </Container>
    </>
  );
}
