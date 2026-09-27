import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTranslation } from '../../i18n/context';
import { navbarContainerClasses } from '../layout';
import Course from './Course';
import CourseLink from './CourseLink';

export default function Teachings(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div id="teachings" className="pt-16 bg-gray-800">
      <div className="bg-[url('/teachings/qd-bg.jpg')] bg-fixed bg-center bg-cover">
        <div className="bg-[rgba(0,0,0,0.5)]">
          <div className={`${navbarContainerClasses} pt-10`}>
            <h2 className="text-4xl text-white underline underline-offset-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
              {t('teachings.title')}
            </h2>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-12">
              <img src="teachings/qd-logo.png" className="h-64 w-auto" />
              <div className="bg-gray-800 w-80 md:w-100 p-4 md:p-5">
                <h3 className="text-[#00ec7a] text-2xl">Quality Development</h3>
                <Course
                  name="2025/2026"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2025"
                />
                <Course
                  name="2023/2024"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2023"
                />
                <Course
                  name="2022/2023"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2022"
                />
                <Course
                  name="2021/2022"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-800 py-5 text-white text-xl text-center">
            <div className={navbarContainerClasses}>
              <div className="grid grid-cols-4 gap-y-2 items-center">
                <div className="col-span-2 lg:col-span-1">
                  <CourseLink
                    href="https://github.com/UNICT-Quality-Development/"
                    icon={<i className="devicon-github-original align-middle mr-2 text-4xl"></i>}
                    text={t('teachings.link.github')}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <CourseLink
                    href="https://unict-quality-development.github.io/QualityDevelopment-slides/"
                    icon={<DescriptionIcon sx={{ fontSize: 40 }} />}
                    text={t('teachings.link.slides')}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <CourseLink
                    href="https://unict-quality-development.github.io/git-catalogue/#/"
                    icon={<CodeIcon sx={{ fontSize: 40 }} />}
                    text={t('teachings.link.projects')}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <CourseLink
                    href="https://t.me/unict_qd"
                    icon={<TelegramIcon sx={{ fontSize: 40 }} className="text-sky-500 mx-2" />}
                    text={t('teachings.link.telegram')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-36 bg-gray-800 py-6">
            <div className={navbarContainerClasses}>
              <p className="text-white text-xl">{t('teachings.desc')}</p>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 place-items-center">
                <div className="my-2 col-span-1">
                  <img className="h-14 mx-auto" src="teachings/terminal.png" />
                </div>
                <div className="my-2 col-span-1">
                  <img className="h-14 mx-auto" src="teachings/git.png" />
                </div>
                <div className="my-2 col-span-1">
                  <img className="h-14 mx-auto" src="teachings/GitHub.png" />
                </div>
                <div className="my-2 col-span-1">
                  <img className="h-14 mx-auto" src="teachings/opensource.png" />
                </div>
                <div className="my-2 col-span-1">
                  <img className="h-14 mx-auto" src="teachings/CI-CD.png" />
                </div>
                <div className="my-2 col-span-1">
                  <img className="h-14 mx-auto" src="teachings/python.png" />
                </div>
                <div className="my-2 col-span-2 md:col-span-3 lg:col-span-1">
                  <img className="h-14 mx-auto" src="teachings/unit-testing.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
