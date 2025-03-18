import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllTeamList, getMyTeamList, Team } from "../../api/fetch-team";
import { getImageUrl } from "@/lib/database";
import { createMatch } from "../../api/mutate-player-match";

const AddMatchDialog = () => {
  const today = new Date();

  const [timeOption, setTimeOption] = useState("now");
  const [myTeams, setMyTeams] = useState<Team[]>([]);
  const [allTeams, setAllTeams] = useState<Team[]>([]);

  const [teamA, setTeamA] = useState<Team | null>(null);
  const [teamB, setTeamB] = useState<Team | null>(null);
  const [dateTime, setDateTime] = useState(format(today, "yyyy-MM-dd'T'HH:mm"));

  const changeTeamA = (teamId: string) => {
    const newTeam = myTeams.find((team) => team.id === teamId);
    if (newTeam && newTeam.id !== teamB?.id) {
      setTeamA(newTeam);
    }
  };

  const changeTeamB = (teamId: string) => {
    const newTeam = allTeams.find((team) => team.id === teamId);
    if (newTeam && newTeam.id !== teamA?.id) {
      setTeamB(newTeam);
    }
  };

  const submitHandler = async () => {
    if (!teamA?.id || !teamB?.id) return;
    await createMatch({
      teamAId: teamA?.id,
      teamBId: teamB?.id,
      date: new Date(dateTime).toISOString(),
    });
  };

  useEffect(() => {
    (async () => {
      const [response1, response2] = await Promise.all([
        getMyTeamList(),
        getAllTeamList(),
      ]);
      setMyTeams(response1);
      setAllTeams(response2);
      setTeamA(response1[0]);
      setTeamB(response2[1]);
    })();
  }, []);

  if (!teamA || !teamB) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Match
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[75vw]">
        <DialogHeader>
          <DialogTitle> Create New Match</DialogTitle>
          <DialogDescription>
            Set up the teams, venue, and time for your new match
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <Label>Teams</Label>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              {/* Team A */}
              <div className="flex flex-col items-center">
                <div className="mb-2 text-center font-medium">Team A</div>
                <div className="relative flex flex-col items-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-auto w-auto p-0 border-0"
                      >
                        <div className="flex flex-col items-center w-56 p-4 border rounded-lg hover:bg-accent">
                          <Avatar className="md:size-32 size-20 mb-2">
                            <AvatarImage
                              src={getImageUrl({
                                collectionId: teamA.collectionId,
                                filename: teamA.logo,
                                id: teamA.id,
                              })}
                              className="object-cover"
                              alt={teamA?.name}
                            />
                            <AvatarFallback>{teamA.shortName}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium truncate w-full">
                            {teamA.name}
                          </span>
                        </div>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-2">
                      <div className="grid gap-2">
                        {myTeams
                          .filter((team) => team.id !== teamB.id)
                          .map((team) => (
                            <Button
                              key={team.id}
                              variant={
                                team.id === teamA.id ? "secondary" : "ghost"
                              }
                              className="justify-start h-auto py-2"
                              onClick={() => changeTeamA(team.id)}
                            >
                              <span className="text-xs">{team.name}</span>
                            </Button>
                          ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* VS and Swap Buttons */}
              <div className="text-lg font-semibold">VS</div>

              {/* Team B */}
              <div className="flex flex-col items-center">
                <div className="mb-2 text-center font-medium">Team B</div>
                <div className="relative flex flex-col items-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-auto w-auto p-0 border-0"
                      >
                        <div className="flex flex-col items-center w-56 p-4 border rounded-lg hover:bg-accent">
                          <Avatar className="md:size-32 size-20 mb-2">
                            <AvatarImage
                              src={getImageUrl({
                                collectionId: teamB.collectionId,
                                filename: teamB.logo,
                                id: teamB.id,
                              })}
                              className="object-cover"
                              alt={teamB.name}
                            />
                            <AvatarFallback>{teamB.shortName}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium truncate w-full">
                            {teamB.name}
                          </span>
                        </div>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-2">
                      <div className="grid gap-2">
                        {allTeams
                          .filter((team) => team.id !== teamA.id)
                          .map((team) => (
                            <Button
                              key={team.id}
                              variant={
                                team.id === teamA.id ? "secondary" : "ghost"
                              }
                              className="justify-start h-auto py-2"
                              onClick={() => changeTeamB(team.id)}
                            >
                              <span className="text-xs">{team.name}</span>
                            </Button>
                          ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Match Time</Label>
            <RadioGroup
              defaultValue="now"
              className="flex items-center "
              onValueChange={(value) => {
                setTimeOption(value);
                setDateTime(format(today, "yyyy-MM-dd'T'HH:mm"));
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="now" id="now" />
                <Label htmlFor="now" className="cursor-pointer">
                  Start Now
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="scheduled" id="scheduled" />
                <Label htmlFor="scheduled" className="cursor-pointer">
                  Schedule for Later
                </Label>
              </div>
            </RadioGroup>

            {timeOption === "scheduled" && (
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  type="datetime-local"
                  id="date"
                  className="w-fit"
                  min={format(today, "yyyy-MM-dd'T'HH:mm")}
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={submitHandler}>Create Match</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddMatchDialog;
