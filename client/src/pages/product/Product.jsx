import "./product.css";

export default function Product() {

  return (
    <div className="product">
       <div className="productTitleContainer">
        <h1 className="productTitle">modifier le produit</h1>
        
      </div>
      <div className="productContainer">
        <div className="productUpdate">
          <span className="productUpdateTitle">Éditer</span>
          <form className="newProductForm">
        <div className="newProductItem">
          <label>Nom Du Produit</label>
          <input type="text" placeholder="Nom Du Produit"  />
        </div>
        <div className="newProductItem">
          <label>Date D'arrivage</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="newProductItem">
          <label>Description</label>
          <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Description" />
        </div>
        <div className="newProductItem">
          <label>Categorie</label>
          <input type="text" placeholder="Main"/>
          <input type="text" placeholder="Sub"/>
        </div>
        <div className="newProductItem"> 
          <label>Quantité</label>
          <input type="number" placeholder="Quantité"  />
        </div>
        <div className="newProductItem">
          <label>Fornisseur</label>
          <input type="text" placeholder="Fornisseur"  />
        </div>
        <div className="newProductItem">
          <label>Prix</label>
          <input type="number" placeholder="Prix"  />
        </div>
        <div className="newProductItem">
          <label>Score en Points</label>
          <input type="number" placeholder="Score en Points"  />
        </div>
        <div className="newProductItem">
          <label htmlFor="file"></label>
          <label>Image</label>
          <input type="file" id="file"/>
        </div>
        <div className="newProductItem">
          <label>Disponibilité En Stock</label>
          <div className="newProductGender">
            <input type="radio" name="Dstock" id="oui" value="oui" /><label for="oui">Oui</label>
            <input type="radio" name="Dstock" id="non" value="non" /><label for="non">Non</label>
          </div>
        </div>
        <div className="newProductItem">
          <label>Disponibilité En Lieu</label>
          <select className="newProductSelect" name="Dlieu" id="Dlieu">
            <option value="Yes/No">select un etat</option>
            <option value="Toute la tunise">Toute la tunisie</option>
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
          <div className="newProductGender">
            <input type="radio" name="Dstock" id="oui" value="oui" /><label for="oui">Oui</label>
            <input type="radio" name="Dstock" id="non" value="non" /><label for="non">Non</label>
          </div>
        </div>
        <div className="newProductItem">
          <label>Debut Promotion</label>
          <input type="date" id="date" name="date"  />
        </div>
        <div className="newProductItem">
          <label>Fin Promotion</label>
          <input type="date" id="date" name="date"  />
        </div>
        <div className="newProductItem">
          <label>Remise(%)</label>
          <input type="number" placeholder="Remise(%)"  />
        </div>
        <div className="newProductItem">
          <label>Code Promo</label>
          <input type="text" placeholder="Code Promo"  />
        </div>
      </form>
          <button className="productUpdateButton">Modifier</button>
        </div>
      </div>
    </div>
  );
}
