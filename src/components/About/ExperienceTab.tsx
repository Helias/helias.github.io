import { useTranslation } from '../../i18n/context';
import { formatPeriod } from './formatPeriod';

interface Job {
  id: string;
  role: string;
  company: string;
  url?: string;
  start: string;
  end?: string;
}

const MAIN_JOBS: Job[] = [
  {
    id: 'bam',
    role: 'Fullstack Developer (freelancer)',
    company: 'Royal BAM Group',
    url: 'https://www.bam.com/en',
    start: '2025-05',
  },
  { id: 'fedex-lead', role: 'Team Lead', company: 'FedEx', start: '2023-01', end: '2025-05' },
  {
    id: 'unict',
    role: 'Contract Professor',
    company: 'University of Catania',
    url: '#teachings',
    start: '2021',
  },
  {
    id: 'fedex-senior',
    role: 'Senior Programmer Analyst',
    company: 'FedEx',
    start: '2021-01',
    end: '2022-12',
  },
  {
    id: 'infront',
    role: 'Software Engineer',
    company: 'Infront Finance (ex VWD Group)',
    url: 'https://www.infrontfinance.com/',
    start: '2020-01',
    end: '2020-12',
  },
  {
    id: 'fiverr',
    role: 'Software Developer (freelancer)',
    company: 'Fiverr',
    url: 'https://www.fiverr.com/helias32',
    start: '2018-08',
    end: '2020-01',
  },
];

const PART_TIME_JOBS: Job[] = [
  {
    id: 'italiahotspot-2018',
    company: 'ItaliaHotspot',
    url: 'https://italiahotspot.it/landing/index.html',
    start: '2018-03',
    end: '2019-10',
  },
  {
    id: 'codiceabarre-2017',
    company: 'Codice a Barre Italia',
    url: 'https://codiceabarra.it/',
    start: '2017-09',
    end: '2018-01',
  },
  {
    id: 'perdichizzi',
    company: 'Perdichizzi Gioiellerie',
    url: 'https://www.gioielleriaperdichizzi.it/',
    start: '2016-10',
    end: '2017-07',
  },
  {
    id: 'codiceabarre-2016',
    company: 'Codice a Barre Italia',
    url: 'https://codiceabarra.it/',
    start: '2016-08',
    end: '2016-10',
  },
  {
    id: 'italiahotspot-2015',
    company: 'ItaliaHotspot',
    url: 'https://italiahotspot.it/landing/index.html',
    start: '2015-08',
    end: '2016-07',
  },
  { id: 'insolaria', company: 'Insolaria', start: '2015-01', end: '2015-07' },
].map((job) => ({ ...job, role: 'Web Developer (part-time)' }));

function Company({ job }: { job: Job }): JSX.Element {
  const { t } = useTranslation();

  if (!job.url) {
    return <>{t(job.company)}</>;
  }
  return (
    <a
      className="underline hover:text-black"
      href={job.url}
      target={job.url.startsWith('#') ? undefined : '_blank'}
    >
      {t(job.company)}
    </a>
  );
}

export default function ExperienceTab(): JSX.Element {
  const { language, t } = useTranslation();

  return (
    <ol className="border-l-2 border-gray-300 pl-6 space-y-6">
      {[...MAIN_JOBS, ...PART_TIME_JOBS].map((job) => (
        <li key={job.id}>
          <h3 className="text-xl font-semibold text-gray-700">
            {t(job.role)} · <Company job={job} />
          </h3>
          <p className="text-sm text-gray-500">
            {formatPeriod(job.start, job.end, language, t('about.experience.present'))}
          </p>
          <p className="text-base text-gray-600">{t(`experience.${job.id}.desc`)}</p>
        </li>
      ))}
    </ol>
  );
}
