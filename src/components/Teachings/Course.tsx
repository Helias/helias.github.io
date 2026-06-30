import { useTranslation } from '../../i18n/context';

interface CourseProps {
  name: string;
  link: string;
}

export default function Course({ name, link }: CourseProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <p className={`text-white text-2xl p-3 w-full md:max-w-130`}>
      - {name} - 🎓{' '}
      <a href={link} target="_blank" className="underline hover:text-gray-400">
        {t('teachings.program')}
      </a>{' '}
    </p>
  );
}
