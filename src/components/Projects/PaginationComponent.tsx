import { useState } from 'react';
import Project, { ProjectProps } from './Project';

const PaginationComponent = ({
  items,
  itemsPerPage = 6,
}: {
  items: ProjectProps[];
  itemsPerPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const buttonsClasses = 'px-3 py-1 rounded text-2xl text-white';
  const disableClasses = 'bg-gray-200 cursor-not-allowed';
  const enableClasses = 'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer';

  return (
    <div>
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          className={`${buttonsClasses} ${currentPage === 1 ? disableClasses : enableClasses}`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${buttonsClasses} ${
              currentPage === index + 1 ? disableClasses : enableClasses
            }`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`${buttonsClasses} ${
            currentPage === totalPages ? disableClasses : enableClasses
          }`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="ml-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {currentItems.map(
            ({ prefix, title, description, image, skills, demo, website, date, customClass }) => (
              <Project
                prefix={prefix}
                title={title}
                description={description}
                image={image}
                skills={skills}
                demo={demo}
                website={website}
                date={date}
                customClass={customClass}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
