import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCollectionData } from "../../firebase/cloudFirestore/getData";
import { Box, Button, Popover, Divider, Grid, TextField } from "@mui/material";

export default function Content() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [anchor, setAnchor] = useState(null);

  const open = Boolean(anchor);
  const id = open ? "popover" : undefined;

  useEffect(() => {
    getCollectionData("content").then((res) => setData(res));
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          variant="contained"
          aria-describedby={id}
          onClick={(e) => setAnchor(e.currentTarget)}
        >
          + &nbsp; Add Content
        </Button>
      </Box>
      <Box mx={10} my={2} display="flex">
        <TextField
          value={search}
          variant="standard"
          label="Search Content"
          placeholder="Enter Content Title Here"
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={2}>
          <Link to="./add-movie">
            <Button fullWidth variant="text">
              Add Movie
            </Button>
          </Link>
          <br />
          <br />
          <Divider />
          <br />
          <Link to="./add-web-series">
            <Button fullWidth variant="text">
              Add Web Series
            </Button>
          </Link>
        </Box>
      </Popover>
      <br />
      <br />
      <Grid container spacing={2}>
        {data &&
          data.map((e, index) => {
            return (
              <Grid item md={4} key={index}>
                <Link to="#">
                  <Box boxShadow={3} p={1} borderRadius={1} height={250}>
                    <img
                      src={e.thumbnail}
                      alt="Movie Thumbnail"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
