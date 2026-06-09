import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import Highlights from "./components/Highlights";


function App() {
  return (
    <>
     <BackgroundEffects />
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;

// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// // import Projects from "./components/Projects";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       {/* <Projects/> */}
      
//     </>
//   );
// }

// export default App;