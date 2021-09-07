import React from "react";
import "./Update_Account.css";
export default function Update_Account() {
  return (
    <div className="user-boxx">
      <input
        type="text"
        id="last_name"
        className="input_text"
        placeholder="Nhập họ (*)"
      />
      <input
        type="text"
        id="first_name"
        className="input_text"
        placeholder="Nhập tên (*)"
      />
      <input
        type="email"
        id="email"
        className="input_text"
        placeholder="Nhập Email (*)"
      />
      <input
        type="tel"
        id="phone_ac"
        className="input_text"
        placeholder="Số điện thoại (*)"
        pattern="[0-9]{10,}"
      />
      <input
        type="text"
        id="birthday"
        className="input_text"
        placeholder="Ngày sinh (dd/mm/yyyy) (*)"
        title="Định dạng dd/mm/yyyy"
        pattern="(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\.|-|\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))"
      />
      <input
        type="text"
        id="staff_address"
        className="input_text"
        placeholder="Địa chỉ"
      />
      <select
        id="select_city"
        class="input_text"
        data-selected="true"
        data-label-id="0"
        data-metatip="true"
      >
        <option disabled="" selected="" value="">
          Vui lòng chọn tỉnh/thành phố
        </option>
        <option value="">Tất cả</option>
        <option value="HC">Hồ Chí Minh</option>
        <option value="HI">Hà Nội</option>
        <option value="AG">An Giang</option>
        <option value="BD">Bình Định</option>
        <option value="BG">Bắc Giang</option>
        <option value="BI">Bình Dương</option>
        <option value="BK">Bắc Kạn</option>
        <option value="BL">Bạc Liêu</option>
        <option value="BN">Bắc Ninh</option>
        <option value="BP">Bình Phước</option>
        <option value="BT">Bến Tre</option>
        <option value="BU">Bình Thuận</option>
        <option value="BV">Bà Rịa - Vũng Tàu</option>
        <option value="CB">Cao Bằng</option>
        <option value="CM">Cà Mau</option>
        <option value="CN">Cần Thơ</option>
        <option value="DA">Đà Nẵng</option>
        <option value="DB">Điện Biên</option>
        <option value="DC">Đắk Lắk</option>
        <option value="DN">Đồng Nai</option>
        <option value="DO">Đắk Nông</option>
        <option value="DT">Đồng Tháp</option>
        <option value="GL">Gia Lai</option>
        <option value="HD">Hải Dương</option>
        <option value="HG">Hà Giang</option>
        <option value="HM">Hà Nam</option>
        <option value="HO">Hòa Bình</option>
        <option value="HP">Hải Phòng</option>
        <option value="HT">Hà Tĩnh</option>
        <option value="HU">Hậu Giang</option>
        <option value="HY">Hưng Yên</option>
        <option value="KG">Kiên Giang</option>
        <option value="KH">Khánh Hòa</option>
        <option value="KT">Kon Tum</option>
        <option value="LA">Long An</option>
        <option value="LD">Lâm Đồng</option>
        <option value="LI">Lai Châu</option>
        <option value="LO">Lào Cai</option>
        <option value="LS">Lạng Sơn</option>
        <option value="NA">Nghệ An</option>
        <option value="NB">Ninh Bình</option>
        <option value="ND">Nam Định</option>
        <option value="NT">Ninh Thuận</option>
        <option value="PT">Phú Thọ</option>
        <option value="PY">Phú Yên</option>
        <option value="QB">Quảng Bình</option>
        <option value="QG">Quảng Ngãi</option>
        <option value="QM">Quảng Nam</option>
        <option value="QN">Quảng Ninh</option>
        <option value="QT">Quảng Trị</option>
        <option value="SL">Sơn La</option>
        <option value="ST">Sóc Trăng</option>
        <option value="TB">Thái Bình</option>
        <option value="TG">Tiền Giang</option>
        <option value="TH">Thanh Hóa</option>
        <option value="TN">Tây Ninh</option>
        <option value="TQ">Tuyên Quang</option>
        <option value="TT">Thừa Thiên Huế</option>
        <option value="TV">Trà Vinh</option>
        <option value="TY">Thái Nguyên</option>
        <option value="VL">Vĩnh Long</option>
        <option value="VT">Vĩnh Phúc</option>
        <option value="YB">Yên Bái</option>
      </select>
      <div className="button">
        <input type="submit" className="btn" value="Cập nhật" />
        <span>
          Hoặc <a href>Hủy</a>
        </span>
      </div>
    </div>
  );
}
