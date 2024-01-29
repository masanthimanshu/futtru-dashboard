import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Button, Popover, Divider, Grid } from "@mui/material";
import { getCollectionData } from "../../firebase/cloudFirestore/getData";

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
      <br />
      <br />
      <Grid container spacing={2}>
        {data &&
          data.map((e, index) => {
            return (
              <Grid item md={4} key={index} sx={{ cursor: "pointer" }}>
                <Box boxShadow={2} p={1} borderRadius={1} height={300}>
                  <img
                    src={e.thumbnail}
                    alt="Movie Thumbnail"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
