import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { MissingDevIconsMap } from './MissingDevIcons/IconList';

export interface ProjectProps {
  image: string;
  prefix?: string;
  title: string;
  description: string;
  skills: string[];
  github?: string;
  demo?: string;
  website?: string;
  date?: string;
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
}: ProjectProps): JSX.Element {
  return (
    <div className={`col-span-1 flex flex-col border m-3 min-h-95`}>
      <div className="h-16 bg-gray-800 flex items-center justify-center p-2">
        <h2 className="text-lg text-center text-white my-auto">
          <strong className="text-gray-400">{prefix}</strong> {title}
        </h2>
      </div>

      <div
        className="flex flex-col w-full h-full bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="mt-auto bg-white">
          <div className="text-center mt-2">
            {github && (
              <a href={github} target="_blank" className="hover:text-gray-400">
                <GitHubIcon /> <span className="underline">github</span>
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" className="hover:text-gray-400">
                <LanguageIcon /> <span className="underline">demo</span>
              </a>
            )}
            {website && (
              <a href={website} target="_blank" className="hover:text-gray-400">
                <LanguageIcon /> <span className="underline">website</span>
              </a>
            )}{' '}
          </div>

          {/* <div className="text-center my-5 bg-gray-800 text-white">{description}</div> */}

          {skills?.length && (
            <div className="text-center text-2xl mt-5">
              {skills
                // .sort()
                .map((skill) =>
                  Object.keys(MissingDevIconsMap).includes(skill) ? (
                    MissingDevIconsMap[skill]
                  ) : (
                    <i className={`devicon-${skill}-plain colored mx-5`}></i>
                  ),
                )}
            </div>
          )}
        </div>
      </div>

      <div className="h-16 bg-gray-800 flex items-center justify-center p-2">
        <h2 className="text-lg text-centermy-auto">
          <strong className="text-white">{date}</strong>
        </h2>
      </div>
    </div>
  );
}
