import TypedText from './Typed-text';

export default function Home(): JSX.Element {
  return (
    <div id="home" className="relative w-full bg-black opacity-100">
      <img src="Home.jpg" className="opacity-100 w-full h-[calc(100vh-4rem)] object-cover" />
      <div className="absolute inset-0">
        <div className="mt-[40vh] ml-[20vw] absolute">
          <h1 className="text-6xl ml-45 mt-10 font-bold text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]">
            Stefano Borzì
          </h1>
          <p className="text-2xl text-white font-bold mt-7 ml-45 drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]">
            I am <TypedText />
          </p>
        </div>
      </div>
    </div>
  );
}
