const asyncHandler = require('express-async-handler')
const ElivraisonModel = require('../models/entrepriseLivraison/EntrepriseLivraison')

// @desc Get list des entreprise de livraison
// @route GET /api/Elivraisons
const getEntrepriseLivraisons = asyncHandler(async (req, res) => {
    const Elivraison = await ElivraisonModel.find()

    res.status(200).json(Elivraison)
})

// @desc Get entreprise de livraison
// @route GET /api/Elivraisons
const getEntrepriseLivraison = asyncHandler(async (req, res) => {
    const Elivraison = await ElivraisonModel.findById(req.params.elivraisonid)

    if(!Elivraison){
        res.status(400)
        throw new Error('non Entraprise de livraison')
    }

    res.status(200).json(Elivraison);
})

// @desc add des entreprise de livraison
// @route POST /api/Elivraisons

const addEntrepriseLivraison =  (req,res)=>{
    if(!req.body){
        console.log('ya fedda rahi null',req.body);
        return res.status(400)
            .json({message:'3ella'});
    }else{
        console.log('bon makech fedda',req.body);

    }

    console.log('suis ici 2222');
    console.log('suis ici 33333');

    const Elivraison =  ElivraisonModel.create(
        {
        NomEntreprise: req.body.NomEntreprise,
        NomEtPrenomRespnsable: req.body.NomEtPrenomRespnsable,
        CIN: req.body.CIN,
        DateDeConvention: req.body.DateDeConvention,
        Telephone: req.body.Telephone,
        MatriculeFiscale: req.body.MatriculeFiscale,
        photo: req.file.filename,
        TypeDeVehicule: req.body.TypeDeVehicule,
        ZonneDeLivraison: req.body.ZonneDeLivraison,
        Banque: req.body.Banque,
        RIB: req.body.RIB,
        Credit: req.body.Credit,
    }
    ,(err,livr)=>{
        console.log('suis ici 44444');

        if(err){
            res.status(400)
            .json(err);
        }else{
            if(!livr){
                res.status(404)
                .json({message:'3ella ma thamma 7atta chay'});
            }else{
                res.status(201)
                .json(livr);
            }
        }
    })
}



// @desc update entreprise de livraison
// @route PUT /api/Elivraisons
const updateEntrepriseLivraison = asyncHandler(async (req, res) => {
    const Elivraison = await ElivraisonModel.findById(req.params.elivraisonid)

    if(!Elivraison){
        res.status(400)
        throw new Error('non entreprise de livraison')
    }

    const updatedElivraison = await ElivraisonModel.findByIdAndUpdate(req.params.elivraisonid, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedElivraison);
})

// @desc delete entreprise de livraison
// @route DELETE /api/Elivraisons
const deleteEntrepriseLivraison = asyncHandler(async (req, res) => {
    const Elivraison = await ElivraisonModel.findById(req.params.elivraisonid)

    if(!Elivraison){
        res.status(400)
        throw new Error('non entreprise de livraison')
    }

    await Elivraison.remove()

    res.status(200).json({id: req.params.elivraisonid});
})



module.exports = {
    getEntrepriseLivraisons,
    getEntrepriseLivraison,
    addEntrepriseLivraison,
    updateEntrepriseLivraison,
    deleteEntrepriseLivraison,
}