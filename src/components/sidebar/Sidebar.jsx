import { Link } from "react-router-dom";
import { SidebarItems } from "./SidebarItems";
import {
  Home,
  Logout,
  Person,
  Payment,
  TagSharp,
  VideoCall,
} from "@mui/icons-material";
import {
  Box,
  List,
  Drawer,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";

export const Sidebar = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ width: "calc(100% - 250px)" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>OTT Dashboard</Typography>
          <Link
            to={"/"}
            onClick={() => sessionStorage.setItem("isLoggedIn", false)}
          >
            <Logout />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <Link to={"/home"}>
          <img src="/logo.png" alt="Logo" style={{ width: "75%" }} />
        </Link>
        <br />
        <List>
          <SidebarItems
            icon={<Home color="primary" />}
            text="Home"
            link="/home"
          />
          <SidebarItems
            icon={<Person color="primary" />}
            text="Users"
            link="/users"
          />
          <SidebarItems
            icon={<TagSharp color="primary" />}
            text="Metadata"
            link="/metadata"
          />
          <SidebarItems
            icon={<VideoCall color="primary" />}
            text="Content"
            link="/content"
          />
          <SidebarItems
            icon={<Payment color="primary" />}
            text="Plans"
            link="/payment-plans"
          />
        </List>
      </Drawer>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        {children}
      </Container>
    </Box>
  );
};
