import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Chart/Chart";
import {productData} from "../../TotalData"
import { Publish } from "@material-ui/icons";
import {useParams} from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useContext,useState} from "react";
import axios from "axios";
// chỉnh sửa sản phẩm
export default function Product() {
    // use param get productAdminId
    const params = useParams();
    // call api get allproduct
    const state = useContext(GlobalState);
    const [product] = state.productDetailApi.productDetail;
    // get the corresponding product
    const [data] = product.filter((item) => {
        return item._id === params.productAdminId
    });
    // Edit Product
    const [products, setProducts] = useState({
        nameProduct : '',idCategory_product : '',color :'',addsize :'',deletesize :'', price:'',image : '', _id : data._id
    });
    // set Edit Product
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setProducts({...products, [name]:value,})
    }
    // post from client to server
    const EditProductSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/admin/editProduct', {...products})
            alert("Update Product Succesfully!")
            window.location.href = "/productsAdmin";
        } catch (err) {
            alert(err.response.data.msg)
        }
    };
    // save image to cloud
    const handleUpload = async e =>{
        e.preventDefault()
        try {
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            const res = await axios.post('/admin/upload', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setProducts({...products,image : res.data.image})

        } catch (err) {
            alert(err.response.data.msg)
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
                <Chart data={productData} dataKey="Sales" title="Hiệu suất bán hàng"/>
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
                        <span className="productInfoValue">{data.idCategory_product}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Màu sắc:</span>
                        <span className="productInfoValue">{data.color}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Số size:</span>
                        <span className="productInfoValue">{data.size.size1} {data.size.size2} {data.size.size3} {data.size.size4} {data.size.size5}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Giá:</span>
                        <span className="productInfoValue">{data.price.toLocaleString()} VND</span>
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
                        name = "nameProduct"
                        value={products.nameProduct} 
                        onChange={onChangeInput}
                    />
                    <label>Mã sản phẩm</label>
                    <input 
                        type="text" 
                        placeholder="DSMH02400CAM47"
                        name = "idCategory_product"
                        value={products.idCategory_product} 
                        onChange={onChangeInput} 
                    />
                    <label>Màu sắc</label>
                    <input 
                        type="text" 
                        placeholder="Trăng"
                        name = "color"
                        value={products.color} 
                        onChange={onChangeInput} 
                    />
                    <label>Thêm size</label>
                    <input 
                        type="number" 
                        placeholder="45" 
                        name = "addsize"
                        value={products.addsize} 
                        onChange={onChangeInput} 
                    />
                    <label>Xóa size</label>
                    <input 
                        type="number" 
                        placeholder="39" 
                        name = "deletesize"
                        value={products.deletesize} 
                        onChange={onChangeInput} 
                    />
                    <label>Giá</label>
                    <input 
                        type="number" 
                        placeholder="1.999.000 VND" 
                        name = "price"
                        value={products.price} 
                        onChange={onChangeInput}
                    />
                    <label>Trong kho</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Còn</option>
                        <option value="no">Trống</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <button className="productButton">Update</button>
                </div>
            </form>
            <div className="productUpload">
                <img src={data.image} alt="" className="productUploadImg" />
                <label for="file">
                    <Publish/>
                </label>
                <input 
                    type="file" 
                    id="file" 
                    style={{display:"none"}}
                    onChange = {handleUpload}
                />
            </div>
        </div>
        </div>
    );
}