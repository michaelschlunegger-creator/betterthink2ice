import Hero from '../components/Hero.jsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Brain, Compass, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Emotional intelligence',
    description: 'AI-guided reflections with human softness keep you centered.',
  },
  {
    icon: Compass,
    title: 'Clear direction',
    description: 'Three-step prompts with inline hints minimize overwhelm.',
  },
  {
    icon: ShieldCheck,
    title: 'Boundaries baked-in',
    description: 'Alerts and safe-support tagging ensure your plan is grounded.',
  },
];

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <Hero />
      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="card-hover">
            <CardHeader>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                <pillar.icon className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
