import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from '../../i18n/context';
import { LANGUAGE_FLAGS, LANGUAGE_LABELS, LANGUAGES } from '../../i18n/translations';

export default function LanguageSwitcher(): JSX.Element {
  const { language, setLanguage } = useTranslation();

  return (
    <Menu as="div" className="relative">
      <MenuButton
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        aria-label="Change language"
      >
        <LanguageIcon fontSize="small" />
        <span>{LANGUAGE_FLAGS[language]}</span>
        <span className="hidden lg:inline">{LANGUAGE_LABELS[language]}</span>
      </MenuButton>
      <MenuItems className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black/30 focus:outline-hidden">
        {LANGUAGES.map((lang) => (
          <MenuItem key={lang}>
            <button
              type="button"
              onClick={() => setLanguage(lang)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm data-focus:bg-gray-700 ${
                lang === language ? 'font-bold text-white' : 'text-gray-300'
              }`}
            >
              <span>{LANGUAGE_FLAGS[lang]}</span>
              <span>{LANGUAGE_LABELS[lang]}</span>
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
