import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";

export default function NewCollect() {

  const [NomAgentCollect, setNomAgentCollect] = useState("");
  const [NomEtPrenomRespnsable, setNomEtPrenomRespnsable] = useState("");
  const [CIN, setCIN] = useState(0);
  const [Telephone, setTelephone] = useState(0);
  const [TypeDeVehicule, setTypeDeVehicule] = useState("");
  const [Lieu, setLieu] = useState("");
  const [ImageDeVehicule, setImageDeVehicule] = useState("");
  const [ZonneDeCollect, setZonneDeCollect] = useState("");

  const onChangeFile = e => {
    console.log(e.target.files[0])
    setImageDeVehicule(e.target.files[0]);
  }

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('NomAgentCollect', NomAgentCollect);
    formData.append('NomEtPrenomRespnsable', NomEtPrenomRespnsable);
    formData.append('CIN', CIN);
    formData.append('Telephone', Telephone);
    formData.append('TypeDeVehicule', TypeDeVehicule);
    formData.append('ImageDeVehicule', ImageDeVehicule);
    formData.append('Lieu', Lieu);
    formData.append('ZonneDeCollect', ZonneDeCollect);

    setNomAgentCollect("");
    setNomEtPrenomRespnsable("");
    setCIN("");
    setTelephone("");
    setTypeDeVehicule("");
    setLieu("");
    setImageDeVehicule("");
    setZonneDeCollect("");

    axios.post("http://localhost:3002/api/agentcollectes", formData)
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
      <h1 className="newUserTitle">Nouveau Agent de Collect</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nom Agent De Collect</label>
          <input type="text" placeholder="nom agent de collect" 
          onChange={(event) => { setNomAgentCollect(event.target.value); }}/>
        </div>
        <div className="newUserItem">
          <label>Nom Et Prénom Responsable</label>
          <input type="text" placeholder="nom et prenom responsable"
          onChange={(event) => { setNomEtPrenomRespnsable(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>CIN</label>
          <input type="number" placeholder="CIN" 
          onChange={(event) => { setCIN(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Télephone</label>
          <input type="number" placeholder="télephone"
          onChange={(event) => { setTelephone(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Type De Véhicule</label>
          <input type="text" placeholder="type de véhicule"
          onChange={(event) => { setTypeDeVehicule(event.target.value); }} />
        </div>
        <div className="newUserItem">
        <label>Logo</label>
            <input type="file" id="file"
              accept='.png, .jpg, .jpeg'
              onChange={onChangeFile} />
        </div>
        <div className="newUserItem">
          <label>Lieu</label>
          <input type="text" id="date" placeholder="lieu"
          onChange={(event) => { setLieu(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Zonne De Collect</label>
          <input type="text" placeholder="zonne de collect" 
          onChange={(event) => { setZonneDeCollect(event.target.value); }}/>
        </div>
        <button onClick={changeOnClick} type="submit" value="Register" className="newUserButton" encType='multipart/form-data'>Ajoute</button>      </form>
    </div>
  );
}
