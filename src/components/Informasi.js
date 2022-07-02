import { Image } from "react-bootstrap";
import "./Informasi.css";
import ph from "../assets/ph.png";
import graphic from "../assets/graphic.png";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
const ketinggianAirRef = ref(db, "sensor" );

const Informasi = () => {
  const [todo, setTodo] = useState({ketinggianAir:0,phAir:0});

  //read
  useEffect(() => {
    onValue(ketinggianAirRef, (snapshot) => {
      setTodo({ketinggianAir:0,phAir:0});
      const data = snapshot.val();
      if (data !== null) {
        setTodo(data);
      }
    });
  }, []);

  return (
    <div className="information">
      <div className="PHAir row">
        <div className="text1 col-8">
          <h2>PH Air</h2>
          <p>{todo.phAir}</p>
        </div>
        <div className="informationPicture col-4">
          <Image src={ph} alt="ph" className="PHImage center" />
        </div>
      </div>

      <div className="KetinggianAir row">
        <div className="informationPicture col-4">
          <Image
            src={graphic}
            alt="graphic"
            className="KetinggianImage center"
          />
        </div>
        <div className="text1 col-8">
          <h2>Ketinggian Air</h2>
          <p>
            {todo.ketinggianAir}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Informasi;
