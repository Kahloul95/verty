import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Visibility, AddCircleOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export default function CollectList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3002/api/agentcollectes')
      .then((response) => {

        setData(response.data);
        //response.data.forEach(agentcollects => {
        //});
      });
  }, []);


  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/agentcollectes/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columns = [
    {
      field: "ImageDeVehicule", headerName: "Logo", width: 120,
      renderCell: (params) => {
        return (
          <div className="plastiqueListFF">
            <img className="plastiqueListImg" src={`http://localhost:3002/uploads/${params.row.ImageDeVehicule}`} />
          </div>
        );
      },
    },
    { field: "NomAgentCollect", headerName: "Nom Agent", width: 200 },
    { field: "NomEtPrenomRespnsable", headerName: "Nom et Prénom", width: 200 },
    { field: "Telephone", headerName: "Telephone", width: 160 },
    { field: "Lieu", headerName: "Lieu", width: 120 },
    { field: "ZonneDeCollect", headerName: "Zonne de Collect", width: 160 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editcollect/" + params.row._id}>
              <Edit className="userrListEdit" />
            </Link>
            <Link to={"/viewcollect/" + params.row._id}>
              <Visibility className="userrListView" />
            </Link>
            <DeleteOutline
              className="userrListDelete"
              onClick={() =>
                Swal.fire({
                  title: 'Êtes-vous sûr?',
                  text: "Vous ne pourrez pas revenir en arrière !",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  cancelButtonText: 'Annuler',
                  confirmButtonText: 'Oui, supprimez-le !'
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleDelete(params.row._id)
                    Swal.fire(
                      'Supprimé !',
                      'Votre fichier a été supprimé.',
                      'success'
                    )
                  }
                })
              }
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <div className="button">
        <Link to="/newcollect">
          <button className="productAddButton"><AddCircleOutline className="iconadd" />Ajoute</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection

        getRowId={(row) => row._id}

      />
    </div>
  );
}
