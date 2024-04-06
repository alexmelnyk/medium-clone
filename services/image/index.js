import { basicFetch } from "@/utils/server";

export async function uploadImage(image) {
  const formData = new FormData();
  formData.append("file", image);

  return await basicFetch("/api/uploadImage", {
    method: "POST",
    body: formData,
  });
}
