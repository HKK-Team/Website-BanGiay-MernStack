import "./SliderHome.css";
import React from "react";
import page1 from "../../../images/images/page-TrangChu-1.jpg";
import page2 from "../../../images/images/page-TrangChu-2.jpg";
import page3 from "../../../images/images/page-TrangChu-3.jpg";
import page4 from "../../../images/images/page-TrangChu-4.jpg";
export default function SliderHome() {
  useEffect(() => {
    let counter = 1;
    setInterval(function () {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 4000);
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
            <img src={page1} alt="page" className="slide_image" />
          </div>
          <div className="slide">
            <img src={page2} alt="page" className="slide_image" />
          </div>
          <div className="slide">
            <img src={page3} alt="page" className="slide_image" />
          </div>
          <div className="slide">
            <img src={page4} alt="page" className="slide_image" />
          </div>
          <div className="navigation_auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation_manual">
          <label for="radio1" className="manual-btn"></label>
          <label for="radio2" className="manual-btn"></label>
          <label for="radio3" className="manual-btn"></label>
          <label for="radio4" className="manual-btn"></label>
        </div>
      </div>
    </section>
  );
}