import React from "react";
import { Link } from "react-router-dom";
import "./GoogleMaps.css";
import Map from "./Map";
export default function GoogleMaps() {
  const key = "AIzaSyB3U5a0zjVX-448Bx9pgcckmBbazS6E2ow";
  return (
    <section className="address_shop">
      <div className="container">
        <div className="row">
          <h2 className="address_shop-title">
            <Link to="/">Hệ Thống cửa hàng</Link>
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
