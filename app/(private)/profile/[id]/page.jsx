import Grid from "@mui/material/Grid";
import ProfileHeader from "./profileHeader/Profileheader";
import SidebarUser from "./sidebarUser/SidebarUser";
import { getUser } from "@/services/user";
import styles from "./profile.module.scss";
import { getSession } from "@/lib/auth";

export default async function Profile({ params }) {
  const user = await getUser(params.id);
  const session = await getSession();

  if (!user || !session) {
    return null;
  }

  const isOwnProfile = session.user.id === user.id;

  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.profile}>
      <Grid item xs={7}>
        <ProfileHeader user={user} />
      </Grid>
      <Grid item xs={3}>
        <SidebarUser user={user} isOwnProfile={isOwnProfile} />
      </Grid>
    </Grid>
  );
}
