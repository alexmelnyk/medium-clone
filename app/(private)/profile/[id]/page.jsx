import Grid from "@mui/material/Grid";
import ProfileHeader from "./profileHeader/Profileheader";
import styles from "./profile.module.scss";

const getUserData = async (id) => {
  const userData = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });
  return userData.json();
};

export default async function Profile({ params }) {
  const userData = await getUserData(params.id);

  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.profile}>
      <Grid item xs={7}>
        <ProfileHeader user={userData.user} />
      </Grid>
      <Grid item xs={3}>
        sidebar
      </Grid>
    </Grid>
  );
}
