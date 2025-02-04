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
    <div className="ml-0 md:ml-[20vw] mt-10">
      <div className="grid grid-cols-12 place-items-center">
        <div className="col-span-12 md:col-span-3 h-75 w-75 flex justify-center items-center border border-gray-200 border-3 p-3 mb-5">
          <img src={image} className="w-75 my-auto" />
        </div>
        <div className="col-span-12 md:col-span-8 ml-0 md:ml-20 w-full">
          <div className="bg-gray-800 p-3 w-full md:max-w-230 md:max-h-400 text-white p-8">
            <h2 className="text-2xl">{title}</h2>
            <p className="text-gray-400">{authors}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 place-items-center">
              {link && (
                <div className="col-span-1">
                  <a href={link} className="hover:text-gray-400 text-2xl" target="_blank">
                    <PictureAsPdfIcon
                      sx={{ fontSize: 30 }}
                      className="text-red-400 hover:text-red-500"
                    />{' '}
                    - <span className="underline">Article</span>
                  </a>
                </div>
              )}
              {cite && (
                <div className="col-span-1">
                  <a href={cite} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                    <DataObjectIcon sx={{ fontSize: 30 }} /> -{' '}
                    <span className="underline">Cite</span>
                  </a>
                </div>
              )}
              {event && (
                <div className="col-span-1">
                  <a href={event} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                    <CalendarMonthIcon sx={{ fontSize: 30 }} /> -{' '}
                    <span className="underline">Event</span>
                  </a>
                </div>
              )}{' '}
              {github && (
                <div className="col-span-1">
                  <a href={github} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                    <GitHubIcon sx={{ fontSize: 30 }} /> - <span className="underline">GitHub</span>
                  </a>
                </div>
              )}
              {website && (
                <div className="col-span-1">
                  <a href={website} className="hover:text-gray-400 text-2xl ml-5" target="_blank">
                    <LanguageIcon sx={{ fontSize: 30 }} /> -{' '}
                    <span className="underline">Website</span>
                  </a>
                </div>
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
