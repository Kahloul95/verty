import { useState } from "react";
import axios from "axios";
import "./newUser.css";
import Swal from "sweetalert2";

export default function NewUser() {
  const [NomEntreprise, setNomEntreprise] = useState("");
  const [NomEtPrenomRespnsable, setNomEtPrenomRespnsable] = useState("");
  const [CIN, setCIN] = useState(0);
  const [DateDeConvention, setDateDeConvention] = useState("");
  const [Telephone, setTelephone] = useState(0);
  const [MatriculeFiscale, setMatriculeFiscale] = useState("");
  const [photo, setphoto] = useState("");
  const [TypeDeVehicule, setTypeDeVehicule] = useState("");
  const [ZonneDeLivraison, setZonneDeLivraison] = useState("");
  const [Banque, setBanque] = useState("");
  const [RIB, setRIB] = useState(0);
  const [Credit, setCredit] = useState(0);

  const onChangeFile = e => {
    console.log(e.target.files[0])
    setphoto(e.target.files[0]);
  }

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('NomEntreprise', NomEntreprise);
    formData.append('NomEtPrenomRespnsable', NomEtPrenomRespnsable);
    formData.append('CIN', CIN);
    formData.append('DateDeConvention', DateDeConvention);
    formData.append('Telephone', Telephone);
    formData.append('MatriculeFiscale', MatriculeFiscale);
    formData.append('photo', photo);
    formData.append('TypeDeVehicule', TypeDeVehicule);
    formData.append('ZonneDeLivraison', ZonneDeLivraison);
    formData.append('Banque', Banque);
    formData.append('RIB', RIB);
    formData.append('Credit', Credit);

    setNomEntreprise("");
    setNomEtPrenomRespnsable("");
    setCIN("");
    setDateDeConvention("");
    setTelephone("");
    setMatriculeFiscale("");
    setphoto("");
    setTypeDeVehicule("");
    setZonneDeLivraison("");
    setBanque("");
    setRIB("");
    setCredit("");

    axios.post("http://localhost:3002/api/Elivraisons", formData)
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
      <h1 className="newUserTitle">Nouveau Entreprise De Livraison</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nom Entreprise</label>
          <input type="text" placeholder="nom entreprise" onChange={(event) => { setNomEntreprise(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Nom Et Prénom Responsable</label>
          <input type="text" placeholder="nom et prenom responsable" onChange={(event) => { setNomEtPrenomRespnsable(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>CIN</label>
          <input type="number" placeholder="CIN" onChange={(event) => { setCIN(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Télephone</label>
          <input type="number" placeholder="télephone" onChange={(event) => { setTelephone(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Matricule Fiscale</label>
          <input type="text" placeholder="matricule fiscale" onChange={(event) => { setMatriculeFiscale(event.target.value); }} />
        </div>
        <div className="newUserItem">
        <label>Logo</label>
          <input type="file" id="file"
          accept='.png, .jpg, .jpeg'
          onChange={onChangeFile}/>
        </div>
        <div className="newUserItem">
          <label>Date De convention</label>
          <input type="date" id="date" name="date"  onChange={(event) => { setDateDeConvention(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Type De Véhicule</label>
          <input type="text" placeholder="type de véhicule" onChange={(event) => { setTypeDeVehicule(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Zonne De Livraison</label>
          <input type="text" placeholder="zonne de livraison" onChange={(event) => { setZonneDeLivraison(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Banque</label>
          <input type="text" placeholder="banque" onChange={(event) => { setBanque(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>RIB</label>
          <input type="number" placeholder="RIB" onChange={(event) => { setRIB(event.target.value); }} />
        </div>
        <div className="newUserItem">
          <label>Crédit(+/-)</label>
          <input type="number" placeholder="crédit" onChange={(event) => { setCredit(event.target.value); }} />
        </div>
        <button onClick={changeOnClick} type="submit" value="Register" className="newUserButton" encType='multipart/form-data'>Submit</button>
      </form>
    </div>
  );
}
