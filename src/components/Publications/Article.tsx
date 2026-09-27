import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LanguageIcon from '@mui/icons-material/Language';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTranslation } from '../../i18n/context';

interface ArticleProps {
  image: string;
  title: string;
  authors: string;
  abstract: string;
  link?: string;
  cite?: string;
  github?: string;
  website?: string;
  event?: string;
}

export default function Article({
  image,
  title,
  authors,
  // abstract,
  link,
  cite,
  github,
  website,
  event,
}: ArticleProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="col-span-1 flex flex-col border p-4 bg-gray-800 p-1 m-3 max-h-100 min-h-100">
      <h2 className="text-white text-xl">{title}</h2>
      <p className="text-gray-400 text-sm">{authors}</p>

      <div className="flex-1 flex items-center justify-center mt-2 overflow-hidden">
        <img src={image} className="max-h-full max-w-full object-contain" />
      </div>

      <div className="text-white mt-2 text-center">
        {link && (
          <a href={link} target="_blank" className="hover:text-gray-400">
            <PictureAsPdfIcon className="text-red-400" />{' '}
            <span className="underline">{t('article.article')}</span>
          </a>
        )}
        {link && cite && ' - '}
        {cite && (
          <a href={cite} target="_blank" className="hover:text-gray-400">
            <DataObjectIcon /> <span className="underline">{t('article.cite')}</span>
          </a>
        )}
        {(link || cite) && event && ' - '}
        {event && (
          <a href={event} target="_blank" className="hover:text-gray-400">
            <CalendarMonthIcon /> <span className="underline">{t('article.event')}</span>
          </a>
        )}
        {(link || cite || event) && github && ' - '}
        {github && (
          <a href={github} target="_blank" className="hover:text-gray-400">
            <i className="devicon-github-original align-middle py-2 text-2xl"></i>{' '}
            <span className="underline">{t('article.github')}</span>
          </a>
        )}
        {(link || cite || event || github) && website && ' - '}
        {website && (
          <a href={website} target="_blank" className="hover:text-gray-400">
            <LanguageIcon /> <span className="underline">{t('article.website')}</span>
          </a>
        )}
      </div>
    </div>
  );
}
