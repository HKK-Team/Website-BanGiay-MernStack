import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Chart/Chart";
import { productData } from "../../TotalData";
import { Publish } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useContext, useState } from "react";
import axios from "axios";
import { toastError, toastPromise } from "../../components/ToastMassage/ToastMassage";
// chỉnh sửa sản phẩm
export default function Product() {
  // use param get productAdminId
  const params = useParams();
  // call api get allproduct
  const state = useContext(GlobalState);
  const [product] = state.productDetailApi.productDetail;
  // get the corresponding product
  const [data] = product.filter((item) => {
    return item._id === params.productAdminId;
  });
  // Edit Product
  const [products, setProducts] = useState({
    nameProduct: data.nameProduct,
    idCategory_product: data.idCategory_product,
    color: "",
    size1: data.size.size1,
    size2: data.size.size2,
    size3: data.size.size3,
    size4: data.size.size4,
    size5: data.size.size5,
    price: data.price,
    image: data.image,
    _id: data._id,
  });
  // set Edit Product
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  // post from client to server
  const EditProductSubmit = async (e) => {
    e.preventDefault();

    await toastPromise(
      axios.post("http://localhost:5000/admin/editProduct", { ...products }),
      () => {
        setTimeout(() => (window.location.href = "/productsAdmin"), 2000);
        return "Update Product Succesfully!";
      }
    );
  };
  // save image to cloud
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) return toastError("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return toastError("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return toastError("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/admin/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      setProducts({ ...products, image: res.data.image });
    } catch (err) {
        toastError(err.response.data.msg);
    }
  };
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
          <Chart
            data={productData}
            dataKey="Sales"
            title="Hiệu suất bán hàng"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={data.image} alt="" className="productInfoImg" />
            <span className="productName">{data.nameProduct}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{data._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Mã sản phẩm:</span>
              <span className="productInfoValue">
                {data.idCategory_product}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Màu sắc:</span>
              <span className="productInfoValue">{data.color}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Số size:</span>
              <span className="productInfoValue">
                {data.size.size1} {data.size.size2} {data.size.size3}{" "}
                {data.size.size4} {data.size.size5}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Giá:</span>
              <span className="productInfoValue">
                {data.price.toLocaleString()} VND
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Trong kho:</span>
              <span className="productInfoValue">Trống</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={EditProductSubmit}>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Giày Thể Thao Nam Biti’s Hunter Core Z Collection Stone DSMH06400DEN"
              name="nameProduct"
              value={products.nameProduct}
              onChange={onChangeInput}
            />
            <label>Mã sản phẩm</label>
            <input
              type="text"
              placeholder="DSMH02400CAM47"
              name="idCategory_product"
              value={products.idCategory_product}
              onChange={onChangeInput}
            />
            <label>Màu sắc</label>
            <select name="color" id="active" onChange={onChangeInput}>
              <option value="">
                {" "}
                ------------------------------------------------ Select
                ------------------------------------------------
              </option>
              <option value="Trắng">Trắng</option>
              <option value="Đen">Đen</option>
              <option value="Đỏ">Đỏ</option>
              <option value="Hồng">Hồng</option>
              <option value="Xanh Dương">Xanh Dương</option>
              <option value="Cam">Cam</option>
              <option value="Xanh Dương Đậm">Xanh Dương Đậm</option>
              <option value="Nâu">Nâu</option>
              <option value="Xanh">Xanh</option>
              <option value="Vàng">Vàng</option>
              <option value="Xám">Xám</option>
              <option value="Xanh Nhạt">Xanh Nhạt</option>
              <option value="Kem Đậm">Kem Đậm</option>
              <option value="Tím">Tím</option>
            </select>
            <label>Sửa size 1</label>
            <input
              type="number"
              placeholder="size1..."
              name="size1"
              value={products.size1}
              onChange={onChangeInput}
            />
            <label>Sửa size 2</label>
            <input
              type="number"
              placeholder="size2..."
              name="size2"
              value={products.size2}
              onChange={onChangeInput}
            />
            <label>Sửa size 3</label>
            <input
              type="number"
              placeholder="size3..."
              name="size3"
              value={products.size3}
              onChange={onChangeInput}
            />
          </div>
          <div className="productFormRight">
            <div className="productFormLeft">
              <label>Sửa size 4</label>
              <input
                type="number"
                placeholder="size4..."
                name="size4"
                value={products.size4}
                onChange={onChangeInput}
              />
              <label>Sửa size 5</label>
              <input
                type="number"
                placeholder="size5..."
                name="size5"
                value={products.size5}
                onChange={onChangeInput}
              />
              <label>Giá</label>
              <input
                type="number"
                placeholder="1.999.000 VND"
                name="price"
                value={products.price}
                onChange={onChangeInput}
              />
              <label>Trong kho</label>
              <select name="inStock" id="idStock">
                <option value="yes">Còn</option>
                <option value="no">Trống</option>
              </select>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
        <div className="productUpload">
          <img src={data.image} alt="" className="productUploadImg" />
          <label htmlFor="file">
            <Publish />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </div>
      </div>
    </div>
  );
}
