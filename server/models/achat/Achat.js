const mongoose = require('mongoose')


const AchatSchema = new mongoose.Schema({
    Client: {
        type: String,
        required: true,
    },
    ProduitBio: {
        type: String,
        require:true,
    },
    EntrapriseLivraison: {
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
    MethodePaiement:{
        type: String,
        require: true,
    },


});

const AchatModel = mongoose.model('Achats', AchatSchema);

module.exports = AchatModel;