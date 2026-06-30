import { createContext, useContext } from 'react';
import { Language } from './translations';

export interface LanguageContextValue {
  readonly language: Language;
  readonly setLanguage: (language: Language) => void;
  readonly t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useTranslation(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
