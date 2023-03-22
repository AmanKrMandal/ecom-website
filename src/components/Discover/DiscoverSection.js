import React from "react";
import Card from "./Card";

function DiscoverSection() {
  return (
    <div className="container" style={{ marginTop: "210px" }}>
      <div className="row">
        <h3 className="text-center">Discover NEW Arrivals</h3>
        <p className="text-center text-muted">Recently added shirts!</p>
      </div>

      <div className="row mb-4">
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card img={false}/>
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card img={false}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card img={false} />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card img={false} />
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
