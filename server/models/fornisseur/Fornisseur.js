const mongoose = require('mongoose')


const FornisseursSchema = new mongoose.Schema({
    RaisonSocial: {
        type: String,
    },
    NomEtPrenom: {
        type: String,
    },
    CIN: {
        type: Number,
    },
    Matricule_fiscale: {
        type: String,
    },
    telephone: {
        type: Number,
    },
    Lieu: {
        type: String,
    },
    DateDeConvention: {
        type: String,
    },
    TypeDeProduit: {
        type: String,
    },
    Logo:{
        type: String,
    },
    Banque:{
        type: String,
    },
    RIB:{
        type: Number,
    },
    Credit:{
        type: Number,
    },
    

});

const FornisseursModel = mongoose.model('fornisseur', FornisseursSchema);

module.exports = FornisseursModel;