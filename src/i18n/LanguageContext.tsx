import { useEffect, useMemo, useState } from 'react';
import { LanguageContext, LanguageContextValue } from './context';
import { dictionaries, Language, LANGUAGES } from './translations';

const STORAGE_KEY = 'lang';

function isLanguage(value: string | null): value is Language {
  return value !== null && (LANGUAGES as readonly string[]).includes(value);
}

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) {
    return stored;
  }

  const browser = window.navigator.language?.slice(0, 2).toLowerCase() ?? '';
  if (isLanguage(browser)) {
    return browser;
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string): string =>
      dictionaries[language][key] ?? dictionaries.en[key] ?? key;

    return { language, setLanguage, t };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
