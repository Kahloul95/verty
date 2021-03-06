import "./productList.css";
import Swal from 'sweetalert2'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Visibility, Edit, AddCircleOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axios = require('axios').default;
    axios
    .get('http://localhost:3002/api/produits')
    .then((response) => {
    
    setData(response.data);
    response.data.forEach(produits => {
    });
    });
    }, []);

    const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/produits/' +_id)
      .then(res => {console.log(res.data)});
        setData(data.filter((item) => item._id !== _id));
    };



  const columns = [
    {field: "Nomproduit", headerName: "Nom Du Produit", width: 190},
    { field: "Quantite", headerName: "Quantité", width: 150 },
    {field: "Fornisseur", headerName: "Fornisseur", width: 190},
    {field: "DispoEnStock", headerName: "En Stock", width: 150},
    {field: "Prix", headerName: "Prix", width: 130},
    {field: "ScoreEnPoints", headerName: "Score EnPoints", width: 180},
    {field: "action", headerName: "Action", width: 140,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <Edit className="productListEdit"/>
            </Link>
            <Link to={"/viewproduct/"+ params.row._id}>
            <Visibility className="productListView"/>
            </Link>
            <DeleteOutline
              className="productListDelete"
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

    <div className="productList">
      <div className="button">
      <Link to="/newproduct">
      <button className="productAddButton"><AddCircleOutline className="iconadd"/>Ajoute</button>
      </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection


        getRowId ={(row) => row._id}
        getRowID ={(row)=> row.id}

      />
    </div>
  );
}
