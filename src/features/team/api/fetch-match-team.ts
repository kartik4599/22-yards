import { pb } from "@/lib/database";
import { Team } from "./fetch-team";

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
