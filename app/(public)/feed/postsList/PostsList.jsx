import Stack from "@mui/material/Stack";
import FeedPost from "./feedPost/FeedPost";
import styles from "./postsList.module.scss";

const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.posts;
};

export default async function PostsList() {
  const posts = (await getPosts()) || [];

  return (
    <Stack spacing={2} className={styles.posts}>
      {posts.map((post) => (
        <FeedPost post={post} key={post.id} />
      ))}
    </Stack>
  );
}
