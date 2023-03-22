import React from "react";

function DiscountSection() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-7 bg-dark text-center text-white p-5">
          <h1>PEACE OF MIND</h1>
          <p>
            A one-stop platform for all your fashion needs, hassle-free. Buy
            with a peace of mind.
          </p>
          <button className="shopnow">Shop Now</button>{" "}
        </div>
        <div className="col-sm-1"></div>
        <div className="bg-dark col-sm-4 text-center text-white p-5">
          <h1>BUY 2 GET 1 FREE</h1>
          <p>
            End of season sale. Buy any 2 items of your choice and get 1 free.
          </p>
          <button className="shopnow">Shop Now</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default DiscountSection;
