import 'bootstrap/dist/css/bootstrap.min.css';
import './resetPassword.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-router-dom';

function ResetPassword() {

    return (
        <>
            <section>
                <div className="body">
                    <div className="form-container">
                        <Form className="form mx-auto bg-white">
                            <h5 className="form-title">Reset Password</h5>

                            <div>
                                <span>
                                    <p className="form-title-text mb-0">
                                        If the details entered ascribe to an account, your password will be
                                        reset.
                                    </p>
                                </span>
                            </div>

                            <div className="form-floating email-form">
                                <Form.Control type="email" id="exampleInputEmail1" className="form-control input-text" placeholder="jordan@gmail.com" name="email"/>
                                <Form.Label for="exampleInputEmail1" className="form-label input-text">Email:</Form.Label>
                            </div>

                            <Button classname="resetPassword btn btn-outline-danger reset-button" variant="outline-danger" type="reset">Reset Password</Button>
                        </Form>

                    </div>
                </div>
            </section>
        </>
    );
}
export default ResetPassword;