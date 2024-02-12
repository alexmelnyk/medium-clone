import { headers } from "next/headers";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import styles from "./streams.module.scss";

const streams = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "javascript",
    label: "Javascript",
  },
  {
    value: "cpp",
    label: "C++",
  },
  {
    value: "news",
    label: "News",
  },
  {
    value: "economy",
    label: "Economy",
  },
  {
    value: "politics",
    label: "Politics",
  },
  {
    value: "programming",
    label: "Programming",
  },
  {
    value: "world",
    label: "World",
  },
  {
    value: "other",
    label: "Other",
  },
];

export default function Streams() {
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  const activeTab = searchParams.get("stream") || "all";

  const getTab = (stream) => {
    const link = `/feed?stream=${stream.value}`;
    return <Tab value={stream.value} label={stream.label} key={stream.value} component={Link} href={link} />;
  };

  return (
    <Stack direction="row" spacing="0" className={styles.streams}>
      <Link href="/feed">
        <IconButton color="primary" className={styles.add}>
          <AddIcon />
        </IconButton>
      </Link>
      <Tabs value={activeTab} variant="scrollable" scrollButtons className={styles.tabs}>
        {streams.map((stream) => getTab(stream))}
      </Tabs>
    </Stack>
  );
}
