import PaginationComponent from './PaginationComponent';
import { ProjectList } from './ProjectList';

export default function ProjectsPage(): JSX.Element {
  return (
    <div id="projects">
      <div className="w-full">
        <div className="ml-[5vw] md:ml-[10vw] lg:ml-[10vw] pt-20">
          <h2 className="text-6xl mt-20 text-gray-600 underline underline-offset-15">
            Skills & Projects
          </h2>
        </div>
      </div>

      <PaginationComponent items={ProjectList} />
    </div>
  );
}
