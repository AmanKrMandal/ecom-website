import { Link } from "react-router-dom";
import "../../styles/Login.css";
import LoginIcon from "../icon/LoginIcon";
import MessageIcon from "../icon/MessageIcon";
import PasswordIcon from "../icon/PasswordIcon";

function LoginComp() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 login">
          <h5 className="text-center" style={{ marginTop: "150px" }}>
            Login into your account
          </h5>
          <form className="mt-5">
            <label className="mb-2 text-muted" style={{ marginLeft: "30px" }}>
              Email Address
            </label>
            <br />
            <div className="d-flex">
              <input className="loginInput" placeholder="alex@email.com" />
              <div
                className="p-2 rounded"
                style={{ backgroundColor: "#024E82" }}
              >
                <MessageIcon />
              </div>
            </div>
            <label
              className="mb-2 mt-2 text-muted"
              style={{ marginLeft: "30px" }}
            >
              Password
            </label>
            <br />
            <div className="d-flex">
              <input className="loginInput" placeholder="Enter your password" />
              <div
                className="p-2 rounded"
                style={{ backgroundColor: "#024E82" }}
              >
                <PasswordIcon />
              </div>
            </div>
            <p className="text-end me-3 mt-2">
              <u>Forgot Password?</u>
            </p>

            <Link to="/">
              <button className="login1 btnmargin mb-3">Login Now</button>
            </Link>

            <Link to="/signup">
              <button className="signup1 btnmargin">Signup Now</button>
            </Link>
          </form>
        </div>
        <div className="col-sm-8">
          <h1 className="text-center" style={{ marginTop: "150px" }}>
            Welcome Back!
          </h1>
          <div className="mt-5" style={{ marginLeft: "180px" }}>
            <LoginIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
