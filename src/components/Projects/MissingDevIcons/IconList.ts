import { ReactNode } from 'react';
import {
  AngularIcon,
  JenkinsIcon,
  NxIcon,
  OptimizelyIcon,
  PytestIcon,
  PythonIcon,
  TelegramIcon,
} from './MissingIcons';

export const MissingDevIconsMap: (classNames?: string) => { [key: string]: ReactNode } = (
  classNames = '',
) => ({
  angular: AngularIcon(classNames),
  nx: NxIcon(classNames),
  jenkins: JenkinsIcon(classNames),
  optimizely: OptimizelyIcon(classNames),
  python: PythonIcon(classNames),
  pytest: PytestIcon(classNames),
  telegram: TelegramIcon(classNames),
});
