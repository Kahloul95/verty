import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import "../../style/modifform.css";

export default function User() {
  let { livraisonId } = useParams();

  const [data, setData] = useState([]);
  const [NomEntreprise, setNomEntreprise] = useState([]);
  const [NomEtPrenomRespnsable, setNomEtPrenomRespnsable] = useState([]);
  const [CIN, setCIN] = useState([]);
  const [DateDeConvention, setDateDeConvention] = useState([]);
  const [MatriculeFiscale, setMatriculeFiscale] = useState([]);
  const [Telephone, setTelephone] = useState([]);
  const [photo, setphoto] = useState([]);
  const [TypeDeVehicule, setTypeDeVehicule] = useState([]);
  const [ZonneDeLivraison, setZonneDeLivraison] = useState([]);
  const [Credit, setCredit] = useState([]);
  const [Banque, setBanque] = useState([]);
  const [RIB, setRIB] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/api/Elivraisons/' + livraisonId)
      .then((response) => {
        setData(response.data);
        setNomEntreprise(response.data.NomEntreprise);
        setNomEtPrenomRespnsable(response.data.NomEtPrenomRespnsable);
        setCIN(response.data.CIN);
        setDateDeConvention(response.data.DateDeConvention);
        setMatriculeFiscale(response.data.MatriculeFiscale);
        setTelephone(response.data.Telephone);
        setphoto(response.data.photo);
        setTypeDeVehicule(response.data.TypeDeVehicule);
        setZonneDeLivraison(response.data.ZonneDeLivraison);
        setBanque(response.data.Banque);
        setRIB(response.data.RIB);
        setCredit(response.data.Credit);

        console.log(data)

      }).catch(err => console.log(err));
  }, []);


  const changeOnClick = async (e) => {
    e.preventDefault();
    const livraison = {
      NomEntreprise: NomEntreprise,
      NomEtPrenomRespnsable: NomEtPrenomRespnsable,
      CIN: CIN,
      DateDeConvention: DateDeConvention,
      Telephone: Telephone,
      MatriculeFiscale: MatriculeFiscale,
      DateDeConvention: DateDeConvention,
      photo: photo,
      TypeDeVehicule: TypeDeVehicule,
      ZonneDeLivraison: ZonneDeLivraison,
      Banque: Banque,
      RIB: RIB,
      Credit: Credit

    }

    console.log(livraison)
    try {
      const res = await axios.put('http://localhost:3002/api/Elivraisons/' + livraisonId, livraison)
      if (res.status === 200) {
        alert('updated')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">modifier Entreprise De Livraison</h1>

      </div>
      <div className="productContainer">
        <div className="productUpdate">
          <span className="productUpdateTitle">Éditer</span>
          <form className="newProductForm"  onSubmit={changeOnClick}>
            <div className="newProductItem">
              <label>Nom Entreprise</label>
              <input type="text" placeholder="Nom Entreprise" 
              value={NomEntreprise}  onChange={(e) => setNomEntreprise(e.target.value)}/>
            </div>
            <div className="newProductItem">
              <label>Nom Et Prénom Responsable</label>
              <input type="text" placeholder="Fornisseur" 
              value={NomEtPrenomRespnsable} onChange={(e) => setNomEtPrenomRespnsable(e.target.value)}/>
            </div>
            <div className="newProductItem">
              <label>CIN</label>
              <input type="number" placeholder="CIN" 
              value={CIN} onChange={(e) => setCIN(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label>Télephone</label>
              <input type="number" placeholder="Télephone" 
              value={Telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label>Matricule Fiscale</label>
              <input type="text" placeholder="Matricule Fiscale" 
              value={MatriculeFiscale} onChange={(e) => setRIB(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label htmlFor="file"></label>
              <label>Image</label>
              <input type="file" id="file" />
            </div>
            <div className="newProductItem">
              <label>Date De Convention</label>
              <input type="date" id="date" name="date" 
              value={DateDeConvention} onChange={(e) => setDateDeConvention(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label> Type de véhicule </label>
              <input type="text" placeholder="Type de véhicule" 
              value={TypeDeVehicule} onChange={(e) => setTypeDeVehicule(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label> Zonne De Livraison </label>
              <input type="text" placeholder="Zonne De Livraison" 
              value={ZonneDeLivraison} onChange={(e) => setZonneDeLivraison(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label>Banque</label>
              <input type="text" placeholder="Banque"
              value={Banque} onChange={(e) => setBanque(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label>RIB</label>
              <input type="number" placeholder="RIB"
              value={RIB} onChange={(e) => setRIB(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label>Crédit(+/-)</label>
              <input type="number" placeholder="Crédit"
              value={Credit} onChange={(e) => setCredit(e.target.value)} />
            </div>
            <button type="submit"  className="productUpdateButton" >Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
