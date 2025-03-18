"use server";

import { pb } from "@/lib/database";
import { getUser } from "./fetch-team";

export const createMatch = async (payload: {
  teamAId: string;
  teamBId: string;
  date: string;
}) => {
  const user = await getUser();

  const [teamA, teamB] = await Promise.all([
    pb.collection("team").getOne(payload.teamAId),
    pb.collection("team").getOne(payload.teamBId),
  ]);

  if (!teamA || !teamB) throw new Error("Teams not found");
  if (teamA.createdBy !== user.id) throw new Error("Unauthorized");

  await pb.collection("match").create({
    team1: teamA.id,
    team2: teamB.id,
    datetime: payload.date,
  });
};
