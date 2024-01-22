import { Box, Typography } from "@mui/material";

export const TopCard = ({ heading, text }) => {
  return (
    <Box
      sx={{
        p: 4,
        color: "white",
        borderRadius: 2,
        bgcolor: "black",
      }}
    >
      <Typography variant="h4">
        <b>{heading}</b>
      </Typography>
      <br />
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};
