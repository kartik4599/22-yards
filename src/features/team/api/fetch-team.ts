"use server";

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

const getUser = async () => {
  const store = await cookies();
  const pb_auth = store.get("pb_auth");
  const { user } = getloggedInUser(pb_auth?.value);
  if (!user) throw new Error("User not found");
  return user;
};

export const getTeamList = async () => {
  const user = await getUser();

  let data = (await pb.collection("team").getFullList({
    filter: `createdBy = "${user.id}" || players ?= "${user.id}"`,
  })) as Team[];

  data = data.map((team) => ({
    ...team,
    userRole: team.createdBy === user.id ? "Owner" : "Player",
  }));

  return data;
};

export const getTeamBaiscInfo = async (teamId: string) => {
  const user = await getUser();
  const team = (await pb.collection("team").getOne(teamId)) as Team;
  const isOwner = team.createdBy === user.id;

  return { team, isOwner };
};
