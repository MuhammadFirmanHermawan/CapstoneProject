import { Image } from "react-bootstrap";
import "./Informasi.css";
import ph from "../assets/ph.png";
import graphic from "../assets/graphic.png";

const Informasi = () => {
  return (
    <div className="information">
      <div className="PHAir row">
        <div className="text1 col-8">
          <h2>PH Air</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam. Adipiscing at in tellus integer feugiat scelerisque. Enim ut
            tellus elementum sagittis vitae et leo duis ut. Gravida cum sociis natoque penatibus et magnis.
          </p>
        </div>
        <div className="informationPicture col-4">
          <Image src={ph} alt="ph" className="PHImage center" />
        </div>
      </div>

      <div className="KetinggianAir row">
        <div className="informationPicture col-4">
          <Image src={graphic} alt="graphic" className="KetinggianImage center" />
        </div>
        <div className="text1 col-8">
          <h2>Ketinggian Air</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam. Adipiscing at in tellus integer feugiat scelerisque. Enim ut
            tellus elementum sagittis vitae et leo duis ut. Gravida cum sociis natoque penatibus et magnis.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Informasi;
