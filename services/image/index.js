export async function uploadImage(image) {
  const formData = new FormData();
  formData.append("file", image);

  const res = await fetch("/api/uploadImage", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    return null;
  }

  return await res.json();
}
