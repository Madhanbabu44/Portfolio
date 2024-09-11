import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar  />
      <About/>
      <Skills/>
      <Education />
      <Project/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
