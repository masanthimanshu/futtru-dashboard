import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addDocument } from "../../firebase/cloudFirestore/setData";
import { uploadImage } from "../../firebase/cloudStorage/UploadImage";
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

export default function AddMovie() {
  const navigate = useNavigate();
  const uploadBtn = useRef(null);

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [videoId, setVideoId] = useState("");
  const [embedCode, setEmbedCode] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [thumbnail, setThumbnail] = useState("/upload-image.png");

  const imgUpload = (e) => {
    const imgFile = e.target.files[0];

    setThumbnail(URL.createObjectURL(imgFile));
    uploadImage(imgFile).then((res) => setThumbnail(res));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      desc,
      title,
      videoId,
      embedCode,
      thumbnail,
      paymentType,
      contentType: "Movie",
    };

    addDocument("content", data).then(() => navigate(-1));
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
            <Typography textAlign="center">Upload Movie Thumbnail</Typography>
            <br />
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => uploadBtn.current.click()}
            >
              <img src={thumbnail} alt="Upload" />
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
            <Divider />
            <br />
            <Typography>Enter movie details below :</Typography>
            <br />
            <TextField
              value={videoId}
              label="Video ID"
              placeholder="Paste Video ID here"
              onChange={(e) => setVideoId(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <TextField
              value={embedCode}
              label="Trailer Embed Code"
              placeholder="Paste Youtube Embed Code here"
              onChange={(e) => setEmbedCode(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <Divider />
            <br />
            <Typography>Is this movie Free or Paid</Typography>
            <br />
            <FormControl fullWidth required>
              <InputLabel>Payment Type</InputLabel>
              <Select
                value={paymentType}
                label="Payment Type"
                onChange={(e) => setPaymentType(e.target.value)}
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
