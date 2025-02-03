import './App.css';
import About from './components/About/About';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Opensource from './components/Opensource/Opensource';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import Teachings from './components/Teachings/Teachings';

function App(): JSX.Element {
  return (
    <>
      <div id="home">
        <Navbar />
        <Home />
        <About />
        <hr />
        <Projects />
        <hr />
        <Opensource />
        <Teachings />
        <Publications />
        <Events />
        <Footer />
      </div>
    </>
  );
}

export default App;
