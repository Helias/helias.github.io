import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
