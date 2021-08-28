import React from "react";
import "./GoogleMaps.css";
import Map from "./Map";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
export default function GoogleMaps() {
  const key = 'AIzaSyB3U5a0zjVX-448Bx9pgcckmBbazS6E2ow';
  return (
    <section className="address_shop">
      <div className="container">
        <div className="row">
          <h2 className="address_shop-title">
            <a>Hệ Thống cửa hàng</a>
          </h2>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `90vh`,
                  margin: `auto`,
                  border: "2px solid black",
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </section>
  );
}
