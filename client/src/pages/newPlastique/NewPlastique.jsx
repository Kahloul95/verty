import { useState } from "react";
import axios from "axios";
import "./newPlastique.css";
import Swal from "sweetalert2";

export default function NewUser() {

  const [Label, setLabel] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [Poids, setPoids] = useState(0);
  const [Quantite, setQuantite] = useState(0);
  const [ScoreEnPoints, setScoreEnPoints] = useState(0);
  const [Prix, setPrix] = useState(0);
  const [categorie, setcategorie] = useState("");
  const [subcategorie, setsubcategorie] = useState("");

  const onChangeFile = e => {
    console.log(e.target.files[0])
    setimage(e.target.files[0]);
  }
  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Label', Label);
    formData.append('Description', Description);
    formData.append('image', image);
    formData.append('Poids', Poids);
    formData.append('Quantite', Quantite);
    formData.append('ScoreEnPoints', ScoreEnPoints);
    formData.append('Prix', Prix);
    formData.append('categorie', categorie);
    formData.append('subcategorie', subcategorie);

    setLabel("");
    setDescription("");
    setimage("");
    setPoids("");
    setQuantite("");
    setScoreEnPoints("");
    setPrix("");
    setcategorie("");
    setsubcategorie("");


    axios.post("http://localhost:3002/api/plastiques", formData)
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
    <div className="newPlastic">
      <div className="newPlasticcontainer">
        <h1 className="newPlasticTitle">New Plastique</h1>
        <form className="newPlasticForm">
          <div className="newPlasticItem">
            <label>Label</label>
            <input onChange={(event) => { setLabel(event.target.value); }}
              type="text" placeholder="Label" />
          </div>
          <div className="newPlasticItem">
            <label>Quentite</label>
            <input onChange={(event) => { setQuantite(event.target.value); }}
              type="number" placeholder="Quentite" />
          </div>
          <div className="newPlasticItem">
            <label>Poids</label>
            <input onChange={(event) => { setPoids(event.target.value); }}
              type="number" placeholder="Poids en g" />
          </div>
          <div className="newPlasticItem">
            <label htmlFor="file"></label>
            <label>Image</label>
            <input type="file" id="file"
              accept='.png, .jpg, .jpeg'
              onChange={onChangeFile} />
          </div>
          <div className="newPlasticItem">
            <label>Description</label>
            <textarea onChange={(event) => { setDescription(event.target.value); }}
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
            <input onChange={(event) => { setPrix(event.target.value); }}
            type="number" placeholder="Prix" />
          </div>
          <div className="newPlasticItem">
            <label>Score En Points</label>
            <input onChange={(event) => { setScoreEnPoints(event.target.value); }}
            type="number" placeholder="Score En Points" />
          </div>
          <button onClick={changeOnClick} type="submit" value="Register" className="newUserButton" encType='multipart/form-data'>Submit</button>
        </form>
      </div>
    </div>
  );
}
