import { useState, useRef } from "react";
import {
  Box,
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

export default function AddWebSeries() {
  const uploadBtn = useRef(null);

  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [episode, setEpisodes] = useState([]);
  const [episodeDesc, setEpisodeDesc] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [previewImg, setPreviewImg] = useState("/upload-image.png");

  const imgUpload = (e) => {
    const imgFile = e.target.files[0];

    setPreviewImg(URL.createObjectURL(imgFile));
    uploadImage(imgFile).then((res) => setPreviewImg(res));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography textAlign="center">
        <b>Add Web Series</b>
      </Typography>
      <br />
      <Divider />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography textAlign="center">Upload Movie Thumbnail</Typography>
            <br />
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => uploadBtn.current.click()}
            >
              <img src={previewImg} alt="Upload" />
            </Box>
            <input
              type="file"
              ref={uploadBtn}
              accept="image/*"
              onChange={imgUpload}
              hidden
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Title"
              value={title}
              placeholder="Enter Web Series Title"
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <TextField
              rows={4}
              value={desc}
              label="Description"
              placeholder="Enter Web Series Description"
              onChange={(e) => setDesc(e.target.value)}
              multiline
              fullWidth
              required
            />
            <br />
            <br />
            <Divider />
            <br />
            <Typography>Is this Web Series Free or Paid</Typography>
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
            <br />
            <br />
            <Divider />
            <br />
            <Typography>Enter Episode Details Below :</Typography>
            <br />
            <Box p={4} boxShadow={2} borderRadius={2}>
              <TextField
                variant="standard"
                value={episodeTitle}
                label="Episode Title"
                placeholder="Enter Episode Title"
                onChange={(e) => setEpisodeTitle(e.target.value)}
                fullWidth
              />
              <br />
              <br />
              <TextField
                variant="standard"
                value={episodeDesc}
                label="Episode Description"
                onChange={(e) => setEpisodeDesc(e.target.value)}
                rows={3}
                fullWidth
                multiline
              />
            </Box>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              SUBMIT
            </Button>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </form>
    </>
  );
}
