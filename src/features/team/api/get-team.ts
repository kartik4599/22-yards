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

export interface MatchList {
  collectionId: string;
  collectionName: string;
  created: string;
  datetime: string;
  expand: {
    team1: Team;
    team2: Team;
  };
  opponent: Team;
  id: string;
  team1: string;
  team2: string;
  updated: string;
  verdict: string;
  winner: string;
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

export const getMatchInfo = async (
  teamId: string
): Promise<{
  totalMatchs: number;
  totalWins: number;
  previousMatches: MatchList[];
  upcomingMatches: MatchList[];
}> => {
  const now = new Date().toISOString();

  let [
    { totalItems: totalMatchs, items: previousMatches },
    { totalItems: totalWins },
    { items: upcomingMatches },
  ] = await Promise.all([
    pb.collection("match").getList(1, 3, {
      filter: `datetime < "${now}" && (team1 = "${teamId}" || team2 = "${teamId}")`,
      requestKey: "previousMatchs",
      expand: "team1,team2",
    }) as Promise<{ totalItems: number; items: MatchList[] }>,
    pb.collection("match").getList(1, 1, {
      filter: `winner = "${teamId}"`,
      requestKey: "totalWins",
    }),
    pb.collection("match").getList(1, 3, {
      filter: `datetime > "${now}" && (team1 = "${teamId}" || team2 = "${teamId}")`,
      requestKey: "upcomingMatchs",
      expand: "team1,team2",
    }) as Promise<{ items: MatchList[] }>,
  ]);

  previousMatches = previousMatches.map((value) => ({
    ...value,
    opponent:
      value.team1 === teamId ? value?.expand?.team2 : value?.expand?.team1,
  })) as MatchList[];

  upcomingMatches = upcomingMatches.map((value) => ({
    ...value,
    opponent:
      value.team1 === teamId ? value?.expand?.team2 : value?.expand?.team1,
  })) as MatchList[];

  return { totalMatchs, totalWins, previousMatches, upcomingMatches };
};
