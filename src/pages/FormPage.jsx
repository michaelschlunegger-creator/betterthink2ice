import MultiStepForm from '../components/MultiStepForm.jsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import Badge from '../components/ui/badge.jsx';
import { Lightbulb, Shield, Heart } from 'lucide-react';

const tips = [
  { icon: Lightbulb, title: 'Micro prompts', description: 'Keep responses short. We will expand and guide gently.' },
  { icon: Shield, title: 'Safety first', description: 'Boundaries toggle adds supportive reminders and guardrails.' },
  { icon: Heart, title: 'Human tone', description: 'Language stays encouraging and non-judgmental—on purpose.' },
];

export default function FormPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <MultiStepForm />
      <div className="space-y-4">
        <Card className="card-hover">
          <CardHeader className="items-start">
            <div>
              <CardTitle>Inline guidance</CardTitle>
              <CardDescription>We keep coaching hints visible while you type.</CardDescription>
            </div>
            <Badge>Apple glass finish</Badge>
          </CardHeader>
          <ul className="space-y-4">
            {tips.map((tip) => (
              <li key={tip.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="mt-1 rounded-2xl bg-white/10 p-2 text-white">
                  <tip.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">{tip.title}</p>
                  <p className="text-sm text-slate-300">{tip.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
