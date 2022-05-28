import "./clientlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { useState, useEffect } from "react";
import Axios from "axios";


export default function ClientList() {
  const [data, setData] = useState(userRows);


  useEffect(()=> {
    Axios.get('http://localhost:3001/readusers')
    .then((response) => {
      console.log(response)
    })
    .catch(() => {
      console.log("err")
    });
  }, []);


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {field: "username", headerName: "User Name", width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "phone", headerName: "Phone", width: 200 },
    {field: "email", headerName: "Email", width: 160},
    {field: "gender", headerName: "Gender", width: 120},
    {field: "active", headerName: "Active", width: 160},
    {field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="orderList">
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
