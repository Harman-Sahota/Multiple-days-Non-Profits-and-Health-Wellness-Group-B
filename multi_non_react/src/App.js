import Navbar from './components/NavBar';
import Footer  from './components/footer';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';

import './App.css';
function App() {


    let Component
    switch(window.location.pathname){
      case '/':
        Component = <Home />
        document.title = "FoodSaviour-Home"
        break;

      case '/resetPassword':
        Component = <ResetPassword />
        document.title = "FoodSaviour-Reset Password"
        break;
    }
      
   return (
     <>
      <Navbar />

      {Component}
     
     
      
      <Footer />
      </>

);
  
}

export default App;
