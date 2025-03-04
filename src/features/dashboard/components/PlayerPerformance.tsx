import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PlayerPerformance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Performance</CardTitle>
        <CardDescription>Batting and bowling statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Batting Average</div>
              <div className="text-sm text-muted-foreground">42.5</div>
            </div>
            <Progress value={70} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Strike Rate</div>
              <div className="text-sm text-muted-foreground">138.2</div>
            </div>
            <Progress value={82} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Bowling Economy</div>
              <div className="text-sm text-muted-foreground">7.8</div>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Wickets per Match</div>
              <div className="text-sm text-muted-foreground">1.4</div>
            </div>
            <Progress value={58} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerPerformance;
