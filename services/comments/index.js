export const getComments = async (postId) => {
  const res = await fetch(`${process.env.BASE_URL || ""}/api/posts/${postId}/comments`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return await res.json();
};

export const saveComment = async (comment) => {
  const res = await fetch(`/api/posts/${comment.postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
