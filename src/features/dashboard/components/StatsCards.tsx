import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const StatsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Matches</CardDescription>
          <CardTitle className="text-3xl">124</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +12% from last season
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Runs</CardDescription>
          <CardTitle className="text-3xl">3,842</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Avg. 31.0 per innings
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Wickets</CardDescription>
          <CardTitle className="text-3xl">87</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Avg. 2.1 per match
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Overall Ranking</CardDescription>
          <CardTitle className="text-3xl">#14</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">Up 3 positions</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
