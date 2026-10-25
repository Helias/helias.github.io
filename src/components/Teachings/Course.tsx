import { useTranslation } from '../../i18n/context';
import { Language } from '../../i18n/translations';

export type EditionLink = string | Record<Language, string>;

interface CourseProps {
  name: string;
  link?: EditionLink;
}

export default function Course({ name, link }: CourseProps): JSX.Element {
  const { t, language } = useTranslation();
  const href = typeof link === 'string' ? link : link?.[language];

  return (
    <p className="text-white text-xl py-1.5 w-full">
      - {name} - 🎓{' '}
      {href ? (
        <a href={href} target="_blank" className="underline hover:text-gray-400">
          {t('teachings.program')}
        </a>
      ) : (
        <span className="text-gray-500 underline cursor-not-allowed">{t('teachings.program')}</span>
      )}
    </p>
  );
}
