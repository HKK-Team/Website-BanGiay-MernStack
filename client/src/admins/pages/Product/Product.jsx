import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Chart/Chart"
import {productData} from "../../TotalData"
import { Publish } from "@material-ui/icons";

// chỉnh sửa sản phẩm
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproductAdmin">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Hiệu suất bán hàng"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://product.hstatic.net/1000230642/product/ahuh00300trg__3__3988f87ca24d4588b3531392ff2df45e_1024x1024.jpg" alt="" className="productInfoImg" />
                  <span className="productName">Giày Thể Thao Nam Biti’s Hunter Core Z Collection Stone DSMH06400DEN</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">61263c32cd0782f5f0743775</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Mã sản phẩm:</span>
                      <span className="productInfoValue">DSMH02400CAM47</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Màu sắc:</span>
                      <span className="productInfoValue">Trắng</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Số size:</span>
                      <span className="productInfoValue">39 30 41 42 43</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Giá:</span>
                      <span className="productInfoValue">1.999.000 VND</span>
                  </div>   
                  <div className="productInfoItem">
                      <span className="productInfoKey">Trong kho:</span>
                      <span className="productInfoValue">Trống</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Giày Thể Thao Nam Biti’s Hunter Core Z Collection Stone DSMH06400DEN" />
                  <label>Mã sản phẩm</label>
                  <input type="text" placeholder="DSMH02400CAM47" />
                  <label>Màu sắc</label>
                  <input type="text" placeholder="Trăng" />
                  <label>Thêm size</label>
                  <input type="number" placeholder="45" />
                  <label>Xóa size</label>
                  <input type="number" placeholder="39" />
                  <label>Giá</label>
                  <input type="number" placeholder="1.999.000 VND" />
                  <label>Trong kho</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Còn</option>
                      <option value="no">Trống</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://product.hstatic.net/1000230642/product/ahuh00300trg__3__3988f87ca24d4588b3531392ff2df45e_1024x1024.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}