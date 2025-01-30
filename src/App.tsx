import './App.css';
import Navbar from './components/Navbar/Navbar';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <img src="Home.jpg" className="opacity-70 w-full h-[calc(100vh-4rem)] object-cover" />
        <div className="absolute inset-0 bg-black opacity-40">
          <div className="mt-[30vh]">
            <h2 className="ml-[20vw] text-white font-bold">Stefano Borzì</h2>
            <br />
            <h3 className="ml-[20vw] text-white font-bold">I am a developer</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
