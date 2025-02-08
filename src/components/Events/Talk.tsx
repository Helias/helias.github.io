import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import MicIcon from '@mui/icons-material/Mic';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

interface TalkProps {
  image: string;
  title: string;
  prefix: string;
  slides?: string;
  video?: string;
  interview?: string;
  event?: string;
  github?: string;
  website?: string;
}

export default function Talk({
  image,
  prefix,
  title,
  slides,
  video,
  interview,
  event,
  github,
  website,
}: TalkProps): JSX.Element {
  return (
    <div className="col-span-1 flex flex-col border p-4 bg-gray-800 p-1 m-3 max-h-100 min-h-100">
      <h2 className="text-white text-xl">
        <strong className="text-red-300">{prefix}</strong> {title}
      </h2>

      <img src={image} className="mt-2 flex-1 object-contain w-full h-10" />

      <div className="text-white mt-2 text-center">
        {slides && (
          <a href={slides} target="_blank" className="hover:text-gray-400">
            <DescriptionIcon className="align-top" />
            <span className="underline">slides</span>
          </a>
        )}
        {slides && video && ' - '}
        {video && (
          <a href={video} target="_blank" className="hover:text-gray-400">
            <SmartDisplayIcon className="text-red-600" /> <span className="underline">video</span>
          </a>
        )}
        {slides && interview && ' - '}
        {interview && (
          <a href={interview} target="_blank" className="hover:text-gray-400">
            <MicIcon className="text-gray-500" /> <span className="underline">interview </span>
          </a>
        )}
        {slides && event && ' - '}
        {event && (
          <a href={event} target="_blank" className="hover:text-gray-400">
            <CalendarMonthIcon /> <span className="underline">event</span>
          </a>
        )}
        {(event || slides) && github && ' - '}
        {github && (
          <a href={github} target="_blank" className="hover:text-gray-400">
            <i className="devicon-github-original align-middle py-2 text-2xl"></i>-{' '}
            <span className="underline">github</span>
          </a>
        )}
        {(github || event) && website && ' - '}
        {website && (
          <a href={website} target="_blank" className="hover:text-gray-400">
            <LanguageIcon /> <span className="underline">website</span>
          </a>
        )}
      </div>
    </div>
  );
}
