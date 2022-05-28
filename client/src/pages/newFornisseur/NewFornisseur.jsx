import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import "./newFornisseur.css";

export default function NewFornisseur() {

  const [RaisonSocial, setRaisonSocial] = useState("");
  const [NomEtPrenom, setNomEtPrenom] = useState("");
  const [CIN, setCIN] = useState(0);
  const [Matricule_fiscale, setMatricule_fiscale] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [Lieu, setLieu] = useState("");
  const [DateDeConvention, setDateDeConvention] = useState("");
  const [TypeDeProduit, setTypeDeProduit] = useState("");
  const [Logo, setLogo] = useState("");
  const [Banque, setBanque] = useState("");
  const [RIB, setRIB] = useState(0);
  const [Credit, setCredit] = useState(0);


  const onChangeFile = e => {
    console.log(e.target.files[0])
    setLogo(e.target.files[0]);
  }

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('RaisonSocial', RaisonSocial);
    formData.append('NomEtPrenom', NomEtPrenom);
    formData.append('CIN', CIN);
    formData.append('Matricule_fiscale', Matricule_fiscale);
    formData.append('telephone', telephone);
    formData.append('Lieu', Lieu);
    formData.append('DateDeConvention', DateDeConvention);
    formData.append('TypeDeProduit', TypeDeProduit);
    formData.append('Logo', Logo);
    formData.append('Banque', Banque);
    formData.append('RIB', RIB);
    formData.append('Credit', Credit);

    setRaisonSocial("");
    setNomEtPrenom("");
    setCIN("");
    setMatricule_fiscale("");
    setTelephone("");
    setLieu("");
    setDateDeConvention("");
    setTypeDeProduit("");
    setLogo("");
    setBanque("");
    setRIB("");
    setCredit("");


    axios.post("http://localhost:3002/api/fornisseurs", formData)
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
        <h1 className="newUserTitle">Nouveau Fornisseur</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Raison Sociale</label>
            <input onChange={(event) => { setRaisonSocial(event.target.value); }}
              type="text" placeholder="Raison Sociale" />
          </div>
          <div className="newUserItem">
            <label>Nom ET Prénom Responsable</label>
            <input onChange={(event) => { setNomEtPrenom(event.target.value); }}
              type="text" placeholder="Nom ET Prénom Responsable" />
          </div>
          <div className="newUserItem">
            <label>Télephone</label>
            <input onChange={(event) => { setTelephone(event.target.value); }}
              type="number" placeholder="Télephone" />
          </div>
          <div className="newUserItem">
            <label>N° CIN</label>
            <input onChange={(event) => { setCIN(event.target.value); }}
              type="number" placeholder="N° CIN" />
          </div>
          <div className="newUserItem">
            <label>Matricule Fiscale</label>
            <input onChange={(event) => { setMatricule_fiscale(event.target.value); }}
              type="text" placeholder="Matricule Fiscale" />
          </div>
          <div className="newUserItem">
            <label>Lieu</label>
            <input onChange={(event) => { setLieu(event.target.value); }}
              type="text" placeholder=" Lieu " />
          </div>
          <div className="newUserItem">
            <label>Date De Convention</label>
            <input onChange={(event) => { setDateDeConvention(event.target.value); }}
              type="date" placeholder=" Date De Convention " />
          </div>
          <div className="newProductItem">
            <label>Type De Produits</label>
            <textarea onChange={(event) => { setTypeDeProduit(event.target.value); }}
              rows="4" cols="50" name="comment" form="usrform" placeholder="Type De Produits" />
          </div>
          <div className="newUserItem">
            <label htmlFor="file"></label>
            <label>Logo</label>
            <input type="file" id="file"
              accept='.png, .jpg, .jpeg'
              onChange={onChangeFile} />
          </div>
          <div className="newUserItem">
            <label>Banque</label>
            <input onChange={(event) => { setBanque(event.target.value); }}
              type="text" placeholder=" Banque " />
          </div>
          <div className="newUserItem">
            <label>RIB</label>
            <input onChange={(event) => { setRIB(event.target.value); }}
              type="number" placeholder=" RIB " />
          </div>
          <div className="newUserItem">
            <label>Credit(+/-)</label>
            <input onChange={(event) => { setCredit(event.target.value); }}
              type="number" placeholder=" Credit " />
          </div>
        </form>
        <button onClick={changeOnClick} type="submit" value="Register" className="newUserButton" encType='multipart/form-data'>Ajoute</button>
      </div>
    </div>
  );
}
