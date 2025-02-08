import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import TelegramIcon from '@mui/icons-material/Telegram';
import Course from './Course';
import CourseLink from './CourseLink';

export default function Teachings(): JSX.Element {
  return (
    <div id="teachings" className="pt-16 bg-gray-800">
      <div className="bg-[url('/teachings/qd-bg.jpg')] bg-fixed bg-center bg-cover">
        <div className="bg-[rgba(0,0,0,0.5)]">
          <div className="w-full">
            <div className="ml-[5vw] md:ml-[10vw] lg:ml-[10vw] pt-10">
              <h2 className="text-6xl text-white underline underline-offset-15 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
                Teachings
              </h2>
            </div>

            <div className="mt-5 md:ml-[20vw]">
              <div className="grid grid-cols-6">
                <div className="col-span-6 md:col-span-2">
                  <img src="teachings/qd-logo.png" className="w-100 mt-15 mx-auto md:mx-none" />
                </div>
                <div className="col-span-6 md:col-span-3 mt-5 flex items-center justify-center">
                  <div className="md:max-h-45 md:min-h-45 my-auto md:ml-5">
                    <div className="h-full bg-gray-800">
                      <Course
                        name="Quality Development 2023/2024"
                        link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2023"
                      />
                      <Course
                        name="Quality Development 2022/2023"
                        link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2022"
                      />
                      <Course
                        name="Quality Development 2021/2022"
                        link="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-0 mt-25 text-center text-white text-2xl mx-auto bg-gray-800 p-5">
              <div className="mx-auto md:w-[80%] lg:w-[75%]">
                <div className="grid grid-cols-4">
                  <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <CourseLink
                      href="https://github.com/UNICT-Quality-Development/"
                      icon={<i className="devicon-github-original align-middle mr-2 text-5xl"></i>}
                      text="GitHub Organization"
                    />
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <CourseLink
                      href="https://slides.com/stefanoborzi/code"
                      icon={<DescriptionIcon sx={{ fontSize: 50 }} />}
                      text="Slides"
                    />
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <CourseLink
                      href="https://unict-quality-development.github.io/git-catalogue/#/"
                      icon={<CodeIcon sx={{ fontSize: 50 }} />}
                      text="Students Projects"
                    />
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <CourseLink
                      href="https://t.me/unict_qd"
                      icon={<TelegramIcon sx={{ fontSize: 50 }} className="text-sky-500 mx-2" />}
                      text="Telegram"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 mt-30 bg-gray-800">
              <div className="mx-auto md:w-[80%] lg:w-[75%]">
                <p className="text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] text-2xl">
                  The course covers topics such as UNIX Shell usage, version control with Git and
                  GitHub workflows, open-source community engagement, Python programming, unit
                  testing, code quality principles (ex. SOLID), and Continuous
                  Integration/Continuous Deployment (CI/CD) tools.
                </p>

                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 place-items-center">
                  <div className="my-2 col-span-1">
                    <img className="h-16 mx-auto" src="teachings/terminal.png" />
                  </div>
                  <div className="my-2 col-span-1">
                    <img className="h-16 mx-auto" src="teachings/git.png" />
                  </div>
                  <div className="my-2 col-span-1">
                    <img className="h-16 mx-auto" src="teachings/GitHub.png" />
                  </div>
                  <div className="my-2 col-span-1">
                    <img className="h-16 mx-auto" src="teachings/opensource.png" />
                  </div>
                  <div className="my-2 col-span-1">
                    <img className="h-16 mx-auto" src="teachings/CI-CD.png" />
                  </div>
                  <div className="my-2 col-span-1">
                    <img className="h-16 mx-auto" src="teachings/python.png" />
                  </div>
                  <div className="my-2 col-span-2 md:col-span-3 lg:col-span-1">
                    <img className="h-16 mx-auto" src="teachings/unit-testing.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
