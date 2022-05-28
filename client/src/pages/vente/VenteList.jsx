import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { useState, useEffect } from "react";
import Axios from "axios";


export default function VenteList() {
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
    { field: "client", headerName: "Client", width: 180 },
    {field: "produit plastique", headerName: "Produit Plastique", width: 180 },
    { field: "agent de collect", headerName: "Agent de Collect", width: 180 },
    {field: "Date", headerName: "Date", width: 160},
    {field: "Score", headerName: "Score", width: 120},
    {field: "Solde", headerName: "Solde", width: 160},
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
