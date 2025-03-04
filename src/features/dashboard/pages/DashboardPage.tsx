import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import StatsCards from "../components/StatsCards";
import PlayerPerformance from "../components/PlayerPerformance";
import QuickMatchs from "../components/QuickMatchs";
import TeamTable from "../components/TeamTable";

const DashboardPage = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  All Time <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
                <DropdownMenuItem>Last Year</DropdownMenuItem>
                <DropdownMenuItem>All Time</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <StatsCards />
        <PlayerPerformance />

        {/* Team Rankings and Recent Matches */}
        <div className="grid gap-4 md:grid-cols-2">
          <TeamTable />
          <QuickMatchs />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
