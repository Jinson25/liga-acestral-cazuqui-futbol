"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockData = [
  {
    id: 1,
    position: 1,
    team: "Deportivo Quito",
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    goalsFor: 20,
    goalsAgainst: 8,
    points: 23,
  },
  // Add more mock data as needed
];

export function StandingsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Pos</TableHead>
            <TableHead>Equipo</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead>G</TableHead>
            <TableHead>E</TableHead>
            <TableHead>P</TableHead>
            <TableHead>GF</TableHead>
            <TableHead>GC</TableHead>
            <TableHead>Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.position}</TableCell>
              <TableCell className="font-medium">{team.team}</TableCell>
              <TableCell>{team.played}</TableCell>
              <TableCell>{team.won}</TableCell>
              <TableCell>{team.drawn}</TableCell>
              <TableCell>{team.lost}</TableCell>
              <TableCell>{team.goalsFor}</TableCell>
              <TableCell>{team.goalsAgainst}</TableCell>
              <TableCell className="font-bold">{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}