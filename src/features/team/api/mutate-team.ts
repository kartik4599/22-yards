import { getloggedInUser, pb } from "@/lib/database";

export const createTeam = async (payload: {
  name: string;
  shortName: string;
  logo: File | null;
}) => {
  const { user } = getloggedInUser();
  if (!user) throw new Error("User not found");

  return pb.collection("team").create({ ...payload, createdBy: user.id });
};
