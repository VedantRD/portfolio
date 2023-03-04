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
    <div className='app' data-bs-spy="scroll" data-bs-target="my-navbar" data-bs-smooth-scroll="true" tab-index="0">
      <MyNavbar />
      <div className="main">
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
