import './App.scss';
import MyNavbar from './components/MyNavbar';
import SocialLinks from './components/SocialLinks';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='app'>
      <MyNavbar />
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="main scrollspy-example" tab-index="0">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
