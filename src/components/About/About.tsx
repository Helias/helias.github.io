import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from '../../i18n/context';
import AboutTab from './AboutTab';
import EducationTab from './EducationTab';
import ExperienceTab from './ExperienceTab';
import SkillsTab from './SkillsTab';
import SocialLink from './SocialLink';

const TABS: { labelKey: string; hash?: string; Panel: () => JSX.Element }[] = [
  { labelKey: 'about.title', Panel: AboutTab },
  { labelKey: 'about.tab.experience', hash: '#experience', Panel: ExperienceTab },
  { labelKey: 'about.tab.education', hash: '#education', Panel: EducationTab },
  { labelKey: 'skills.title', hash: '#skills', Panel: SkillsTab },
];

// Panels unmount while hidden, so this runs before paint each time its panel is shown.
function ShownPanel({
  Panel,
  onShow,
}: {
  Panel: () => JSX.Element;
  onShow: () => void;
}): JSX.Element {
  useLayoutEffect(() => onShow(), [onShow]);
  return <Panel />;
}

export default function About(): JSX.Element {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const revealPanels = useRef(false);

  useEffect(() => {
    function selectTabFromHash(): void {
      const index = TABS.findIndex(({ hash }) => hash === window.location.hash);
      if (index === -1) {
        return;
      }
      setSelectedIndex(index);
      document.getElementById('about')?.scrollIntoView();
    }

    selectTabFromHash();
    window.addEventListener('hashchange', selectTabFromHash);
    return () => window.removeEventListener('hashchange', selectTabFromHash);
  }, []);

  // Measured once the new tab has rendered, because a short tab is centered vertically and a tall
  // one is not, so switching moves the panels. Instant scroll: a smooth one would first paint the
  // new tab at the old scroll position, possibly showing the Projects section.
  const revealSelectedPanel = useCallback(() => {
    if (!revealPanels.current) {
      return;
    }
    revealPanels.current = false;
    const tabList = tabListRef.current;
    const panels = panelsRef.current;
    if (!tabList || !panels) {
      return;
    }
    // Scrolled into a tall tab, the stuck tab row hides the start of the panels. Uses where the row
    // sticks, not where it is: a now shorter section can be pushing it up.
    const stuckBottom =
      parseFloat(getComputedStyle(tabList).top) + tabList.getBoundingClientRect().height;
    const hidden = stuckBottom - panels.getBoundingClientRect().top;
    if (hidden > 0) {
      window.scrollBy({ top: -hidden, behavior: 'instant' });
    }
  }, []);

  function selectTab(index: number): void {
    revealPanels.current = true;
    setSelectedIndex(index);
  }

  return (
    <section
      id="about"
      className="flex min-h-[calc(100svh-var(--spacing-navbar))] scroll-mt-navbar items-center py-10"
    >
      <div className="grid w-full grid-cols-12 items-center gap-y-10">
        <div className="ml-[5vw] text-center md:col-span-5 col-span-12 md:sticky md:top-[calc(var(--spacing-navbar)+2.5rem)] md:self-start">
          <img className="rounded-full h-75 mx-auto border" src="about/Stefano.png" />
          <div className="mt-10 flex justify-center items-center">
            <SocialLink url="mailto:stefanoborzi32@gmail.com">
              <EmailIcon sx={{ fontSize: 50 }} />
            </SocialLink>
            <SocialLink url="https://t.me/Helias" classNames="text-sky-500">
              <TelegramIcon sx={{ fontSize: 50 }} />
            </SocialLink>
            <SocialLink url="https://github.com/Helias">
              <i className="devicon-github-original align-middle mr-2 text-5xl"></i>
            </SocialLink>
            <SocialLink url="https://linkedin.com/in/stefanoborzi" classNames="text-blue-900">
              <LinkedInIcon sx={{ fontSize: 50 }} />
            </SocialLink>
            <SocialLink url="https://scholar.google.com/citations?user=80n8dycAAAAJ&hl=it">
              <SchoolIcon sx={{ fontSize: 50 }} />
            </SocialLink>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
            <a
              className="bg-gray-800 px-12 py-5 font-medium text-white hover:text-red-400"
              href="StefanoBorzi-CV.pdf"
            >
              <DescriptionIcon fontSize="medium" className="align-bottom" /> {t('about.resume')}
            </a>
            <a
              className="bg-gray-800 px-12 py-5 font-medium text-white hover:text-red-400"
              href="StefanoBorzi-CV-Industry.pdf"
            >
              <DescriptionIcon fontSize="medium" className="align-bottom" />{' '}
              {t('about.resumeIndustry')}
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 px-10">
          <TabGroup selectedIndex={selectedIndex} onChange={selectTab}>
            <TabList
              ref={tabListRef}
              className="sticky top-navbar z-10 flex flex-wrap gap-2 bg-white py-3"
            >
              {TABS.map(({ labelKey }) => (
                <Tab
                  key={labelKey}
                  className="px-3 py-1 rounded text-base md:text-lg text-white border-1 border-gray-200 bg-gray-800 cursor-pointer data-hover:bg-gray-400 data-selected:bg-gray-400 data-selected:cursor-default focus:outline-none data-focus:ring-2 data-focus:ring-gray-400"
                >
                  {t(labelKey)}
                </Tab>
              ))}
            </TabList>
            <TabPanels ref={panelsRef} className="mt-3">
              {TABS.map(({ labelKey, Panel }) => (
                <TabPanel key={labelKey}>
                  <ShownPanel Panel={Panel} onShow={revealSelectedPanel} />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
