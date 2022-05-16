import React from "react";
import {
  Man,
  Home,
  Woman,
  Favorite,
  DesktopMac,
  ShoppingCart,
} from "@mui/icons-material";
import { linksData } from "./CustomDrawer";
import { useLocation } from "react-router-dom";

export const renderIcon = (text) => {
  switch (text) {
    case linksData[0].text:
      return <Home sx={{ color: "#efefef" }} />;
    case linksData[1].text:
      return <ShoppingCart sx={{ color: "#efefef" }} />;
    case linksData[2].text:
      return <Favorite sx={{ color: "#efefef" }} />;
    case linksData[3].text:
      return <DesktopMac sx={{ color: "#efefef" }} />;
    case linksData[4].text:
      return <Man sx={{ color: "#efefef" }} />;
    case linksData[5].text:
      return <Woman sx={{ color: "#efefef" }} />;
    default:
      return;
  }
};

const pagesMapping = {
  "/": "Shope",
  "/chart": "Check out",
  "/jewelry": "Jewelry",
  "/electronics": "Electronics",
  "/men-clothing": "Men clothing",
  "/women-clothing": "Women clothing",
};

export const useLayout = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pageName = pagesMapping[location.pathname] || "Shope";

  return { open, pageName, handleDrawerOpen, handleDrawerClose };
};
