import { useState } from "react";
import {
  Grid,
  Button,
  Select,
  Divider,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function AddMovie() {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography textAlign="center">
        <b>Add Movie</b>
      </Typography>
      <br />
      <Divider />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <img src="/upload-image.png" alt="Upload" />
          </Grid>
          <Grid item md={6}>
            <TextField
              value={title}
              label="Title"
              placeholder="Enter Movie Name"
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <TextField
              value={url}
              label="URL"
              placeholder="Paste HLS url here"
              onChange={(e) => setUrl(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <TextField
              rows={4}
              value={desc}
              label="Description"
              placeholder="Enter Movie Description"
              onChange={(e) => setDesc(e.target.value)}
              multiline
              fullWidth
              required
            />
            <br />
            <br />
            <br />
            <Divider />
            <br />
            <Typography>Is this movie Free or Paid</Typography>
            <br />
            <FormControl fullWidth required>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                label="Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="Free">Free</MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
              </Select>
            </FormControl>
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
    </>
  );
}
