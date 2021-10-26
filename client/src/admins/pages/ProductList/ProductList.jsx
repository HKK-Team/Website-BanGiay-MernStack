import "./ProductList.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { getdata } from "../../TotalData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toastPromise } from "../../components/ToastMassage/ToastMassage";
export default function ProductList() {
  const [data] = useState(getdata.productRows);

  //Xóa sản phẩm
  const handleDelete = (id) => {
    if (window.confirm("Bạn thực sự muốn xóa sản phẩm này không?")) {
      toastPromise(
        axios.delete(`http://localhost:5000/admin/deleteProduct/${id}`),
        () => {
          setTimeout(() => {
            window.location.href = "/productsAdmin";
          }, 2000);
          return "Deleted Product Successfully!";
        }
      );
    }
  };
  // khởi tạo dữ liệu sản phẩm dạng cột
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "idCategory_product", headerName: "Mã sản phẩm", width: 165 },
    {
      field: "nameProduct",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem" style={{ overflow: "auto" }}>
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.nameProduct}
          </div>
        );
      },
    },
    { field: "nameCategoryProduct", headerName: "Loại sản phẩm", width: 170 },
    {
      field: "color",
      headerName: "color",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.price.toLocaleString()} VND
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productAdmin/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={9}
        checkboxSelection
        localeText={{
          toolbarDensity: "Size",
          toolbarDensityLabel: "Size",
          toolbarDensityCompact: "Small",
          toolbarDensityStandard: "Medium",
          toolbarDensityComfortable: "Large",
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
