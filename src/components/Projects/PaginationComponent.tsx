import { useState } from 'react';
import Select, {
  components,
  MultiValue,
  OptionProps,
  SingleValue,
  SingleValueProps,
} from 'react-select';
import { useTranslation } from '../../i18n/context';
import { navbarContainerClasses } from '../layout';
import Pagination from '../Pagination/Pagination';
import { getIcon } from './helper';
import Project, { ProjectProps } from './Project';
import { Filter, OptionType } from './project.model';
import { allSkills } from './ProjectList';

const { Option } = components;

const IconOption = (props: OptionProps<OptionType, boolean>) => (
  <Option {...props} className="text-left w-8">
    {getIcon(props?.data?.value as string, false, 'inline-block w-5 h-5', 'align-middle')}{' '}
    {props?.data?.label}
  </Option>
);

const CustomSingleValue = (props: SingleValueProps<OptionType, boolean>) => {
  return (
    <div className="absolute ml-5">
      {getIcon(props?.data?.value as string, false, 'inline-block w-5 h-5 mt-0', 'align-middle')}{' '}
      {props?.data?.label}
    </div>
  );
};

const PaginationComponent = ({
  items,
  itemsPerPage = 6,
}: {
  items: ProjectProps[];
  itemsPerPage?: number;
}) => {
  const { t } = useTranslation();
  const [currentFilter, setCurrentFilter] = useState(Filter.ALL);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const options: OptionType[] = [...allSkills].map((skill: string) => ({
    value: skill,
    label: skill,
  }));

  const filteredItems = items
    .filter((i) => currentFilter === Filter.ALL || i.prefix?.toLowerCase().includes(currentFilter))
    .filter((item) => !selectedOption || item.skills.includes(selectedOption.value));

  const updateFilterSkills = (newValue: SingleValue<OptionType> | MultiValue<OptionType>): void => {
    if (!Array.isArray(newValue)) {
      setSelectedOption(newValue as OptionType);
    }
  };

  const buttonsClasses = 'px-3 py-1 rounded text-base md:text-lg text-white';
  const disableClasses = 'bg-gray-400 cursor-not-allowed';
  const enableClasses =
    'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer border-1 border-gray-200';

  const filterButton = (filter: Filter, labelKey: string) => (
    <button
      className={`${buttonsClasses} ${currentFilter === filter ? disableClasses : enableClasses}`}
      onClick={() => setCurrentFilter(filter)}
    >
      {t(labelKey)}
    </button>
  );

  const controls = (
    <>
      <h2 className="text-2xl md:text-3xl text-white">{t('projects.title')}</h2>

      <div className="flex flex-wrap items-center gap-2">
        {filterButton(Filter.ALL, 'projects.filter.all')}
        {filterButton(Filter.WORK, 'projects.filter.work')}
        {filterButton(Filter.OPENSOURCE, 'projects.filter.opensource')}
      </div>

      <div className="min-w-60 text-left">
        <Select
          placeholder={t('projects.filterPlaceholder')}
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
    </>
  );

  return (
    <Pagination
      items={filteredItems}
      itemsPerPage={itemsPerPage}
      controls={controls}
      resetKey={`${currentFilter}-${selectedOption?.value ?? ''}`}
      className="flex flex-col lg:min-h-screen pt-[50px]"
      barClassName="mb-4 border-t-2 border-white"
      barContentClassName={navbarContainerClasses}
    >
      {(currentItems) => (
        <div className="w-full flex-1 flex">
          <div className={`${navbarContainerClasses} w-full flex`}>
            {/* two rows of 3 share the viewport height left below the navbar and filter bar */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(18rem,1fr))] gap-4 mb-20 mx-auto">
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
      )}
    </Pagination>
  );
};

export default PaginationComponent;
