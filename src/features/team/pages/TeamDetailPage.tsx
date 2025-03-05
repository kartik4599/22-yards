import TeamHeader from "../components/TeamHeader";
import TeamMatchs from "../components/TeamMatchs";
import TeamPlayers from "../components/TeamPlayers";

export const team = {
  id: 1,
  name: "Royal Challengers",
  logo: "/placeholder.svg?height=100&width=100",
  winningPercentage: 65,
  totalWins: 52,
  totalMatches: 80,
  players: [
    {
      id: 1,
      name: "Virat Kohli",
      role: "Captain",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "AB de Villiers",
      role: "Vice-captain",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Glenn Maxwell",
      role: "All-rounder",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Yuzvendra Chahal",
      role: "Bowler",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Mohammed Siraj",
      role: "Bowler",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
  previousMatches: [
    {
      id: 1,
      opponent: "Mumbai Indians",
      result: "Won by 5 wickets",
      date: "2023-05-15",
    },
    {
      id: 2,
      opponent: "Chennai Super Kings",
      result: "Lost by 20 runs",
      date: "2023-05-10",
    },
    {
      id: 3,
      opponent: "Rajasthan Royals",
      result: "Won by 7 wickets",
      date: "2023-05-05",
    },
  ],
  upcomingMatches: [
    {
      id: 1,
      opponent: "Kolkata Knight Riders",
      date: "2023-05-20",
      time: "19:30",
    },
    { id: 2, opponent: "Delhi Capitals", date: "2023-05-25", time: "15:30" },
    {
      id: 3,
      opponent: "Sunrisers Hyderabad",
      date: "2023-05-30",
      time: "19:30",
    },
  ],
};

const TeamDetailPage = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex flex-col gap-6">
        <TeamHeader />
        <TeamMatchs />
        <TeamPlayers />
      </div>
    </main>
  );
};

export default TeamDetailPage;
