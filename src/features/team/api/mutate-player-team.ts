"use server";

import { pb } from "@/lib/database";
import { getUser } from "./fetch-team";

export const addUpdatePlayerInTeam = async (payload: {
  userId: string;
  role: string;
  skill: string;
  teamId: string;
  playerId?: string;
}) => {
  try {
    const user = await getUser();
    if (!user) throw new Error("User not found");

    const team = await pb.collection("team").getOne(payload.teamId);

    if (team.createdBy !== user.id)
      throw new Error("You are not the owner of this team");

    if (payload.role !== "Player") {
      const {
        items: [existingRole],
      } = await pb.collection("players").getList(1, 1, {
        filter: `team = "${payload.teamId}" && role="${payload.role}"`,
      });

      if (existingRole) {
        await pb.collection("players").update(existingRole.id, {
          role: "Player",
        });
      }
    }

    if (!payload.playerId) {
      const newPlayer = await pb.collection("players").create({
        user: payload.userId,
        role: payload.role,
        skill: payload.skill,
        team: team.id,
      });

      return await pb.collection("team").update(payload.teamId, {
        "+players": newPlayer.id,
      });
    }

    return await pb.collection("players").update(payload.playerId, {
      role: payload.role,
      skill: payload.skill,
    });
  } catch (e) {
    console.log(e);
  }
};
