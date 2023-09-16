import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../src/components/pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Creating code
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component = {Home}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
