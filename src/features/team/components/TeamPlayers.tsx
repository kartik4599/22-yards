import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddPlayerDialog from "./AddPlayerDialog";
import TeamPlayersLoading from "./TeamPlayersLoading";
import useTeamDetail from "../hook/use-team-detail";
import { getImageUrl } from "@/lib/database";

const TeamPlayers = () => {
  const { players } = useTeamDetail();

  if (!players) return <TeamPlayersLoading />;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Players</CardTitle>
        <AddPlayerDialog />
      </CardHeader>
      <CardContent>
        {players.length ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={getImageUrl({
                          collectionId: player.expand.user.collectionId,
                          filename: player.expand.user.avatar,
                          id: player.expand.user.id,
                        })}
                        alt={player.expand.user.name}
                      />
                      <AvatarFallback>
                        {player.expand.user.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {player.expand.user.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant={player.role ? "default" : "secondary"}>
                      {player.role || player.skill}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            No players yet
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamPlayers;
