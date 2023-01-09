import Navbar from './components/NavBar';
import Footer  from './components/footer';
import Home from './pages/Home';

import './App.css';
function App() {


    let Component
    switch(window.location.pathname){
      case '/':
        Component = <Home />
        document.title = "FoodSaviour-Home"
        break
      

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
