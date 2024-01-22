import { Line } from "react-chartjs-2";
import chartData from "./data/chartData.json";
import chartOptions from "./data/chartOptions.json";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Grid, Box, Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Sidebar>
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
    </Sidebar>
  );
};

const TopCard = ({ heading, text }) => {
  return (
    <Box
      sx={{
        p: 4,
        color: "white",
        borderRadius: 2,
        bgcolor: "black",
      }}
    >
      <Typography variant="h4">
        <b>{heading}</b>
      </Typography>
      <br />
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};
