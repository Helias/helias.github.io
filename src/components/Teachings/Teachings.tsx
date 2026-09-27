import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';
import { useTranslation } from '../../i18n/context';
import { navbarContainerClasses } from '../layout';
import Course from './Course';
import CourseLink from './CourseLink';

interface Topic {
  alt: string;
  images: string[];
}

interface CourseInfo {
  title: string;
  logo: string;
  editions: { name: string; link?: string }[];
  github: string;
  slides?: string;
  studentProjects?: string;
  telegram: string;
  descriptionKey: string;
  topics: Topic[];
}

const BASE_TOPICS: Topic[] = [
  { alt: 'UNIX Shell', images: ['teachings/terminal.png'] },
  { alt: 'Git', images: ['teachings/git.png'] },
  { alt: 'GitHub', images: ['teachings/GitHub.png'] },
  { alt: 'Open source', images: ['teachings/opensource.png'] },
  { alt: 'CI/CD', images: ['teachings/CI-CD.png'] },
  { alt: 'Python', images: ['teachings/python.png'] },
  { alt: 'Unit testing', images: ['teachings/unit-testing.png'] },
];

const COURSES: CourseInfo[] = [
  {
    title: 'Software Quality and Project Development',
    logo: 'teachings/sqpd-logo.png',
    editions: [{ name: '2026/2027' }],
    github: 'https://github.com/UNICT-Quality-Development/',
    telegram: 'https://t.me/unict_sqpd',
    descriptionKey: 'teachings.sqpd.desc',
    topics: [
      ...BASE_TOPICS,
      { alt: 'Playwright', images: ['teachings/playwright.svg'] },
      { alt: 'Docker', images: ['teachings/docker.svg'] },
      {
        alt: 'Agentic coding',
        images: ['teachings/openai.svg', 'teachings/claude-code.svg', 'teachings/opencode.svg'],
      },
    ],
  },
  {
    title: 'Quality Development',
    logo: 'teachings/qd-logo.png',
    editions: [
      {
        name: '2025/2026',
        link: 'https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2025',
      },
      {
        name: '2023/2024',
        link: 'https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2023',
      },
      {
        name: '2022/2023',
        link: 'https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2022',
      },
      {
        name: '2021/2022',
        link: 'https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project',
      },
    ],
    github: 'https://github.com/UNICT-Quality-Development/',
    slides: 'https://unict-quality-development.github.io/QualityDevelopment-slides/',
    studentProjects: 'https://unict-quality-development.github.io/git-catalogue/#/',
    telegram: 'https://t.me/unict_qd',
    descriptionKey: 'teachings.qd.desc',
    topics: BASE_TOPICS,
  },
];

function CourseContent({ course }: { course: CourseInfo }): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className={navbarContainerClasses}>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-12">
          <img src={course.logo} alt={course.title} className="h-64 w-auto" />
          <div className="bg-gray-800 w-80 md:w-100 p-4 md:p-5">
            <h3 className="text-[#00ec7a] text-2xl">{course.title}</h3>
            {course.editions.map(({ name, link }) => (
              <Course key={name} name={name} link={link} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-800 py-5 text-white text-xl text-center">
        <div className={navbarContainerClasses}>
          <div className="grid grid-cols-4 gap-y-2 items-center">
            <div className="col-span-2 lg:col-span-1">
              <CourseLink
                href={course.github}
                icon={<i className="devicon-github-original align-middle mr-2 text-4xl"></i>}
                text={t('teachings.link.github')}
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <CourseLink
                href={course.slides}
                icon={<DescriptionIcon sx={{ fontSize: 40 }} />}
                text={t('teachings.link.slides')}
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <CourseLink
                href={course.studentProjects}
                icon={<CodeIcon sx={{ fontSize: 40 }} />}
                text={t('teachings.link.projects')}
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <CourseLink
                href={course.telegram}
                icon={<TelegramIcon sx={{ fontSize: 40 }} className="text-sky-500 mx-2" />}
                text={t('teachings.link.telegram')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 bg-gray-800 py-6">
        <div className={navbarContainerClasses}>
          <p className="text-white text-lg">{t(course.descriptionKey)}</p>

          <div
            className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(var(--topic-columns),minmax(0,1fr))] place-items-center gap-x-10 gap-y-4"
            style={
              { '--topic-columns': Math.ceil(course.topics.length / 2) } as React.CSSProperties
            }
          >
            {course.topics.map(({ alt, images }) => (
              <div key={alt} title={alt} className="flex items-center gap-3">
                {images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={images.length === 1 ? alt : ''}
                    className={images.length === 1 ? 'h-14' : 'h-10'}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Teachings(): JSX.Element {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="teachings" className="pt-16 bg-gray-800">
      <div className="bg-[url('/teachings/qd-bg.jpg')] bg-fixed bg-center bg-cover">
        <div className="bg-[rgba(0,0,0,0.5)]">
          <div
            className={`${navbarContainerClasses} pt-10 flex flex-wrap items-center gap-x-8 gap-y-3`}
          >
            <h2 className="text-4xl text-white underline underline-offset-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
              {t('teachings.title')}
            </h2>

            <div role="tablist" className="flex flex-wrap gap-2">
              {COURSES.map(({ title }, index) => (
                <button
                  key={title}
                  id={`teachings-tab-${index}`}
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls="teachings-tabpanel"
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-1 rounded text-base md:text-lg text-white border-1 border-gray-200 ${
                    activeTab === index
                      ? 'bg-gray-400 cursor-default'
                      : 'bg-gray-800 hover:bg-gray-400 cursor-pointer'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          <div
            id="teachings-tabpanel"
            role="tabpanel"
            aria-labelledby={`teachings-tab-${activeTab}`}
          >
            <CourseContent course={COURSES[activeTab]} />
          </div>
        </div>
      </div>
    </div>
  );
}
