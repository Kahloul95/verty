import "./sidebar.css";
import {
  Dashboard,
  AddBox,
  LocalMall,
  LocalShipping,
  TwoWheeler,
  BusinessCenter,
  Storefront,
  MailOutline,
  DynamicFeed,
  ListAlt,
  ChatBubbleOutline,
  SupervisorAccount,
  Sync,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              Accueil
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Store</h3>
          <ul className="sidebarList">   
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Gestion produits Bio
              </li>
            </Link>
            <Link to="/categories1" className="link">
              <li className="sidebarListItem">
                <AddBox className="sidebarIcon" />
                Gestion Catégories produits
              </li>
            </Link>
            <Link to="/fornisseurs" className="link">
              <li className="sidebarListItem">
                <BusinessCenter className="sidebarIcon" />
                Gestion Fornisseurs
              </li>
            </Link>
            <Link to="/clients" className="link">
              <li className="sidebarListItem">
                <SupervisorAccount className="sidebarIcon" />
                Gestion Clients
              </li>
            </Link>
            <Link to="/vente" className="link">
              <li className="sidebarListItem">
                <LocalMall className="sidebarIcon" />
                Ventes
              </li>
            </Link>
            <Link to="/achat" className="link">
              <li className="sidebarListItem">
                <ListAlt className="sidebarIcon" />
                Achats
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Plastique</h3>
          <ul className="sidebarList">
            <Link to="/plastiques" className="link">
              <li className="sidebarListItem">
                <Sync className="sidebarIcon" />
                Gestion produits plastiques
              </li>
            </Link>
            <Link to="/categories2" className="link">
              <li className="sidebarListItem">
                <AddBox className="sidebarIcon" />
                Gestion categories plastiques
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">livraison et collect</h3>
          <ul className="sidebarList">
          <Link to="/livraisons" className="link">
              <li className="sidebarListItem">
                <TwoWheeler className="sidebarIcon" />
                Gestion Entreprises de Livraison
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
          <Link to="/collect" className="link">
              <li className="sidebarListItem">
                <LocalShipping className="sidebarIcon" />
                Gestion Agents de Collect
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
