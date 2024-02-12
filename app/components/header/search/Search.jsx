import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./search.module.scss";

export default function Search() {
  return (
    <Paper component="form" elevation={0} className={styles.search}>
      <SearchIcon />
      <InputBase placeholder="Search" />
    </Paper>
  );
}
