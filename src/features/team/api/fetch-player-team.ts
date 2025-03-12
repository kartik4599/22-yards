"use server";

import { pb } from "@/lib/database";

export interface Player {
  collectionId: string;
  collectionName: string;
  expand: {
    user: User;
  };
  id: string;
  lastUpdate: string;
  role: string;
  skill: string;
  team: string;
  user: string;
}

export interface User {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  verified: boolean;
}

export const getTeamsPlayers = async (teamId: string) => {
  const players = (await pb.collection("players").getFullList({
    sort: "lastUpdate",
    filter: `team = "${teamId}"`,
    expand: "user",
  })) as Player[];

  return players;
};
