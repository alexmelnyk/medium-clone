import { basicFetch } from "@/utils/server";

export const getUser = async (id) => {
  return await basicFetch(`${process.env.BASE_URL || ""}/api/users/${id}`, {
    cache: "no-store",
  });
};

export const followUser = async (id) => {
  return await basicFetch(`${process.env.BASE_URL || ""}/api/users/${id}/follow`, {
    method: "POST",
    cache: "no-store",
  });
};

export const unfollowUser = async (id, followId) => {
  return await basicFetch(`${process.env.BASE_URL || ""}/api/users/${id}/follow/${followId}`, {
    method: "DELETE",
    cache: "no-store",
  });
};
