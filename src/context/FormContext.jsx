import { createContext, useContext, useMemo, useState } from 'react';

const FormContext = createContext();

const defaultState = {
  step: 1,
  answers: {
    name: '',
    email: '',
    mood: '',
    confidence: 50,
    focus: 'creativity',
    boundaries: true,
    support: '',
  },
};

export function FormProvider({ children }) {
  const [state, setState] = useState(defaultState);

  const updateField = (field, value) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [field]: value,
      },
    }));
  };

  const nextStep = () => setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 3) }));
  const prevStep = () => setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
  const reset = () => setState(defaultState);

  const value = useMemo(
    () => ({ state, updateField, nextStep, prevStep, reset }),
    [state],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormState() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormState must be used within a FormProvider');
  return ctx;
}
