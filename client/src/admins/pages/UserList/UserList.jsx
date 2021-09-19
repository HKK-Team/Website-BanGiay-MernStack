import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../TotalData";
import { Link } from "react-router-dom";
import { useState } from "react";

// bảng người dùng
export default function UserList() {
  const [data, setData] = useState(userRows);

  // xóa user khỏi bảng
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
// khởi tạo dữ liệu bảng
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg" alt="" />
            {params.row.lastname } {params.row.firstname }
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "bornday",
      headerName: "Ngày tạo",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/userAdmin/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
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
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
