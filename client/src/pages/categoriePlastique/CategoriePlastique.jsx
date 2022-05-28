import "./categorieplastique.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Axios from "axios";


export default function CategoriePlastique() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('http://localhost:3002/api/maincategplast')
      .then((response) => {
        setData(response.data);
        response.data.forEach(categoryplastiques => {
        });
      });
  }, []);


  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/maincategplast/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columns = [
    { field: "mainCategorie", headerName: "catégorie", width: 960 },
    {
      field: "action", headerName: "Action", width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editcateg2/" + params.row._id}>
              <Edit className="uuserListEdit" />
            </Link>
            <DeleteOutline
              className="uuserListDelete"
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

  const columnss = [
    { field: "main", headerName: "Main", width: 480 },
    { field: "submain", headerName: "Submain", width: 480 },
    {
      field: "action", headerName: "Action", width: 160,
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
      Main Catégorie
      <div className="button">
        <Link to="/categm2">
          <button className="userAddButton">Ajoute</button>
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
