import { ReactNode } from 'react';
import { AngularIcon, NodejsIcon, OptimizelyIcon, PythonIcon, TelegramIcon } from './MissingIcons';

export const MissingDevIconsMap: { [key: string]: ReactNode } = {
  angular: AngularIcon,
  nodejs: NodejsIcon,
  optimizely: OptimizelyIcon,
  python: PythonIcon,
  telegram: TelegramIcon,
};
