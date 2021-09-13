/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./ListCart.css";
import Cart from "./Cart/Cart";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartTable from "./CartTable/CartTable";

export default function ListCart() {
  var storedArray = JSON.parse(sessionStorage.getItem('arr'));
  var ltg;
  if(storedArray === null){
     ltg = 0;
  }
  else{
    ltg =  storedArray.length;
  }
  var sum = 0;

  for (let i = 0; i < ltg; i++) {
    sum += storedArray[i].totalprice;
  }

  var CartCount = ltg;
  if (CartCount >= 1) {
    return (
      <section className="Cart">
        <div className="container">
          <div className="row">
            <div className="Cart_title">
              <h1>GIỎ HÀNG CỦA BẠN</h1>
            </div>
            {/* list cart */}
            {storedArray.map((item) => (
              <Cart
                key={item._id}
                image={item.image}
                name={item.nameProduct}
                color={item.color}
                size={item.size}
                price={item.price}
                totalprice={item.totalprice}
                idproduct={item.idproduct}
              />
            ))}
            {/* List cart */}
          </div>
          <div className="cart_gift_note">
            Bộ Y tế đã ra thông điệp 5K: “Khẩu trang - Khử khuẩn - Khoảng cách -
            Không tập trung - Khai báo y tế” <br />
            Kêu gọi mọi người cùng nhau thực hiện việc chung sống an toàn với
            dịch bệnh.
          </div>
          <div className="modal_footer">
            <div className="pull_left">
              <h3 className="continue_shopping">
                <a href="/" className="comeback">
                  <i class="fa fa-reply"></i> Tiếp tục mua hàng
                </a>
              </h3>
            </div>
            <div className="pull_right">
              <div className="total_price_modal">
                <strong className="item_total_title">Tạm Tính: </strong>
                <span className="item_total">{sum} đ</span>
              </div>
              <div className="text_right">
                <div className="checkout_wrapper">
                  <button type="submit" name="checkout" id="checkout">
                    THANH TOÁN NGAY <br />
                    (áp dụng cho Việt Nam)
                  </button>
                  <buton type="submit" name="checkout" id="checkout-foreign">
                    ĐẶT HÀNG QUỐC TẾ <br />
                    (cho các quốc gia khác)
                  </buton>
                </div>
                <p className="feedback">
                  <span>Phản hồi:</span> 0984 943 851
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (CartCount < 1) {
    return <CartEmpty />;
  }
}
