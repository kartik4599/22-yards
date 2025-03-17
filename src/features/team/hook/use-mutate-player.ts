import { create } from "zustand";
import { Player } from "../api/fetch-player-team";

const useAddUpdatePlayer = create<{
  state: "" | "add" | "update" | "delete";
  setModal: (state: "" | "add" | "update" | "delete", player?: Player) => void;
  player?: Player;
}>()((set) => ({
  state: "",
  setModal: (state, player) => set({ state, player }),
}));

export default useAddUpdatePlayer;
