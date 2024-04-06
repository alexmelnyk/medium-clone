import { basicFetch } from "@/utils/server";

export const getComments = async (postId) => {
  return await basicFetch(`${process.env.BASE_URL || ""}/api/posts/${postId}/comments`, {
    cache: "no-store",
  });
};

export const saveComment = async (comment) => {
  return await basicFetch(`/api/posts/${comment.postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });
};
