import type { Language } from '../../i18n/translations';

// `date` is 'YYYY' or 'YYYY-MM'.
function formatDate(date: string, language: Language): string {
  const [year, month] = date.split('-').map(Number);
  if (!month) {
    return String(year);
  }
  return new Intl.DateTimeFormat(language, { month: 'short', year: 'numeric' }).format(
    new Date(year, month - 1),
  );
}

export function formatPeriod(
  start: string,
  end: string | undefined,
  language: Language,
  presentLabel: string,
): string {
  const endLabel = end ? formatDate(end, language) : presentLabel;
  return `${formatDate(start, language)} – ${endLabel}`;
}
