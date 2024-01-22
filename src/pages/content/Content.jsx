import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Popover, Divider } from "@mui/material";

export default function Content() {
  const [anchor, setAnchor] = useState(null);

  const open = Boolean(anchor);
  const id = open ? "popover" : undefined;

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
    </>
  );
}
