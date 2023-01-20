import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import Register from "./pages/register";
import SearchBar from "./pages/network";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="login/" element={<Login />} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="register/" element={<Register />} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="resetPassword/" element={<ResetPassword />} />
        </Routes>
      </Router>
      
      <Router>
        <Routes>
          <Route exact path="network/" element={<SearchBar />} />
        </Routes>
      </Router>


      <Footer />
    </>
  );
}

export default App;
