import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card.jsx';
import Badge from '../ui/badge.jsx';

export default function StatCard({ title, value, delta, hint }) {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{hint}</CardDescription>
        </div>
        <Badge variant={delta >= 0 ? 'success' : 'danger'}>{delta >= 0 ? `+${delta}%` : `${delta}%`}</Badge>
      </CardHeader>
      <p className="text-3xl font-semibold text-white">{value}</p>
    </Card>
  );
}
