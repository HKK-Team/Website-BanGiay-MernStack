import "./BillList.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { getdata } from "../../TotalData";
import axios from "axios"
import { toastSuccess } from "../../components/ToastMassage/ToastMassage";
// bảng hóa đơn
export default function BillList() {
  const [data] = useState(getdata.payments);

  // xóa hóa đơn khỏi bảng
  const handleDelete = (id) => {
    if(window.confirm("Bạn thực sự muốn xóa Bills này không?")){
      axios.delete(`http://localhost:5000/admin/deletePayment/${id}`);
      toastSuccess("Deleted Bills Successfully!");
      window.location.href = "/BillsAdmin";
    }
  };
  // khởi tạo dữ liệu bảng
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "user_id", headerName: "ID user", width: 250 },
    {
      field: "fullName",
      headerName: "Full name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
              alt=""
            />
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "address",
      headerName: "Address",
      width: 300,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      type: "number",
      width: 150,
    },
    {
      field: "total_price",
      headerName: "Total Price",
      type: "number",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.total_price.toLocaleString()} VND</div>
        );
      },
    },
    {
      field: "cart",
      headerName: "Cart",
      width: 350,
      renderCell: (params) => {
        return (
          <div
            className="productListItem-wrapper"
            style={{ display:'flex', overflow: "auto" }}
          >
            {params.row.cart.map((item) => (
              <span style={{marginRight:15}} >
                {" "}
                <span style={{color:'red'}}>@</span>Mã sản phẩm: {item.id_product} - Số lượng: {item.quantity} 
              </span>
            ))}
          </div>
        );
      },
    },
    {
        field: "createdAt",
        headerName: "Ngày Mua",
        type: "date",
        width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 200,
    },
    {
      field: "payment_status",
      headerName: "Payment Status",
      type: "string",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        getRowId ={(row) => row._id}
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
