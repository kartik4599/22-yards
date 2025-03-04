import PocketBase from "pocketbase";
import { getCookie } from "cookies-next/client";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const getloggedInUser = (cookies?: string) => {
  const value = cookies || getCookie("pb_auth");
  pb.authStore.loadFromCookie(value || "");
  return { login: pb.authStore.isValid, user: pb.authStore.model };
};
