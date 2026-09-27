import CopyrightIcon from '@mui/icons-material/Copyright';
import { useTranslation } from '../../i18n/context';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <nav className="bg-gray-800 w-full mb-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="sm:items-stretch sm:justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="space-x-4 text-white">
                  <a href="https://github.com/helias/helias.github.io" className="hover:underline">
                    <CopyrightIcon className="rotate-y-180 align-top" /> {t('footer.copyleft')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
