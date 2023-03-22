import "../styles/Footer.css";
import payment from "../assests/payments.png";
function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="row">
        <div className="col-sm-3 mt-5">
          <p className="text-center">
            <strong>Company info</strong>
          </p>
          <div style={{ marginLeft: "110px" }}>
            <p>About Us</p>
            <p>Latest Posts</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="col-sm-3 mt-5">
          <p className="text-center">
            <strong>Help Links</strong>
          </p>
          <div style={{ marginLeft: "125px" }}>
            <p>Tracking</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Shipping Info</p>
            <p>FAQ</p>
          </div>
        </div>

        <div className="col-sm-3 mt-5">
          <p className="text-center">
            <strong>Useful Links</strong>
          </p>
          <div style={{ marginLeft: "120px" }}>
            <p>Special Offers</p>
            <p>Gift Cards</p>
            <p>Advetising</p>
            <p>Terms of Use</p>
          </div>
        </div>

        <div className="col-sm-3 mt-5">
          <p className="text-center">
            <strong>Get in the know</strong>
          </p>
          <div style={{ marginLeft: "110px" }}>
            <input className="inputFiled" placeholder="Enter Email" />
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="row">
        <div className="col-sm-4 text-center">
          <p style={{ marginLeft: "-70px" }}>© 2022 Expolre Clothing</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <img src={payment} className="mx-auto d-block" alt="payment" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
