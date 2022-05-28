const mongoose = require('mongoose')


const productBioSchema = new mongoose.Schema({
    Nomproduit: {
        type: String,
        required: [true, 'please add a text value'], 
    },
    Description: {
        type: String,
        required: [true, 'please add a text value'], 
    },
    Fornisseur: {
        type: String,
        required: true,
    },
    Quantite: {
        type: Number,
        required: true,
    },
    Datearrivage: {
        type: String,
        require:true,
    },
    Image:{
        type:String,
        required: true,
    },
    Prix: {
        type: Number,
        required: true,
    },
    ScoreEnPoints: {
        type: Number,
        required: true,
    },
    DispoEnStock: {
        type: String,
        possibleValues: ['oui','non'],
        
    },
    DispoEnLieu:{
        type: String,
        enum: [
            'Toute la tunisie',
            'Tunis', 
            'Ariana',
            'Béja',
            'Ben Arous',
            'Bizerte',
            'Gabès',
            'Gafsa',
            'Jendouba',
            'Kairouan',
            'Kasserine',
            'Kébili',
            'Le Kef',
            'Mahdia',
            'La Manouba',
            'Médenine',
            'Monastir',
            'Nabeul',
            'Sfax',
            'Sidi Bouzid',
        ],
        
    },
    ProfilClient: {
        type: String,
        enum: ['X', 'Y', 'Z'],
        
    },
    EnPromotion: {
        type: String,
        possibleValues: ['oui','non'],
        
    },
    DebutPromotion: {
        type: String,
    },
    FinPromotion: {
        type: String,
    },
    Discount: {
        type: Number,
    },
    CodePromo: {
        type: String,
    },
    categorie:{
        type: String,
        enum: [
            '*****',
        ],
    },
    subcategorie:{
        type: String,
        enum: [
            '*****',
        ],
    }


},
{
    timestamps: true,
}
);


const ProductBioModel = mongoose.model('produits', productBioSchema);

module.exports = ProductBioModel;