import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Step3 = ({ handlePrev }) => {
    return (
    
            <form>
            <h3 className='animations'>Consent</h3>
            <br/>
            <ProgressBar animated now={100} className='animations' variant='info'/>
            <br/>
              <textarea readonly rows="5" cols="auto">
                The information you enter will be stored in a secure database
                that meets Canadian privacy regulations. If you have any
                concerns, please contact UBC Behavioural Research Ethics Council
                (BREB) about Barb Marcolin's study or call Dr. Marcolin at
                (250)807-9637 to ask any questions.
              </textarea>
              <div className="consent form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consent-check1"
                  onchange="changeconsent1()"
                  name="consent"
                  value="consented"
                />
                <label
                  className="form-check-label consent-text"
                  for="consent-check1"
                >
                  I accept
                </label>
              </div>
              <div className="consent form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consent-check2"
                  onchange="changeconsent2()"
                  name="consent-disagree"
                  value="not-consented"
                />
                <label
                  className="form-check-label consent-text"
                  for="consent-check2"
                >
                  I refuse
                </label>
              </div>
              <div className="consent form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consent-check3"
                  onchange="changeconsent3()"
                  name="consent-disagree"
                  value="info-consented"
                />
                <label
                  className="form-check-label consent-text"
                  for="consent-check3"
                >
                  More Info
                </label>
                </div>
                <div className='Buttons'>
                <Button onClick={handlePrev}  className='btn' variant='btn btn-success'>Back</Button>
                <Button type="submit"  className='btn' variant='btn btn-primary'>Submit</Button>
                </div>
            </form>
    );
}

export default Step3;
