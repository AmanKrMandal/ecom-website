import React from "react";
import "../AddCartWoman/AddCartWoman.css";
import manShirt from "../../assests/Image/manShirt.jpg";
import stars from "../../assests/Image/stars.png";
import vector from "../../assests/Image/vector.png";
import socials from "../../assests/Image/socials.png";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const AddCartMan = () => {
  return (
    <>
      <Navbar />
      <main className="mainCart">
        <section className="miniCart">
          <div>
            <img src={manShirt} />
          </div>
          <div className="textCart">
            <div className="home">
              home / shop / women /<span style={{ color: "black" }}>shop</span>{" "}
            </div>
            <div className="white">Plain White Shirt</div>
            <img src={stars} />
            <div className="price">
              $59.00 <span style={{ color: "#024E82" }}>$29.00</span>
            </div>
            <div className="classic">
              A classic t-shirt never goes out of style. This is our most
              premium collection of <br />
              shirt. This plain white shirt is made up of pure cotton and has a
              premium finish.
            </div>
            <div className="size">
              Select Size <img style={{ marginLeft: "70px" }} src={vector} />
            </div>
            <Link
              to="/checkout"
              className="add"
              style={{ textDecoration: "none" }}
            >
              ADD TO CART
            </Link>

            <div className="category">
              <span style={{ color: "black" }}>Category</span>: Women, Polo,
              Casual <br />
              <span style={{ color: "black" }}>Tags</span>: Modern, Design,
              cotton
            </div>
            <img src={socials} />
          </div>
        </section>
        <section className="Description">
          <div style={{ marginBottom: "20px" }}>
            <span className="review">Description</span>
            <span className="review" style={{ color: "#888888" }}>
              Reviews(0)
            </span>
          </div>
          <div className="key">
            A key objective is engaging digital marketing customers and allowing
            them to interact with the brand through servicing and delivery of
            digital media. Information is easy to access at a fast rate through
            the use of digital communications.
            <br></br>
            <br></br>
            Users with access to the Internet can use many digital mediums, such
            as Facebook, YouTube, Forums, and Email etc. Through Digital
            communications it creates a Multi-communication channel where
            information can be quickly exchanged around the world by anyone
            without any regard to whom they are.[28] Social segregation plays no
            part through social mediums due to lack of face to face
            communication and information being wide spread instead to a
            selective audience.
          </div>
        </section>
      </main>
    </>
  );
};

export default AddCartMan;
