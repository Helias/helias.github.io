import { useMemo } from 'react';
import { useTranslation } from '../../i18n/context';
import { navbarContainerClasses } from '../layout';
import { getIcon } from '../Projects/helper';
import { skillsWeighted } from '../Projects/ProjectList';
import { SKILL_LABELS } from './skillLabels';

const MIN_ICON_REM = 1.5;
const MAX_ICON_REM = 4;

const SKILL_GROUPS: { labelKey: string; skills: string }[] = [
  {
    labelKey: 'skills.group.frontend',
    skills:
      'Angular, TypeScript, JavaScript, RxJS, Redux, NgRx, React.js, Next.js, Three.js, Electron, Web Components, Micro Front-end, SASS, CSS, TailwindCSS, Bootstrap, Material Design, Accessibility, WCAG',
  },
  {
    labelKey: 'skills.group.backend',
    skills:
      'Node.js, NestJS, Express.js, WebSocket, Socket.IO, PHP, Laravel, Python, FastAPI, Flask, PyTorch, R, C, C++, Java, .NET, Lua, Bash, Microservices, SOAP, OAuth, Networking (RESTful APIs, JSON, XML), MySQL, SQLite, Firebase, Supabase (Realtime, Monitoring)',
  },
  {
    labelKey: 'skills.group.testing',
    skills: 'Cypress, Playwright, Karma, Jasmine, Jest, Selenium, Pytest, A/B testing',
  },
  {
    labelKey: 'skills.group.devops',
    skills:
      'Nx, Webpack, Docker, Linux, OpenWRT, Radius, Apache, Nginx, Azure, CI/CD, GitHub Actions, Jenkins, DevOps, Git, GitHub, GitLab, Bitbucket, WordPress, Figma, Adobe Analytics, LaTeX',
  },
  {
    labelKey: 'skills.group.methodologies',
    skills: 'Jira, Scrum, SAFe-Agile, Kanban',
  },
];

export default function Skills(): JSX.Element {
  const { t } = useTranslation();

  const icons = useMemo(() => {
    const weights = skillsWeighted.map(({ weight }) => weight);
    const minWeight = Math.min(...weights);
    const weightRange = Math.max(...weights) - minWeight || 1;

    return [...skillsWeighted]
      .sort(() => Math.random() - 0.5)
      .map(({ skill, weight }) => ({
        skill,
        sizeRem:
          MIN_ICON_REM + ((weight - minWeight) / weightRange) * (MAX_ICON_REM - MIN_ICON_REM),
      }));
  }, []);

  return (
    <div id="skills" className={`${navbarContainerClasses} pt-16`}>
      <h2 className="text-4xl text-gray-600 underline underline-offset-8">{t('skills.title')}</h2>

      <p className="mt-4 text-lg md:text-xl">{t('skills.intro')}</p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 leading-none">
        {icons.map(({ skill, sizeRem }) => (
          <span
            key={skill}
            title={SKILL_LABELS[skill] ?? skill}
            aria-label={SKILL_LABELS[skill] ?? skill}
            role="img"
            className="inline-flex"
            style={{ fontSize: `${sizeRem}rem` }}
          >
            {getIcon(skill, false, 'inline-block w-[1em] h-[1em] mt-0!', 'mt-0!')}
          </span>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-gray-500">{t('skills.note')}</p>

      <details className="mt-4 text-center">
        <summary className="cursor-pointer text-lg font-semibold text-gray-700 hover:text-gray-900">
          {t('skills.allSkills')}
        </summary>
        <dl className="mt-3 grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-left">
          {SKILL_GROUPS.map(({ labelKey, skills }) => (
            <div key={labelKey} className="contents">
              <dt className="font-semibold">{t(labelKey)}</dt>
              <dd className="mb-2 md:mb-0">{skills}</dd>
            </div>
          ))}
        </dl>
      </details>
    </div>
  );
}
