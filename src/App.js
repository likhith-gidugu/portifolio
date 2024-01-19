
import './App.css';
import './media.css';
import Navigation from './Navigation';

import Mainhome from './Mainhome';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';



const App  = () => {
  return (
    <section>
    <Navigation/>
    <Mainhome/>
    <About/>
    <Projects/>
    <Contact/>
    
    
    </section>
  )
}

export default App;
