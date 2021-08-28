import React from "react";

export default function HomeBanner(props) {
  return (
    <section className="home_banner">
      <div className="container">
        <div className="row">
          <div className="home_banner-wrapper">
            <img
              src={props.banner}
              alt="Home banner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
