import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/ElivraisonList/UserList";
import User from "./pages/Elivraison/User";
import NewUser from "./pages/newElivraison/NewUser";
import ViewUser from "./pages/viewElivraison/ViewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ViewProduct from "./pages/viewProduct/ViewProduct"
import PlastiqueList from "./pages/plastiqueList/PlastiqueList";
import Plastique from "./pages/plastique/Plastique";
import NewPlastique from "./pages/newPlastique/NewPlastique";
import ViewPlastique from "./pages/viewPlastique/ViewPlastique";
import FornisseurList from "./pages/fornisseurList/FornisseurList";
import Fornisseur from "./pages/fornisseur/Fornisseur";
import ViewFornisseur from "./pages/viewFornisseur/ViewFornisseur";
import NewFornisseur from "./pages/newFornisseur/NewFornisseur";
import ClientList from "./pages/clientList/ClientList";
import CategorieProduit from "./pages/categorieProduit/CategorieProduit";
import AddMain1 from "./pages/categorieForm/addMain/AddMain1";
import AddSub1 from "./pages/categorieForm/addSub/AddSub1";
import CategoriePlastique from "./pages/categoriePlastique/CategoriePlastique";
import AddMain2 from "./pages/categorieForm/addMain/AddMain2";
import AddSub2 from "./pages/categorieForm/addSub/AddSub2";
import VenteList from "./pages/vente/VenteList";
import AchatList from "./pages/achat/AchatList";
import CollectList from "./pages/collectList/CollectList";
import Collect from "./pages/editCollect/Collect";
import NewCollect from "./pages/newCollect/NewCollect";
import EditCategProd from "./pages/editCategProd/EditCategProd";
import EditCategPlast from "./pages/editCategPlast/EditCategPlast";



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/livraisons">
            <UserList />
          </Route>
          <Route path="/livraison/:livraisonId">
            <User />
          </Route>
          <Route path="/newlivraison">
            <NewUser />
          </Route>
          <Route path="/viewlivraison/:livraisonId">
            <ViewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/viewproduct/:productId">
            <ViewProduct />
          </Route>
          <Route path="/plastiques">
            <PlastiqueList />
          </Route>
          <Route path="/plastique/:plastiqueId">
            <Plastique />
          </Route>
          <Route path="/newplastique">
            <NewPlastique />
          </Route>
          <Route path="/viewplastique/:plastiqueId">
            <ViewPlastique />
          </Route>
          <Route path="/fornisseurs">
            <FornisseurList />
          </Route>
          <Route path="/fornisseur/:fornisseurId">
            <Fornisseur />
          </Route>
          <Route path="/viewfornisseur/:fornisseurId">
            <ViewFornisseur />
          </Route>
          <Route path="/newfornisseur">
            <NewFornisseur />
          </Route>
          <Route path="/clients">
            <ClientList />
          </Route>
          <Route path="/categories1">
            <CategorieProduit />
          </Route>
          <Route path="/categm1">
            <AddMain1 />
          </Route>
          <Route path="/editcateg/:editcatgId">
            <EditCategProd />
          </Route>
          <Route path="/categs1/:categoryid">
            <AddSub1 />
          </Route>
          <Route path="/categories2">
            <CategoriePlastique />
          </Route>
          <Route path="/categm2">
            <AddMain2 />
          </Route>
          <Route path="/editcateg2/:editcatgId">
            <EditCategPlast />
          </Route>
          <Route path="/categs2/:categoryid">
            <AddSub2 />
          </Route>
          <Route path="/vente">
            <VenteList />
          </Route>
          <Route path="/achat">
            <AchatList />
          </Route>
          <Route path="/collect">
            <CollectList />
          </Route>
          <Route path="/editcollect/:collectId">
            <Collect />
          </Route>
          <Route path="/newcollect">
            <NewCollect />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;