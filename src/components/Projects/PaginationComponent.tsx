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
  const disableClasses = 'bg-gray-400 cursor-not-allowed';
  const enableClasses =
    'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer border-1 border-gray-200';

  return (
    <div>
      <div className="flex justify-center items-center space-x-2 mt-20 my-8 sticky top-12 bg-gray-800 p-2">
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

      <div className="w-full">
        <div className="mx-auto md:w-[95%] lg:w-[85%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 mx-auto">
            {currentItems.map(
              ({
                prefix,
                title,
                description,
                image,
                skills,
                demo,
                website,
                date,
                github,
                customClass,
              }) => (
                <Project
                  prefix={prefix}
                  title={title}
                  description={description}
                  image={image}
                  skills={skills}
                  demo={demo}
                  website={website}
                  github={github}
                  date={date}
                  customClass={customClass}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
