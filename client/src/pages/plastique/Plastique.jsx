import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

import "./plastique.css";

export default function Plastique() {
  let { plastiqueId } = useParams();

  const [data, setData] = useState([]);
  const [Label, setLabel] = useState([]);
  const [Description, setDescription] = useState([]);
  const [image, setImage] = useState([]);
  const [Poids, setPoids] = useState([]);
  const [Quantite, setQuantite] = useState([]);
  const [ScoreEnPoints, setScoreEnPoints] = useState([]);
  const [Prix, setPrix] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [subcategorie, setSubcategorie] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/api/plastiques/' + plastiqueId)
      .then((response) => {
        setData(response.data);
        setLabel(response.data.Label);
        setDescription(response.data.Description);
        setImage(response.data.image);
        setPoids(response.data.Poids);
        setQuantite(response.data.telephone);
        setScoreEnPoints(response.data.ScoreEnPoints);
        setPrix(response.data.Prix);
        setCategorie(response.data.categorie);
        setSubcategorie(response.data.subcategorie);

        console.log(data)
        
      }).catch(err => console.log(err));
  }, []);


  return (
    <div className="newPlastic">
      <div className="newPlasticcontainer">
        <h1 className="newPlasticTitle">Modifier Plastique</h1>
        <form className="newPlasticForm">
          <div className="newPlasticItem">
            <label>Label</label>
            <input 
              type="text" placeholder="Label" />
          </div>
          <div className="newPlasticItem">
            <label>Quentite</label>
            <input 
              type="number" placeholder="Quentite" />
          </div>
          <div className="newPlasticItem">
            <label>Poids</label>
            <input
              type="number" placeholder="Poids en g" />
          </div>
          <div className="newPlasticItem">
            <label htmlFor="file"></label>
            <label>Image</label>
            <input type="file" id="file"
              accept='.png, .jpg, .jpeg'
               />
          </div>
          <div className="newPlasticItem">
            <label>Description</label>
            <textarea
             rows="4" cols="50" name="comment" form="usrform" placeholder="Description" />
          </div>
          <div className="newPlasticItem">
            <label>Categorie</label>
            <select id="main_menu" className="newPlasticItem">
              <option value="catégorie" disabled="true" selected="true">Catégorie</option>
            </select>
            <select id="sub_menu" className="newPlasticItem">
              <option value="sub_catégorie" disabled="true" selected="true">sub_categorie</option>
            </select>
          </div>
          <div className="newPlasticItem">
            <label>Prix</label>
            <input
            type="number" placeholder="Prix" />
          </div>
          <div className="newPlasticItem">
            <label>Score En Points</label>
            <input 
            type="number" placeholder="Score En Points" />
          </div>
          <button  type="submit" value="Register" className="newUserButton" encType='multipart/form-data'>Submit</button>
        </form>
      </div>
    </div>
  );
}
