import Stack from "@mui/material/Stack";
import FeedPost from "./feedPost/FeedPost";
import FeedPagination from "./feedPagination/FeedPagination";
import styles from "./postsList.module.scss";

const getPosts = async (page) => {
  const currentPage = page || 1;
  const res = await fetch(`${process.env.BASE_URL}/api/posts?page=${currentPage}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return { posts: [] };
  }

  return await res.json();
};

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
