import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import Axios from "axios";



export default function AddSub2() {

  let { categoryid } = useParams();

  const [subCategorie, setSubCategorie] = useState("");


  const ajoutersubcat = () => {
    Axios.post('http://localhost:3002/api/maincategplast/' + categoryid + '/subcategorie', {

      subCategorie: subCategorie,

    })
      .then(() => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Le produit a été ajouté',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Quelque chose s\'est mal passé !',
        });
      });
  };

  return (
    <div className="newUser">
      <div className="newUserContainer">
        <h1 className="newUserTitle">Nouveau Sub Catégorie</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Sub Catégorie</label>
            <input type="text" placeholder="Sub Catégorie" onChange={(event) => {setSubCategorie(event.target.value);}} />
          </div>
        </form>
        <button onClick={ajoutersubcat} className="newUserButton">Ajoute</button>
      </div>
    </div>
  );
}
