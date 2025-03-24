import { getIcon } from './helper';
import PaginationComponent from './PaginationComponent';
import { ProjectList, skillsWeighted } from './ProjectList';

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

      <div className="ml-[5vw] md:ml-[10vw] lg:ml-[10vw] mt-10 text-2xl w-[80vw] text-center">
        I am full-stack developer with a strong focus on front-end development, primarily using
        Angular. My expertise lies in creating dynamic and responsive web applications, leveraging
        TypeScript and modern front-end frameworks. Beyond Angular, I have experience with various
        front-end and back-end technologies. I have also developed several Telegram bots, showcasing
        my ability to create software solutions that enhance user experience. I contribute on
        platforms such as Stack Overflow, always looking to share knowledge and refine my skills.
      </div>

      <div className="ml-[5vw] md:ml-[10vw] lg:ml-[10vw] mt-10 text-center w-[80vw]">
        <p className="text-2xl">
          The following skills are linked to their size based on the quality and quantity of the
          projects listed below (note that the order is randomized with each visit).
        </p>
        <div className="mt-10 text-center">
          {skillsWeighted
            .sort(() => Math.random() - 0.5) // shuffle
            .map(({ skill, weight }) => (
              <span id="single-skill" style={{ fontSize: `${2 + weight / 8}rem` }} className="mr-2">
                <style>{`#single-skill #${skill} { width: ${weight / 4 + 0.5}rem; height: ${weight / 4 + 0.5}rem }`}</style>
                {/* {weight}: */} {getIcon(skill, false, `inline-block mt-0`)}
              </span>
            ))}
        </div>
        <div className="mt-10 text-center">
          <strong>All skills & technologies:</strong> Angular, Typescript, Javascript, RxJS, Redux,
          NGRX, React.js, Next.js, Nx, Cypress, Playwright, Karma, Jasmine, Jest, Webpack, Node.js,
          Nestjs, Expressjs, Three.js, Electron, Websocket, Socketio, PHP, Laravel, Python,
          Selenium, FastAPI, Flask, Pytest, Pytorch, R, C, C++, Java, Web Components, Micro
          Front-end, Microservices, SASS, CSS, TailwindCSS, Bootstrap, Material Design, Apache,
          Nginx, Docker, Linux, OpenWRT, Radius, WordPress, Git, Gitlab, Github, Bitbucket, Jira,
          Scrum, SAFe-Agile, Kanban, A/B testing, SOAP, OAuth, CI/CD, GitHub Actions, Jenkins,
          DevOps, MySQL, SQlite, Lua, Bash, Firebase, Supabase (Realtime, Monitoring), Networking
          (RESTful APIs, JSON, XML), Azure, Accessibility, WCAG, Figma, AdobeAnalytics, LaTeX
        </div>
      </div>

      <PaginationComponent items={ProjectList} />
    </div>
  );
}
