"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockLiveMatch = {
  homeTeam: "Deportivo Quito",
  awayTeam: "Barcelona SC",
  homeScore: 2,
  awayScore: 1,
  minute: 75,
  isLive: true,
};

export function LiveMatch() {
  if (!mockLiveMatch.isLive) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No hay partidos en vivo</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="destructive" className="animate-pulse">
            EN VIVO - {mockLiveMatch.minute}'
          </Badge>
        </div>
        <div className="grid grid-cols-3 items-center text-center">
          <div className="space-y-2">
            <div className="text-xl font-semibold">{mockLiveMatch.homeTeam}</div>
          </div>
          <div className="text-3xl font-bold">
            {mockLiveMatch.homeScore} - {mockLiveMatch.awayScore}
          </div>
          <div className="space-y-2">
            <div className="text-xl font-semibold">{mockLiveMatch.awayTeam}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}