const asyncHandler = require('express-async-handler')
const multer = require ("multer")
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const FornisseursModel = require('../models/fornisseur/Fornisseur');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


// @desc Get list des fornisseurs
// @route GET /api/fornisseurs
const getFornisseurs = asyncHandler(async (req, res) => {
    const fornisseur = await FornisseursModel.find()

    res.status(200).json(fornisseur)
})

// @desc Get fornisseur
// @route GET /api/fornisseur
const getFornisseur = asyncHandler(async (req, res) => {
    const fornisseur = await FornisseursModel.findById(req.params.fornisseurid)

    if(!fornisseur){
        res.status(400)
        throw new Error('non fornisseur')
    }

    res.status(200).json(fornisseur);
})


// @desc add des fornisseurs
// @route POST /api/fornisseurs
const addFornisseur =  (req,res)=>{
    if(!req.body){
        console.log('ya fedda rahi null',req.body);
        return res.status(400)
            .json({message:'3ella'});
    }else{
        console.log('bon makech fedda',req.body);

    }

    console.log('suis ici 2222');
    console.log('suis ici 33333');

    const fornisseur =  FornisseursModel.create(
        {
        RaisonSocial: req.body.RaisonSocial,
        NomEtPrenom: req.body.NomEtPrenom,
        CIN: req.body.CIN,
        Matricule_fiscale: req.body.Matricule_fiscale,
        telephone: req.body.telephone,
        Lieu: req.body.Lieu,
        DateDeConvention: req.body.DateDeConvention,
        TypeDeProduit: req.body.TypeDeProduit,
        Logo: req.file.filename,
        Banque: req.body.Banque,
        RIB: req.body.RIB,
        Credit: req.body.Credit,
    }
    ,(err,fourni)=>{
        console.log('suis ici 44444');

        if(err){
            res.status(400)
            .json(err);
        }else{
            if(!fourni){
                res.status(404)
                .json({message:'3ella ma thamma 7atta chay'});
            }else{
                res.status(201)
                .json(fourni);
            }
        }
    })
}


// @desc update fornisseur
// @route PUT /api/fornisseurs
const updateFornisseur = asyncHandler(async (req, res) => {
    const fornisseur = await FornisseursModel.findById(req.params.fornisseurid)

    if(!fornisseur){
        res.status(400)
        throw new Error('non fornisseur')
    }

    const updatedFornissseur = await FornisseursModel.findByIdAndUpdate(req.params.fornisseurid, req.body, {
        new: true,
    })

    res.status(200).json(updatedFornissseur);
})

// @desc delete fornisseur
// @route DELETE /api/fornisseurs
const deleteFornisseur = asyncHandler(async (req, res) => {
    const fornisseur = await FornisseursModel.findById(req.params.fornisseurid)

    if(!fornisseur){
        res.status(400)
        throw new Error('non fornisseur')
    }

    await fornisseur.remove()

    res.status(200).json({id: req.params.fornisseurid});
})

module.exports = {
    getFornisseurs,
    getFornisseur,
    addFornisseur,
    updateFornisseur,
    deleteFornisseur,
    upload,
}