import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { useState, useEffect } from "react";
import Axios from "axios";


export default function  AchatList() {
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
    { field: "Client", headerName: "Client", width: 180 },
    {field: "Produit Bio", headerName: "Produit Bio", width: 180 },
    { field: "Entreprise de Livraison", headerName: "Entreprise de Livraison", width: 220 },
    {field: "Date", headerName: "Date", width: 160},
    {field: "Methode de Paiment", headerName: "Methode de Paiment", width: 220},
    {field: "action", headerName: "Action", width: 160,
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
