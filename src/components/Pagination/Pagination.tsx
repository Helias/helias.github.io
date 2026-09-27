import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/context';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  controls?: ReactNode;
  resetKey?: unknown;
  className?: string;
  barClassName?: string;
  barContentClassName?: string;
  children: (pageItems: T[]) => ReactNode;
}

const buttonsClasses = 'px-3 py-1 rounded text-base md:text-lg text-white';
const disableClasses = 'bg-gray-400 cursor-not-allowed';
const enableClasses =
  'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer border-1 border-gray-200';

export default function Pagination<T>({
  items,
  itemsPerPage = 6,
  controls,
  resetKey,
  className = '',
  barClassName = '',
  barContentClassName = 'px-4',
  children,
}: PaginationProps<T>): JSX.Element {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [resetKey]);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const page = Math.min(currentPage, totalPages);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (target: number): void => {
    if (target >= 1 && target <= totalPages) {
      setCurrentPage(target);
    }
  };

  const firstVisiblePage = Math.max(1, Math.min(page - 1, totalPages - 2));
  const visiblePages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, index) => firstVisiblePage + index,
  );

  const navButton = (target: number, label: string, ariaLabel: string, disabled: boolean) => (
    <button
      className={`${buttonsClasses} ${disabled ? disableClasses : enableClasses}`}
      onClick={() => goToPage(target)}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );

  return (
    <div className={className}>
      <div className={`${barClassName} sticky top-[50px] bg-gray-800 py-2 z-100`}>
        <div
          className={`${barContentClassName} flex flex-wrap items-center justify-between gap-x-6 gap-y-2`}
        >
          {controls}

          <div className="flex items-center gap-1 mx-auto md:mx-0">
            {navButton(1, '«', t('pagination.first'), page === 1)}
            {navButton(page - 1, '‹', t('pagination.prev'), page === 1)}
            {visiblePages.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`${buttonsClasses} ${page === pageNumber ? disableClasses : enableClasses}`}
                onClick={() => goToPage(pageNumber)}
                aria-current={page === pageNumber ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            ))}
            {navButton(page + 1, '›', t('pagination.next'), page === totalPages)}
            {navButton(totalPages, '»', t('pagination.last'), page === totalPages)}
          </div>
        </div>
      </div>

      {children(currentItems)}
    </div>
  );
}
