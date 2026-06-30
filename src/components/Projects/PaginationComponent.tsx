import { useState } from 'react';
import Select, {
  components,
  MultiValue,
  OptionProps,
  SingleValue,
  SingleValueProps,
} from 'react-select';
import { useTranslation } from '../../i18n/context';
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

  const buttonsClasses = 'px-3 py-1 rounded text-base md:text-2xl text-white';
  const disableClasses = 'bg-gray-400 cursor-not-allowed';
  const enableClasses =
    'bg-gray-800 text-white hover:bg-gray-400 hover:cursor-pointer border-1 border-gray-200';
  const sharedNavButtonClasses = `my-1 mr-auto ml-5 ${buttonsClasses}`;

  const controls = (
    <>
      <div className="col-span-1 md:ml-[6vw] mx-auto">
        <div className="mx-auto items-center md:block">
          <button
            className={`${sharedNavButtonClasses} ${currentFilter === Filter.ALL ? disableClasses : enableClasses}`}
            onClick={() => setCurrentFilter(Filter.ALL)}
          >
            {t('projects.filter.all')}
          </button>
          <button
            className={`${sharedNavButtonClasses} ${currentFilter === Filter.WORK ? disableClasses : enableClasses}`}
            onClick={() => setCurrentFilter(Filter.WORK)}
          >
            {t('projects.filter.work')}
          </button>
          <button
            className={`${sharedNavButtonClasses} ${currentFilter === Filter.OPENSOURCE ? disableClasses : enableClasses}`}
            onClick={() => setCurrentFilter(Filter.OPENSOURCE)}
          >
            {t('projects.filter.opensource')}
          </button>
        </div>
      </div>

      <div className="col-span-1 mx-auto my-2">
        <div className="min-w-60 text-left mx-5 md:mx-5 lg:mx-0">
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
      </div>
    </>
  );

  return (
    <Pagination
      items={filteredItems}
      itemsPerPage={itemsPerPage}
      controls={controls}
      resetKey={`${currentFilter}-${selectedOption?.value ?? ''}`}
    >
      {(currentItems) => (
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
      )}
    </Pagination>
  );
};

export default PaginationComponent;
