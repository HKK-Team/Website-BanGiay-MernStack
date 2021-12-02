/* eslint-disable no-loop-func */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useContext } from "react";
import "./ProductDetail.css";
import zalopay from "../../images/images/zalopay.webp";
import visa from "../../images/images/visa.webp";
import mastercard from "../../images/images/mastercard.webp";
import cod from "../../images/images/cod.webp";
import logo from "../../images/images/new.webp";
import AdvertisingCard from "./AdvertisingCard/AdvertisingCard";
import Titlebar from "./Titlebar/Titlebar";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  toastInfor,
  toastSuccess,
} from "../../admins/components/ToastMassage/ToastMassage";

export default function ProductDetail(props) {
  // zoom hình khi hover
  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  //zoom hover image
  useEffect(() => {
    imageZoom("productDetail_image-image", "myresult");
  }, []);
  const [changeImg, setchangeImg] = useState(1);
  useEffect(() => {
    imageZoom("productDetail_image-image", "myresult");
    document.getElementsByClassName("img-zoom-lens")[0].remove("img-zoom-lens");
  }, [changeImg]);

  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [iduser, setiduser] = state.userAPI.iduser;
  const [productFavorites, setproductFavorites] =
    state.productFavorites.productFavorites;

  //unfavorite or favorite product
  const [check, setCheck] = useState(true);
  var favorite;
  const params = useParams();
  const [productDetail] = state.productDetailApi.productDetail;
  //create array for save size by user choice
  const [sizebychoice, setsizebychoice] = useState(0);
  const detail = productDetail.filter((item) => {
    // tìm và trả về đối tượng chứa thuộc tính của giày
    return item.idCategory_product === params.id;
  });
  const recomment = productDetail.filter((item) => {
    return (
      item.nameCategoryProduct === detail[0].nameCategoryProduct &&
      item.detailCategory === detail[0].detailCategory &&
      item.idCategory_product !== detail[0].idCategory_product
    );
  });

  function eventfavorite(e) {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
    toastInfor("Bạn cần đăng nhập để thêm sản phẩm yêu thích !!");
  }

  function eventbuynow(e) {
    e.preventDefault();
    if (sizebychoice === 0) {
      toastInfor("Vui lòng chọn size sản phẩm !!");
    } else {
      const settings = {
        idproduct: detail[0]._id,
        id_product: detail[0].idCategory_product,
        nameProduct: detail[0].nameProduct,
        nameCategoryProduct: detail[0].nameCategoryProduct,
        color: detail[0].color,
        price: detail[0].price,
        totalprice: detail[0].price,
        size: sizebychoice,
        image: detail[0].image,
        quantity: 1,
      };

      if (sessionStorage.getItem("settings") === null) {
        var data = [];
        data.push(settings);
        sessionStorage.setItem("settings", JSON.stringify(data));
        toastSuccess("Sản phẩm đã được thêm vào giỏ hàng !!!");
      } else {
        data = JSON.parse(sessionStorage.getItem("settings"));
        if (data.map((e) => e.id_product).indexOf(settings.id_product) === -1) {
          data.push(settings);
          toastSuccess("Sản phẩm đã được thêm vào giỏ hàng !!!");
        } else {
          toastInfor("Sản phẩm đã tồn tại trong giỏ hàng !!!");
        }
        sessionStorage.setItem("settings", JSON.stringify(data));
      }
    }
  }

  function eventfavoriteIsLogin(e) {
    e.preventDefault();
    if (sizebychoice === 0) {
      toastInfor("Vui lòng chọn size sản phẩm !!");
    } else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/favorite",
        data: {
          idCategory_product: detail[0].idCategory_product,
          nameProduct: detail[0].nameProduct,
          nameCategoryProduct: detail[0].nameCategoryProduct,
          color: detail[0].color,
          price: detail[0].price,
          image: detail[0].image,
          size: sizebychoice,
          iduser: iduser,
        },
      });
      toastSuccess("Sản phẩm đã được thêm vào yêu thích !!");
      window.location.reload(false);
    }
  }
  function eventunfavorite(e) {
    e.preventDefault();
    toastInfor("Sản phẩm đã được bỏ khỏi yêu thích !!");
    for (let i = 0; i < productFavorites.length; i++) {
      if (
        iduser === productFavorites[i].iduser &&
        detail[0].idCategory_product === productFavorites[i].idCategory_product
      ) {
        axios.delete(
          `http://localhost:5000/api/favorite/${productFavorites[i]._id}`
        );
      }
    }
    window.location.reload(false);
  }

  setTimeout(() => {
    for (let i = 0; i < detail.length; i++) {
      var temp = detail[i].idCategory_product;
      break;
    }
    for (let i = 0; i < productFavorites.length; i++) {
      if (
        iduser === productFavorites[i].iduser &&
        temp === productFavorites[i].idCategory_product
      ) {
        setCheck(false);
      }
    }
  }, 1000);

  if (check === true) {
    if (isLogged) {
      favorite = (
        <Link to="/" onClick={eventfavoriteIsLogin}>
          <i className="fas fa-heart"></i> Thêm vào yêu thích
        </Link>
      );
    } else {
      favorite = (
        <Link to="/" onClick={eventfavorite}>
          <i className="fas fa-heart"></i> Thêm vào yêu thích
        </Link>
      );
    }
  } else if (check === false) {
    favorite = (
      <Link to="/" onClick={eventunfavorite}>
        <i className="fas fa-heart-broken"></i> Bỏ yêu thích
      </Link>
    );
  }
  // Hiện thị UI click size
  const [active, setactive] = useState();
  useEffect(() => {
    var flag = false;
    var btnContainer = document.getElementsByClassName(
      "productDetail_information-size"
    );
    var btns = btnContainer[0].getElementsByClassName(
      "productDetail_information-sizeValue"
    );
    for (let j = 0; j < btns.length; j++) {
      btns[j].addEventListener("click", function () {
        var current = document.getElementsByClassName("checkedListSize");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(
            " checkedListSize",
            ""
          );
        }
        this.className += " checkedListSize";
        flag = true;
      });
      if (flag === true) return;
    }
    return () => null;
  }, [active]);

  function eventchoice1(size) {
    setsizebychoice(size);
    setactive(0);
  }
  function eventchoice2(size) {
    setsizebychoice(size);
    setactive(1);
  }
  function eventchoice3(size) {
    setsizebychoice(size);
    setactive(2);
  }
  function eventchoice4(size) {
    setsizebychoice(size);
    setactive(3);
  }
  function eventchoice5(size) {
    setsizebychoice(size);
    setactive(4);
  }

  return (
    <section className="productDetail">
      <Titlebar name={props.name} />
      <div className="container">
        <div className="row">
          <div className="productDetail_wrapper">
            <div className="productDetail_image">
              {/* sliderProductDetail */}
              <div id="sliderProductDetail">
                <svg viewBox="0 0 24 24">
                  <path d="M20.902 17.279c0.325 0.322 0.851 0.322 1.175 0 0.325-0.322 0.325-0.841 0-1.163l-9.49-9.396c-0.324-0.322-0.85-0.322-1.174 0l-9.49 9.396c-0.324 0.322-0.325 0.841 0 1.163s0.85 0.322 1.175 0l8.902-8.569 8.902 8.569z"></path>
                </svg>
                <Link to="#">
                  <img
                    src={props.imageValue1}
                    alt="image"
                    onClick={() => {
                      document.getElementById(
                        "productDetail_image-image"
                      ).src = `${props.imageValue1}`;
                      setchangeImg(1);
                    }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src={props.imageValue2}
                    alt=" "
                    onClick={() => {
                      document.getElementById(
                        "productDetail_image-image"
                      ).src = `${props.imageValue2}`;
                      setchangeImg(2);
                    }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src={props.imageValue3}
                    alt=" "
                    onClick={() => {
                      document.getElementById(
                        "productDetail_image-image"
                      ).src = `${props.imageValue3}`;
                      setchangeImg(3);
                    }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src={props.imageValue4}
                    alt=" "
                    onClick={() => {
                      document.getElementById(
                        "productDetail_image-image"
                      ).src = `${props.imageValue4}`;
                      setchangeImg(4);
                    }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src={props.imageValue5}
                    alt=" "
                    onClick={() => {
                      document.getElementById(
                        "productDetail_image-image"
                      ).src = `${props.imageValue5}`;
                      setchangeImg(5);
                    }}
                  />
                </Link>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3.098 6.721c-0.325-0.322-0.851-0.322-1.175 0-0.324 0.32-0.324 0.841 0 1.163l9.49 9.396c0.325 0.322 0.85 0.322 1.175 0l9.49-9.396c0.324-0.322 0.325-0.841 0-1.163s-0.852-0.322-1.175-0.001l-8.903 8.569-8.902-8.568z"
                    data-selected="true"
                    data-label-id="0"
                    data-metatip="true"
                  ></path>
                </svg>
              </div>
              {/* sliderProductDetail */}
              <div className="productDetail_image-image-box">
                <div className="wrapper-image">
                  <img
                    src={props.image}
                    alt="image"
                    id="productDetail_image-image"
                  />
                  <div id="myresult" className="img-zoom-result"></div>
                  <div id="ZoomTint"></div>
                </div>
                <span className="new">
                  <img src={logo} alt="new" />
                </span>
              </div>
              <div className="productDetail_description">
                <p className="productDetail_description-text">
                  Chưa có mô tả cho sản phẩm này
                </p>
              </div>
            </div>
            <div className="productDetail_information">
              <h1 className="productDetail_information-name">{props.name}</h1>
              <div className="productDetail_information-msp">
                Mã sản phẩm :<span>{" " + props.ProductCode}</span>
              </div>
              <div className="productDetail_information-price">
                <span>{props.price.toLocaleString()} đ</span>
                <div id="vat">*Đã bao gồm VAT</div>
              </div>
              <form action="">
                <div className="productDetail_information-color">
                  <label htmlFor="">Màu sắc</label>
                  <span>
                    <img src={props.image} alt={props.color}></img>
                    {props.color}
                  </span>
                </div>
                <div className="productDetail_information-size">
                  <label htmlFor="">Kích thước</label>
                  <span
                    onClick={() => eventchoice1(props.valueSize_1)}
                    className="productDetail_information-sizeValue"
                  >
                    {props.valueSize_1}
                  </span>
                  <span
                    onClick={() => eventchoice2(props.valueSize_2)}
                    className="productDetail_information-sizeValue"
                  >
                    {props.valueSize_2}
                  </span>
                  <span
                    onClick={() => eventchoice3(props.valueSize_3)}
                    className="productDetail_information-sizeValue"
                  >
                    {props.valueSize_3}
                  </span>
                  <span
                    onClick={() => eventchoice4(props.valueSize_4)}
                    className="productDetail_information-sizeValue"
                  >
                    {props.valueSize_4}
                  </span>
                  <span
                    onClick={() => eventchoice5(props.valueSize_5)}
                    className="productDetail_information-sizeValue"
                  >
                    {props.valueSize_5}
                  </span>
                </div>
                <div className="productDetail_information-inventory">
                  <label htmlFor="">Còn hàng:</label>
                  <span>
                    <strong>4</strong> Sản phẩm
                  </span>
                </div>
                <div className="productDetail_information-action-cart">
                  <button onClick={eventbuynow}>Mua Ngay</button>
                  {favorite}
                </div>
              </form>
              <div className="productDetail_information-hotline">
                <div className="hotline-product">
                  Tư vấn: <Link to="/">0984 943 851</Link>
                </div>
                <div className="payment-product">
                  <img src={zalopay} alt="zalo pay" />
                  <img src={visa} alt="vi sa" />
                  <img src={mastercard} alt="master card" />
                  <img src={cod} alt="money" />
                </div>
              </div>
              <h3
                style={{
                  margin: "40px 0px 5px",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "25.2px",
                  fontFamily: "open sans",
                }}
              >
                Có thể bạn sẽ thích
              </h3>
              <div className="xlab-main">
                {recomment.slice(0, 3).map((item) => (
                  <AdvertisingCard
                    key={item._id}
                    image={item.image}
                    name={item.nameProduct}
                    price={item.price.toLocaleString()}
                    masp={item.idCategory_product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
