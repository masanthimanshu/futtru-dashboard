import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { getDocumentData } from "../../firebase/cloudFirestore/getData";
import {
  updateArrayAdd,
  updateArrayRemove,
} from "../../firebase/cloudFirestore/updateData";
import {
  Box,
  Grid,
  Button,
  Divider,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";

export default function Metadata() {
  const [tag, setTag] = useState("");
  const [genre, setGenre] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  const handleTagSubmission = (e) => {
    e.preventDefault();

    setTag("");
    setAllTags([...allTags, tag]);
    updateArrayAdd("metadata", "tags", "tags", tag);
  };

  const handleGenreSubmission = (e) => {
    e.preventDefault();

    setGenre("");
    setAllGenres([...allGenres, genre]);
    updateArrayAdd("metadata", "genres", "genres", genre);
  };

  useEffect(() => {
    getDocumentData("metadata", "tags").then((res) => setAllTags(res.tags));
    getDocumentData("metadata", "genres").then((res) => {
      setAllGenres(res.genres);
    });
  }, []);

  return (
    <>
      <Typography textAlign="center">Tags Data</Typography>
      <br />
      <br />
      <Grid container spacing={2}>
        {allTags &&
          allTags.map((e, index) => {
            return (
              <Grid item md={2} key={index}>
                <Box
                  p={1}
                  color="white"
                  display="flex"
                  bgcolor="black"
                  borderRadius={10}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Typography>{e}</Typography>
                  <IconButton
                    color="info"
                    onClick={() => {
                      const arr = allTags.filter((item) => item !== e);
                      setAllTags(arr);

                      updateArrayRemove("metadata", "tags", "tags", e);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Grid>
            );
          })}
      </Grid>
      <br />
      <br />
      <form onSubmit={handleTagSubmission}>
        <Grid container spacing={5}>
          <Grid item md={8}>
            <TextField
              label="Tag"
              value={tag}
              placeholder="Enter Content Tag"
              onChange={(e) => setTag(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center" height="100%">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Typography textAlign="center">Genre Data</Typography>
      <br />
      <br />
      <Grid container spacing={2}>
        {allGenres &&
          allGenres.map((e, index) => {
            return (
              <Grid item md={2} key={index}>
                <Box
                  p={1}
                  color="white"
                  display="flex"
                  bgcolor="black"
                  borderRadius={10}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Typography>{e}</Typography>
                  <IconButton
                    color="info"
                    onClick={() => {
                      const arr = allGenres.filter((item) => item !== e);
                      setAllGenres(arr);

                      updateArrayRemove("metadata", "genres", "genres", e);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Grid>
            );
          })}
      </Grid>
      <br />
      <br />
      <form onSubmit={handleGenreSubmission}>
        <Grid container spacing={5}>
          <Grid item md={8}>
            <TextField
              label="Genre"
              value={genre}
              placeholder="Enter Content Genre"
              onChange={(e) => setGenre(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center" height="100%">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
