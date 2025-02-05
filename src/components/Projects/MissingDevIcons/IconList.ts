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

export const MissingDevIconsMap: { [key: string]: ReactNode } = {
  angular: AngularIcon,
  electron: ElectronIcon,
  nodejs: NodejsIcon,
  nx: NxIcon,
  jenkins: JenkinsIcon,
  optimizely: OptimizelyIcon,
  python: PythonIcon,
  telegram: TelegramIcon,
};
