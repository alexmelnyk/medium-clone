import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import User from "@/app/components/user/User";
import PostActions from "@/app/components/postActions/PostActions";
import styles from "./post.module.scss";

const getPost = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${id}`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.post;
};

export default async function Post({ params }) {
  const post = await getPost(params.id);
  const createdAt = new Date(post.createdAt).toDateString();

  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.post}>
      <Grid item xs={7}>
        <Card>
          <CardContent>
            <Typography variant="h5" className={styles.title}>
              {post.title}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" className={styles.user}>
              <User user={post.user} />
              <Typography variant="caption">{createdAt}</Typography>
              <Typography variant="caption" className={styles.follow}>
                Follow
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" className={styles.postActions}>
              <PostActions postType="full" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        sidebar
      </Grid>
    </Grid>
  );
}