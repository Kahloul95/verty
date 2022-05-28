import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Collect() {
  let { collectId } = useParams();

  const [data, setData] = useState([]);
  const [NomAgentCollect, setNomAgentCollect] = useState([]);
  const [NomEtPrenomRespnsable, setNomEtPrenomRespnsable] = useState([]);
  const [CIN, setCIN] = useState([]);
  const [Telephone, setTelephone] = useState([]);
  const [TypeDeVehicule, setTypeDeVehicule] = useState([]);
  const [Lieu, setLieu] = useState([]);
  const [ImageDeVehicule, setImageDeVehicule] = useState([]);
  const [ZonneDeCollect, setZonneDeCollect] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/api/agentcollectes/' + collectId)
      .then((response) => {
        setData(response.data);
        setNomAgentCollect(response.data.NomAgentCollect);
        setNomEtPrenomRespnsable(response.data.NomEtPrenomRespnsable);
        setCIN(response.data.CIN);
        setTelephone(response.data.Telephone);
        setTypeDeVehicule(response.data.TypeDeVehicule);
        setLieu(response.data.Lieu);
        setImageDeVehicule(response.data.ImageDeVehicule);
        setZonneDeCollect(response.data.ZonneDeCollect);

        console.log(data)

      }).catch(err => console.log(err));
  }, []);

  const changeOnClick = async (e) => {
    e.preventDefault();
    const collect = {
      NomAgentCollect: NomAgentCollect,
      NomEtPrenomRespnsable: NomEtPrenomRespnsable,
      CIN: CIN,
      Telephone: Telephone,
      TypeDeVehicule: TypeDeVehicule,
      Lieu: Lieu,
      ImageDeVehicule: ImageDeVehicule,
      ZonneDeCollect: ZonneDeCollect,
    }
    console.log(collect)
    try {
      const res = await axios.put('http://localhost:3002/api/agentcollectes/' + collectId, collect)
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
        <h1 className="productTitle">modifier Agent De Collect</h1>

      </div>
      <div className="productContainer">
        <div className="productUpdate">
          <span className="productUpdateTitle">Éditer</span>
          <form className="newProductForm" onSubmit={changeOnClick} >
            <div className="newProductItem">
              <label>Nom Agent De Collect</label>
              <input type="text" placeholder="Nom agent de collect"
                value={NomAgentCollect}  onChange={(e) => setNomAgentCollect(e.target.value)}/>
            </div>
            <div className="newProductItem">
              <label>Nom Et Prénom Responsable</label>
              <input type="text" placeholder="nom et prénom responsable"
                value={NomEtPrenomRespnsable} onChange={(e) => setNomEtPrenomRespnsable(e.target.value)} />
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
              <label> Type de véhicule </label>
              <input type="text" placeholder="Type de véhicule"
                value={TypeDeVehicule} onChange={(e) => setTypeDeVehicule(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label htmlFor="file"></label>
              <label>Image De Véhicule</label>
              <input type="file" id="file"
                accept='.png, .jpg, .jpeg'
              />
            </div>
            <div className="newProductItem">
              <label>Lieu</label>
              <input type="text" id="date" placeholder="lieu" 
              value={Lieu} onChange={(e) => setLieu(e.target.value)} />
            </div>
            <div className="newProductItem">
              <label> Zonne De Collect </label>
              <input type="text" placeholder="Zonne De collect" 
              value={ZonneDeCollect} onChange={(e) => setZonneDeCollect(e.target.value)} />
            </div>
            <button type="submit" className="productUpdateButton">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
