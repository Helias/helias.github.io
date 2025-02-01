export default function Teachings(): JSX.Element {
  return (
    <div id="teachings" className="relative w-full bg-black opacity-100">
      <img src="qd-bg.jpg" className="opacity-60 w-full h-[calc(100vh-4rem)] object-cover" />
      <div className="absolute inset-0">
        <div className="mt-[10vh] ml-[20vw] absolute">
          <h2 className="text-6xl text-white underline underline-offset-15">Teachings</h2>
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <img src="qd-logo.png" className="w-100 mt-15" />
            </div>
            <div className="col-span-3 mt-15 ml-5">
              <p className="text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] text-2xl bg-gray-800 p-3 opacity-80">
                - Quality Development 2023/2024 - 🎓{' '}
                <a
                  href="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2023"
                  target="_blank"
                  className="underline"
                >
                  program
                </a>{' '}
                - 📃{' '}
                <a href="https://slides.com/d/kr7YIK0/live" target="_blank" className="underline">
                  slides
                </a>
              </p>
              <p className="text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] text-2xl mt-15 bg-gray-800 p-3 opacity-80">
                - Quality Development 2022/2023 - 🎓{' '}
                <a
                  href="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project-2022 "
                  target="_blank"
                  className="underline"
                >
                  program
                </a>{' '}
                - 📃{' '}
                <a href="https://slides.com/d/kr7YIK0/live" target="_blank" className="underline">
                  slides
                </a>
              </p>
              <p className="text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] text-2xl mt-15 bg-gray-800 p-3 opacity-80">
                - Quality Development 2021/2022 - 🎓{' '}
                <a
                  href="https://web.dmi.unict.it/it/corsi/l-31/quality-development-how-properly-write-your-project"
                  target="_blank"
                  className="underline"
                >
                  program
                </a>{' '}
                - 📃{' '}
                <a href="https://slides.com/d/kr7YIK0/live" target="_blank" className="underline">
                  slides
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gray-800 w-300 p-10 mt-10 opacity-80">
            <p className="text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] text-2xl">
              The course covers topics such as UNIX Shell usage, version control with Git and GitHub
              workflows, open-source community engagement, Python programming, unit testing, code
              quality principles (ex. SOLID), and Continuous Integration/Continuous Deployment
              (CI/CD) tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
