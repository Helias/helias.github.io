import { useTranslation } from '../../i18n/context';

interface CourseProps {
  name: string;
  link?: string;
}

export default function Course({ name, link }: CourseProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <p className="text-white text-xl py-1.5 w-full">
      - {name} - 🎓{' '}
      {link ? (
        <a href={link} target="_blank" className="underline hover:text-gray-400">
          {t('teachings.program')}
        </a>
      ) : (
        <span className="text-gray-500 underline cursor-not-allowed">{t('teachings.program')}</span>
      )}
    </p>
  );
}
