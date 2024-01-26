import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCollectionData } from "../../firebase/cloudFirestore/getData";
import { Box, Button, Popover, Divider, Grid, Typography } from "@mui/material";

export default function Content() {
  const [data, setData] = useState([]);
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
      <Grid container spacing={5}>
        {data &&
          data.map((e, index) => {
            return (
              <Grid item md={4} key={index} sx={{ cursor: "pointer" }}>
                <Box boxShadow={3} p={2} borderRadius={2}>
                  <img src={e.thumbnail} alt="Thumbnail" />
                  <br />
                  <br />
                  <Typography>{e.title}</Typography>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
