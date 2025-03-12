"use server";

import { pb } from "@/lib/database";
import { getUser } from "./fetch-team";

export const createTeam = async (payload: {
  name: string;
  shortName: string;
  logo: File | null;
}) => {
  const user = await getUser();
  if (!user) throw new Error("User not found");

  return pb.collection("team").create({ ...payload, createdBy: user.id });
};
