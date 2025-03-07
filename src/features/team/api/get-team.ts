import { getloggedInUser, pb } from "@/lib/database";
import { cookies } from "next/headers";

export interface Team {
  collectionId: string;
  collectionName: string;
  created: string;
  createdBy: string;
  id: string;
  logo: string;
  name: string;
  players: any[];
  userRole: string;
  shortName: string;
  updated: string;
}

export const getTeamList = async () => {
  const store = await cookies();
  const pb_auth = store.get("pb_auth");
  const { user } = getloggedInUser(pb_auth?.value);
  if (!user) throw new Error("User not found");

  let data = (await pb.collection("team").getFullList({
    filter: `createdBy = "${user.id}" || players ?= "${user.id}"`,
  })) as Team[];

  data = data.map((team) => ({
    ...team,
    userRole: team.createdBy === user.id ? "Owner" : "Player",
  }));

  return data;
};
