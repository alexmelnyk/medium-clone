export async function basicFetch(url, options) {
  const res = await fetch(url, options);

  if (!res.ok) {
    return null;
  }

  return await res.json();
}
