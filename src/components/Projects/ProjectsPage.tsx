import PaginationComponent from './PaginationComponent';
import { ProjectList } from './ProjectList';

export default function ProjectsPage(): JSX.Element {
  return (
    <div id="projects">
      <PaginationComponent items={ProjectList} />
    </div>
  );
}
