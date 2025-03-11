import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useTeamDetail from "../hook/use-team-detail";
import TeamMatchsLoading from "./TeamMatchsLoading";
import { format } from "date-fns";

const TeamMatchs = () => {
  const { previousMatches, upcomingMatches } = useTeamDetail();

  if (!previousMatches || !upcomingMatches) return <TeamMatchsLoading />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="previous">
          <TabsList className="mb-4">
            <TabsTrigger value="previous">Previous Matches</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
          </TabsList>
          <TabsContent value="previous">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Opponent</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {previousMatches.map((match) => (
                  <TableRow key={match.id}>
                    <TableCell>
                      {format(match.datetime, "dd-LL-yyyy")}
                    </TableCell>
                    <TableCell>{match.opponent.name}</TableCell>
                    <TableCell>{match.verdict}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="upcoming">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Opponent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingMatches.map((match) => (
                  <TableRow key={match.id}>
                    <TableCell>
                      {format(match.datetime, "dd-LL-yyyy")}
                    </TableCell>
                    <TableCell>{format(match.datetime, "h:mm a")}</TableCell>
                    <TableCell>{match?.opponent?.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TeamMatchs;
