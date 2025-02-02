import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import MicIcon from '@mui/icons-material/Mic';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

interface TalkProps {
  image: string;
  title: string;
  prefix: string;
  slides: string;
  video?: string;
  interview?: string;
  event: string;
}

export default function Talk({
  image,
  prefix,
  title,
  slides,
  video,
  interview,
  event,
}: TalkProps): JSX.Element {
  return (
    <div className="col-span-1 bg-gray-800 p-5 m-10">
      <h2 className="text-white text-xl">
        <span className="text-gray-500">{prefix}</span> {title}
      </h2>
      <img src={image} className="w-100 mt-2" />
      <div className="text-white mt-2">
        {slides && (
          <a href={slides} target="_blank" className="hover:text-gray-400">
            <DescriptionIcon className="align-top" />
            <span className="underline">slides</span>
          </a>
        )}{' '}
        -{'  '}
        <a href={video} target="_blank" className="underline hover:text-gray-400">
          <SmartDisplayIcon className="text-red-600" /> video
        </a>{' '}
        -{'  '}
        <a href={interview} target="_blank" className="hover:text-gray-400">
          <MicIcon className="text-gray-500" /> <span className="underline">interview </span>
        </a>
        -{' '}
        <a href={event} target="_blank" className="hover:text-gray-400">
          <CalendarMonthIcon /> <span className="underline">event</span>
        </a>
      </div>
    </div>
  );
}
