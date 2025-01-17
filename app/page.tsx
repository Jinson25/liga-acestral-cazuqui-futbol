import { StandingsTable } from '@/components/standings/standings-table';
import { UpcomingMatches } from '@/components/matches/upcoming-matches';
import { LiveMatch } from '@/components/matches/live-match';

export default function Home() {
  return (
    <div className="space-y-8 container mx-auto p-4">
      <section>
        <h2 className="text-3xl font-bold mb-6">Tabla de Clasificación</h2>
        <StandingsTable />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Próximos Encuentros</h2>
        <UpcomingMatches />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Partido en Vivo</h2>
        <LiveMatch />
      </section>
    </div>
  );
}