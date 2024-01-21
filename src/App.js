
import './App.css';
import './media.css';
import Navigation from './Navigation';

import Mainhome from './Mainhome';
import About from './About';
import Projects from './Projects';
import Beintouch from './Beintouch';



const App  = () => {
  return (
    <section>
    <Navigation/>
    <Mainhome/>
    <About/>
    <Projects/>
    <Beintouch/>
    
    
    </section>
  )
}

export default App;
