import "../../styles/Card.css";
import img12 from "../../assests/img12.png";
import img13 from "../../assests/shirt.png";
import { Link } from "react-router-dom";

function Card({ color = true, img = true }) {
  return (
    <div className="card1 mb-5">
      <Link to={img?"/productwomen":"/productmen"}>
        <img
          src={img === true ? img12 : img13}
          className="img-fluid mx-auto d-block"
          alt="img loading..."
        />
      </Link>

      <div className={color === true ? "select-shirt" : ""}>
        <div>
          <p className="text-center p-1">
            <strong>Plain White Shirt</strong>
          </p>
        </div>
        <p className="text-center" style={{}}>
          $29.00
        </p>
      </div>
    </div>
  );
}

export default Card;
