import "./NewProduct.css";
import { useState } from "react";
import axios from "axios";
import { toastError, toastPromise } from "../../components/ToastMassage/ToastMassage";
// thêm sản phẩm mới
export default function NewProduct() {
  // New Product
  const [products, setProducts] = useState({
    image: "",
    images1: "",
    images2: "",
    images3: "",
    images4: "",
    images5: "",
    nameProduct: "",
    idCategory_product: "",
    color: "",
    detailCategory: "",
    nameCategoryProduct: "",
    size1: "",
    size2: "",
    size3: "",
    size4: "",
    size5: "",
    price: "",
  });
  // set New Product
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  // post from client to server
  const NewProductSubmit = async (e) => {
    e.preventDefault();
    await toastPromise(
      axios.post("http://localhost:5000/admin/Create_Product", { ...products }),
      () => {
        setTimeout(() => (window.location.href = "/productsAdmin"), 2000);
        return "Create Users Succesfully!";
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
  // save image to cloud
  const handleUpload1 = async (e) => {
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
      setProducts({ ...products, images1: res.data.image });
    } catch (err) {
      toastError(err.response.data.msg);
    }
  };
  // save image to cloud
  const handleUpload2 = async (e) => {
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
      setProducts({ ...products, images2: res.data.image });
    } catch (err) {
      toastError(err.response.data.msg);
    }
  };
  // save image to cloud
  const handleUpload3 = async (e) => {
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
      setProducts({ ...products, images3: res.data.image });
    } catch (err) {
      toastError(err.response.data.msg);
    }
  };
  // save image to cloud
  const handleUpload4 = async (e) => {
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
      setProducts({ ...products, images4: res.data.image });
    } catch (err) {
      toastError(err.response.data.msg);
    }
  };
  // save image to cloud
  const handleUpload5 = async (e) => {
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
      setProducts({ ...products, images5: res.data.image });
    } catch (err) {
      toastError(err.response.data.msg);
    }
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <div className="addProductItem">
        <label>Hình ảnh main</label>
        <input type="file" id="file" onChange={handleUpload} />
      </div>
      <div className="addProductItem">
        <label>Hình ảnh 1</label>
        <input type="file" id="file" onChange={handleUpload1} />
      </div>
      <div className="addProductItem">
        <label>Hình ảnh 2</label>
        <input type="file" id="file" onChange={handleUpload2} />
      </div>
      <div className="addProductItem">
        <label>Hình ảnh 3</label>
        <input type="file" id="file" onChange={handleUpload3} />
      </div>
      <div className="addProductItem">
        <label>Hình ảnh 4</label>
        <input type="file" id="file" onChange={handleUpload4} />
      </div>
      <div className="addProductItem">
        <label>Hình ảnh 5</label>
        <input type="file" id="file" onChange={handleUpload5} />
      </div>
      <form className="addProductForm" onSubmit={NewProductSubmit}>
        <div className="addProductItem">
          <label>Product name</label>
          <input
            type="text"
            placeholder="Product name"
            name="nameProduct"
            required
            value={products.nameProduct}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Mã sản phẩm</label>
          <input
            type="text"
            placeholder="Mã sản phẩm"
            name="idCategory_product"
            required
            value={products.idCategory_product}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Màu sắc</label>
          <select name="color" id="active" onChange={onChangeInput}>
            <option value="">
              --------------------Select--------------------
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
        </div>
        <div className="addProductItem">
          <label>Loại sản phẩm</label>
          <select name="detailCategory" id="active" onChange={onChangeInput}>
            <option value="">
              --------------------Select--------------------
            </option>
            <option value="hunter">Hunter</option>
            <option value="sandal">Sandal</option>
            <option value="giaythethao">Giày thể thao</option>
            <option value="giaychaybo">Giày chạy bộ</option>
            <option value="giaydabanh">Giày đá banh</option>
            <option value="giaytay">Giày tây</option>
            <option value="dep">Dép</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Tên loại sản phẩm</label>
          <select
            name="nameCategoryProduct"
            id="active"
            onChange={onChangeInput}
          >
            <option value="">
              --------------------Select--------------------
            </option>
            <option value="Hunter Nam">Hunter Nam</option>
            <option value="Hunter Nữ">Hunter Nữ</option>
            <option value="Gosto">Gosto</option>
            <option value="Phụ Kiện">Phụ Kiện</option>
            <option value="Bé Nam">Bé Trai</option>
            <option value="Bé Nữ">Bé Gái</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Số size 1</label>
          <input
            type="number"
            placeholder="size1..."
            name="size1"
            required
            value={products.size1}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Số size 2</label>
          <input
            type="number"
            placeholder="size2..."
            name="size2"
            required
            value={products.size2}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Số size 3</label>
          <input
            type="number"
            placeholder="size3..."
            name="size3"
            required
            value={products.size3}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Số size 4</label>
          <input
            type="number"
            placeholder="size4..."
            name="size4"
            required
            value={products.size4}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Số size 5</label>
          <input
            type="number"
            placeholder="size5..."
            name="size5"
            required
            value={products.size5}
            onChange={onChangeInput}
          />
        </div>
        <div className="addProductItem">
          <label>Giá</label>
          <input
            type="number"
            placeholder="Giá"
            name="price"
            required
            value={products.price}
            onChange={onChangeInput}
          />
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
