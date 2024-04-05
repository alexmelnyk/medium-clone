export const getUser = async (id) => {
  const res = await fetch(`${process.env.BASE_URL || ""}/api/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const followUser = async (id) => {
  const res = await fetch(`${process.env.BASE_URL || ""}/api/users/${id}/follow`, {
    method: "POST",
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const unfollowUser = async (id, followId) => {
  const res = await fetch(`${process.env.BASE_URL || ""}/api/users/${id}/follow/${followId}`, {
    method: "DELETE",
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
