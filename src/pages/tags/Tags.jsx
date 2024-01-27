import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { updateArray } from "../../firebase/cloudFirestore/updateData";
import { getDocumentData } from "../../firebase/cloudFirestore/getData";
import {
  Box,
  Grid,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";

export default function Tags() {
  const [tag, setTag] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTag("");
    setData([...data, tag]);
    updateArray("metadata", "tags", "tags", tag);
  };

  useEffect(() => {
    getDocumentData("metadata", "tags").then((res) => setData(res.tags));
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {data &&
          data.map((e, index) => {
            return (
              <Grid item md={2} key={index}>
                <Box
                  px={2}
                  py={1}
                  color="white"
                  display="flex"
                  bgcolor="black"
                  borderRadius={6}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Typography>{e}</Typography>
                  <IconButton onClick={() => {}} color="error">
                    <Delete />
                  </IconButton>
                </Box>
              </Grid>
            );
          })}
      </Grid>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item md={8}>
            <TextField
              label="Tag"
              value={tag}
              placeholder="Enter Your Tag"
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
    </>
  );
}
