import React, { useEffect, useState, useContext } from "react";
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

  //add event cho mỗi màu khi click
  function eventBlack(e) {
    e.preventDefault();
    setcolorboy("color=Đen");
    setcolorgirl("color=Đen");
    setcolorpk("color=Đen");
    setcolorgosto("color=Đen");
    setcolorbetrai("color=Đen");
    setcolorbegai("color=Đen");
  }
  function eventWhile(e) {
    e.preventDefault();
    setcolorboy("color=Trắng");
    setcolorgirl("color=Trắng");
    setcolorpk("color=Trắng");
    setcolorgosto("color=Trắng");
    setcolorbetrai("color=Trắng");
    setcolorbegai("color=Trắng");
  }
  function eventcam(e) {
    e.preventDefault();
    setcolorboy("color=Cam");
    setcolorgirl("color=Cam");
    setcolorpk("color=Cam");
    setcolorgosto("color=Cam");
    setcolorbetrai("color=Cam");
    setcolorbegai("color=Cam");
  }
  function eventdocam(e) {
    e.preventDefault();
    setcolorboy("color=Đỏ Cam");
    setcolorgirl("color=Đỏ Cam");
    setcolorpk("color=Đỏ Cam");
    setcolorgosto("color=Đỏ Cam");
    setcolorbetrai("color=Đỏ Cam");
    setcolorbegai("color=Đỏ Cam");
  }
  function eventdo(e) {
    e.preventDefault();
    setcolorboy("color=Đỏ");
    setcolorgirl("color=Đỏ");
    setcolorpk("color=Đỏ");
    setcolorgosto("color=Đỏ");
    setcolorbetrai("color=Đỏ");
    setcolorbegai("color=Đỏ");
  }
  function eventkemdam(e) {
    e.preventDefault();
    setcolorboy("color=Kem Đậm");
    setcolorgirl("color=Kem Đậm");
    setcolorpk("color=Kem Đậm");
    setcolorgosto("color=Kem Đậm");
    setcolorbetrai("color=Kem Đậm");
    setcolorbegai("color=Kem Đậm");
  }
  function eventnau(e) {
    e.preventDefault();
    setcolorboy("color=Nâu");
    setcolorgirl("color=Nâu");
    setcolorpk("color=Nâu");
    setcolorgosto("color=Nâu");
    setcolorbetrai("color=Nâu");
    setcolorbegai("color=Nâu");
  }
  function eventreu(e) {
    e.preventDefault();
    setcolorboy("color=Rêu");
    setcolorgirl("color=Rêu");
    setcolorpk("color=Rêu");
    setcolorgosto("color=Rêu");
    setcolorbetrai("color=Rêu");
    setcolorbegai("color=Rêu");
  }
  function eventvang(e) {
    e.preventDefault();
    setcolorboy("color=Vàng");
    setcolorgirl("color=Vàng");
    setcolorpk("color=Vàng");
    setcolorgosto("color=Vàng");
    setcolorbetrai("color=Vàng");
    setcolorbegai("color=Vàng");
  }
  function eventxam(e) {
    e.preventDefault();
    setcolorboy("color=Xám");
    setcolorgirl("color=Xám");
    setcolorpk("color=Xám");
    setcolorgosto("color=Xám");
    setcolorbetrai("color=Xám");
    setcolorbegai("color=Xám");
  }
  function eventxanhduongdam(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Dương Đậm");
    setcolorgirl("color=Xanh Dương Đậm");
    setcolorpk("color=Xanh Dương Đậm");
    setcolorgosto("color=Xanh Dương Đậm");
    setcolorbetrai("color=Xanh Dương Đậm");
    setcolorbegai("color=Xanh Dương Đậm");
  }
  function eventxanhduong(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Dương");
    setcolorgirl("color=Xanh Dương");
    setcolorpk("color=Xanh Dương");
    setcolorgosto("color=Xanh Dương");
    setcolorbetrai("color=Xanh Dương");
    setcolorbegai("color=Xanh Dương");
  }
  function eventxanhduongnhat(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Dương Nhạt");
    setcolorgirl("color=Xanh Dương Nhạt");
    setcolorpk("color=Xanh Dương Nhạt");
    setcolorgosto("color=Xanh Dương Nhạt");
    setcolorbetrai("color=Xanh Dương Nhạt");
    setcolorbegai("color=Xanh Dương Nhạt");
  }
  function eventxanhmino(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Mi Nô");
    setcolorgirl("color=Xanh Mi Nô");
    setcolorpk("color=Xanh Mi Nô");
    setcolorgosto("color=Xanh Mi Nô");
    setcolorbetrai("color=Xanh Mi Nô");
    setcolorbegai("color=Xanh Mi Nô");
  }
  function eventxanh(e) {
    e.preventDefault();
    setcolorboy("color=Xanh");
    setcolorgirl("color=Xanh");
    setcolorpk("color=Xanh");
    setcolorgosto("color=Xanh");
    setcolorbetrai("color=Xanh");
    setcolorbegai("color=Xanh");
  }
  function eventxanhnhot(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Nhạt");
    setcolorgirl("color=Xanh Nhạt");
    setcolorpk("color=Xanh Nhạt");
    setcolorgosto("color=Xanh Nhạt");
    setcolorbetrai("color=Xanh Nhạt");
    setcolorbegai("color=Xanh Nhạt");
  }
  function eventhong(e) {
    e.preventDefault();
    setcolorboy("color=Hồng");
    setcolorgirl("color=Hồng");
    setcolorpk("color=Hồng");
    setcolorgosto("color=Hồng");
    setcolorbetrai("color=Hồng");
    setcolorbegai("color=Hồng");
  }
  // thanh sắp xếp tiền
  const [valueMoney, setValueMoney] = React.useState([0, 2000000]);
  const rangeSelector = (event, newValue) => {
    setValueMoney(newValue);
    console.log(newValue);
  };
  return (
    <aside className="sidebar_collection">
      <div className="block_content">
        <select
          name="Sort"
          id="sort-by"
          value={(sortnam, sortnu, sortpk, sortgosto, sortbetrai, sortbegai)}
          onChange={(e) => {
            setSortnam(e.target.value);
            setSortnu(e.target.value);
            setSortpk(e.target.value);
            setSortgosto(e.target.value);
            setSorttrai(e.target.value);
            setSortgai(e.target.value);
          }}
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
            max="2000000"
          />
        </div>
        <div className="sidebar_collection-catalog">
          <span className="sidebar_collection-catalog-subtitle">Size:</span>
          <label className="sidebar_collection-size-item">
            <span>24</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>25</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>26</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>27</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>28</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>29</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>30</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>31</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>32</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>33</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>34</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>35</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>36</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>37</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>38</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>39</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>40</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>41</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>42</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>43</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>44</span>
          </label>
          <label className="sidebar_collection-size-item">
            <span>45</span>
          </label>
        </div>

        <div className="sidebar_collection-catalog">
          <span className="sidebar_collection-catalog-subtitle">Màu sắc:</span>
          <span className="catalog_color cam" onClick={eventcam}>
            {" "}
          </span>
          <span className="catalog_color den" onClick={eventBlack}>
            {" "}
          </span>
          <span className="catalog_color do-dam" onClick={eventdocam}>
            {" "}
          </span>
          <span className="catalog_color do" onClick={eventdo}>
            {" "}
          </span>
          <span className="catalog_color nau-dat" onClick={eventkemdam}>
            {" "}
          </span>
          <span className="catalog_color nau" onClick={eventnau}>
            {" "}
          </span>
          <span className="catalog_color reu" onClick={eventreu}>
            {" "}
          </span>
          <span className="catalog_color trang" onClick={eventWhile}>
            {" "}
          </span>
          <span className="catalog_color vang" onClick={eventvang}>
            {" "}
          </span>
          <span className="catalog_color xam" onClick={eventxam}>
            {" "}
          </span>
          <span
            className="catalog_color xanh-duong-dam"
            onClick={eventxanhduongdam}
          >
            {" "}
          </span>
          <span className="catalog_color xanh-duong" onClick={eventxanhduong}>
            {" "}
          </span>
          <span
            className="catalog_color xanh-duong-nhat"
            onClick={eventxanhduongnhat}
          >
            {" "}
          </span>
          <span className="catalog_color xanh-mi-no" onClick={eventxanhmino}>
            {" "}
          </span>
          <span className="catalog_color xanh" onClick={eventxanh}>
            {" "}
          </span>
          <span className="catalog_color xanh-nhot" onClick={eventxanhnhot}>
            {" "}
          </span>
          <span className="catalog_color hong" onClick={eventhong}>
            {" "}
          </span>
        </div>
      </div>
    </aside>
  );
}
