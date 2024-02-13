const getUserData = async (id) => {
  const user = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });
  return user.json();
};

export default async function Profile({ params }) {
  const user = await getUserData(params.id);

  return <div>Profile</div>;
}
