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
import { useState } from "react";

const AddMatchDialog = () => {
  const [timeOption, setTimeOption] = useState("now");

  // Sample teams data
  const teams = [
    {
      id: 1,
      name: "Mumbai Indians",
      shortName: "MI",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Chennai Super Kings",
      shortName: "CSK",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Delhi Capitals",
      shortName: "DC",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 6,
      name: "Punjab Kings",
      shortName: "PBKS",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ];

  const [teamA, setTeamA] = useState(teams[0]);
  const [teamB, setTeamB] = useState(teams[1]);

  // Function to change Team A
  const changeTeamA = (teamId: number) => {
    const newTeam = teams.find((team) => team.id === teamId);
    if (newTeam && newTeam.id !== teamB.id) {
      setTeamA(newTeam);
    }
  };

  const today = new Date();

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
                        <div className="flex flex-col items-center w-40 p-4 border rounded-lg hover:bg-accent">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={teamA.logo} alt={teamA.name} />
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
                        {teams
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
                        <div className="flex flex-col items-center w-40 p-4 border rounded-lg hover:bg-accent">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={teamB.logo} alt={teamB.name} />
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
                        {teams
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
            </div>
          </div>

          {/* Venue */}
          <div className="space-y-2">
            <Label htmlFor="venue">Venue</Label>
            <Input placeholder="Add venue" />
          </div>

          <div className="space-y-4">
            <Label>Match Time</Label>
            <RadioGroup
              defaultValue="now"
              className="flex items-center "
              onValueChange={setTimeOption}
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
                  value={format(today, "yyyy-MM-dd'T'HH:mm")}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            )}
          </div>
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Create Match</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddMatchDialog;
