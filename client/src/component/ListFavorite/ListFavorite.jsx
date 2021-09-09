import React from "react";
import "./ListFavorite.css";
import Favorite from "./Favorite/Favorite";
import image from "./../../images/Hunter-Nam/dsmh04200den__3__483c6547abee43c2acac5850822072f0_1024x1024.jpg";

export default function ListFavorite() {
  var favoriteCount = 2;
  return (
    <section className="favortite">
      <div className="container">
        <div className="row">
          <div className="Cart_title">
            <h1>Danh Sách Sản Phẩm Yêu Thích</h1>
          </div>
          {favoriteCount < 1 &&
          <div className="wish-empty">
          Hãy nhấn <i class="fas fa-heartbeat"></i> sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện nhất.
          </div>}
          {favoriteCount >= 1 && (
            <div className="favortite_box">
              <table className="table-wislist">
                <thead>
                  <tr>
                    <th className="customer-wishlist-item-info" colSpan="2">
                      MÔ TẢ SẢN PHẨM
                    </th>
                    <th className="customer-wishlist-item-info">SỐ LƯỢNG </th>
                    <th className="customer-wishlist-item-info">GIÁ</th>
                    <th className="customer-wishlist-item-info"> </th>
                    <th className="customer-wishlist-item-remove"> </th>
                  </tr>
                </thead>
                {/* list favorite */}
                <Favorite
                  image={image}
                  name="Dentsu Redder - Vietnamese Canvas of Pride (Women)"
                  color="Trắng"
                  size="39"
                  price="999000"
                />
                {/* list favorite */}
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
