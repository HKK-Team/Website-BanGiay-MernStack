import "./SliderHome.css";
import React from "react";
import {  useEffect} from "react";
export default function SliderHome(props) {
  // auto chuyển hình slider home
  useEffect(() => {
    let counter = 1;
    const loop = setInterval(function () {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 4000);  
    return ()=> clearInterval(loop);
  },[]);
  return (
    <section className="slider_wrapper">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="slider-btn" id="radio1" />
          <input type="radio" name="slider-btn" id="radio2" />
          <input type="radio" name="slider-btn" id="radio3" />
          <input type="radio" name="slider-btn" id="radio4" />

          <div className="slide first">
            <img src={props.banner1} alt="page" className="slide_image" />
          </div>
          <div className="slide">
            <img src={props.banner2} alt="page" className="slide_image" />
          </div>
          <div className="slide">
            <img src={props.banner3} alt="page" className="slide_image" />
          </div>
          <div className="slide">
            <img src={props.banner4} alt="page" className="slide_image" />
          </div>
          <div className="navigation_auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation_manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </section>
  );
}