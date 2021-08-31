import React from "react";
import "./SliderProduct.css";

export default function SliderProduct(props) {
  return (
    <section className="slider_wrapper">
      <img src={props.slider} alt="" className="slider_image" />
    </section>
  );
}
