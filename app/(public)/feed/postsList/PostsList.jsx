import posts from "./fakePosts";
import Stack from "@mui/material/Stack";
import FeedPost from "./feedPost/FeedPost";
import styles from "./postsList.module.scss";

export default function PostsList() {
  const getPosts = () => posts.map((post) => <FeedPost post={post} key={post.id} />);

  return (
    <Stack spacing={2} className={styles.posts}>
      {getPosts()}
    </Stack>
  );
}
