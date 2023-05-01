import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "./Maps.css";

const Maps = () => {
  const [mapData, setMapData] = useState();

  useEffect(() => {
    const getFacts = async () => {
      const res = await axios("https://disease.sh/v3/covid-19/countries");
      console.log(res.data);
      setMapData(res.data);
    };

    getFacts();
  }, []);
  const position = [33, 65];
  return (
    <>
      <MapContainer
        center={position}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "80vh", width: "80wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapData &&
          mapData.map((item) => {
            return (
              <Marker position={[item.countryInfo.lat, item.countryInfo.long]}>
                <Popup>
                  <div className="popup">
                    <span className="country">{item.country}</span>
                    <span>Cases:{item.cases}</span>
                    <span>Deaths:{item.deaths}</span>
                    <span>Recovered:{item.recovered}</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
};

export default Maps;
