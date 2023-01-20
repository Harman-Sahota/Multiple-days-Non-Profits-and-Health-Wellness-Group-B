import NavbarOut from "./components/NavBarOut";
import NavbarIn from "./components/NavBarIn";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import SearchBar from "./pages/network";
import Comment from "./pages/comment";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<><NavbarOut /><Home title="Home" /><Footer /></>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="login/" element={<><NavbarOut /><Login /><Footer /></>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="/register" element={<><NavbarOut /><Register /><Footer /></>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="resetPassword/" element={<><NavbarOut /><ResetPassword /><Footer /></>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="profile/" element={<><NavbarIn /><Profile /><Footer /></>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="network/" element={<><NavbarIn /><SearchBar /><Footer /></>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route exact path="comments/" element={<><NavbarIn /><Comment /><Footer /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
