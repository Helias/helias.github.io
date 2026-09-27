import { ReactTyped } from 'react-typed';
import { useTranslation } from '../../i18n/context';

export default function TypedText(): JSX.Element {
  const { language, t } = useTranslation();

  return (
    <ReactTyped
      key={language}
      strings={[
        t('home.typed.1'),
        t('home.typed.2'),
        t('home.typed.3'),
        t('home.typed.4'),
        t('home.typed.5'),
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop
    />
  );
}
