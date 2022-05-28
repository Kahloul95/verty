const asyncHandler = require('express-async-handler')

const ProductBioModel = require('../models/produitBio/ProduitBio')

// @desc Get list des produits
// @route GET /api/produits
const getProduits = asyncHandler(async (req, res) => {
    const produits = await ProductBioModel.find()

    res.status(200).json(produits)
})

// @desc Get produit
// @route GET /api/produits
const getProduit = asyncHandler(async (req, res) => {
    const produit = await ProductBioModel.findById(req.params.productid)

    if(!produit){
        res.status(400)
        throw new Error('non produit')
    }

    res.status(200).json(produit);
})

// @desc add list produits
// @route POST /api/produits
const addProduit = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }

    const produit = await ProductBioModel.create({
        Nomproduit: req.body.Nomproduit,
        Description: req.body.Description,
        Fornisseur: req.body.Fornisseur,
        Quantite: req.body.Quantite,
        Datearrivage: req.body.Datearrivage,
        Prix: req.body.Prix,
        Image: req.body.Image,
        ScoreEnPoints: req.body.ScoreEnPoints,
        DispoEnStock: req.body.DispoEnStock,
        DispoEnLieu: req.body.DispoEnLieu,
        ProfilClient: req.body.ProfilClient,
        EnPromotion: req.body.EnPromotion,
        DebutPromotion: req.body.DebutPromotion,
        FinPromotion: req.body.FinPromotion,
        Discount: req.body.Discount,
        CodePromo: req.body.CodePromo,
    })
    res.status(200).json(produit);
})


// @desc update produit
// @route PUT /api/produits
const updateProduit = asyncHandler(async (req, res) => {
    const produit = await ProductBioModel.findById(req.params.productid)

    if(!produit){
        res.status(400)
        throw new Error('non produit')
    }

    const updatedProduit = await ProductBioModel.findByIdAndUpdate(req.params.productid, req.body, {
        new: true,
    })

    res.status(200).json(updatedProduit);
})



// @desc delete produit
// @route DELETE /api/produits
const deleteProduit = asyncHandler(async (req, res) => {
    const produit = await ProductBioModel.findById(req.params.productid)

    if(!produit){
        res.status(400)
        throw new Error('non produit')
    }

    await produit.remove()

    res.status(200).json({id: req.params.productid});
})

module.exports = {
    getProduits,
    getProduit,
    addProduit,
    updateProduit,
    deleteProduit,
}