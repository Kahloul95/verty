import "./fornisseurlist.css";
import Swal from 'sweetalert2'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Visibility, AddCircleOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function FornisseurList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('http://localhost:3002/api/fornisseurs')
      .then((response) => {

        setData(response.data);
        response.data.forEach(fornisseurs => {
        });
      });
  }, []);


  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/fornisseurs/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columns = [
    {
      field: "Logo", headerName: "Logo", width: 120,
      renderCell: (params) => {
        return (
          <div className="plastiqueListFF">
            <img className="plastiqueListImg" src={`http://localhost:3002/uploads/${params.row.Logo}`} />
          </div>
        );
      },
    },
    { field: "RaisonSocial", headerName: "Raison sociale", width: 180 },
    { field: "NomEtPrenom", headerName: "NomEtPrenom", width: 180 },
    { field: "telephone", headerName: "telephone", width: 140 },
    { field: "Lieu", headerName: "Lieu", width: 130 },
    { field: "DateDeConvention", headerName: "Date de convention", width: 200 },
    {
      field: "action", headerName: "Action", width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/fornisseur/" + params.row._id}>
              <Edit
                className="userListEdit"
              />
            </Link>
            <Link to={"/viewfornisseur/" + params.row._id}>
              <Visibility
                className="userListView"
                 />
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
    <div className="user_List">
      <div className="button">
        <Link to="/newfornisseur">
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
