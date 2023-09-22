import Navbar from './components/navbar/navbar';
import Intro from './components/Intro/Intro';
import Skill from "./components/Skill/Skill"
import About from "./components/about/About"
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
