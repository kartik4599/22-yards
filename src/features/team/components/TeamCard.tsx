import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Team } from "../pages/TeamListPage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TeamCard = ({ team }: { team: Team }) => {
  return (
    <Card key={team.id} className="flex flex-col">
      <CardHeader className="flex-row gap-4 space-y-0">
        <Avatar className="h-14 w-14">
          <AvatarImage src={team.logo} alt={team.name} />
          <AvatarFallback>
            {team.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{team.name}</CardTitle>
          <CardDescription>{team.members} members</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Role</Badge>
            <span>{team.userRole}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Recent</Badge>
            <span className="text-sm">{team.recentPerformance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>Next Match</Badge>
            <span className="text-sm">{team.upcomingMatch}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">View Team</Button>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
