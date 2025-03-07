import PocketBase from "pocketbase";
import { getCookie } from "cookies-next/client";

export const pb = new PocketBase(process.env.DATABASE_URL);

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
  return `${process.env.DATABASE_URL}/api/files/${collectionId}/${id}/${filename}`;
};
