import "./plastiquelist.css";
import plastique from "../../images/plastique.png"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Visibility, AddCircleOutline } from "@material-ui/icons";
import { plastiqueRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export default function PlastiqueList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('http://localhost:3002/api/plastiques')
      .then((response) => {

        setData(response.data);
        response.data.forEach(produitplastiques => {
        });
      });
  }, []);



  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/plastiques/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columns = [
    {
      field: "image", headerName: "Image", width: 120,
      renderCell: (params) => {
        return (
          <div className="plastiqueListFF">
            <img className="plastiqueListImg" src={`http://localhost:3002/uploads/${params.row.image}`} />
          </div>
        );
      },
    },
    { field: "Label", headerName: "Label", width: 150 },
    { field: "Description", headerName: "Description", width: 250 },
    { field: "Poids", headerName: "Poids(g)", width: 160 },
    { field: "ScoreEnPoints", headerName: "N°Pints", width: 160 },
    { field: "Quantite", headerName: "Quantité", width: 150 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/plastique/" + params.row.id}>
              <Edit className="plastiqueListEdit" />
            </Link>
            <Link to={"/viewplastique/" + params.row.id}>
              <Visibility className="plastiqueListView" />
            </Link>
            <DeleteOutline
              className="plastiqueListDelete"
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
    <div className="PlastiqueList">
      <div className="button">
        <Link to="/newplastique">
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
