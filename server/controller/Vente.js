const asyncHandler = require('express-async-handler')
const VenteModel = require('../models/vente/Vente')

// @desc Get list des ventes
// @route GET /api/ventes
const getVentes = asyncHandler(async (req, res) => {
    const Vente = await VenteModel.find()

    res.status(200).json(Vente)
})


//test only
// @desc add des ventes
// @route POST /api/ventes
const addVente = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }

    const Vente = await VenteModel.create({

        Client: req.body.Client,
        ProduitPlastique: req.body.ProduitPlastique,
        AgentCollect: req.body.AgentCollect,
        Date: req.body.Date,
        Montant: req.body.Montant,
        Solde: req.body.Solde,
        
    })
    res.status(200).json(Vente);
})

// @desc delete vente
// @route DELETE /api/vente
const deleteVente = asyncHandler(async (req, res) => {
    const Vente = await VenteModel.findById(req.params.venteid)

    if(!Vente){
        res.status(400)
        throw new Error('non Clients')
    }

    await Vente.remove()

    res.status(200).json({id: req.params.venteid});
})
module.exports = {
    getVentes,
    addVente,
    deleteVente,
}