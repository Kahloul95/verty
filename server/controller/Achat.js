const asyncHandler = require('express-async-handler')
const AchatModel = require('../models/achat/Achat')

// @desc Get list des ventes
// @route GET /api/ventes
const getAchats = asyncHandler(async (req, res) => {
    const Achats = await AchatModel.find()

    res.status(200).json(Achats)
})


//test only
// @desc add des ventes
// @route POST /api/ventes
const addAchat = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }

    const Achats = await AchatModel.create({

        Client: req.body.Client,
        ProduitBio: req.body.ProduitBio,
        EntrapriseLivraison: req.body.EntrapriseLivraison,
        Date: req.body.Date,
        Montant: req.body.Montant,
        MethodePaiement: req.body.MethodePaiement,
        
    })
    res.status(200).json(Achats);
})

// @desc delete vente
// @route DELETE /api/vente
const deleteAchat = asyncHandler(async (req, res) => {
    const Achats = await AchatModel.findById(req.params.achatid)

    if(!Achats){
        res.status(400)
        throw new Error('non Clients')
    }

    await Achats.remove()

    res.status(200).json({id: req.params.achatid});
})
module.exports = {
    getAchats,
    addAchat,
    deleteAchat,
}