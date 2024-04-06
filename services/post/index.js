import { basicFetch } from "@/utils/server";
import { uploadImage } from "../image";

export async function getPosts(page) {
  const currentPage = page || 1;
  return await basicFetch(`${process.env.BASE_URL}/api/posts?page=${currentPage}`, {
    cache: "no-store",
  });
}

export async function getPost(id) {
  return await basicFetch(`${process.env.BASE_URL}/api/posts/${id}`, {
    cache: "no-store",
  });
}

export async function createPost(blob, post) {
  const image = await uploadImage(blob);

  if (!image) {
    return null;
  }

  return await basicFetch(`${process.env.BASE_URL || ""}/api/posts`, {
    method: "POST",
    body: JSON.stringify({ ...post, coverImage: image.url }),
  });
}

export async function likePost(postId) {
  return await basicFetch(`${process.env.BASE_URL || ""}/api/posts/${postId}/likes`, {
    method: "POST",
  });
}

export async function dislikePost(postId, likeId) {
  return await basicFetch(`${process.env.BASE_URL || ""}/api/posts/${postId}/likes/${likeId}`, {
    method: "DELETE",
  });
}
