import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getImageUrl } from "@/lib/database";
import TeamHeaderLoading from "./TeamHeaderLoading";
import useMatchDetail from "../../hook/use-team-detail";

const TeamHeader = () => {
  const { team, totalWins, totalMatchs } = useMatchDetail();

  if (!team) return <TeamHeaderLoading />;

  return (
    <div className="flex flex-col px-2 gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-center sm:justify-start gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage
            src={getImageUrl({
              collectionId: team.collectionId,
              id: team.id,
              filename: team.logo,
            })}
            className="object-cover"
            alt={team.shortName}
          />
          <AvatarFallback>{team.shortName}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{team.name}</h1>
          <p className="text-muted-foreground">Team ID: {team.shortName}</p>
        </div>
      </div>
      <div className="flex gap-4 justify-around sm:justify-start">
        <div className="text-center">
          <div className="text-2xl font-bold">
            {totalMatchs === 0
              ? 0
              : ((totalWins / totalMatchs) * 100).toFixed(0)}
            %
          </div>
          <div className="text-sm text-muted-foreground">Win Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{totalWins}</div>
          <div className="text-sm text-muted-foreground">Total Wins</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{totalMatchs}</div>
          <div className="text-sm text-muted-foreground">Total Matches</div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
