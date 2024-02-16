import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import User from "@/app/components/user/User";
import Tags from "@/app/components/tags/Tags";
import PostActions from "@/app/components/postActions/PostActions";
import styles from "./feedPost.module.scss";

export default function FeedPost({ post }) {
  const user = post.user;
  const createdAt = new Date(post.createdAt).toDateString();

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center" className={styles.postHeader}>
          <User user={user} />
          <Typography variant="caption">{createdAt}</Typography>
        </Stack>
        <Stack direction="row" spacing={2} className={styles.postContent}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
          </Stack>
          <img src={post.coverImage} alt="" height={100} />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Tags tags={post.tags} />
          <PostActions />
        </Stack>
      </CardContent>
    </Card>
  );
}
