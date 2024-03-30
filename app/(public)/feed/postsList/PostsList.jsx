import Stack from "@mui/material/Stack";
import FeedPost from "./feedPost/FeedPost";
import FeedPagination from "./feedPagination/FeedPagination";
import { getPosts } from "@/services/post";
import styles from "./postsList.module.scss";

export default async function PostsList({ page }) {
  const { posts, pagesCount } = await getPosts(page);

  return (
    <Stack spacing={2} className={styles.posts} alignItems="center">
      {posts.map((post) => (
        <FeedPost post={post} key={post.id} />
      ))}
      <FeedPagination pagesCount={pagesCount} />
    </Stack>
  );
}
