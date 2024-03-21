import Grid from "@mui/material/Grid";
import ProfileHeader from "./profileHeader/Profileheader";
import styles from "./profile.module.scss";

const getUser = async (id) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

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
