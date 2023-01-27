import 'bootstrap/dist/css/bootstrap.min.css';
import startedCSS from './faq.module.css';
import Button from 'react-bootstrap/Button';

function FAQ() {
   return (

      <section>
         <div className='container p-2'>
            <div className='card'>
               <div className='card-body'>
                  <h3 className='card-title'>
                     Getting Started
                  </h3>
               </div>
            </div>
         </div>
      </section>
   );
}

export default FAQ;