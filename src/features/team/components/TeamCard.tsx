import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Team } from "../api/get-team";
import { getImageUrl } from "@/lib/database";

const TeamCard = ({ team }: { team: Team }) => {
  return (
    <Card key={team.id} className="flex flex-col">
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        <Avatar className="h-14 w-14">
          <AvatarImage
            src={getImageUrl({
              collectionId: team.collectionId,
              id: team.id,
              filename: team.logo,
            })}
            alt={team.name}
          />
          <AvatarFallback>{team.shortName}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{team.name}</CardTitle>
          <CardDescription className="mt-1">{team.shortName}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{team.userRole}</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/team/${team.id}`} className="w-full">
          <Button className="w-full">View Team</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
