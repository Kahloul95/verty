const mongoose = require('mongoose')


const ElivraisonSchema = new mongoose.Schema({
    NomEntreprise: {
        type: String,
        required: true,
    },
    NomEtPrenomRespnsable: {
        type: String,
        require:true,
    },
    CIN: {
        type: Number,
        require:true,        
    },
    DateDeConvention: {
        type: String,
        required: true,
    },
    Telephone: {
        type: Number,
        required: true,
    },
    MatriculeFiscale:{
        type: String,
        require: true,
    },
    photo: {
        type: String,
        required: true,
    },
    TypeDeVehicule: {
        type: String,
        require:true,        
    },
    ZonneDeLivraison:{
        type: String,
        require: true,
    },
    Banque:{
        type: String,
        require: true,
    },
    RIB:{
        type: Number,
        require:true,
    },
    Credit:{
        type: Number,
        require:true,
    },
    


});

const ElivraisonModel = mongoose.model('Elivraison', ElivraisonSchema);

module.exports = ElivraisonModel;