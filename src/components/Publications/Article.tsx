import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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
  abstract,
  link,
  cite,
  github,
  website,
  event,
}: ArticleProps): JSX.Element {
  return (
    <div className="ml-[20vw] mt-10">
      <div className="grid grid-cols-12 place-items-center">
        <div className="col-span-3 h-75 w-75 flex justify-center items-center border border-gray-200 p-3">
          <img src={image} className="w-75 my-auto" />
        </div>
        <div className="col-span-8 ml-5 w-full">
          <div className="bg-gray-800 p-3 w-full max-w-230 max-h-400 text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] p-8">
            <h2 className="text-2xl">{title}</h2>
            <p className="text-gray-400">{authors}</p>
            <div className="mt-4">
              {link && (
                <a href={link} className="hover:text-gray-400 text-2xl" target="_blank">
                  <PictureAsPdfIcon
                    sx={{ fontSize: 50 }}
                    className="text-red-400 hover:text-red-500"
                  />{' '}
                  - <span className="underline">Article</span>
                </a>
              )}
              {cite && (
                <a href={cite} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                  <DataObjectIcon sx={{ fontSize: 50 }} /> - <span className="underline">Cite</span>
                </a>
              )}
              {event && (
                <a href={event} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                  <CalendarMonthIcon sx={{ fontSize: 50 }} /> -{' '}
                  <span className="underline">Event</span>
                </a>
              )}{' '}
              {github && (
                <a href={github} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                  <GitHubIcon sx={{ fontSize: 50 }} /> - <span className="underline">GitHub</span>
                </a>
              )}
              {website && (
                <a href={website} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                  <LanguageIcon sx={{ fontSize: 50 }} /> -{' '}
                  <span className="underline">Website</span>
                </a>
              )}
            </div>
            {abstract && (
              <div className="mt-5">
                <h2 className="text-2xl text-gray-400">Abstract</h2>
                {abstract}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
