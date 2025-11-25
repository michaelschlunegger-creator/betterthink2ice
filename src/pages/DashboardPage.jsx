import { useMemo, useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar.jsx';
import ChartCard from '../components/dashboard/ChartCard.jsx';
import StatCard from '../components/dashboard/StatCard.jsx';
import { Table, TableCell, TableHeader, TableRow } from '../components/ui/table.jsx';
import Input from '../components/ui/input.jsx';
import Badge from '../components/ui/badge.jsx';

const sessions = [
  { title: 'Morning grounding', guide: 'Aster', status: 'Completed', focus: 'Boundaries' },
  { title: 'Team prep', guide: 'Nova', status: 'Scheduled', focus: 'Communication' },
  { title: 'Creative reset', guide: 'Kai', status: 'Completed', focus: 'Creativity' },
  { title: 'Evening release', guide: 'Aster', status: 'In progress', focus: 'Rest' },
];

export default function DashboardPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () =>
      sessions.filter((session) =>
        session.title.toLowerCase().includes(query.toLowerCase()) ||
        session.focus.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
      <Sidebar />
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Calm score" value="82" delta={8} hint="Steady rise this week" />
          <StatCard title="Focus score" value="76" delta={3} hint="Mindful sprints" />
          <StatCard title="Support network" value="4" delta={12} hint="Trusted allies" />
        </div>

        <ChartCard />

        <div className="glass glow-border rounded-3xl p-5 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <p className="text-lg font-semibold text-white">Sessions</p>
              <p className="text-sm text-slate-300">Search and filter recent guided actions.</p>
            </div>
            <Input
              placeholder="Search by title or focus"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-64"
            />
          </div>
          <Table>
            <TableHeader>
              <div className="grid grid-cols-4">
                <span>Title</span>
                <span>Guide</span>
                <span>Status</span>
                <span>Focus</span>
              </div>
            </TableHeader>
            {filtered.map((item) => (
              <TableRow key={item.title}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.guide}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === 'Completed'
                        ? 'success'
                        : item.status === 'Scheduled'
                          ? 'warning'
                          : 'default'
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.focus}</TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
