import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/context';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  controls?: ReactNode;
  resetKey?: unknown;
  children: (pageItems: T[]) => ReactNode;
}

const buttonsClasses = 'px-3 py-1 rounded text-base md:text-2xl text-white';
const disableClasses = 'bg-gray-400 cursor-not-allowed';
const enableClasses =
  'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer border-1 border-gray-200';

export default function Pagination<T>({
  items,
  itemsPerPage = 6,
  controls,
  resetKey,
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

  return (
    <div>
      <div className="mt-20 my-8 sticky top-12 bg-gray-800 p-2 z-100 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {controls}

        <div className="col-span-1 mx-auto space-x-2 my-2">
          <button
            className={`${buttonsClasses} ${page === 1 ? disableClasses : enableClasses}`}
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            {t('pagination.prev')}
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${buttonsClasses} ${page === index + 1 ? disableClasses : enableClasses}`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`${buttonsClasses} ${page === totalPages ? disableClasses : enableClasses}`}
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            {t('pagination.next')}
          </button>
        </div>
      </div>

      {children(currentItems)}
    </div>
  );
}
