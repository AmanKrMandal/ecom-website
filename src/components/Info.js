import React from "react";
import CarIcon from "./icon/CarIcon";
import ReturnIcon from "./icon/ReturnIcon";
import SecureIcon from "./icon/SecureIcon";
import SupportIcon from "./icon/SupportIcon";

function Info() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-sm-3">
          <div className="d-flex">
            <div>
              <CarIcon />
            </div>
            <div className="ms-3">
              <p>
                <strong>Free Shipping</strong>
              </p>
              <p>Enjoy free shipping on all orders above $100</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="d-flex">
            <div>
              <SupportIcon />
            </div>
            <div className="ms-3">
              <p>
                <strong>SUPPORT 24/7</strong>
              </p>
              <p>Our support team is there to help you for queries</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="d-flex">
            <div>
              <ReturnIcon />
            </div>
            <div className="ms-3">
              <p>
                <strong>30 DAYS RETURN</strong>
              </p>
              <p>Simply return it within 30 days for an exchange.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="d-flex">
            <div>
              <SecureIcon />
            </div>
            <div className="ms-3">
              <p>
                <strong>100% PAYMENT SECURE</strong>
              </p>
              <p>Our payments are secured with 256 bit encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
