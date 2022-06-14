import "./App.css";
import React, { useState } from "react";
import { AttributionControl, MapContainer } from "react-leaflet";
import { CRS } from "leaflet";
import Map from "./Components/Map/Map";
import Nav from "./Components/Navigation/Nav";
import About from "./Pages/About/About";

const App = () => {

  //Change this to match the highest number tile you generated
  const ZOOM_LEVELS = 5;
  //Change this to the zoom level you wish to start on
  const STARTING_ZOOM = 2;
  //Change this to the focal point of your map
  const CENTER_POINT = [-120, 125];

  const [currentZoom, setZoomLevel] = useState(STARTING_ZOOM);
  const updateZoom = (newZoomLevel) => setZoomLevel(newZoomLevel);

  const [coords, setCoords] = useState([0, 0]);
  const updateCoords = (coords) => setCoords(coords);

  return (
    <div className="app">
      <div>
        <Nav />
      </div>

      <div id="about-page">
        <About />
      </div>

      <div className="flex" id="map-page">
        <div id='map-div map-page'>
          <MapContainer
            center={CENTER_POINT}
            minZoom={1}
            zoom={currentZoom}
            scrollWheelZoom={true}
            style={{ height: window.innerHeight, width: window.innerWidth }}
            crs={CRS.Simple}
            maxZoom={ZOOM_LEVELS}
            minZoom={STARTING_ZOOM}
            attributionControl={false}
          >
            <Map zoom={currentZoom} coords={coords}/>
            <AttributionControl
              position={"bottomright"}
            />
          </MapContainer>
        </div>
      </div>

    </div>
  );
};

export default App;