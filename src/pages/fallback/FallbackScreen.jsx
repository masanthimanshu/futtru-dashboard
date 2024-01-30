import { Box, CircularProgress } from "@mui/material";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const FallbackScreen = () => {
  return (
    <Sidebar>
      <Box
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    </Sidebar>
  );
};
