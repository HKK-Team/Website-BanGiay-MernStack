import React from "react";
import "./ListCart.css";
import Cart from "./Cart/Cart";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartTable from "./CartTable/CartTable";
import image from "../../images/Hunter-Nam/dsmh04200den__3__483c6547abee43c2acac5850822072f0_1024x1024.jpg";

export default function ListCart() {
  var CartCount = 1;
  if (CartCount >= 1) {
    return (
      <section className="Cart">
        <div className="container">
          <div className="row">
            <div className="Cart_title">
              <h1>GIỎ HÀNG CỦA BẠN</h1>
            </div>
            {/* list cart */}
            <CartTable />
            <Cart
              image={image}
              name="Giày Thể Thao Nam Biti’s Hunter Core Z Collection Earth DSMH06400KED (Kem Đậm)"
              color="Kem Đậm"
              size={40}
              price="699000"
              totalprice="699,000"
            />
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
                <a href='/' className="comeback">
                  <i class="fa fa-reply"></i> Tiếp tục mua hàng
                </a>
              </h3>
            </div>
            <div className="pull_right">
              <div className="total_price_modal">
                <strong className="item_total_title">Tạm Tính: </strong>
                <span className="item_total">0 đ</span>
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
