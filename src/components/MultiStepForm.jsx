import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useFormState } from '../context/FormContext.jsx';
import Button from './ui/button.jsx';
import Input from './ui/input.jsx';
import Label from './ui/label.jsx';
import Progress from './ui/progress.jsx';
import Switch from './ui/switch.jsx';
import Badge from './ui/badge.jsx';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card.jsx';

const steps = [
  {
    id: 1,
    title: 'Intro & contact',
    description: 'Soften in. We keep your info private and build a personalized track.',
  },
  {
    id: 2,
    title: 'Check-in',
    description: 'Name your current mood, confidence, and focus for the day.',
  },
  {
    id: 3,
    title: 'Boundaries & support',
    description: 'We map safe limits and who is nearby to reach for support.',
  },
];

const motionVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function MultiStepForm() {
  const { state, updateField, nextStep, prevStep, reset } = useFormState();
  const { step, answers } = state;
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const currentErrors = {};
    if (step === 1) {
      if (!answers.name.trim()) currentErrors.name = 'Please add your name';
      if (!answers.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) currentErrors.email = 'Add a valid email';
    }
    if (step === 2) {
      if (!answers.mood.trim()) currentErrors.mood = 'Tell us how you feel';
    }
    if (step === 3) {
      if (!answers.support.trim()) currentErrors.support = 'Choose a support option';
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const onNext = () => {
    if (validateStep()) nextStep();
  };

  const onSubmit = () => {
    if (!validateStep()) return;
    alert('Saved! Your calm plan is ready.');
    reset();
  };

  const progress = (step / steps.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-400">Guided flow</p>
            <h2 className="text-2xl font-semibold text-white">Therapeutic multi-step check-in</h2>
          </div>
          <Badge variant="success">Progress {Math.round(progress)}%</Badge>
        </div>
        <Progress value={progress} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((item) => (
          <Card key={item.id} className={`card-hover ${step === item.id ? 'border-brand-400/50' : 'opacity-70'}`}>
            <CardHeader className="items-start">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold ${
                    step === item.id
                      ? 'bg-gradient-to-br from-brand-500 to-sky-400 text-white'
                      : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {item.id}
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </div>
              {step > item.id && <Badge variant="success">Done</Badge>}
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="glass glow-border rounded-3xl p-6">
        <AnimatePresence mode="wait">
          <motion.div key={step} variants={motionVariants} initial="initial" animate="animate" exit="exit">
            {step === 1 && (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Skylar"
                    value={answers.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                  {errors.name && <p className="text-sm text-rose-300">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="skylar@calm.me"
                    value={answers.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                  {errors.email && <p className="text-sm text-rose-300">{errors.email}</p>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="mood">Mood headline</Label>
                  <Input
                    id="mood"
                    placeholder="Hopeful, tense, curious..."
                    value={answers.mood}
                    onChange={(e) => updateField('mood', e.target.value)}
                  />
                  {errors.mood && <p className="text-sm text-rose-300">{errors.mood}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confidence">Confidence level</Label>
                  <input
                    id="confidence"
                    type="range"
                    min="0"
                    max="100"
                    value={answers.confidence}
                    onChange={(e) => updateField('confidence', Number(e.target.value))}
                    className="w-full accent-brand-400"
                  />
                  <p className="text-sm text-slate-200">{answers.confidence}% ready</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="focus">Focus area</Label>
                  <select
                    id="focus"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-400 focus:outline-none"
                    value={answers.focus}
                    onChange={(e) => updateField('focus', e.target.value)}
                  >
                    <option value="creativity">Creativity</option>
                    <option value="communication">Communication</option>
                    <option value="boundaries">Boundaries</option>
                    <option value="rest">Rest & recovery</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Boundaries enabled</Label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Switch
                      checked={answers.boundaries}
                      onChange={(value) => updateField('boundaries', value)}
                      label="Boundaries"
                    />
                    <p className="text-sm text-slate-300">We will nudge you if plans drift.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support">Who is nearby?</Label>
                  <select
                    id="support"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-400 focus:outline-none"
                    value={answers.support}
                    onChange={(e) => updateField('support', e.target.value)}
                  >
                    <option value="">Select a supporter</option>
                    <option value="mentor">Mentor</option>
                    <option value="friend">Friend</option>
                    <option value="partner">Partner</option>
                    <option value="therapist">Therapist</option>
                  </select>
                  {errors.support && <p className="text-sm text-rose-300">{errors.support}</p>}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" onClick={step === 1 ? reset : prevStep}>
            {step === 1 ? 'Reset' : 'Back'}
          </Button>
          {step < steps.length ? (
            <Button onClick={onNext}>Next step</Button>
          ) : (
            <Button onClick={onSubmit}>Submit</Button>
          )}
        </div>
      </div>
    </div>
  );
}
