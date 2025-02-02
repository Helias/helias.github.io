export default function Opensource(): JSX.Element {
  return (
    <div id="opensource">
      <div className="grid grid-cols-12">
        <div className="ml-45 text-center col-span-5">
          <h2 className="text-6xl mt-20 text-gray-600 underline underline-offset-15">Opensource</h2>
        </div>
        <div className="col-span-12">
          <p className="max-w-300 mx-auto mt-10 text-center p-5 text-2xl">
            I am deeply passionate about open-source. I've always been involved in various
            open-source communities, and I have now founded two of my own:{' '}
            <strong>AzerothCore</strong> and <strong>UNICT Devs</strong>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-10 mb-20">
        <div className="text-center col-span-3">
          <div className="bg-gray-800 py-10 border-5 border-white">
            <img src="opensource/azerothcore.png" className="h-75 mt-10 mx-auto" />
            <h2 className="text-6xl text-white mt-10">AzerothCore</h2>
          </div>
          <div>
            <iframe
              className="mt-5 mb-5 mx-auto"
              src="https://ghbtns.com/github-btn.html?user=azerothcore&type=follow&count=true&size=large"
              width="230"
              height="30"
              title="GitHub"
            ></iframe>
            <div className="mx-auto w-130 mb-5">
              <iframe
                className="float-left"
                src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=star&count=true&size=large"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>

              <iframe
                className="float-left"
                src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=watch&count=true&size=large&v=2"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>

              <iframe
                src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=fork&count=true&size=large"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>
            </div>
          </div>
          <div>
            <p className="bg-gray-800 text-white m-2 p-5 text-2xl">
              AzerothCore is an open-source game server application and framework designed for
              hosting massively multiplayer online role-playing games (MMORPGs). It is based on the
              popular MMORPG World of Warcraft (WoW) and seeks to recreate the gameplay experience
              of the original game from patch 3.3.5a.
            </p>
          </div>
        </div>
        <div className="col-span-3 text-center">
          <div className="bg-gray-800 py-10 border-5 border-white">
            <img src="opensource/unict-devs.png" className="h-75 mt-10 mx-auto" />
            <h2 className="text-6xl text-white mt-10">UNICT-DEVS</h2>
          </div>
          <div>
            <iframe
              className="mt-5 mb-5 mx-auto"
              src="https://ghbtns.com/github-btn.html?user=unict-dmi&type=follow&count=true&size=large"
              width="230"
              height="30"
              title="GitHub"
            ></iframe>
            <div className="mx-auto w-130 mb-5">
              <iframe
                className="float-left"
                src="https://ghbtns.com/github-btn.html?user=unict-dmi&repo=telegram-dmi-bot&type=star&count=true&size=large"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>

              <iframe
                className="float-left"
                src="https://ghbtns.com/github-btn.html?user=unict-dmi&repo=telegram-dmi-bot&type=watch&count=true&size=large&v=2"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>

              <iframe
                src="https://ghbtns.com/github-btn.html?user=unict-dmi&repo=telegram-dmi-bot&type=fork&count=true&size=large"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>
            </div>
          </div>
          <div>
            <p className="bg-gray-800 text-white m-2 p-5 text-2xl">
              UNICT Devs is an open-source community created by students of the Department of
              Mathematics and Computer Science (DMI) at the University of Catania.It develops and
              maintains Telegram bots, web apps, and automation tools to enhance university
              communication, resource sharing, and student services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
