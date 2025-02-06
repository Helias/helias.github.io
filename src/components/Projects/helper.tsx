import { MissingDevIconsMap } from './MissingDevIcons/IconList';

export function getIcon(
  skill: string,
  margin = true,
  classNames: string = '',
  standardClassnames: string = '',
): JSX.Element {
  return (
    <>
      {Object.keys(MissingDevIconsMap()).includes(skill) ? (
        <span className={`${margin ? 'mx-5' : ''}`}>{MissingDevIconsMap(classNames)[skill]}</span>
      ) : (
        <i
          className={`devicon-${skill}-plain colored ${margin && 'mx-3'} ${standardClassnames}`}
        ></i>
      )}
    </>
  );
}
