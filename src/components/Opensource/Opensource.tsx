import { useTranslation } from '../../i18n/context';
import Community from './Community';

export default function Opensource(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div id="opensource" className="bg-gray-800 text-white pt-1">
      <div className="ml-[5vw] md:ml-[10vw] lg:ml-[10vw] pt-10">
        <h2 className="text-6xl mt-10 underline underline-offset-15">{t('opensource.title')}</h2>
      </div>

      <div className="mx-auto md:w-[80%] lg:w-[75%]">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <p className="max-w-300 mx-auto mt-10 text-center p-5 text-2xl">
              {t('opensource.intro1')}
              <strong>AzerothCore</strong>
              {t('opensource.intro2')}
              <strong>UNICT Devs</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6">
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
