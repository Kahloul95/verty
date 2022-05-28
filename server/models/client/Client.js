const mongoose = require('mongoose')


const ClientSchema = new mongoose.Schema({
    NomEtPrenom: {
        type: String,
        required: true,
    },
    Photo:{
        type: String,
        require: true,
    },
    Lieu:{
        type: String,
        enum: [
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
    DateDeNaissanse: {
        type: String,
        require:true,
    },
    Sexe: {
        type: String,
        possibleValues: ['femme','homme'],
        
    },
    Email: {
        type: String,
        required: true,
    },
    telephone: {
        type: Number,
        required: true,
    },



});

const ClientModel = mongoose.model('Clients', ClientSchema);

module.exports = ClientModel;