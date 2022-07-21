// import logo from './logo.svg';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Galllery from './Galllery';
import Event from './Event';
import Feedback from './Feedback';
import Contact from './Contact';
import NavBar from './NavBar';
import './Style.css';
// import { NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/event">Event</NavLink>
        <NavLink to="/feedback">Feedbacks</NavLink>
        <NavLink to="/Contact">Contacts</NavLink>
      </nav> */}
      <NavBar/>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/gallery" element={<Galllery></Galllery>}></Route>
        <Route path="/event" element={<Event></Event>}></Route>
        <Route path="/feedback" element={<Feedback></Feedback>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
