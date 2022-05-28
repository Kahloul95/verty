import { useState } from "react";
import Swal from 'sweetalert2'
import Axios from "axios";
import "./newProduct.css";

export default function NewProduct() {
  const [Nomproduit, setNomproduit] = useState("");
  const [Quantite, setQuantite] = useState("");
  const [Fornisseur, setFornisseur] = useState("");
  const [Prix, setPrix] = useState(0);
  const [Image, setImage] = useState("");
  const [ScoreEnPoints, setScoreEnPoints] = useState(0);
  const [Datearrivage, setDatearrivage] = useState("");
  const [Description, setDescription] = useState("");
  const [DispoEnLieu, setDispoEnLieu] = useState("");
  const [DispoEnStock, setDispoEnStock] = useState("");
  const [EnPromotion, setEnPromotion] = useState("");
  const [DebutPromotion, setDebutPromotion] = useState("");
  const [FinPromotion, setFinPromotion] = useState("");
  const [Discount, setDiscount] = useState("");
  const [CodePromo, setCodePromo] = useState("");

  
  const ajouterProduit = ()=> {
    Axios.post('http://localhost:3002/api/produits', {
        Nomproduit: Nomproduit,
        Description: Description,
        Fornisseur: Fornisseur,
        Quantite: Quantite,
        Datearrivage: Datearrivage,
        Prix: Prix,
        Image: Image,
        ScoreEnPoints: ScoreEnPoints,
        DispoEnStock: DispoEnStock,
        DispoEnLieu: DispoEnLieu,
        EnPromotion: EnPromotion,
        DebutPromotion: DebutPromotion,
        FinPromotion: FinPromotion,
        Discount: Discount,
        CodePromo: CodePromo,
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
    <div className="newProduct">
      <div className="newProductContainer">
        <h1 className="newProductTitle">Nouveau Produit</h1>
        <form className="newProductForm">
        <div className="newProductItem">
          <label>Nom Du Produit</label>
          <input type="text" placeholder="Nom Du Produit" onChange={(event) => {setNomproduit(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Date D'arrivage</label>
          <input type="date" id="date" name="date" onChange={(event) => {setDatearrivage(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Description</label>
          <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Description" onChange={(event) => {setDescription(event.target.value);}}/>
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
        <div className="newProductItem"> 
          <label>Quantité</label>
          <input type="number" placeholder="Quantité" onChange={(event) => {setQuantite(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Fornisseur</label>
          <input type="text" placeholder="Fornisseur" onChange={(event) => {setFornisseur(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Prix</label>
          <input type="number" placeholder="Prix" onChange={(event) => {setPrix(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Score en Points</label>
          <input type="number" placeholder="Score en Points" onChange={(event) => {setScoreEnPoints(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label htmlFor="file"></label>
          <label>Image</label>
          <input type="file" id="file" onChange={(event) => {setImage(event.target.value);}} />
        </div>
        <div className="newProductItem"  onChange={(event) => {setDispoEnStock(event.target.value);}}>
          <label>Disponibilité En Stock</label>
          <div className="newProductGender">
            <input type="radio" name="Dstock" id="oui" value="oui" /><label for="oui">Oui</label>
            <input type="radio" name="Dstock" id="non" value="non" /><label for="non">Non</label>
          </div>
        </div>
        <div className="newProductItem" onChange={(event) => {setDispoEnLieu(event.target.value);}}>
          <label>Disponibilité En Lieu</label>
          <select className="newProductSelect" name="Dlieu" id="Dlieu" >
            <option value="Yes/No">select un etat</option>
            <option value="Toute la tunisie">Toute la tunisie</option>
            <option value="Tunis">Tunis</option>
            <option value="Ariana">Ariana</option>
            <option value="Béja">Béja</option>
            <option value="Ben Arous">Ben Arous</option>
            <option value="Bizerte">Bizerte</option>
            <option value="	Gabès">	Gabès</option>
            <option value="Gafsa">Gafsa</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Kairouan">Kairouan</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Kébili">Kébili</option>
            <option value="Le Kef">Le Kef</option>
            <option value="	Mahdia">	Mahdia</option>
            <option value="La Manouba">La Manouba</option>
            <option value="	Médenine">	Médenine</option>
            <option value="Monastir">Monastir</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Sfax">Sfax</option>
            <option value="Sidi Bouzid">Sidi Bouzid</option>
            <option value="	Siliana">	Siliana</option>
            <option value="Sousse">Sousse</option>
            <option value="Tataouine">Tataouine</option>
            <option value="Tozeur">Tozeur</option>
            <option value="Zaghouan">Zaghouan</option>
          </select>
        </div>
      </form>
      <h1 className="newProductTitle">En Promotion</h1>
      <form>
      <div className="newProductItem">
          <label>EN Promotion</label>
          <div className="newProductGender" onChange={(event) => {setEnPromotion(event.target.value);}}>
            <input type="radio" name="Dstock" id="oui" value="oui" /><label for="oui">Oui</label>
            <input type="radio" name="Dstock" id="non" value="non" /><label for="non">Non</label>
          </div>
        </div>
        <div className="newProductItem">
          <label>Debut Promotion</label>
          <input type="date" id="date" name="date" onChange={(event) => {setDebutPromotion(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Fin Promotion</label>
          <input type="date" id="date" name="date" onChange={(event) => {setFinPromotion(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Remise(%)</label>
          <input type="number" placeholder="Remise(%)" onChange={(event) => {setDiscount(event.target.value);}} />
        </div>
        <div className="newProductItem">
          <label>Code Promo</label>
          <input type="text" placeholder="Code Promo" onChange={(event) => {setCodePromo(event.target.value);}} />
        </div>
      </form>
      <button onClick={ajouterProduit} className="newProductButton">Ajouter</button>
      
      </div>
    </div>
  );
}
