const mongoose = require('mongoose')


const VenteSchema = new mongoose.Schema({
    Client: {
        type: String,
        required: true,
    },
    ProduitPlastique: {
        type: String,
        require:true,
    },
    AgentCollect: {
        type: String,
        require:true,        
    },
    Date: {
        type: String,
        required: true,
    },
    Montant: {
        type: Number,
        required: true,
    },
    Solde:{
        type: Number,
        require: true,
    },


});

const VenteModel = mongoose.model('Vente', VenteSchema);

module.exports = VenteModel;