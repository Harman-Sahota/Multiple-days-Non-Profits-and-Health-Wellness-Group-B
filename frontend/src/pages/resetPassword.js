import 'bootstrap/dist/css/bootstrap.min.css';
import resetCSS from './resetPassword.module.css';
import Button from 'react-bootstrap/Button';
//import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

function resetPassword() {

    return (
        <>
            <section>
                <div className={resetCSS.body}>
                    <div className={resetCSS.form_container}>
                        <Form className={`form mx-auto bg-white ${resetCSS.form}`} action="" method="POST" onSubmit={(e) => {

                            if (document.getElementById('exampleInputEmail1').value == "") {

                                e.preventDefault();
                                window.alert('fields cannot be blank');

                                document.getElementById('exampleInputEmail1').classList.add('error');

                            }else{
                                document.getElementById('exampleInputEmail1').classList.add('success');
                            }

                        }}>
                            <h5 className={`form-title ${resetCSS.form_title}`}>Reset Password</h5>
                            <div>
                                <span>
                                    <p className={`form-title-text mb-0`}>
                                        If the details entered ascribe to an account, your password will be
                                        reset.
                                    </p>
                                </span>
                            </div>

                            <div className={`form-floating email-form ${resetCSS.email_form}`}>
                                <Form.Control type="email" id="exampleInputEmail1" className="form-control input-text" placeholder="jordan@gmail.com" name="email" />
                                <Form.Label for="exampleInputEmail1" className="form-label input-text">Email:</Form.Label>
                            </div>

                            <Button classname={`resetPassword btn btn-outline-danger reset-button ${resetCSS.reset_button}`} variant="outline-danger" type="submit">Reset</Button>
                        </Form>

                    </div>
                </div>
            </section>
        </>
    );
}
export default resetPassword;