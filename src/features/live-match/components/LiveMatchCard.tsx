import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { LiveMatchInterface } from "../pages/LiveMatchList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const LiveMatchCard = ({ match }: { match: LiveMatchInterface }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge
              variant={match.status === "In Progress" ? "default" : "secondary"}
              className="rounded-sm"
            >
              {match.status}
            </Badge>
            <Badge className="rounded-sm">{match.matchType}</Badge>
            <span className="text-sm text-muted-foreground">
              {match.tournament}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {match.timeElapsed}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Team 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={match.team1.logo} alt={match.team1.name} />
              <AvatarFallback>{match.team1.shortName}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold">{match.team1.name}</h3>
            <div className="mt-1 text-2xl font-bold">{match.team1.score}</div>
            <div className="text-sm text-muted-foreground">
              {match.team1.overs} overs
            </div>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-lg font-semibold text-muted-foreground mb-2">
              VS
            </div>
            <div className="text-sm text-center">{match.venue}</div>
            <div className="mt-2 text-xs text-center text-muted-foreground px-4">
              {match.required}
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center justify-center text-center">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={match.team2.logo} alt={match.team2.name} />
              <AvatarFallback>{match.team2.shortName}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold">{match.team2.name}</h3>
            <div className="mt-1 text-2xl font-bold">{match.team2.score}</div>
            <div className="text-sm text-muted-foreground">
              {match.team2.overs} overs
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between p-4">
        <Button variant="ghost" size="sm">
          Match Details
        </Button>
        <Button variant="outline" size="sm">
          Live Commentary
        </Button>
        <Button size="sm">Watch Live</Button>
      </CardFooter>
    </Card>
  );
};

export default LiveMatchCard;
