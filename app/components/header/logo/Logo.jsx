import Link from "next/link";
import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <Link className={styles.logo} href="/feed">
      .log
    </Link>
  );
}
