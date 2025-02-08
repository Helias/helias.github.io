import { ReactNode } from 'react';
import {
  AngularIcon,
  JenkinsIcon,
  NxIcon,
  OptimizelyIcon,
  PytestIcon,
  PythonIcon,
  ScikitLearnIcon,
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
  scikitlearn: ScikitLearnIcon(classNames),
  telegram: TelegramIcon(classNames),
});
