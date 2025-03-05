import { Button } from "@/components/ui/button";
import LiveMatchCard from "../components/LiveMatchCard";

export interface LiveMatchInterface {
  id: number;
  matchType: string;
  tournament: string;
  status: string;
  venue: string;
  team1: {
    name: string;
    shortName: string;
    logo: string;
    score: string;
    overs: string;
  };
  team2: {
    name: string;
    shortName: string;
    logo: string;
    score: string;
    overs: string;
  };
  timeElapsed: string;
  required: string;
}

const liveMatches: LiveMatchInterface[] = [
  {
    id: 1,
    matchType: "T20",
    tournament: "IPL 2023",
    status: "In Progress",
    venue: "Wankhede Stadium, Mumbai",
    team1: {
      name: "Mumbai Indians",
      shortName: "MI",
      logo: "/placeholder.svg?height=60&width=60",
      score: "186/4",
      overs: "18.2",
    },
    team2: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      logo: "/placeholder.svg?height=60&width=60",
      score: "124/3",
      overs: "13.4",
    },
    timeElapsed: "1h 42m",
    required: "63 runs needed from 38 balls",
  },
  {
    id: 2,
    matchType: "ODI",
    tournament: "ICC World Cup",
    status: "Innings Break",
    venue: "Eden Gardens, Kolkata",
    team1: {
      name: "India",
      shortName: "IND",
      logo: "/placeholder.svg?height=60&width=60",
      score: "327/5",
      overs: "50.0",
    },
    team2: {
      name: "Australia",
      shortName: "AUS",
      logo: "/placeholder.svg?height=60&width=60",
      score: "0/0",
      overs: "0.0",
    },
    timeElapsed: "3h 30m",
    required: "Australia needs 328 runs to win",
  },
  {
    id: 3,
    matchType: "Test",
    tournament: "Border-Gavaskar Trophy",
    status: "Day 2",
    venue: "MCG, Melbourne",
    team1: {
      name: "Australia",
      shortName: "AUS",
      logo: "/placeholder.svg?height=60&width=60",
      score: "243/10 & 76/3",
      overs: "82.4 & 28.0",
    },
    team2: {
      name: "India",
      shortName: "IND",
      logo: "/placeholder.svg?height=60&width=60",
      score: "336/10",
      overs: "104.2",
    },
    timeElapsed: "2 days",
    required: "Australia leads by 17 runs",
  },
  {
    id: 4,
    matchType: "T20",
    tournament: "Big Bash League",
    status: "In Progress",
    venue: "SCG, Sydney",
    team1: {
      name: "Sydney Sixers",
      shortName: "SIX",
      logo: "/placeholder.svg?height=60&width=60",
      score: "112/6",
      overs: "14.3",
    },
    team2: {
      name: "Melbourne Stars",
      shortName: "STA",
      logo: "/placeholder.svg?height=60&width=60",
      score: "0/0",
      overs: "0.0",
    },
    timeElapsed: "58m",
    required: "Batting in progress",
  },
  {
    id: 5,
    matchType: "T20",
    tournament: "IPL 2023",
    status: "In Progress",
    venue: "Chinnaswamy Stadium, Bangalore",
    team1: {
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      logo: "/placeholder.svg?height=60&width=60",
      score: "94/2",
      overs: "9.3",
    },
    team2: {
      name: "Rajasthan Royals",
      shortName: "RR",
      logo: "/placeholder.svg?height=60&width=60",
      score: "0/0",
      overs: "0.0",
    },
    timeElapsed: "45m",
    required: "Batting in progress",
  },
];

const LiveMatchList = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Live Matches</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" className="h-8 gap-1">
              Create Live Match
            </Button>
          </div>
        </div>

        {/* Live Matches List */}
        <div className="grid gap-4">
          {liveMatches.map((match) => (
            <LiveMatchCard match={match} key={match.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default LiveMatchList;
