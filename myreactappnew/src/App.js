import "./App.css";
import Home from './Home';
import About from './About'
// import Register from './signup';

import Team from "./Team";

import Contact from "./Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Footer from "./Footer";



function App() {
  return (
    <Router>
    <Routes>
          <Route path='/' element={<Home/>}   />
          <Route path='/About' element={<About/>}   />
          <Route path='/Team' element={<Team/>}   />
          <Route path='/Contact' element={<Contact/>}   />
           <Route path='/Footer' element={<Footer/>}   />

          {/* <Route path='/signup' element={<Register/>}   /> */}
         
          
    </Routes>
</Router>
  );
}

export default App;
