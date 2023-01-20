import 'bootstrap/dist/css/bootstrap.min.css';
import loginCSS from './login.module.css';
import Button from 'react-bootstrap/Button';
function Login(){

    return (
//login form
<div className={loginCSS.body}>
  <div className={`form-container ${loginCSS.form_container}`}>
    <form className={`mx-auto bg-white ${loginCSS.form}`}id="login" action="" method="POST">
   
      <h5 className={`form-title ${loginCSS.form_title}`}>User Login</h5>

     
      <div className={`form-floating  ${loginCSS.email_form}`}>
        <input type="email" id="exampleInputEmail1" className="form-control input-text" placeholder="jordan@gmail.com" name="email" />
        <label for="exampleInputEmail1" className={`form-label  ${loginCSS.input_text}`}>Email:</label>
      </div>


      <div className={`form-floating  ${loginCSS.password_form}`}>
        <input type="password" id="exampleInputPassword1" className="form-control input-text" placeholder="e.g. Kiwanuka" name="password" />
        <label for="exampleInputPassword1" className={`form-label  ${loginCSS.input_text}`}>Password:</label>
      </div>

      
      <Button className={`btn btn-outline-success ${loginCSS.sign_in}`} variant="outline-success" id="submit" for="login" type="submit">
        Sign in
      </Button>

      <div className={loginCSS.trouble}>
        <span className={`text-muted ${loginCSS.trouble_text}`}>Having trouble signing in?</span>
        <a className={`text-danger ${loginCSS.trouble_reset}`} href="resetPassword/">Reset password</a>
      </div>

      <div className={loginCSS.new_account}>
        <span className={`text-muted ${loginCSS.new_account_text}`}>Don't have an account?</span>
        <a href="#" className={`text-success ${loginCSS.new_account_text}`}>Create Now &rarr;</a>
      </div>
    </form>
  </div>
</div>

    );

}

export default Login;