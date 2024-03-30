export const getUser = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
