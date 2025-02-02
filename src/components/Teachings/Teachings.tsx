import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import Course from './Course';

export default function Teachings(): JSX.Element {
  return (
    <div id="teachings" className="pt-16 pb-20">
      <div className="relative w-full bg-black opacity-100">
        <img
          src="teachings/qd-bg.jpg"
          className="opacity-60 w-full h-[calc(100vh-4rem)] object-cover"
        />
        <div className="absolute inset-0">
          <div className="mt-5 ml-[20vw]">
            <h2 className="text-6xl text-white underline underline-offset-15">Teachings</h2>
            <div className="grid grid-cols-6">
              <div className="col-span-2">
                <img src="teachings/qd-logo.png" className="w-100 mt-15" />
              </div>
              <div className="col-span-3 mt-18 ml-5">
                <Course
                  name="Quality Development 2023/2024"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2023"
                />
                <Course
                  name="Quality Development 2022/2023"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2022"
                  top={true}
                />
                <Course
                  name="Quality Development 2021/2022"
                  link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project"
                  top={true}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-white text-2xl mx-auto max-w-300">
            <span>
              <a
                href="https://github.com/UNICT-Quality-Development/"
                target="_blank"
                className="underline hover:text-gray-400"
              >
                <GitHubIcon sx={{ fontSize: 50 }} className="bg-black" /> GitHub Organization
              </a>
            </span>{' '}
            -{' '}
            <span>
              <a
                href="https://slides.com/d/kr7YIK0/live"
                target="_blank"
                className="underline hover:text-gray-400"
              >
                <DescriptionIcon
                  sx={{ fontSize: 50 }}
                  className="drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                />{' '}
                Slides
              </a>
            </span>{' '}
            -{' '}
            <span>
              <a
                href="https://unict-quality-development.github.io/git-catalogue/#/"
                target="_blank"
                className="underline hover:text-gray-400"
              >
                <CodeIcon
                  sx={{ fontSize: 50 }}
                  className="drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                />
                Students Projects
              </a>
            </span>
          </div>

          <div className="ml-[20vw]">
            <div className="bg-gray-800 max-w-300 p-10 mt-10 opacity-80">
              <p className="text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] text-2xl">
                The course covers topics such as UNIX Shell usage, version control with Git and
                GitHub workflows, open-source community engagement, Python programming, unit
                testing, code quality principles (ex. SOLID), and Continuous Integration/Continuous
                Deployment (CI/CD) tools.
              </p>

              <div className="mt-5 text-center flex justify-center items-center gap-10">
                <img className="h-16" src="teachings/terminal.png" />
                <img className="h-16" src="teachings/git.png" />
                <img className="h-16" src="teachings/GitHub.png" />
                <img className="h-16" src="teachings/opensource.png" />
                <img className="h-16" src="teachings/CI-CD.png" />
                <img className="h-16" src="teachings/python.png" />
                <img className="h-16" src="teachings/unit-testing.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
