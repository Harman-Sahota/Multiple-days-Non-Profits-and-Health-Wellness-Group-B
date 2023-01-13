import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import Button from 'react-bootstrap/Button'
function Login(){

    return (
//login form
<div className="body">
  <div className="form-container">
    <form className="form mx-auto bg-white" id="login" action="" method="POST">
   
      <h5 className="form-title">User Login</h5>

     
      <div className="form-floating email-form">
        <input type="email" id="exampleInputEmail1" className="form-control input-text" placeholder="jordan@gmail.com" name="email" />
        <label for="exampleInputEmail1" className="form-label input-text">Email:</label>
      </div>


      <div className="form-floating password-form">
        <input type="password" id="exampleInputPassword1" className="form-control input-text" placeholder="e.g. Kiwanuka" name="password" />
        <label for="exampleInputPassword1" className="form-label input-text">Password:</label>
      </div>

      
      <Button className="btn btn-outline-success sign-in" variant="outline-success" id="submit" for="login" type="submit">
        Sign in
      </Button>

      <div className="trouble">
        <span className="trouble-text text-muted">Having trouble signing in?</span>
        <a className="trouble-reset text-danger" href="resetPassword/">Reset password</a>
      </div>

      <div className="new-account">
        <span className="new-account-text text-muted">Don't have an account?</span>
        <a href="#" className="new-account-link text-success">Create Now &rarr;</a>
      </div>
    </form>
  </div>
</div>

    );

}

export default Login;