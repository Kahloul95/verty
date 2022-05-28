const asyncHandler = require('express-async-handler')
const AgentCollectModel = require('../models/agentCollect/AgentCollect')



// @desc Get list des agent de collect
// @route GET /api/agentcollectes
const getAgentCollectes = asyncHandler(async (req, res) => {
    const AgentCollect = await AgentCollectModel.find()

    res.status(200).json(AgentCollect)
})

// @desc Get agent de collect
// @route GET /api/agentcollectes
const getAgentCollecte = asyncHandler(async (req, res) => {
    const AgentCollect = await AgentCollectModel.findById(req.params.agentcollectid)

    if(!AgentCollect){
        res.status(400)
        throw new Error('non Agent de Collect')
    }

    res.status(200).json(AgentCollect);
})

// @desc add des agent de collect
// @route POST /api/agentcollectes


// @desc add des fornisseurs
// @route POST /api/fornisseurs
const addAgentCollecte =  (req,res)=>{
    if(!req.body){
        console.log('ya fedda rahi null',req.body);
        return res.status(400)
            .json({message:'3ella'});
    }else{
        console.log('bon makech fedda',req.body);

    }

    console.log('suis ici 2222');
    console.log('suis ici 33333');

    const AgentCollect =  AgentCollectModel.create(
        {
        NomAgentCollect: req.body.NomAgentCollect,
        NomEtPrenomRespnsable: req.body.NomEtPrenomRespnsable,
        CIN: req.body.CIN,
        Telephone: req.body.Telephone,
        TypeDeVehicule: req.body.TypeDeVehicule,
        ImageDeVehicule: req.file.filename,
        Lieu: req.body.Lieu,
        ZonneDeCollect: req.body.ZonneDeCollect,
    }
    ,(err,agent)=>{
        console.log('suis ici 44444');

        if(err){
            res.status(400)
            .json(err);
        }else{
            if(!agent){
                res.status(404)
                .json({message:'3ella ma thamma 7atta chay'});
            }else{
                res.status(201)
                .json(agent);
            }
        }
    })
}




// @desc update agent de collect
// @route PUT /api/agentcollectes
const updateAgentCollecte = asyncHandler(async (req, res) => {
    const AgentCollect = await AgentCollectModel.findById(req.params.agentcollectid)

    if(!AgentCollect){
        res.status(400)
        throw new Error('non AgentCollect')
    }

    const updatedAgentCollecte = await AgentCollectModel.findByIdAndUpdate(req.params.agentcollectid, req.body, {
        new: true,
    })

    res.status(200).json(updatedAgentCollecte);
})

// @desc delete agent de collect
// @route DELETE /api/agentcollectes
const deleteAgentCollecte = asyncHandler(async (req, res) => {
    const AgentCollect = await AgentCollectModel.findById(req.params.agentcollectid)

    if(!AgentCollect){
        res.status(400)
        throw new Error('non Agent de Collect')
    }

    await AgentCollect.remove()

    res.status(200).json({id: req.params.agentcollectid});
})

module.exports = {
    getAgentCollectes,
    getAgentCollecte,
    addAgentCollecte,
    updateAgentCollecte,
    deleteAgentCollecte,
}