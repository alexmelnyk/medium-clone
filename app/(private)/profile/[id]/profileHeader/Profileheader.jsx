import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import PopupMenu from "@/app/components/popupMenu/Popupmenu";

export default function ProfileHeader({ user }) {
  const menuItems = ["Copy link to profile", "Customise your profile"];

  return (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h4">{user.name}</Typography>
      <PopupMenu
        items={menuItems}
        button={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
      />
    </Stack>
  );
}
