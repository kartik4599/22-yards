import PocketBase from "pocketbase";
import { getCookie } from "cookies-next/client";

const url = process.env.DATABASE_URL || "http://127.0.0.1:8090/";

export const pb = new PocketBase(url);

export const getloggedInUser = (cookies?: string) => {
  const value = cookies || getCookie("pb_auth");
  pb.authStore.loadFromCookie(value || "");
  return { login: pb.authStore.isValid, user: pb.authStore.model };
};

export const getImageUrl = ({
  collectionId,
  filename,
  id,
}: {
  collectionId: string;
  id: string;
  filename: string;
}) => {
  return `${url}/api/files/${collectionId}/${id}/${filename}`;
};
