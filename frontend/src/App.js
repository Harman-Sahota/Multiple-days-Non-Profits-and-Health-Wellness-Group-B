import Navbar from './components/NavBar';
import Footer  from './components/footer';
import Home from './pages/Home';
import Login from './pages/login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
      
   return (
     <>
      <Navbar />

     
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}  />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path='login/' element={<Login />}  />
        </Routes>
      </Router>
     
     
      
      <Footer />
      </>

);
  
}

export default App;
