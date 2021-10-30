/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import "./Catalog.css";
import { GlobalState } from "../../GlobalState";

export default function Catalog() {
  const state = useContext(GlobalState);
  //sorting
  const [sortnam, setSortnam] = state.productboyApi.sort;
  const [sortnu, setSortnu] = state.productgirlApi.sort;
  const [sortpk, setSortpk] = state.productpkApi.sort;
  const [sortgosto, setSortgosto] = state.productgostoApi.sort;
  const [sortbetrai, setSorttrai] = state.productbetraiApi.sort;
  const [sortbegai, setSortgai] = state.productbegaiApi.sort;

  //filtering by color
  const [colorboy, setcolorboy] = state.productboyApi.colorboy;
  const [colorgirl, setcolorgirl] = state.productgirlApi.colorgirl;
  const [colorpk, setcolorpk] = state.productpkApi.colorpk;
  const [colorgosto, setcolorgosto] = state.productgostoApi.colorgosto;
  const [colorbetrai, setcolorbetrai] = state.productbetraiApi.colorbetrai;
  const [colorbegai, setcolorbegai] = state.productbegaiApi.colorbegai;

  //filtering by size product
  const [sizeminboy, setsizeminboy] = state.productboyApi.sizeminboy;
  const [sizemaxboy, setsizemaxboy] = state.productboyApi.sizemaxboy;

  const [sizemingirl, setsizemingirl] = state.productgirlApi.sizemingirl;
  const [sizemaxgirl, setsizemaxgirl] = state.productgirlApi.sizemaxgirl;

  const [sizeminpk, setsizeminpk] = state.productpkApi.sizeminpk;
  const [sizemaxpk, setsizemaxpk] = state.productpkApi.sizemaxpk;

  const [sizemingosto, setsizemingosto] = state.productgostoApi.sizemingosto;
  const [sizemaxgosto, setsizemaxgosto] = state.productgostoApi.sizemaxgosto;

  const [sizeminbetrai, setsizeminbetrai] =
    state.productbetraiApi.sizeminbetrai;
  const [sizemaxbetrai, setsizemaxbetrai] =
    state.productbetraiApi.sizemaxbetrai;

  const [sizeminbegai, setsizeminbegai] = state.productbegaiApi.sizeminbegai;
  const [sizemaxbegai, setsizemaxbegai] = state.productbegaiApi.sizemaxbegai;

  //get max price product
  const [priceProduct_max, setpriceProduct_max] =
    state.priceProduct_max.priceProduct_max;

  //set min and max price for many product
  const [maxPice, setmaxPice] = state.productboyApi.maxPice;
  const [minPrice, setminPrice] = state.productboyApi.minPrice;

  const [minPricegirl, setminPricegirl] = state.productgirlApi.minPricegirl;
  const [maxPicegirl, setmaxPicegirl] = state.productgirlApi.maxPicegirl;

  const [maxPicepk, setmaxPicepk] = state.productpkApi.maxPicepk;
  const [minPricepk, setminPricepk] = state.productpkApi.minPricepk;

  const [maxPicegosto, setmaxPicegosto] = state.productgostoApi.maxPicegosto;
  const [minPricegosto, setminPricegosto] = state.productgostoApi.minPricegosto;

  const [maxPicebegai, setmaxPicebegai] = state.productbegaiApi.maxPicebegai;
  const [minPricebegai, setminPricebegai] = state.productbegaiApi.minPricebegai;

  const [minPricebetrai, setminPricebetrai] =
    state.productbetraiApi.minPricebetrai;
  const [maxPicebetrai, setmaxPicebetrai] =
    state.productbetraiApi.maxPicebetrai;

  var temp = window.location.href;
  const arr = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === "/") break;
    arr.push(temp[i]);
  }
  var strtemp = arr.reverse().toString().replaceAll(",", "");

  //add event cho mỗi màu khi click
  const eventcolor = (e) => {
    if (strtemp === "nam") {
      setcolorboy(`color=${e}`);
    } else if (strtemp === "nu") {
      setcolorgirl(`color=${e}`);
    } else if (strtemp === "phu-kien") {
      setcolorpk(`color=${e}`);
    } else if (strtemp === "gosto") {
      setcolorgosto(`color=${e}`);
    } else if (strtemp === "be-trai") {
      setcolorbetrai(`color=${e}`);
    } else if (strtemp === "be-gai") {
      setcolorbegai(`color=${e}`);
    }
  };

  //filtering by size event
  const eventsize = (e) => {
    if (strtemp === "nam") {
      setsizeminboy(`size.size1[lte]=${e}`);
      setsizemaxboy(`size.size5[gte]=${e}`);
    } else if (strtemp === "nu") {
      setsizemingirl(`size.size1[lte]=${e}`);
      setsizemaxgirl(`size.size5[gte]=${e}`);
    } else if (strtemp === "phu-kien") {
      setsizeminpk(`size.size1[lte]=${e}`);
      setsizemaxpk(`size.size5[gte]=${e}`);
    } else if (strtemp === "gosto") {
      setsizemingosto(`size.size1[lte]=${e}`);
      setsizemaxgosto(`size.size5[gte]=${e}`);
    } else if (strtemp === "be-trai") {
      setsizeminbetrai(`size.size1[lte]=${e}`);
      setsizemaxbetrai(`size.size5[gte]=${e}`);
    } else if (strtemp === "be-gai") {
      setsizeminbegai(`size.size1[lte]=${e}`);
      setsizemaxbegai(`size.size5[gte]=${e}`);
    }
  };
  // sort array
  const eventSort = (e) => {
    if (strtemp === "nam") {
      setSortnam(e);
    } else if (strtemp === "nu") {
      setSortnu(e);
    } else if (strtemp === "phu-kien") {
      setSortpk(e);
    } else if (strtemp === "gosto") {
      setSortgosto(e);
    } else if (strtemp === "be-trai") {
      setSorttrai(e);
    } else if (strtemp === "be-gai") {
      setSortgai(e);
    }
  };
  // thanh sắp xếp tiền
  const [valueMoney, setValueMoney] = React.useState([0, 1699000]);
  const rangeSelector = (event, newValue) => {
    setValueMoney(newValue);

    if (strtemp === "nam") {
      setminPrice("price[gte]=" + newValue[0]);
      setmaxPice("price[lte]=" + newValue[1]);
    } else if (strtemp === "nu") {
      setminPricegirl("price[gte]=" + newValue[0]);
      setmaxPicegirl("price[lte]=" + newValue[1]);
    } else if (strtemp === "phu-kien") {
      setminPricepk("price[gte]=" + newValue[0]);
      setmaxPicepk("price[lte]=" + newValue[1]);
    } else if (strtemp === "gosto") {
      setminPricegosto("price[gte]=" + newValue[0]);
      setmaxPicegosto("price[lte]=" + newValue[1]);
    } else if (strtemp === "be-trai") {
      setminPricebetrai("price[gte]=" + newValue[0]);
      setmaxPicebetrai("price[lte]=" + newValue[1]);
    } else if (strtemp === "be-gai") {
      setminPricebegai("price[gte]=" + newValue[0]);
      setmaxPicebegai("price[lte]=" + newValue[1]);
    }
  };

  return (
    <aside className="sidebar_collection">
      <div className="block_content">
        <select
          name="Sort"
          id="sort-by"
          onChange={(e) => eventSort(e.target.value)}
        >
          <option value="">Sắp xếp: </option>
          <option value="sort=price">Giá: Tăng dần</option>
          <option value="sort=-price">Giá: Giảm dần</option>
          <option value="sort=nameProduct">Tên : A - Z</option>
          <option value="sort=-nameProduct">Tên : Z - A</option>
          <option value="sort=dateCreate">Cũ Nhất</option>
          <option value="sort=-dateCreate">Mới Nhất</option>
        </select>

        <div className="sidebar_collection-catalog">
          <span className="sidebar_collection-catalog-subtitle">Giá</span>
          <label htmlFor="range-money">Giá từ:</label>
          <span id="amount-text">
            {" "}
            {valueMoney[0]} VND - {valueMoney[1]} VND
          </span>
          <Slider
            id="range-money"
            value={valueMoney}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
            max={priceProduct_max.price}
          />
        </div>

        <div className="sidebar_collection-catalog">
          <span className="sidebar_collection-catalog-subtitle">Size:</span>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_24"
              onClick={() =>
                eventsize(document.getElementById("span_size_24").innerHTML)
              }
            >
              24
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_25"
              onClick={() =>
                eventsize(document.getElementById("span_size_25").innerHTML)
              }
            >
              25
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_26"
              onClick={() =>
                eventsize(document.getElementById("span_size_26").innerHTML)
              }
            >
              26
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_27"
              onClick={() =>
                eventsize(document.getElementById("span_size_27").innerHTML)
              }
            >
              27
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_28"
              onClick={() =>
                eventsize(document.getElementById("span_size_28").innerHTML)
              }
            >
              28
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_29"
              onClick={() =>
                eventsize(document.getElementById("span_size_29").innerHTML)
              }
            >
              29
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_30"
              onClick={() =>
                eventsize(document.getElementById("span_size_30").innerHTML)
              }
            >
              30
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_31"
              onClick={() =>
                eventsize(document.getElementById("span_size_31").innerHTML)
              }
            >
              31
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_32"
              onClick={() =>
                eventsize(document.getElementById("span_size_32").innerHTML)
              }
            >
              32
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_33"
              onClick={() =>
                eventsize(document.getElementById("span_size_33").innerHTML)
              }
            >
              33
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_34"
              onClick={() =>
                eventsize(document.getElementById("span_size_34").innerHTML)
              }
            >
              34
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_35"
              onClick={() =>
                eventsize(document.getElementById("span_size_35").innerHTML)
              }
            >
              35
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_36"
              onClick={() =>
                eventsize(document.getElementById("span_size_36").innerHTML)
              }
            >
              36
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_37"
              onClick={() =>
                eventsize(document.getElementById("span_size_37").innerHTML)
              }
            >
              37
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_38"
              onClick={() =>
                eventsize(document.getElementById("span_size_38").innerHTML)
              }
            >
              38
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_39"
              onClick={() =>
                eventsize(document.getElementById("span_size_39").innerHTML)
              }
            >
              39
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_40"
              onClick={() =>
                eventsize(document.getElementById("span_size_40").innerHTML)
              }
            >
              40
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_41"
              onClick={() =>
                eventsize(document.getElementById("span_size_41").innerHTML)
              }
            >
              41
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_42"
              onClick={() =>
                eventsize(document.getElementById("span_size_42").innerHTML)
              }
            >
              42
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_43"
              onClick={() =>
                eventsize(document.getElementById("span_size_43").innerHTML)
              }
            >
              43
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_44"
              onClick={() =>
                eventsize(document.getElementById("span_size_44").innerHTML)
              }
            >
              44
            </span>
          </label>
          <label className="sidebar_collection-size-item">
            <span
              id="span_size_45"
              onClick={() =>
                eventsize(document.getElementById("span_size_45").innerHTML)
              }
            >
              45
            </span>
          </label>
        </div>

        <div className="sidebar_collection-catalog">
          <span className="sidebar_collection-catalog-subtitle">Màu sắc:</span>
          <span
            className="catalog_color cam"
            onClick={(e) => eventcolor(e.target.title)}
            title="Cam"
          >
            {" "}
          </span>
          <span
            className="catalog_color den"
            onClick={(e) => eventcolor(e.target.title)}
            title="Đen"
          >
            {" "}
          </span>
          <span
            className="catalog_color do-dam"
            onClick={(e) => eventcolor(e.target.title)}
            title="Đỏ Cam"
          >
            {" "}
          </span>
          <span
            className="catalog_color do"
            onClick={(e) => eventcolor(e.target.title)}
            title="Đỏ"
          >
            {" "}
          </span>
          <span
            className="catalog_color nau-dat"
            onClick={(e) => eventcolor(e.target.title)}
            title="Kem Đậm"
          >
            {" "}
          </span>
          <span
            className="catalog_color nau"
            onClick={(e) => eventcolor(e.target.title)}
            title="Nâu"
          >
            {" "}
          </span>
          <span
            className="catalog_color reu"
            onClick={(e) => eventcolor(e.target.title)}
            title="Rêu"
          >
            {" "}
          </span>
          <span
            className="catalog_color trang"
            onClick={(e) => eventcolor(e.target.title)}
            title="Trắng"
          >
            {" "}
          </span>
          <span
            className="catalog_color vang"
            onClick={(e) => eventcolor(e.target.title)}
            title="Vàng"
          >
            {" "}
          </span>
          <span
            className="catalog_color xam"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xám"
          >
            {" "}
          </span>
          <span
            className="catalog_color xanh-duong-dam"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xanh Dương Đậm"
          >
            {" "}
          </span>
          <span
            className="catalog_color xanh-duong"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xanh Dương"
          >
            {" "}
          </span>
          <span
            className="catalog_color xanh-duong-nhat"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xanh Dương Nhạt"
          >
            {" "}
          </span>
          <span
            className="catalog_color xanh-mi-no"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xanh Mi Nô"
          >
            {" "}
          </span>
          <span
            className="catalog_color xanh"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xanh"
          >
            {" "}
          </span>
          <span
            className="catalog_color xanh-nhot"
            onClick={(e) => eventcolor(e.target.title)}
            title="Xanh Nhạt"
          >
            {" "}
          </span>
          <span
            className="catalog_color hong"
            onClick={(e) => eventcolor(e.target.title)}
            title="Hồng"
          >
            {" "}
          </span>
        </div>
      </div>
    </aside>
  );
}
