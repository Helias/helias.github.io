import Community from './Community';

export default function Opensource(): JSX.Element {
  return (
    <div id="opensource" className="bg-gray-800 text-white pt-1">
      <div className="ml-[5vw] md:ml-[10vw] lg:ml-[10vw] pt-10">
        <h2 className="text-6xl mt-20 underline underline-offset-15">Opensource</h2>
      </div>

      <div className="mx-auto md:w-[80%] lg:w-[75%]">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <p className="max-w-300 mx-auto mt-10 text-center p-5 text-2xl">
              I am deeply passionate about open-source. I've always been involved in various
              open-source communities, and I have founded two of my own:{' '}
              <strong>AzerothCore</strong> and <strong>UNICT Devs</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <Community
            name="AzerothCore"
            image="opensource/azerothcore.png"
            description="AzerothCore is an open-source game server application and framework designed for hosting massively multiplayer online role-playing games (MMORPGs). It is based on the popular MMORPG World of Warcraft (WoW) and seeks to recreate the gameplay experience of the original game from patch 3.3.5a."
            organization="azerothcore"
            repository="azerothcore-wotlk"
            extraClass="md:border-gray-50 md:border-r-1 lg:border-gray-50 lg:border-r-1"
          />

          <Community
            name="UNICT-DEVS"
            image="opensource/unict-devs.png"
            description="UNICT Devs is an open-source community created by students of the Department of Mathematics and Computer Science (DMI) at the University of Catania.It develops and maintains Telegram bots, web apps, and automation tools to enhance university communication, resource sharing, and student services."
            organization="unict-dmi"
            repository="telegram-dmi-bot"
          />
        </div>
      </div>
    </div>
  );
}
