import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { addDocument } from "../../firebase/cloudFirestore/setData";
import { uploadImage } from "../../firebase/cloudStorage/UploadImage";
import { getDocumentData } from "../../firebase/cloudFirestore/getData";
import {
  Box,
  Grid,
  Button,
  Select,
  Switch,
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

  const [tag, setTag] = useState([]);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [isPaid, setIsPaid] = useState(true);
  const [videoId, setVideoId] = useState("");
  const [allGenre, setAllGenre] = useState([]);
  const [embedCode, setEmbedCode] = useState("");
  const [thumbnail, setThumbnail] = useState("/upload-image.png");

  const imgUpload = (e) => {
    const imgFile = e.target.files[0];

    setThumbnail(URL.createObjectURL(imgFile));
    uploadImage(imgFile).then((res) => setThumbnail(res));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      tag,
      desc,
      title,
      genre,
      isPaid,
      videoId,
      embedCode,
      thumbnail,
      contentType: "Movie",
    };

    addDocument("content", data).then(() => navigate(-1));
  };

  useEffect(() => {
    getDocumentData("metadata", "tags").then((res) => setAllTags(res.tags));
    getDocumentData("metadata", "genres").then((res) => {
      setAllGenre(res.genres);
    });
  }, []);

  return (
    <>
      <Typography textAlign="center">
        <b>Add Movie</b>
      </Typography>
      <br />
      <Divider />
      <Box display="flex" alignItems="center" justifyContent="flex-end" m={2}>
        <Typography>Is this movie Paid?</Typography>
        &nbsp; &nbsp;
        <Switch onChange={() => setIsPaid(!isPaid)} defaultChecked />
      </Box>
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
            <Typography>Select movie categorization details :</Typography>
            <br />
            <FormControl fullWidth required>
              <InputLabel>Movie Tag</InputLabel>
              <Select
                value={tag}
                label="Movie Tag"
                onChange={(e) => setTag(e.target.value)}
                multiple
              >
                {allTags &&
                  allTags.map((e, index) => {
                    return (
                      <MenuItem key={index} value={e}>
                        {e}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth required>
              <InputLabel>Movie Genre</InputLabel>
              <Select
                value={genre}
                label="Movie Genre"
                onChange={(e) => setGenre(e.target.value)}
                multiple
              >
                {allGenre &&
                  allGenre.map((e, index) => {
                    return (
                      <MenuItem key={index} value={e}>
                        {e}
                      </MenuItem>
                    );
                  })}
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
