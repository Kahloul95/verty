const asyncHandler = require('express-async-handler')
const ProductPlastiqueModel = require('../models/produitPlastique/ProduitPlastique')

// @desc Get list des plastiques
// @route GET /api/plastiques
const getPlastiques = asyncHandler(async (req, res) => {
    const produitPlastique = await ProductPlastiqueModel.find()

    res.status(200).json(produitPlastique)
})

// @desc Get plastiques
// @route GET /api/fornisseur
const getPlastique = asyncHandler(async (req, res) => {
    const produitPlastique = await ProductPlastiqueModel.findById(req.params.plastiqueid)

    if(!produitPlastique){
        res.status(400)
        throw new Error('non produit Plastique')
    }

    res.status(200).json(produitPlastique);
})

// @desc add des plastiques
// @route POST /api/plastiques

const addPlastiques =  (req,res)=>{
    if(!req.body){
        console.log('ya fedda rahi null',req.body);
        return res.status(400)
            .json({message:'3ella'});
    }else{
        console.log('bon makech fedda',req.body);

    }

    console.log('suis ici 2222');
    console.log('suis ici 33333');

    const produitPlastique =  ProductPlastiqueModel.create(
        {
        Label: req.body.Label,
        Description: req.body.Description,
        image: req.file.filename,
        Poids: req.body.Poids,
        Quantite: req.body.Quantite,
        ScoreEnPoints: req.body.ScoreEnPoints,
        Prix: req.body.Prix,
        categorie: req.body.categorie,
        subcategorie: req.body.subcategorie,
    }
    ,(err,plast)=>{
        console.log('suis ici 44444');

        if(err){
            res.status(400)
            .json(err);
        }else{
            if(!plast){
                res.status(404)
                .json({message:'3ella ma thamma 7atta chay'});
            }else{
                res.status(201)
                .json(plast);
            }
        }
    })
}



/*const addPlastiques = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }

    const produitPlastique = await ProductPlastiqueModel.create({
        Label: req.body.Label,
        Description: req.body.Description,
        image: req.body.image,
        Poids: req.body.Poids,
        Quantite: req.body.Quantite,
        ScoreEnPoints: req.body.ScoreEnPoints,
        Prix: req.body.Prix,
        categorie: req.body.categorie,
        subcategorie: req.body.subcategorie,
    })
    res.status(200).json(produitPlastique);
})*/

// @desc update plastiques
// @route PUT /api/plastiques
const updatePlastiques = asyncHandler(async (req, res) => {
    const produitPlastique = await ProductPlastiqueModel.findById(req.params.plastiqueid)

    if(!produitPlastique){
        res.status(400)
        throw new Error('non produit Plastique')
    }

    const updatedPlastiques = await ProductPlastiqueModel.findByIdAndUpdate(req.params.plastiqueid, req.body, {
        new: true,
    })

    res.status(200).json(updatedPlastiques);
})

// @desc delete Plastiques
// @route DELETE /api/Plastiques
const deletePlastiques = asyncHandler(async (req, res) => {
    const produitPlastique = await ProductPlastiqueModel.findById(req.params.plastiqueid)

    if(!produitPlastique){
        res.status(400)
        throw new Error('non produit Plastique')
    }

    await produitPlastique.remove()

    res.status(200).json({id: req.params.plastiqueid});
})

module.exports = {
    getPlastiques,
    getPlastique,
    addPlastiques,
    updatePlastiques,
    deletePlastiques,
}
