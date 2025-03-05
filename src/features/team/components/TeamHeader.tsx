import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { team } from "../pages/TeamDetailPage";

const TeamHeader = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={team.logo} alt={team.name} />
          <AvatarFallback>
            {team.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{team.name}</h1>
          <p className="text-muted-foreground">Team ID: {team.id}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">{team.winningPercentage}%</div>
          <div className="text-sm text-muted-foreground">Win Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{team.totalWins}</div>
          <div className="text-sm text-muted-foreground">Total Wins</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{team.totalMatches}</div>
          <div className="text-sm text-muted-foreground">Total Matches</div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
