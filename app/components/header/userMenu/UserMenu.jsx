"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import styles from "./userMenu.module.scss";

export default function UserMenu({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userAvatarName = user.name[0];
  const profileLink = `/profile/${user.id}`;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar onClick={handleClick} className={styles.avatar} src={user.image}>
        {userAvatarName}
      </Avatar>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>
          <Link href={profileLink} className={styles.menuLink}>
            <PermIdentityIcon />
            Profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Link href="/settings">Settings</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href="/membership">Become a Member of .log</Link>
        </MenuItem>
        <MenuItem onClick={() => signOut()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
