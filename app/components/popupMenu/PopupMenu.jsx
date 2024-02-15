"use client";

import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function PopupMenu({ button, items, className }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const menuItems = items.map((item, index) => {
    return <MenuItem key={index}>{item}</MenuItem>;
  });

  return (
    <div className={className}>
      <div onClick={(e) => handleOpen(e)}>{button}</div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems}
      </Menu>
    </div>
  );
}
