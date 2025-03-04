import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const QuickMatchs = () => {
  return (
    <Card>
      <CardHeader>
        <Tabs defaultValue="upcoming">
          <div className="flex items-center justify-between">
            <CardTitle>Matches</CardTitle>
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming">
          <TabsContent value="upcoming" className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <div className="font-semibold">
                  Mumbai Indians vs Chennai Super Kings
                </div>
                <div className="text-sm text-muted-foreground">
                  Tomorrow, 7:30 PM
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <div className="font-semibold">
                  Royal Challengers vs Kolkata Knight Riders
                </div>
                <div className="text-sm text-muted-foreground">
                  Sat, 3:30 PM
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <div className="font-semibold">
                  Delhi Capitals vs Rajasthan Royals
                </div>
                <div className="text-sm text-muted-foreground">
                  Sun, 7:30 PM
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="recent" className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <div className="font-semibold">
                  Punjab Kings vs Gujarat Titans
                </div>
                <div className="text-sm text-muted-foreground">
                  Punjab Kings won by 6 wickets
                </div>
              </div>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <div className="font-semibold">
                  Sunrisers Hyderabad vs Lucknow Super Giants
                </div>
                <div className="text-sm text-muted-foreground">
                  Lucknow won by 18 runs
                </div>
              </div>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <div className="font-semibold">
                  Chennai Super Kings vs Delhi Capitals
                </div>
                <div className="text-sm text-muted-foreground">
                  Chennai won by 27 runs
                </div>
              </div>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuickMatchs;
