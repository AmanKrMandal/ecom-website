import img1 from "../assests/img_1.png";
import HeroSectionText from "./icon/HeroSectionText";
function HeroSection() {
  return (
    <div className="container-fluid">
      <img src={img1} className="img-fluid" width="100%" alt="Loading Img" />
      <div className="" style={{ marginTop: "-550px" }}>
        <HeroSectionText />
      </div>
      <div style={{ marginTop: "30px" }}>
        <button className="shopnow">Shop Now</button>{" "}
      </div>
    </div>
  );
}

export default HeroSection;
