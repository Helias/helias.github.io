import LanguageIcon from '@mui/icons-material/Language';
import { getIcon } from './helper';

export interface ProjectProps {
  image: string;
  prefix?: string;
  title: string;
  description?: string;
  skills: string[];
  github?: string;
  demo?: string | string[];
  website?: string;
  date?: string;
  customClass?: string;
  menuOpen?: boolean;
  multiplier?: number;
}

export default function Project({
  prefix,
  image,
  skills,
  title,
  // description,
  github,
  demo,
  website,
  date,
  customClass = 'bg-top-center',
  menuOpen,
}: ProjectProps): JSX.Element {
  const animationClasses =
    'opacity-0 group-active:opacity-100  group-focus:opacity-100 group-hover:opacity-100 transition-all duration-500 ';
  const bgCover = !customClass.includes('no-bg-cover') && 'bg-cover';

  const sharedButtonsClasses =
    'hover:text-gray-400 px-3 py-1 text-base text-white bg-gray-800 hover:cursor-pointer border-1 border-gray-200 pb-2';

  return (
    <div
      className={`col-span-1 flex flex-col border border-gray-800 min-h-100 group ${bgCover} ${customClass}`}
      style={{ backgroundImage: `url(${image})`, zIndex: menuOpen ? '-1' : '1' }}
    >
      <div className={`h-16 bg-gray-800 flex items-center justify-center p-2 ${animationClasses}`}>
        <h2 className="text-lg text-center text-white my-auto">
          <strong className="text-red-400">{prefix}</strong> {title}
        </h2>
      </div>

      <div className={`mt-auto bg-white ${animationClasses}`}>
        {date && (
          <div
            className={`h-16 bg-gray-800 flex items-center justify-center p-2 ${animationClasses}`}
          >
            <h2 className="text-lg text-centermy-auto">
              <strong className="text-white">{date}</strong>
            </h2>
          </div>
        )}

        {skills?.length && (
          <div className="text-center pt-2 border-t-1 border-gray-800 text-2xl">
            {skills
              // .sort()
              .map((skill) => getIcon(skill, true, 'inline-block w-8 h-8'))}
          </div>
        )}

        {(github || demo || website) && (
          <div className="text-center mt-2 mb-3">
            {github && (
              <a href={github} target="_blank" className={`mx-5 ${sharedButtonsClasses}`}>
                <i className="devicon-github-original align-middle mr-2 py-2 text-2xl"></i>-{' '}
                <span className="underline">github</span>
              </a>
            )}
            {demo && !Array.isArray(demo) && (
              <a href={demo} target="_blank" className={`mx-5 ${sharedButtonsClasses}`}>
                <LanguageIcon /> <span className="underline">demo</span>
              </a>
            )}
            {demo && Array.isArray(demo) && (
              <span className="mx-3">
                <LanguageIcon /> demo:
                {demo.map((demoLink, index) => (
                  <a href={demoLink} target="_blank" className={`mx-1 ${sharedButtonsClasses}`}>
                    #{index + 1}
                  </a>
                ))}
              </span>
            )}

            {website && (
              <a href={website} target="_blank" className={`mx-5 ${sharedButtonsClasses}`}>
                <LanguageIcon /> <span className="underline">website</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
