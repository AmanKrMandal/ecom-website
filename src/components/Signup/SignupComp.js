import { Link } from "react-router-dom";
import "../../styles/Login.css";
import LoginIcon from "../icon/LoginIcon";
import MessageIcon from "../icon/MessageIcon";
import Mobile from "../icon/Mobile";
import PasswordIcon from "../icon/PasswordIcon";
import SignupIcon from "../icon/SignupIcon";

function SignupComp() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 login">
          <h5 className="text-center" style={{ marginTop: "100px" }}>
            Create your new account
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

            <label
              className="mb-2 mt-2 text-muted"
              style={{ marginLeft: "30px" }}
            >
              Mobile Number
            </label>
            <br />
            <div className="d-flex">
              <input className="loginInput" placeholder="123-4567-8910" />
              <div
                className="p-2 rounded"
                style={{ backgroundColor: "#024E82" }}
              >
                <Mobile />
              </div>
            </div>

            <label
              className="mb-2 mt-2 text-muted"
              style={{ marginLeft: "30px" }}
            >
              Shipping Address
            </label>
            <br />
            <div className="d-flex">
              <input className="loginInput" placeholder="Enter your Address" />
              <div
                className="p-2 rounded"
                style={{ backgroundColor: "#024E82" }}
              >
                <MessageIcon />
              </div>
            </div>

            <Link to="/">
              <button className="signup1 btnmargin mt-3 mb-3">
                Signup Now
              </button>
            </Link>
            <Link to="/login">
              <button className="login1 btnmargin  mb-3">Login Now</button>
            </Link>
          </form>
        </div>
        <div className="col-sm-8">
          <div className="mt-5" style={{ marginLeft: "180px" }}>
            <SignupIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupComp;
