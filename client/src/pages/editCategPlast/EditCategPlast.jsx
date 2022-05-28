import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";


export default function EditCategPlast() {
  let { editcatgId } = useParams();
  //alert(editcatgId)
  const [data, setData] = useState([]);
  const [nomMassta, setNomMassta] = useState("");
  const setName = (name) => {
    nomMassta = name;

  }
  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('http://localhost:3002/api/maincategplast/' + editcatgId)
      .then((response) => {
        //alert("offfffff " + response.data.mainCategorie);
        setNomMassta(response.data.mainCategorie);
        setData(response.data.subCategorie);
        response.data.forEach(categoryplastiques => {
        });
      });
  }, []);

  const changeOnClick = async (e) => {
    e.preventDefault();
   const categoryplast ={
     mainCategorie: nomMassta
   }
   console.log(categoryplast)
   try {
     const res = await axios.put('http://localhost:3002/api/maincategplast/'+ editcatgId , categoryplast)
     if(res.status === 200) {
       alert('updated')
     }
   } catch (error) {
     console.log(error)
   }
 }


  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('http://localhost:3002/api/maincategplast/' + editcatgId + '/subcategorie/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columnss = [
    { field: "subCategorie", headerName: "sous catégorie", width: 950 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
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
    <div>
      <div className="newUser">
        <div className="newUserContainer">
          <h1 className="newUserTitle">Modifier Catégorie</h1>
          <form className="newUserForm" onSubmit={changeOnClick}>
            <div className="newUserItem">
              <label>Main Catégorie</label>
              <input type="text" placeholder="Main Catégorie" value={nomMassta} onChange={(e) => setNomMassta(e.target.value)} />
            </div>
            <button type="submit" className="newUserButton">Modifier</button>
          </form>
          
        </div>
      </div>
      <div className="userList">
        Sub Catégorie
        <div className="button">
          <Link to={"/categs2/" + editcatgId}>
            <button className="userAddButton">Ajoute</button>
          </Link>
        </div>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columnss}
          pageSize={8}
          checkboxSelection

          getRowId={(row) => row._id}

        />
      </div>
    </div>
  );
}
