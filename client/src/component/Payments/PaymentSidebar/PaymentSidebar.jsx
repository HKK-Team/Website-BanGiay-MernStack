import React from "react";
import "./PaymentSidebar.css";

export default function PaymentSidebar(props) {
  // get totalPrice
  var storedArray = JSON.parse(sessionStorage.getItem('settings'));
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
  return (
    <div className="sidebar">
      <div className="sidebar_content">
        {/*  */}
        {props.arraylist}
        {/*  */}
        <div className="oder-summary discount">
          <div className="field-wrapper">
            <input
              type="text"
              id="discout"
              className="code"
              placeholder="Mã giảm giá"
            />
            <button className="btn-discout" type="submit">
              Sử dụng
            </button>
          </div>
          <span>
            Mã giảm giá không áp dụng chung với các chương trình khuyến mãi bao
            gồm quà tặng, giảm giá
          </span>
        </div>
        {/*  */}
        <div className="oder-summary payment-lines">
          <div className="total-line">
            <span className="total-line-name">Tạm tính</span>
            <span className="total-line-price">{sum.toLocaleString()} đ</span>
          </div>
          <div className="total-line">
            <span className="total-line-name">Phí vận chuyển</span>
            <span className="total-line-price">-</span>
          </div>
        </div>
        {/*  */}
        <div className="oder-summary payment-price">
          <div className="total-line">
            <span className="total-line-name price">Tổng cộng</span>
            <span className="total-line-Totalprice">
              <span className="price">VND</span> {sum.toLocaleString()} đ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
