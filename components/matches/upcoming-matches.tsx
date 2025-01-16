"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const mockMatches = [
  {
    id: 1,
    homeTeam: "Deportivo Quito",
    awayTeam: "Barcelona SC",
    date: "2024-01-20",
    time: "15:00",
    venue: "Estadio Catzuqui",
  },
  // Add more mock matches as needed
];

export function UpcomingMatches() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockMatches.map((match) => (
        <Card key={match.id}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {match.date} - {match.time}
                </span>
              </div>
            </div>
            <div className="space-y-2 text-center">
              <div className="font-semibold">{match.homeTeam}</div>
              <div className="text-2xl font-bold">VS</div>
              <div className="font-semibold">{match.awayTeam}</div>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {match.venue}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}