import { create } from "zustand";
import {
  getMatchInfo,
  getTeamBaiscInfo,
  MatchList,
  Team,
} from "../api/get-team";

const useTeamDetail = create<{
  team?: Team;
  isOwner: boolean;
  totalMatchs: number;
  totalWins: number;
  setTeam: (matchId?: string) => Promise<void>;
  setTeamMatchs: (matchId?: string) => Promise<void>;
  upcomingMatches?: MatchList[];
  previousMatches?: MatchList[];
}>()((set) => ({
  team: undefined,
  setTeam: async (matchId) => {
    if (!matchId) return set({ team: undefined, isOwner: false });
    const { team, isOwner } = await getTeamBaiscInfo(matchId);
    set({ team, isOwner });
  },
  setTeamMatchs: async (matchId) => {
    if (!matchId) {
      return set({
        totalMatchs: 0,
        totalWins: 0,
        upcomingMatches: undefined,
        previousMatches: undefined,
      });
    }

    const data = await getMatchInfo(matchId);

    set({
      previousMatches: data.previousMatches,
      upcomingMatches: data.upcomingMatches,
      totalMatchs: data.totalMatchs,
      totalWins: data.totalWins,
    });
  },
  isOwner: false,
  totalMatchs: 0,
  totalWins: 0,
}));

export default useTeamDetail;
