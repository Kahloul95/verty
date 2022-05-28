const mongoose = require('mongoose')


const productPlastiqueSchema = new mongoose.Schema({
    Label: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    Poids: {
        type: Number,
        required: true,
    },
    Quantite: {
        type: Number,
        required: true,
    },
    ScoreEnPoints: {
        type: Number,
        require:true,
    },
    Prix: {
        type: Number,
        required: true,
    },
    categorie:{
        type: String,
    },
    subcategorie:{
        type: String,
    }


});


const ProductPlastiqueModel = mongoose.model('produitPlastique', productPlastiqueSchema);

module.exports = ProductPlastiqueModel;