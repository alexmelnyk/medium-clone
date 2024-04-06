"use client";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PostActionItem({ icon, count, onClick, disabled }) {
  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={onClick} disabled={disabled}>
        {icon}
      </IconButton>
      <Typography variant="caption">{count}</Typography>
    </Stack>
  );
}
