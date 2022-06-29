import { useState, useEffect } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

const Cuaca = () => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState(" ");
  const [state, setState] = useState("Bandung");

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <div class="col-auto">
            <InputGroup className="mb-3" onChange={inputHandler} value={getState}>
              <Form.Control type="text" placeholder="Masukan Lokasi" />
            </InputGroup>
          </div>
          <Button variant="primary" className="btn mt-2" onClick={submitHandler}>
            Search
          </Button>
        </div>

        <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
          {apiData.main ? (
            <div class="card-body text-center">
              <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} alt="weather status icon" className="weather-icon" />

              <p className="h2">{kelvinToFarenheit(apiData.main.temp)}&deg; C</p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i> <strong>{apiData.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i class="fas fa-temperature-low "></i> <strong>{kelvinToFarenheit(apiData.main.temp_min)}&deg; C</strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i> <strong>{kelvinToFarenheit(apiData.main.temp_max)}&deg; C</strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {" "}
                    <strong>{apiData.weather[0].main}</strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cuaca;
