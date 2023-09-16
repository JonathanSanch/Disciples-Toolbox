import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../src/components/pages/Home'
import Navbar from './components/Navbar';
import Journal from './components/pages/Journal';
import Footer from './components/Footer';
import Bible from './components/pages/Bible';

//Creating code
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component = {Home}/>
        <Route path='/journal' exact Component={Journal} />
        <Route path='/bible' exact Component={Bible} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
