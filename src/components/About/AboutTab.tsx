import { useTranslation } from '../../i18n/context';

export default function AboutTab(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="text-2xl text-gray-600">
      <p>{t('about.p1')}</p>
      <p className="mt-10">{t('about.p2')}</p>
      <p className="mt-10">
        {t('about.p3.before')}
        <a
          className="underline hover:text-black"
          href="https://github.com/azerothcore"
          target="_blank"
        >
          AzerothCore
        </a>
        {t('about.p3.and')}
        <a
          className="underline hover:text-black"
          href="https://github.com/unict-dmi"
          target="_blank"
        >
          UNICT-DEVS
        </a>
        .
      </p>
      <p className="mt-10 text-center">
        <img className="inline-block align-middle mr-3" src="about/opensource.png" width="32" />
        {t('about.p4')}{' '}
        <img className="inline-block align-middle" src="about/linux-tux.png" width="32" />
      </p>
      <p className="mt-10">{t('about.p5')}</p>
    </div>
  );
}
