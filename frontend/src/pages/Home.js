import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCSS from './home.module.css';
import ort from '../images/ORT_logo.svg';
import calender from '../images/calendar.png';
import user_flat from '../images/abstract-user-flat-4.png';


const b = "{HomeCSS.card-text.h-200}";

function Home(){
   
      return (
        
       <> 
       <section>
              <div className={HomeCSS.container}>
                  <div className="row d-flex h-100 align-items-center justify-content-center text-center">
                      <div className="card-group">
                          <div className={HomeCSS.card}>
                              <img src={ort} height="200px" className={HomeCSS.normal_img}  />

                          </div>
                          <div className={HomeCSS.card}>
                              <a href="login/"><img className={HomeCSS.tracker_img}
                                  src={calender} height="100px" /></a>
                              <p className={b}>Login to access tracker</p>
                          </div>
                          <div className={HomeCSS.card}>
                              <a href="{% url 'register' %}"><img className={HomeCSS.tracker_img}
                                  src={user_flat} height="100px" /></a>
                              <p className={b}>Create an account</p>
                          </div>
                      </div>
                  </div>
              </div>
              <img className="img-baby-g-about for-desktop" />
          </section></>
    
       

        );
      }
export default Home;