const mongoose = require('mongoose')


const AgentCollectSchema = new mongoose.Schema({

    NomAgentCollect: {
        type: String,
        required: true,
    },
    NomEtPrenomRespnsable: {
        type: String,
        required: true,
    },
    CIN: {
        type: Number,
        require:true,
    },
    Telephone: {
        type: Number,
        require:true,
    },
    TypeDeVehicule: {
        type: String,
        require:true,        
    },
    ImageDeVehicule: {
        type: String,
        require:true,        
    },
    Lieu: {
        type: String,
        required: true,
    },
    ZonneDeCollect:{
        type: String,
        require: true,
    },


});

const AgentCollectModel = mongoose.model('AgentCollect', AgentCollectSchema);

module.exports = AgentCollectModel;