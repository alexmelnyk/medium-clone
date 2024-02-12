import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";
import { getSession } from "@/lib/auth";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import UserMenu from "./userMenu/UserMenu";
import SignIn from "./signIn/SignIn";
import styles from "./header.module.scss";

export default async function Header() {
  const session = await getSession();
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
        <Search />
      </div>
      <div className={styles.headerRight}>
        {!session && <SignIn />}
        {!!session && (
          <>
            <Link href="/write" className={styles.writeStory}>
              <CreateIcon fontSize="medium" />
              Write
            </Link>
            <UserMenu user={session.user} />
          </>
        )}
      </div>
    </header>
  );
}
