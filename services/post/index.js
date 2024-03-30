import { uploadImage } from "../image";

export async function getPosts(page) {
  const currentPage = page || 1;
  const res = await fetch(`${process.env.BASE_URL}/api/posts?page=${currentPage}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return { posts: [] };
  }

  return await res.json();
}

export async function getPost(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return await res.json();
}

export async function createPost(blob, post) {
  const image = await uploadImage(blob);

  if (!image) {
    return null;
  }

  const body = JSON.stringify({ ...post, coverImage: image.url });
  const postRes = await fetch(`${process.env.BASE_URL || ""}/api/posts`, {
    method: "POST",
    body,
  });

  if (!postRes.ok) {
    return null;
  }

  return await postRes.json();
}
