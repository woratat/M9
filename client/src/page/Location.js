import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { longdo, map, LongdoMap } from "../components/longdo-map/LongdoMap";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Location({ className }) {
  const id = localStorage.getItem("location");
  const location = JSON.parse(localStorage.getItem(id));
  function initMap() {
    map.Layers.setBase(longdo.Layers.GRAY);
    map.Ui.Crosshair.visible(false);
    
      map.Overlays.add(
        new longdo.Marker(
          { lon: location.longtitude, lat: location.latitude },
          {
            title: location.name,
            detail: location.description,
          }
        )
      );
      map.location({ lon: location.longtitude, lat: location.latitude }, true);
      map.zoom(15, true);
    
  }

  const mapKey = "5e3612dcbfa88a77bf9cc6773e5a1545";
  return (
    <HelmetProvider>
      <Helmet>
        <title>Pholio | Map</title>
      </Helmet>
      <div className={className}>
        <Header />
        <div className="map-box">
          <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
        </div>
        <div className="name-location">{location.name}</div>
        <div className="description-box">
          <div className="des-text">{location.description}</div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default styled(Location)`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  .map-box {
    padding: 30px 150px;
  }
  .name-location {
    padding-left: 200px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
  }
  .description-box {
    margin: 30px 150px 30px 150px;
    height: 300px;
    background: white;
  }
  .des-text {
    padding: 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
  }
`;
