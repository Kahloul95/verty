import { useState } from "react";
import Swal from 'sweetalert2'
import Axios from "axios";


export default function AddMain2() {

  const [mainCategorie, setMainCategorie] = useState("");

  
  const ajoutercat = ()=> {
    Axios.post('http://localhost:3002/api/maincategplast', {

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
      <h1 className="newUserTitle">Nouveau main Catégorie</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Main Catégorie</label>
          <input type="text" placeholder="Main Catégorie" onChange={(event) => {setMainCategorie(event.target.value);}} />
        </div>
      </form>
        <button onClick={ajoutercat} className="newUserButton">Ajoute</button>
      </div>
    </div>
  );
}
