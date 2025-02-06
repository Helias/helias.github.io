import { MissingDevIconsMap } from './MissingDevIcons/IconList';

export function getIcon(
  skill: string,
  margin = true,
  classNames: string = '',
  standardClassnames: string = '',
): JSX.Element {
  if (Object.keys(MissingDevIconsMap()).includes(skill)) {
    return (
      <span className={`${margin ? 'mx-5' : ''}`}>{MissingDevIconsMap(classNames)[skill]}</span>
    );
  }

  if (skill === 'electron') {
    return (
      <i
        className={`devicon-electron-original colored ${margin && 'mx-3'} ${standardClassnames}`}
      ></i>
    );
  }

  if (skill === 'nodejs') {
    return (
      <i
        className={`devicon-nodejs-plain-wordmark colored ${margin && 'mx-3'} ${standardClassnames}`}
      ></i>
    );
  }

  if (skill === 'threejs') {
    return (
      <i
        className={`devicon-threejs-original-wordmark colored ${margin && 'mx-3'} ${standardClassnames}`}
      ></i>
    );
  }

  if (skill === 'express') {
    return (
      <i
        className={`devicon-express-original colored ${margin && 'mx-3'} ${standardClassnames}`}
      ></i>
    );
  }

  return (
    <i className={`devicon-${skill}-plain colored ${margin && 'mx-3'} ${standardClassnames}`}></i>
  );
}
