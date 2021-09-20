import "./BillList.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { billRows } from "../../TotalData";
import { useState } from "react";

// bảng hóa đơn
export default function BillList() {
  const [data, setData] = useState(billRows);

  // xóa hóa đơn khỏi bảng
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // khởi tạo dữ liệu bảng
  const columns = [
    { field: "id", headerName: "ID", width: 250 },
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
          <div className="productListItem">{params.row.total_price} VND</div>
        );
      },
    },
    {
      field: "Cart",
      headerName: "Cart",
      width: 350,
      renderCell: (params) => {
        return (
          <div
            className="productListItem-wrapper"
            style={{ display:'flex', overflow: "auto" }}
          >
            {params.row.Cart.map((item) => (
              <span style={{marginRight:15}} >
                {" "}
                <span style={{color:'red'}}>@</span>Mã sản phẩm: {item.id_product} - Số lượng: {item.quality} 
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
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
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
