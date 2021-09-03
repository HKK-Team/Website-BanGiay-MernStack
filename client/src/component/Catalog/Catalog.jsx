import  React, { useEffect, useState, useContext } from "react"; 
import './Catalog.css'
import {GlobalState} from '../../GlobalState'

export default function Catalog() {
  const state = useContext(GlobalState)
  //sorting
  const [sortnam, setSortnam] = state.productboyApi.sort
  const [sortnu, setSortnu] = state.productgirlApi.sort
  const [sortpk, setSortpk] = state.productpkApi.sort
  const [sortgosto, setSortgosto] = state.productgostoApi.sort
  const [sortbetrai, setSorttrai] = state.productbetraiApi.sort
  const [sortbegai, setSortgai] = state.productbegaiApi.sort
  
  //filtering by color
  const [colorboy, setcolorboy] = state.productboyApi.color
  console.log(colorboy);
  
  
  return (
    <aside className="sidebar_collection">
      <div className="block_content">

        <select name="Sort" id="sort-by" value={sortnam,sortnu,sortpk,sortgosto,sortbetrai,sortbegai} 
        onChange={e => {setSortnam(e.target.value);
         setSortnu(e.target.value);
         setSortpk(e.target.value);
         setSortgosto(e.target.value);
         setSorttrai(e.target.value);
         setSortgai(e.target.value);}}>
          <option value=''>Sắp xếp: </option>
          <option value='sort=price'>Giá: Tăng dần</option>
          <option value='sort=-price'>Giá: Giảm dần</option>
          <option value='sort=nameProduct'>Tên : A - Z</option>
          <option value='sort=-nameProduct'>Tên : Z - A</option>
          <option value='sort=dateCreate'>Cũ Nhất</option>
          <option value='sort=-dateCreate'>Mới Nhất</option>
        </select>

        <div className="sidebar_collection-catalog">
          <span className="sidebar_collection-catalog-subtitle">Giá</span>
          <label htmlFor="amount-text">Giá từ:</label>
          <span id="amount-text"> 0 VND - 2000000 VND</span>
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
          <span className="catalog_color cam"> </span>
          <span className="catalog_color den"> </span>
          <span className="catalog_color do-dam"> </span>
          <span className="catalog_color do"> </span>
          <span className="catalog_color nau-dat"> </span>
          <span className="catalog_color nau"> </span>
          <span className="catalog_color reu"> </span>
          <span className="catalog_color trang"> </span>
          <span className="catalog_color vang"> </span>
          <span className="catalog_color xam"> </span>
          <span className="catalog_color xanh-duong-dam"> </span>
          <span className="catalog_color xanh-duong"> </span>
          <span className="catalog_color xanh-duong-nhat"> </span>
          <span className="catalog_color xanh-mi-no"> </span>
          <span className="catalog_color xanh"> </span>
          <span className="catalog_color xanh-nhot"> </span>
          <span className="catalog_color hong"> </span>
        </div>
      </div>
    </aside>
  );
}
