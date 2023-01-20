import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import SearchBar from "./pages/network";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

      <><Router>
      <Routes>
        <Route exact path="/" element={<><Navbar /><Home title="Home" /><Footer /></>} />
      </Routes>
    </Router><Router>
        <Routes>
          <Route exact path="login/" element={<><Navbar /><Login /><Footer /></>} />
        </Routes>
      </Router><Router>
        <Routes>
          <Route exact path="/register" element={<><Navbar /><Register /><Footer /></>} />
        </Routes>
      </Router><Router>
        <Routes>
          <Route exact path="resetPassword/" element={<><Navbar /><ResetPassword /><Footer /></>} />
        </Routes>

      </Router><Router>
        <Routes>
          <Route exact path="profile/" element={<><Navbar /><Profile /><Footer /></>} />
        </Routes>
      </Router>

   <Router>
        <Routes>
          <Route exact path="network/" element={<><Navbar /><SearchBar /><Footer /></>} />
        </Routes>
      </Router>
      </>
 
  );
}

export default App;
