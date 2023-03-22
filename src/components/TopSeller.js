import Card from "./Discover/Card";

function TopSeller() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h3 className="text-center">Top Sellers</h3>
        <p className="text-center text-muted">
          Browse our top-selling products
        </p>
      </div>

      <div className="row mb-4">
        <div className="col-sm-3">
          <Card color={false} />
        </div>
        <div className="col-sm-3">
          <Card color={false} />
        </div>
        <div className="col-sm-3">
          <Card color={false} />
        </div>
        <div className="col-sm-3">
          <Card color={false} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="shopnow-topseller">Shop Now</button>{" "}
      </div>
    </div>
  );
}

export default TopSeller;
