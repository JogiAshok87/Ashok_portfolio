import { BrowserRouter as Router,Routes , Route,} from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Certificates  from './Components/Certificates'
import Contact from './Components/Contact'

import './App.css';

const App = () =>{
    return(
        <Router>
            <Header />
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About"  element={<About />}/>
            <Route path="/Skills"  element={<Skills />}/>
            <Route path="/Services" element={<Services />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Certificates" element={<Certificates />}/>
            <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </Router>
    )
}

export default App;
