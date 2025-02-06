import { useState } from 'react';
import Select, { components } from 'react-select';
import { getIcon } from './helper';
import Project, { ProjectProps } from './Project';
import { allSkills } from './ProjectList';

const enum Filter {
  ALL = 'all',
  WORK = 'work',
  OPENSOURCE = 'opensource',
}

const { Option } = components;
const IconOption = (props: { data?: { value?: string; label?: string } }) => (
  <Option {...props} className="text-left w-8">
    {getIcon(props?.data?.value as string, false, 'inline-block w-5 h-5', 'align-middle')}{' '}
    {props?.data?.label}
  </Option>
);

const CustomSingleValue = (props) => {
  return (
    <>
      <div className="absolute ml-5">
        {getIcon(props?.data?.value as string, false, 'inline-block w-5 h-5 mt-0', 'align-middle')}{' '}
        {props?.data?.label}
      </div>
    </>
  );
};

const PaginationComponent = ({
  items,
  itemsPerPage = 6,
}: {
  items: ProjectProps[];
  itemsPerPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState(Filter.ALL);
  const [selectedOption, setSelectedOption] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const options = [...allSkills].map((skill: string) => ({ value: skill, label: skill }));

  const filteredItems = items
    .filter((i) => currentFilter === Filter.ALL || i.prefix?.toLowerCase().includes(currentFilter))
    .filter((item) => !selectedOption || item.skills.includes(selectedOption));

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const updateFilter = (filter: Filter): void => {
    setCurrentFilter(filter);
    setCurrentPage(1);
  };

  const updateFilterSkills = (skill: { label: string; value: string }): void => {
    setSelectedOption(skill?.value);
    setCurrentPage(1);
  };

  const buttonsClasses = 'px-3 py-1 rounded text-2xl text-white';
  const disableClasses = 'bg-gray-400 cursor-not-allowed';
  const enableClasses =
    'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer border-1 border-gray-200';
  const sharedNavButtonClasses = `mr-auto ml-5 ${buttonsClasses}`;

  return (
    <div className="relative">
      <div className="flex mt-20 my-8 sticky top-12 bg-gray-800 p-2 z-100">
        <div className="ml-0 md:ml-[6vw]">
          <button
            className={`${sharedNavButtonClasses} ${currentFilter === Filter.ALL ? disableClasses : enableClasses}`}
            onClick={() => updateFilter(Filter.ALL)}
          >
            All
          </button>
          <button
            className={`${sharedNavButtonClasses} ${currentFilter === Filter.WORK ? disableClasses : enableClasses}`}
            onClick={() => updateFilter(Filter.WORK)}
          >
            👔 Work
          </button>
          <button
            className={`${sharedNavButtonClasses} ${currentFilter === Filter.OPENSOURCE ? disableClasses : enableClasses}`}
            onClick={() => updateFilter(Filter.OPENSOURCE)}
          >
            🤝 Opensource
          </button>
        </div>

        <div className="mx-auto">
          <div className="min-w-60 text-left">
            <Select
              placeholder="Filter by technology"
              menuIsOpen={menuOpen}
              onMenuOpen={() => setMenuOpen(true)}
              onMenuClose={() => setMenuOpen(false)}
              defaultValue={selectedOption}
              onChange={updateFilterSkills}
              options={options}
              components={{ Option: IconOption, SingleValue: CustomSingleValue }}
              isClearable
            />
          </div>
        </div>

        <div className="mx-auto space-x-2">
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
                  menuOpen={menuOpen}
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
