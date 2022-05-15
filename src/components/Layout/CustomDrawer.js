import * as React from "react";
import {
  Link,
  List,
  Avatar,
  Drawer,
  Divider,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { drawerWidth } from ".";
import { renderIcon } from "./useLayout";

export const DrawerHeader = styled("div")(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  ...(open && { height: "130px" }),
}));

const StyledDivider = styled(Divider)`
  border-color: #5c5959;
`;

const StyledLink = styled(Link)`
  width: 100%;
  color: #fff;
`;

export const linksData = [
  { text: "All", path: "/" },
  { text: "Chart", path: "/chart" },
  { text: "Electronics", path: "/electronics" },
  { text: "Jewelry", path: "/jewelry" },
  { text: "Men's clothes", path: "/men-clothing" },
  { text: "Women's clothing", path: "/women-clothing" },
];

export const CustomDrawer = ({ open, handleDrawerClose }) => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        color: "#efefef",
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundColor: "#424242",
      },
    }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    <DrawerHeader open={open}>
      <Avatar
        alt="Cindy Baker"
        sx={{ width: 56, height: 56, marginRight: "10px" }}
        src="https://avatars.githubusercontent.com/u/26422326?v=4"
      />
      <div>
        <Typography component="h4">Welcome!</Typography>
        <Typography color="#9d9b9c" component="h4">
          Mohammed Dwina
        </Typography>
      </div>
    </DrawerHeader>
    <List>
      {linksData.map(({ text, path }) => (
        <div key={text}>
          <ListItem disablePadding>
            <StyledLink to={path} underline="none" component={RouterLink}>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemIcon>{renderIcon(text)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </StyledLink>
          </ListItem>
          <StyledDivider />
        </div>
      ))}
    </List>
  </Drawer>
);
