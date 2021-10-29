/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./ListFavorite.css";
import Favorite from "./Favorite/Favorite";
import { GlobalState } from "../../GlobalState";

export default function ListFavorite() {
  const state = useContext(GlobalState);
  const [productFavorites] = state.productFavorites.productFavorites;
  const [iduser, setiduser] = state.userAPI.iduser
  const detail = productFavorites.filter((item) => {
    // tìm và trả về đối tượng chứa thuộc tính của giày
    return item.iduser === iduser;
  });
  console.log(detail)
  var favoriteCount = detail.length;
  return (
    <section className="favortite">
      <div className="container">
        <div className="row">
          <div className="Cart_title">
            <h1>Danh Sách Sản Phẩm Yêu Thích</h1>
          </div>
          {favoriteCount < 1 &&
          <div className="wish-empty">
          Hãy nhấn <i className="fas fa-heartbeat"></i> sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện nhất.
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
                {detail.map(item => (
                      <Favorite key={item._id}
                      image={item.image}
                      name={item.nameProduct}
                      color={item.color}
                      size={item.size}
                      price={item.price}
                      idproduct={item._id}
                      id_product = {item.idCategory_product}
                      nameCategoryProduct = {item.nameCategoryProduct}
                    />
                ))}
                {/* list favorite */}
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
