import React from "react";
import { Man, Woman, Home, ShoppingCart } from "@mui/icons-material";
import { linksData } from "./CustomDrawer";

export const renderIcon = (text) => {
  switch (text) {
    case linksData[0].text:
      return <Home sx={{ color: "#efefef" }} />;
    case linksData[1].text:
      return <ShoppingCart sx={{ color: "#efefef" }} />;
    case linksData[2].text:
      return <Home sx={{ color: "#efefef" }} />;
    case linksData[3].text:
      return <Home sx={{ color: "#efefef" }} />;
    case linksData[4].text:
      return <Man sx={{ color: "#efefef" }} />;
    case linksData[5].text:
      return <Woman sx={{ color: "#efefef" }} />;
    default:
      return;
  }
};

export const useLayout = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return { open, handleDrawerOpen, handleDrawerClose };
};
