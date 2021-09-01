import "./Banner.css";
import  React, {useContext } from "react"; 
import { GlobalState } from "../../GlobalState";

export default function Banner() {
  const state = useContext(GlobalState)

  const [bannes] = state.bannerAPI.bannes

  return (
    <section className="banner">
      <div className="container">
        <div className="row">
        {/* <load dữ liệu >*/}
        {bannes.map(item => (
          <div className="banner_list" key={item._id}>
            <img src={item.images.image1} alt="banner" className="banner_item" />
            <img src={item.images.image2} alt="banner" className="banner_item" />
            <img src={item.images.image3} alt="banner" className="banner_item" />
            <img src={item.images.image4} alt="banner" className="banner_item" />
            <img src={item.images.image5} alt="banner" className="banner_item" />
            <img src={item.images.image6} alt="banner" className="banner_item" />
            <img src={item.images.image7} alt="banner" className="banner_item" />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
