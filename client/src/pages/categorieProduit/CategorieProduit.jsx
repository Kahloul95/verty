import "./categorieproduit.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function CategorieProduit() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('http://localhost:3002/api/maincategbio')
      .then((response) => {
        setData(response.data);
        response.data.forEach(categorybios => {
        });
      });
  }, []);



  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/maincategbio/' + _id)
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
            <Link to={"/editcateg/" + params.row._id}>
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
  return (
    <div className="userList">
      Nouveau Main Catégorie
      <div className="button">
        <Link to="/categm1">
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
