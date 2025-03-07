import { pb } from "@/lib/database";

export const createTeam = async (payload: {
  name: string;
  shortName: string;
  createdBy: string;
  logo: File | null;
}) => {
  return await pb.collection("team").create(payload);
};
