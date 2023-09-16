import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../src/components/pages/Home'

//Creating code
function App() {
  return (
    <Router>
      <Routes>
        <Route  exact Component path={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
