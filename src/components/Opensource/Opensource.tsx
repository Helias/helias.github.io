export default function Opensource(): JSX.Element {
  return (
    <div id="opensource">
      <div className="grid grid-cols-12">
        <div className="ml-45 text-center col-span-5">
          <h2 className="text-6xl mt-10 text-gray-600 underline underline-offset-15">Opensource</h2>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-15 mb-20">
        <div className="text-center col-span-3">
          <div className="bg-gray-800 py-10 border-5 border-white">
            <img src="azerothcore.png" className="h-75 mt-10 mx-auto" />
            <h2 className="text-6xl text-white mt-10">AzerothCore</h2>
          </div>
        </div>
        <div className="col-span-3 text-center">
          <div className="bg-gray-800 py-10 border-5 border-white">
            <img src="unict-devs.png" className="h-75 mt-10 mx-auto" />
            <h2 className="text-6xl text-white mt-10">UNICT-DEVS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
