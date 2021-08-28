import "./Banner.css";
import banner_1 from "../../images/baner-cate/banner-cate-1_76bca9574e71406cb7536394202d76ad_master.jpg";
import banner_2 from "../../images/baner-cate/banner-cate-2_d5cc77ab5fa34ae5bea38ff9413ad60f_master.jpg";
import banner_3 from "../../images/baner-cate/banner-cate-3_06b272263c19450b9705f942567fc05c_master.jpg";
import banner_4 from "../../images/baner-cate/banner-cate-5_513967e8e2f54fec9d5d88ecde42f23c_master.jpg";
import banner_5 from "../../images/baner-cate/banner-cate-6_2700ab7c2d1649078d83f11f48115883_master.jpg";
import banner_6 from "../../images/baner-cate/banner-cate-7_01a820ce4bbf4faa9c51db18bda5634c_master.jpg";
import banner_7 from "../../images/baner-cate/untitled-1-1_04edd88faa7c4c38912c668ba987728e_master.jpg";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="banner_list">
            <img src={banner_1} alt="banner" className="banner_item" />
            <img src={banner_2} alt="banner" className="banner_item" />
            <img src={banner_3} alt="banner" className="banner_item" />
            <img src={banner_4} alt="banner" className="banner_item" />
            <img src={banner_5} alt="banner" className="banner_item" />
            <img src={banner_6} alt="banner" className="banner_item" />
            <img src={banner_7} alt="banner" className="banner_item" />
          </div>
        </div>
      </div>
    </section>
  );
}
