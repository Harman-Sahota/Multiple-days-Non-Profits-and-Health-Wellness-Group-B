import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import ort from '../images/ORT_logo.svg';
import calendar from '../images/calendar.png';
import user_flat from '../images/abstract-user-flat-4.png';

function Home(){
   
      return (
        
       <> 
       <section>
              <div className="container">
                  <div className="row d-flex h-100 align-items-center justify-content-center text-center">
                      <div className="card-group">
                          <div className="card">
                              <img src={ort} height="200px" />

                          </div>
                          <div className="card">
                              <a href="{% url 'login' %}"><img className="tracker_img"
                                  src={calendar} height="100px" /></a>
                              <p className="card-text">Login to access tracker</p>
                          </div>
                          <div className="card">
                              <a href="{% url 'register' %}"><img className="tracker_img"
                                  src={user_flat} height="100px" /></a>
                              <p className="card-text">Create an account</p>
                          </div>
                      </div>
                  </div>
              </div>
              <img className="img-baby-g-about for-desktop" />
          </section></>
    
       

        );
      }
export default Home;