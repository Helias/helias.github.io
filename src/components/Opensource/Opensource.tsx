import { useTranslation } from '../../i18n/context';
import { navbarContainerClasses } from '../layout';
import Community from './Community';

export default function Opensource(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div id="opensource" className="bg-gray-800 text-white pt-16">
      <div
        className={`${navbarContainerClasses} flex flex-col md:flex-row md:items-center gap-4 md:gap-8`}
      >
        <h2 className="text-4xl underline underline-offset-8 shrink-0">{t('opensource.title')}</h2>
        <p className="text-lg md:text-xl">
          {t('opensource.intro1')}
          <strong>AzerothCore</strong>
          {t('opensource.intro2')}
          <strong>UNICT Devs</strong>.
        </p>
      </div>

      <div className="mx-auto md:w-[80%] lg:w-[75%]">
        <div className="grid grid-cols-6 mt-10">
          <Community
            name="AzerothCore"
            image="opensource/azerothcore.png"
            description={t('opensource.azerothcore.desc')}
            organization="azerothcore"
            repository="azerothcore-wotlk"
            extraClass="md:border-gray-50 md:border-r-1 lg:border-gray-50 lg:border-r-1"
          />

          <Community
            name="UNICT-DEVS"
            image="opensource/unict-devs.png"
            description={t('opensource.unictdevs.desc')}
            organization="unict-dmi"
            repository="telegram-dmi-bot"
          />
        </div>
      </div>
    </div>
  );
}
