import Grid from "@mui/material/Grid";
import Streams from "@/app/components/streams/Streams";
import PostsList from "./postsList/PostsList";

export default async function Feed({ searchParams }) {
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid item xs={7}>
        <Streams activeTab={searchParams.stream} />
        <PostsList page={searchParams.page} />
      </Grid>
      <Grid item xs={3}>
        sidebar
      </Grid>
    </Grid>
  );
}
