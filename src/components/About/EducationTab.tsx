import { useTranslation } from '../../i18n/context';
import { formatPeriod } from './formatPeriod';

interface Degree {
  title: string;
  institution: string;
  start: string;
  end: string;
  note?: string;
}

const DEGREES: Degree[] = [
  {
    title: 'PhD in Computer Science',
    institution: 'University of Catania',
    start: '2021',
    end: '2026',
  },
  {
    title: 'Visiting PhD student',
    institution: 'Nordita, Stockholm',
    start: '2024-05',
    end: '2024-10',
    note: 'Machine learning for Barkhausen noise analysis',
  },
  {
    title: 'MSc in Computer Science (Data Science)',
    institution: 'University of Catania',
    start: '2017',
    end: '2019',
    note: 'Grade: 110/110 cum laude',
  },
  {
    title: 'BSc in Computer Science',
    institution: 'University of Catania',
    start: '2014',
    end: '2017',
    note: 'Grade: 106/110',
  },
];

const SPOKEN_LANGUAGES: { flag: string; name: string; level: string }[] = [
  { flag: '🇮🇹', name: 'Italian', level: 'Native' },
  { flag: '🇬🇧', name: 'English', level: 'Fluent' },
  { flag: '🇳🇱', name: 'Dutch', level: 'Basic' },
  { flag: '🇪🇸', name: 'Spanish', level: 'Basic' },
];

export default function EducationTab(): JSX.Element {
  const { language, t } = useTranslation();

  return (
    <div>
      <h3 className="text-2xl text-gray-700">{t('about.education.degrees')}</h3>
      <ul className="mt-4 space-y-4 list-disc pl-6 marker:text-xl marker:text-gray-400">
        {DEGREES.map(({ title, institution, start, end, note }) => (
          <li key={title}>
            <h4 className="text-xl font-semibold">{t(title)}</h4>
            <p className="text-gray-500">
              {t(institution)} · {formatPeriod(start, end, language, '')}
            </p>
            {note && <p className="text-gray-600">{t(note)}</p>}
          </li>
        ))}
      </ul>

      <h3 className="mt-8 text-2xl text-gray-700">{t('about.education.languages')}</h3>
      <ul className="mt-4 space-y-1 list-disc pl-6 text-gray-600 marker:text-gray-400">
        {SPOKEN_LANGUAGES.map(({ flag, name, level }) => (
          <li key={name}>
            {flag} {t(name)} – {t(level)}
          </li>
        ))}
      </ul>
    </div>
  );
}
