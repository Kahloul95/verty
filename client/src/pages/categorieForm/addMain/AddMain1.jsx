import { useState } from "react";
import Swal from 'sweetalert2'
import Axios from "axios";


export default function AddMain1() {
  const [mainCategorie, setMainCategorie] = useState("");

  
  const ajoutercat = ()=> {
    Axios.post('http://localhost:3002/api/maincategbio', {

      mainCategorie: mainCategorie,

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
      <h1 className="newUserTitle">Nouveau Catégorie De Produit</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label> Catégorie</label>
          <input type="text" placeholder=" Catégorie"   onChange={(event) => {setMainCategorie(event.target.value);}} />
        </div>
      </form>
        <button onClick={ajoutercat} className="newUserButton">Ajoute</button>
      </div>
    </div>
  );
}
