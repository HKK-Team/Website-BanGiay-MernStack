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
  useEffect(() => {
    imageZoom("productDetail_image-image", "myresult");
  });

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


  function eventfavorite(e) {
    e.preventDefault();
    window.location.href = "/Login";
    alert("Bạn cần đăng nhập để thêm sản phẩm yêu thích !!");
  }
  function eventfavoriteIsLogin(e) {
    e.preventDefault();
    if (sizebychoice === 0) {
      alert("Vui lòng chọn size sản phẩm !!");
    } else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/favorite",
        data: {
          idCategory_product: detail[0].idCategory_product,
          nameProduct: detail[0].nameProduct,
          color: detail[0].color,
          price: detail[0].price,
          image: detail[0].image,
          size: sizebychoice,
          iduser: iduser,
        },
      })
      alert("Sản phẩm đã được thêm vào yêu thích !!");
     window.location.reload(false);
    }
  }
  function eventunfavorite(e) {
    e.preventDefault();
    alert("Sản phẩm đã được bỏ khỏi yêu thích !!");
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
      )
      {
        setCheck(false);
      }
    }
  }, 1000);

  if (check === true) {
    if (isLogged) {
      favorite = (
        <Link to="#" onClick={eventfavoriteIsLogin}>
          <i class="fas fa-heart"></i> Thêm vào yêu thích
        </Link>
      );
    } else {
      favorite = (
        <Link to="#" onClick={eventfavorite}>
          <i class="fas fa-heart"></i> Thêm vào yêu thích
        </Link>
      );
    }
  } else if (check === false) {
    favorite = (
      <Link to="#" onClick={eventunfavorite}>
        <i class="fas fa-heart-broken"></i> Bỏ yêu thích
      </Link>
    );
  }

  function eventchoice1(size) {
    setsizebychoice(size);
  }
  function eventchoice2(size) {
    setsizebychoice(size);
  }
  function eventchoice3(size) {
    setsizebychoice(size);
  }
  function eventchoice4(size) {
    setsizebychoice(size);
  }
  function eventchoice5(size) {
    setsizebychoice(size);
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
                <Link to>
                  <img src={props.imageValue1} alt="" />
                </Link>
                <Link to>
                  <img src={props.imageValue2} alt="" />
                </Link>
                <Link to>
                  <img src={props.imageValue3} alt="" />
                </Link>
                <Link to>
                  <img src={props.imageValue4} alt="" />
                </Link>
                <Link to>
                  <img src={props.imageValue5} alt="" />
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
                  <div id="myresult" class="img-zoom-result"></div>
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
                <span>{props.price} đ</span>
                <div id="vat">*Đã bao gồm VAT</div>
              </div>
              <form action="">
                <div className="productDetail_information-color">
                  <label htmlFor="">Màu sắc</label>
                  <span>{props.color}</span>
                </div>
                <div className="productDetail_information-size">
                  <label htmlFor="">Kích thước</label>
                  <Link to={props.valueSize_1}>
                    <span onClick={() => eventchoice1(props.valueSize_1)}>
                      {props.valueSize_1}
                    </span>
                  </Link>
                  <Link to={props.valueSize_2}>
                    <span onClick={() => eventchoice2(props.valueSize_2)}>
                      {props.valueSize_2}
                    </span>
                  </Link>
                  <Link to={props.valueSize_3}>
                    <span onClick={() => eventchoice3(props.valueSize_3)}>
                      {props.valueSize_3}
                    </span>
                  </Link>
                  <Link to={props.valueSize_4}>
                    <span onClick={() => eventchoice4(props.valueSize_4)}>
                      {props.valueSize_4}
                    </span>
                  </Link>
                  <Link to={props.valueSize_5}>
                    <span onClick={() => eventchoice5(props.valueSize_5)}>
                      {props.valueSize_5}
                    </span>
                  </Link>
                </div>
                <div className="productDetail_information-inventory">
                  <label htmlFor="">Còn hàng:</label>
                  <span>
                    <strong>40</strong> Sản phẩm
                  </span>
                </div>
                <div className="productDetail_information-action-cart">
                  <button>Mua Ngay</button>
                  {favorite}
                </div>
              </form>
              <div className="productDetail_information-hotline">
                <div className="hotline-product">
                  Tư vấn: <Link to="#">0984 943 851</Link>
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
                <AdvertisingCard
                  image={props.image}
                  name={props.name}
                  price={props.price}
                  url="#"
                />
                <AdvertisingCard
                  image={props.image}
                  name={props.name}
                  price={props.price}
                  url="#"
                />
                <AdvertisingCard
                  image={props.image}
                  name={props.name}
                  price={props.price}
                  url="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
