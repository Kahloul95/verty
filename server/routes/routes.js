const express = require('express');


const router = express.Router();
const {getProduits, getProduit, addProduit, updateProduit, deleteProduit} = require('../controller/ProduitBio')
const {getFornisseurs, getFornisseur,upload,addFornisseur, updateFornisseur, deleteFornisseur} = require('../controller/Fornisseur')
const {getEntrepriseLivraisons, getEntrepriseLivraison, addEntrepriseLivraison, updateEntrepriseLivraison, deleteEntrepriseLivraison} = require('../controller/EntrepriseLivraison')
const {getAgentCollectes, getAgentCollecte, addAgentCollecte, updateAgentCollecte, deleteAgentCollecte} = require('../controller/AgentCollect')
const {getCategPlastiques, addCategPlastiques, deleteCategPlastiques, getcategplastique, updateCategPlastique} = require('../controller/MainCategplastique')
const {addSubCategPlastiques, getSubCategPlastiques, deleteSubCategPlastiques} = require('../controller/SubCategplastique')
const {getPlastiques, getPlastique, addPlastiques, updatePlastiques, deletePlastiques} = require('../controller/Plastique');
const { getCategBios, addCategBios, deleteCategBios, getcategorybio, updateCategBio } = require('../controller/MainCategproduitBio');
const { getSubCategBio, addSubCategBio, deleteSubCategBio } = require('../controller/SubCategproduitBio');
const { getClients, addClient, deleteClient } = require('../controller/Client');
const { getVentes, addVente, deleteVente } = require('../controller/Vente');
const { getAchats, addAchat, deleteAchat } = require('../controller/Achat');

//read and add prooduct
router.route('/produits')
    .get(getProduits)
    .post(addProduit);

//read, update and delete specific product
router.route('/produits/:productid')
    .get(getProduit)
    .put(updateProduit)
    .delete(deleteProduit);

//read and add fornisseur
router.route('/fornisseurs')
    .get(getFornisseurs)
    .post(upload.single('Logo'),addFornisseur);

//read, update and delete specific fornisseur
router.route('/fornisseurs/:fornisseurid')
    .get(getFornisseur)
    .put(upload.single('Logo'),updateFornisseur)
    .delete(deleteFornisseur);

//read and add entreprise de livraison
router.route('/Elivraisons')
    .get(getEntrepriseLivraisons)
    .post(upload.single('photo'),addEntrepriseLivraison);

//read, update and delete specific entreprise de livraison
router.route('/Elivraisons/:elivraisonid')
    .get(getEntrepriseLivraison)
    .put(upload.single('photo'),updateEntrepriseLivraison)
    .delete(deleteEntrepriseLivraison);

//read and add agent de collecte
router.route('/agentcollectes')
    .get(getAgentCollectes)
    .post(upload.single('ImageDeVehicule'),addAgentCollecte);

//read, update and delete specific agent de collecte
router.route('/agentcollectes/:agentcollectid')
    .get(getAgentCollecte)
    .put(upload.single('ImageDeVehicule'),updateAgentCollecte)
    .delete(deleteAgentCollecte);

//read and add main categoeie plastique
router.route('/maincategplast')
    .get(getCategPlastiques)
    .post(addCategPlastiques);

//delete specific main categoeie plastique
router.route('/maincategplast/:maincategid')
    .get(getcategplastique)
    .put(updateCategPlastique)
    .delete(deleteCategPlastiques);


//read and add sub categoeie plastique
router.route('/maincategplast/:maincategid/subcategorie')
    .get(getSubCategPlastiques)
    .post(addSubCategPlastiques);

//delete specific sub categoeie plastique
router.route('/maincategplast/:maincategid/subcategorie/:subcategid')
    .delete(deleteSubCategPlastiques);

//read and add plastique
router.route('/plastiques')
    .get(getPlastiques)
    .post(upload.single('image'),addPlastiques);

//read, update and delete specific plastique
router.route('/plastiques/:plastiqueid')
    .get(getPlastique)
    .put(upload.single('image'),updatePlastiques)
    .delete(deletePlastiques);

//read and add main categoeie bio
router.route('/maincategbio')
    .get(getCategBios)
    .post(addCategBios);

//delete specific main categoeie bio
router.route('/maincategbio/:maincategbioid')
    .delete(deleteCategBios)
    .put(updateCategBio)
    .get(getcategorybio);


//read and add sub categoeie bio
router.route('/maincategbio/:maincategbioid/subcategoriebio')
    .get(getSubCategBio)
    .post(addSubCategBio);

//delete specific sub categoeie bio
router.route('/maincategbio/:maincategbioid/subcategoriebio/:subcategbioid')
    .delete(deleteSubCategBio);

//read and add clients
router.route('/clients')
    .get(getClients)
    .post(upload.single('Photo'),addClient);

//read, update and delete specific client
router.route('/clients/:clientid')
    .delete(deleteClient);

//read and add vente
router.route('/ventes')
    .get(getVentes)
    .post(addVente);

//read, update and delete specific vente
router.route('/ventes/:venteid')
    .delete(deleteVente);


//read and add achat
router.route('/achats')
    .get(getAchats)
    .post(addAchat);

//read, update and delete specific vente
router.route('/achats/:achatid')
    .delete(deleteAchat);


module.exports = router;