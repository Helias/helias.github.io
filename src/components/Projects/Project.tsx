import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { MissingDevIconsMap } from './MissingDevIcons/IconList';

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
}: ProjectProps): JSX.Element {
  return (
    <div className={`col-span-1 flex flex-col border border-3 m-3 min-h-100`}>
      <div className="h-16 bg-gray-800 flex items-center justify-center p-2">
        <h2 className="text-lg text-center text-white my-auto">
          <strong className="text-red-400">{prefix}</strong> {title}
        </h2>
      </div>

      <div
        className={`flex flex-col w-full h-full bg-cover ${customClass}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {date && (
        <div className="h-16 bg-gray-800 flex items-center justify-center p-2">
          <h2 className="text-lg text-centermy-auto">
            <strong className="text-white">{date}</strong>
          </h2>
        </div>
      )}

      {skills?.length && (
        <div className="text-center text-2xl pt-2 border-t-1 border-gray-800">
          {skills
            // .sort()
            .map((skill) =>
              Object.keys(MissingDevIconsMap).includes(skill) ? (
                MissingDevIconsMap[skill]
              ) : (
                <i className={`devicon-${skill}-plain colored mx-3`}></i>
              ),
            )}
        </div>
      )}

      {(github || demo || website) && (
        <div className="mt-auto ">
          <div className="text-center mt-2">
            {github && (
              <a href={github} target="_blank" className="hover:text-gray-400 mx-5">
                <GitHubIcon /> <span className="underline">github</span>
              </a>
            )}
            {demo && !Array.isArray(demo) && (
              <a href={demo} target="_blank" className="hover:text-gray-400 mx-5">
                <LanguageIcon /> <span className="underline">demo</span>
              </a>
            )}
            {demo && Array.isArray(demo) && (
              <span className="mx-3">
                <LanguageIcon /> demo: [
                {demo.map((demoLink, index) => (
                  <a href={demoLink} target="_blank" className="hover:text-gray-400 mx-1">
                    #{index + 1}
                  </a>
                ))}
                ]
              </span>
            )}

            {website && (
              <a href={website} target="_blank" className="hover:text-gray-400 mx-5">
                <LanguageIcon /> <span className="underline">website</span>
              </a>
            )}
          </div>

          {/* <div className="text-center my-5 bg-gray-800 text-white">{description}</div> */}
        </div>
      )}
    </div>
  );
}
