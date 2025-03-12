"use server";

import { pb } from "@/lib/database";
import { getUser } from "./fetch-team";

export const addPlayinTeam = async (payload: {
  userId: string;
  role: string;
  skill: string;
  teamId: string;
}) => {
  try {
    const user = await getUser();
    if (!user) throw new Error("User not found");

    const team = await pb.collection("team").getOne(payload.teamId);

    if (team.createdBy !== user.id)
      throw new Error("You are not the owner of this team");

    return await pb.collection("players").create({
      user: payload.userId,
      role: payload.role,
      skill: payload.skill,
      team: team.id,
    });
  } catch (e) {
    console.log(e);
  }
};
