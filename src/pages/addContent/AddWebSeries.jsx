import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { TextField, Grid, Typography, Button } from "@mui/material";

export const AddWebSeries = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Sidebar>
      <Typography textAlign="center">
        <b>Add Web Series</b>
      </Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <TextField
              label="Title"
              value={title}
              variant="standard"
              placeholder="Enter Web Series Name"
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid md={3}></Grid>
          <Grid md={6}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              SUBMIT
            </Button>
          </Grid>
          <Grid md={3}></Grid>
        </Grid>
      </form>
    </Sidebar>
  );
};
