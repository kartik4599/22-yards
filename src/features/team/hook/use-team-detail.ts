import { create } from "zustand";
import { getTeamBaiscInfo, Team } from "../api/fetch-team";
import { getMatchInfo, MatchList } from "../api/fetch-match-team";
import { getTeamsPlayers, Player } from "../api/fetch-player-team";

interface useTeamDetailType {
  team?: Team;
  isOwner: boolean;
  setTeam: (teamId?: string) => Promise<void>;
  totalWins: number;
  totalMatchs: number;
  upcomingMatches?: MatchList[];
  previousMatches?: MatchList[];
  setTeamMatchs: (teamId?: string) => Promise<void>;
  players?: Player[];
  setPlayers: (teamId?: string) => Promise<void>;
}

const useTeamDetail = create<useTeamDetailType>()((set) => ({
  team: undefined,
  setTeam: async (teamId) => {
    if (!teamId) return set({ team: undefined, isOwner: false });
    const { team, isOwner } = await getTeamBaiscInfo(teamId);
    set({ team, isOwner });
  },
  setTeamMatchs: async (teamId) => {
    if (!teamId) {
      return set({
        totalMatchs: 0,
        totalWins: 0,
        upcomingMatches: undefined,
        previousMatches: undefined,
      });
    }

    const data = await getMatchInfo(teamId);

    set({
      previousMatches: data.previousMatches,
      upcomingMatches: data.upcomingMatches,
      totalMatchs: data.totalMatchs,
      totalWins: data.totalWins,
    });
  },
  setPlayers: async (teamId) => {
    if (!teamId) return set({ players: undefined });
    const players = await getTeamsPlayers(teamId);
    set({ players });
  },
  isOwner: false,
  totalMatchs: 0,
  totalWins: 0,
}));

export default useTeamDetail;
