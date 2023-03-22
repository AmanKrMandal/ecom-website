import CartIcon from "./icon/CartIcon";
import MenuIcon from "./icon/MenuIcon";
import PeopleIcon from "./icon/PeopleIcon";
import "../styles/Button.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-sm-4">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div style={{ fontSize: "25px" }}>ECloths</div>
          </Link>
        </div>
        <div className="col-sm-3">
          <div className="d-flex justify-content-evenly">
            <div>Home</div>
            <div>ABOUT</div>
            <div>CONTACT US</div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="d-flex justify-content-end">
            <div className="me-4">
              <button className="order-hishtory">ORDER HISTORY</button>{" "}
            </div>
            <div className="me-4 mt-1">
              <PeopleIcon />
            </div>
            <div className="me-4">
              <CartIcon />
            </div>
            <div className="me-4">
              <MenuIcon />
            </div>
            <div>
              <Link to="/login">
                <button className="signout">Sign Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
