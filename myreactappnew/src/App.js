import "./App.css";
import Home from './Home';
import About from './About'
// import Register from './signup';
import Services from "./Services";
import Team from "./Team";

import Contact from "./Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import MyCources from "./MyCources";


function App() {
  return (
    <Router>
    <Routes>
          <Route path='/' element={<Home/>}   />
          <Route path='/About' element={<About/>}   />
          <Route path='/Services' element={<Services/>}   />
          <Route path='/Team' element={<Team/>}   />
          <Route path='/Contact' element={<Contact/>}   />
          <Route path='/MyCources' element={<MyCources/>}   />
          {/* <Route path='/signup' element={<Register/>}   /> */}
         
          
    </Routes>
</Router>
  );
}

export default App;
