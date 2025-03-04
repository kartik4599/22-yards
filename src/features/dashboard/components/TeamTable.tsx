import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TeamTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Rankings</CardTitle>
        <CardDescription>Top teams in the current season</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Points</TableHead>
              <TableHead className="text-right">Win %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Mumbai Indians</TableCell>
              <TableCell>42</TableCell>
              <TableCell className="text-right">78%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Chennai Super Kings</TableCell>
              <TableCell>38</TableCell>
              <TableCell className="text-right">72%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Royal Challengers</TableCell>
              <TableCell>36</TableCell>
              <TableCell className="text-right">67%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>Delhi Capitals</TableCell>
              <TableCell>32</TableCell>
              <TableCell className="text-right">62%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>Rajasthan Royals</TableCell>
              <TableCell>28</TableCell>
              <TableCell className="text-right">54%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TeamTable;
