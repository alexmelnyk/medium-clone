import Link from "next/link";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

export default function Tags({ tags }) {
  const chips = tags.map((tag) => {
    return (
      <Link href="/" key={tag}>
        <Chip label={tag} variant="outlined" color="primary" />
      </Link>
    );
  });

  return (
    <Stack direction="row" spacing={1}>
      {chips}
    </Stack>
  );
}
