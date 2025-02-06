import { ReactNode } from 'react';
import {
  AngularIcon,
  ElectronIcon,
  JenkinsIcon,
  NodejsIcon,
  NxIcon,
  OptimizelyIcon,
  PythonIcon,
  TelegramIcon,
} from './MissingIcons';

export const MissingDevIconsMap: (classNames?: string) => { [key: string]: ReactNode } = (
  classNames = '',
) => ({
  angular: AngularIcon(classNames),
  electron: ElectronIcon(classNames),
  nodejs: NodejsIcon(classNames),
  nx: NxIcon(classNames),
  jenkins: JenkinsIcon(classNames),
  optimizely: OptimizelyIcon(classNames),
  python: PythonIcon(classNames),
  telegram: TelegramIcon(classNames),
});
