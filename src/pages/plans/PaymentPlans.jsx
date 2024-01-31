import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function PaymentPlans() {
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Link to="#">
          <Button color="primary" variant="contained">
            + &nbsp; Add Plans
          </Button>
        </Link>
      </Box>
    </>
  );
}
