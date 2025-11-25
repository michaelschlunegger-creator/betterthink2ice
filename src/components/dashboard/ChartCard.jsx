import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card.jsx';

const data = [
  { name: 'Mon', calm: 62, focus: 72 },
  { name: 'Tue', calm: 71, focus: 74 },
  { name: 'Wed', calm: 75, focus: 80 },
  { name: 'Thu', calm: 78, focus: 77 },
  { name: 'Fri', calm: 82, focus: 84 },
];

export default function ChartCard() {
  return (
    <Card id="trends" className="card-hover">
      <CardHeader className="items-start">
        <div>
          <CardTitle>Emotional readiness</CardTitle>
          <CardDescription>Live chart powered by Recharts with smooth gradients.</CardDescription>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">Live sync</span>
      </CardHeader>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCalm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="name" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip
              contentStyle={{
                background: 'rgba(15,23,42,0.9)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
              }}
            />
            <Area type="monotone" dataKey="calm" stroke="#818cf8" fill="url(#colorCalm)" strokeWidth={2.2} />
            <Area type="monotone" dataKey="focus" stroke="#22d3ee" fill="url(#colorFocus)" strokeWidth={2.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
