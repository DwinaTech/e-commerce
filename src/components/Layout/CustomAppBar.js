import * as React from "react";
import {
  Link,
  Toolbar,
  IconButton,
  Typography,
  AppBar as MuiAppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { drawerWidth } from ".";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#ea1d62 !important",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledToolBar = styled(Toolbar)`
  justify-content: space-between;
`;

const CustomAppBar = ({ open, handleDrawerOpen }) => (
  <AppBar position="fixed" open={open}>
    <StyledToolBar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="h2">
        <Link component={RouterLink} to="/" color="#fff" underline="none">
          Shope
        </Link>
      </Typography>
      <Typography variant="h6" noWrap component="h2">
        <Link component={RouterLink} to="/chart" color="#fff" underline="none">
          Chart
        </Link>
      </Typography>
    </StyledToolBar>
  </AppBar>
);

export default CustomAppBar;
