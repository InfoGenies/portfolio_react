import About from "../Components/About";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Journey from "../Components/Journey";
import Projects from "../Components/Projects";
import Services from "../Components/Services";




export default function Home(){
    return (
      <div>
        <Hero/>
        <About/>
        <Journey/>
        <Services/>
        <Projects/>
        <Contact/>
      </div>
    )
  };
  
  