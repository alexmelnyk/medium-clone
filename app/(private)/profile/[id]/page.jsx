import Grid from "@mui/material/Grid";
import ProfileHeader from "./profileHeader/Profileheader";
import { getUser } from "@/services/user";
import styles from "./profile.module.scss";

export default async function Profile({ params }) {
  const user = await getUser(params.id);

  if (!user) {
    return null;
  }

  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.profile}>
      <Grid item xs={7}>
        <ProfileHeader user={user} />
      </Grid>
      <Grid item xs={3}>
        sidebar
      </Grid>
    </Grid>
  );
}
