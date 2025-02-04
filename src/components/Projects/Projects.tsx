import Project from './Project';
import { ProjectList } from './ProjectList';

export default function Projects(): JSX.Element {
  return (
    <div id="projects">
      <div className="w-full">
        <div className="ml-[5vw] pt-20">
          <h2 className="text-6xl mt-20 text-gray-600 underline underline-offset-15">
            Skills & Projects
          </h2>
        </div>
      </div>

      <div className="mt-5 ml-[2vw] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {ProjectList.map(({ prefix, title, description, image, skills, demo, website, date }) => (
            <Project
              prefix={prefix}
              title={title}
              description={description}
              image={image}
              skills={skills}
              demo={demo}
              website={website}
              date={date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
