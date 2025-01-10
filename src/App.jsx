import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contace";


export default function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience/>
      < Contact/>
      
    </div>
  )
}