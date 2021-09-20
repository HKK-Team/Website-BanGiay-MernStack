import "./NewProduct.css";

// thêm sản phẩm mới
export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Hình ảnh</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Product name</label>
          <input type="text" placeholder="Product name" />
        </div>
        <div className="addProductItem">
          <label>Mã sản phẩm</label>
          <input type="text" placeholder="Mã sản phẩm" />
        </div>
        <div className="addProductItem">
          <label>Màu sắc</label>
          <input type="text" placeholder="Màu sắc" />
        </div>
        <div className="addProductItem">
          <label>Số size</label>
          <input type="text" placeholder="39 , 40 , 41 , 42 , 43" />
        </div>
        <div className="addProductItem">
          <label>Giá</label>
          <input type="number" placeholder="Giá" />
        </div>
        <div className="addProductItem">
          <label>Trong Kho</label>
          <select name="active" id="active">
            <option value="yes">Còn</option>
            <option value="no">Trống</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}