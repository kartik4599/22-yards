import { getTeamList } from "../api/fetch-team";
import CreateTeam from "../components/CreateTeam";
import TeamCard from "../components/TeamCard";

const TeamListPage = async () => {
  const teams = await getTeamList();
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
