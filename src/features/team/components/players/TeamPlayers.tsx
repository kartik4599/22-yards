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
import { getImageUrl } from "@/lib/database";
import useTeamDetail from "../../hook/use-team-detail";
import TeamPlayersLoading from "./TeamPlayersLoading";
import AddPlayerDialog from "./AddPlayerDialog";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";
import useAddUpdatePlayer from "../../hook/use-mutate-player";

const TeamPlayers = () => {
  const { players } = useTeamDetail();
  const { setModal } = useAddUpdatePlayer();

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
                <TableHead className="hidden sm:inline-flex items-center">
                  Role
                </TableHead>
                <TableHead>Skill</TableHead>
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
                  <TableCell className="hidden sm:table-cell">
                    <Badge>{player.role || "Player"}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={"secondary"}>{player.skill}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="icon"
                      className="group mr-2"
                      onClick={setModal.bind(null, "update", player)}
                    >
                      <GrUpdate className="size-3 group-hover:text-blue-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="group"
                      onClick={setModal.bind(null, "delete", player)}
                    >
                      <MdOutlineDelete className="size-4 text-red-400 group-hover:text-red-600" />
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
