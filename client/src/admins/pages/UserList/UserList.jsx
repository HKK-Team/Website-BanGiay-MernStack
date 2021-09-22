import "./UserList.css";
import {  DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { getdata } from "../../TotalData";
import { Link } from "react-router-dom";
import { useState} from "react";

// bảng người dùng
export default function UserList() {
  const [data, setData] = useState(getdata.allusers);
  // xóa user khỏi bảng
  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };
// khởi tạo dữ liệu bảng
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
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
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "bornday",
      headerName: "Ngày tạo",
      width: 260,
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
            <Link to={"/userAdmin/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
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
        pageSize={8}
        checkboxSelection

        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
