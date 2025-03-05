import CreateTeam from "../components/CreateTeam";
import TeamCard from "../components/TeamCard";

export interface Team {
  id: number;
  name: string;
  logo: string;
  members: number;
  userRole: string;
  recentPerformance: string;
  upcomingMatch: string;
}

const teams: Team[] = [
  {
    id: 1,
    name: "Royal Challengers",
    logo: "/placeholder.svg?height=100&width=100",
    members: 15,
    userRole: "Captain",
    recentPerformance: "Won last 3 matches",
    upcomingMatch: "vs Mumbai Indians, Tomorrow 7:30 PM",
  },
  {
    id: 2,
    name: "City Strikers",
    logo: "/placeholder.svg?height=100&width=100",
    members: 12,
    userRole: "Batsman",
    recentPerformance: "Lost last match",
    upcomingMatch: "vs Thunderbolts, Sat 3:00 PM",
  },
  {
    id: 3,
    name: "Corporate Warriors",
    logo: "/placeholder.svg?height=100&width=100",
    members: 18,
    userRole: "All-rounder",
    recentPerformance: "Won 2 out of last 3",
    upcomingMatch: "vs Tech Titans, Sun 2:00 PM",
  },
  {
    id: 4,
    name: "University Legends",
    logo: "/placeholder.svg?height=100&width=100",
    members: 20,
    userRole: "Vice-captain",
    recentPerformance: "Unbeaten in last 5 matches",
    upcomingMatch: "vs College Stars, Next Tue 4:00 PM",
  },
];

const TeamListPage = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">My Teams</h1>
          <CreateTeam />
        </div>

        {/* Teams List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teams.length === 0 && (
            <p className="text-muted-foreground">
              You are not a member of any team yet. Create a new team to get
              started.
            </p>
          )}
          {teams.map((team) => (
            <TeamCard team={team} key={team.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TeamListPage;
