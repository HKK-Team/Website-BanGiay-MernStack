/* eslint-disable react-hooks/exhaustive-deps */
import "./Announcement.css";
import Logo from "../../images/images/icon_announcemen_2.png";
import React, { useState, useEffect } from "react";

export default function Announcement() {
  let b = 0;
  const [transform, setTransform] = useState(`translate3d(${b}px, 0px, 0px)`);
  const arrows = () => {
    if (b === 0) {
      setTransform(`translate3d(${b}px,0px,0px)`);
      b = -768;
    } else if (b === -768) {
      setTransform(`translate3d(${b}px,0px,0px)`);
      b = 0;
    }
  };
  useEffect(() => {
    setInterval(function () {
      if (b === 0) {
        setTransform(`translate3d(${b}px,0px,0px)`);
        b = -768;
      } else if (b === -768) {
        setTransform(`translate3d(${b}px,0px,0px)`);
        b = 0;
      }
    }, 4000);
  }, 4000);
  return (
    <div className="announcement">
      <div className="container">
        <div className="row">
          <div className="announcement_wrapper">
            <div
              className="announcement_item-wrapper"
              style={{ transform: transform }}
            >
              <div className="announcement_item">
                <img src={Logo} alt="logo" />
                <span className="announcement_title"> ĐỔI SIZE MIỄN PHÍ </span>
                <span className="announcement_text">
                  {" "}
                  Tại tất cả cửa hàng, trong vòng 1 tuần{" "}
                </span>
              </div>

              <div className="announcement_item">
                <img src={Logo} alt="logo" />
                <span className="announcement_title"> ĐỔI SIZE MIỄN PHÍ </span>
                <span className="announcement_text">
                  {" "}
                  Tại tất cả cửa hàng, trong vòng 2 tuần{" "}
                </span>
              </div>
            </div>
            <div className="annoucement_arrows-left">
              <span onClick={arrows}>
                <i className="fas fa-chevron-left"></i>
              </span>
            </div>
            <div className="annoucement_arrows-right">
              <span onClick={arrows}>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
