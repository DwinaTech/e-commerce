import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "./CustomAppBar";
import { CustomDrawer, DrawerHeader } from "./CustomDrawer";
import { useLayout } from "./useLayout";

export const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export const Layout = ({ children }) => {
  const { open, handleDrawerOpen, handleDrawerClose } = useLayout();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <CustomDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
