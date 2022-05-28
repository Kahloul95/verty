import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Visibility, AddCircleOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export default function UserList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('http://localhost:3002/api/Elivraisons')
      .then((response) => {

        setData(response.data);
        response.data.forEach(elivraisons => {
        });
      });
  }, []);


  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/Elivraisons/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columns = [
    {
      field: "photo", headerName: "Logo", width: 120,
      renderCell: (params) => {
        return (
          <div className="plastiqueListFF">
            <img className="plastiqueListImg" src={`http://localhost:3002/uploads/${params.row.photo}`} />
          </div>
        );
      },
    },
    { field: "NomEntreprise", headerName: "Raison Social", width: 200 },
    { field: "NomEtPrenomRespnsable", headerName: "Nom et Prenom", width: 200 },
    { field: "Telephone", headerName: "Telephone", width: 160 },
    { field: "ZonneDeLivraison", headerName: "Gender", width: 120 },
    { field: "active", headerName: "Active", width: 160 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/livraison/" + params.row._id}>
              <Edit className="userrListEdit" />
            </Link>
            <Link to={"/viewlivraison/" + params.row._id}>
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
        <Link to="/newlivraison">
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
