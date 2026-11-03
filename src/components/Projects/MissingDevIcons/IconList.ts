import { ReactNode } from 'react';
import {
  AngularIcon,
  ClaudeIcon,
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
  'agentic-ai': ClaudeIcon(classNames),
  nx: NxIcon(classNames),
  jenkins: JenkinsIcon(classNames),
  optimizely: OptimizelyIcon(classNames),
  python: PythonIcon(classNames),
  pytest: PytestIcon(classNames),
  scikitlearn: ScikitLearnIcon(classNames),
  telegram: TelegramIcon(classNames),
});
