import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import "./fornisseur.css";


export default function Fornisseur() {
  let { fornisseurId } = useParams();

  const [data, setData] = useState([]);
  const [RaisonSocial, setRaisonSocial] = useState([]);
  const [NomEtPrenom, setNomEtPrenom] = useState([]);
  const [CIN, setCIN] = useState([]);
  const [Matricule_fiscale, setMatricule_fiscale] = useState([]);
  const [telephone, setTelephone] = useState([]);
  const [Lieu, setLieu] = useState([]);
  const [DateDeConvention, setDateDeConvention] = useState([]);
  const [TypeDeProduit, setTypeDeProduit] = useState([]);
  const [Logo, setLogo] = useState([]);
  const [Banque, setBanque] = useState([]);
  const [RIB, setRIB] = useState([]);
  const [Credit, setCredit] = useState([]);

  const onChangeFile = e => {
    console.log(e.target.files[0])
    setLogo(e.target.files[0]);
}

  useEffect(() => {
    axios
      .get('http://localhost:3002/api/fornisseurs/' + fornisseurId)
      .then((response) => {
        setData(response.data);
        setRaisonSocial(response.data.RaisonSocial);
        setNomEtPrenom(response.data.NomEtPrenom);
        setCIN(response.data.CIN);
        setMatricule_fiscale(response.data.Matricule_fiscale);
        setTelephone(response.data.telephone);
        setLieu(response.data.Lieu);
        setDateDeConvention(response.data.DateDeConvention);
        setTypeDeProduit(response.data.TypeDeProduit);
        setLogo(response.data.Logo);
        setBanque(response.data.Banque);
        setRIB(response.data.RIB);
        setCredit(response.data.Credit);
        console.log(data)
        
      }).catch(err => console.log(err));
  }, []);

  const changeOnClick = async (e) => {
    e.preventDefault();
   const fornisseur ={
    RaisonSocial: RaisonSocial,
    NomEtPrenom: NomEtPrenom,
    CIN: CIN,
    Matricule_fiscale: Matricule_fiscale,
    telephone: telephone,
    Lieu: Lieu,
    DateDeConvention: DateDeConvention,
    TypeDeProduit: TypeDeProduit,
    Logo: Logo,
    Banque: Banque,
    RIB: RIB,
    Credit: Credit

   }
   console.log(fornisseur)
   try {
     const res = await axios.put('http://localhost:3002/api/fornisseurs/'+ fornisseurId , fornisseur)
     if(res.status === 200) {
       alert('updated')
     }
   } catch (error) {
     console.log(error)
   }
 }


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Modifier Fornisseur</h1>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Éditer</span>
          <form className="newUserForm" onSubmit={changeOnClick} >
            <div className="newUserItem">

              <label>Raison Sociale</label>
              <input type="text" placeholder="Raison Sociale"
                value={RaisonSocial} onChange={(e) => setRaisonSocial(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>Nom ET Prénom Responsable</label>
              <input type="text" placeholder="Nom ET Prénom Responsable"
                value={NomEtPrenom}  onChange={(e) => setNomEtPrenom(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>Télephone</label>
              <input type="number" placeholder="Télephone"
                value={telephone}  onChange={(e) => setTelephone(e.target.value)}
                 />

            </div>

            <div className="newUserItem">

              <label>N° CIN</label>
              <input type="number" placeholder="N° CIN"
                value={CIN}  onChange={(e) => setCIN(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>Matricule Fiscale</label>
              <input type="text" placeholder="Matricule Fiscale"
                value={Matricule_fiscale}  onChange={(e) => setMatricule_fiscale(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>Lieu</label>
              <input type="text" placeholder=" Lieu "
                value={Lieu}  onChange={(e) => setLieu(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>Date De Convention</label>
              <input type="date" placeholder=" Date De Convention "
                value={DateDeConvention}  onChange={(e) => setDateDeConvention(e.target.value)}
                />

            </div>
            <div className="newProductItem">

              <label>Type De Produits</label>
              <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Type De Produits"
                value={TypeDeProduit}  onChange={(e) => setTypeDeProduit(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label htmlFor="file"></label>
              <label>Logo</label>
              <input type="file" id="file"
                accept='.png, .jpg, .jpeg'
                onChange={onChangeFile}
                />

            </div>
            <div className="newUserItem">

              <label>Banque</label>
              <input type="text" placeholder=" Banque "
                value={Banque}  onChange={(e) => setBanque(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>RIB</label>
              <input type="number" placeholder=" RIB "
                value={RIB}  onChange={(e) => setRIB(e.target.value)}
                 />

            </div>
            <div className="newUserItem">

              <label>Credit(+/-)</label>
              <input type="number" placeholder=" Credit "
                value={Credit}  onChange={(e) => setCredit(e.target.value)}
              />
            </div>
            <button type="submit"  className="newUserButton" >Modifier</button>
          </form>

        </div>
      </div>
    </div>
  );
}
