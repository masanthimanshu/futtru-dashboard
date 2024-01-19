import { useNavigate } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

export const SidebarItems = ({ text, icon, link }) => {
  const navigate = useNavigate();

  return (
    <ListItem>
      <ListItemButton onClick={() => navigate(`${link}`)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>
          <b>{text}</b>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
