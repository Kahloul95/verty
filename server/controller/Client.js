const asyncHandler = require('express-async-handler')
const ClientModel = require('../models/client/Client')

// @desc Get list des clients
// @route GET /api/clients
const getClients = asyncHandler(async (req, res) => {
    const Clients = await ClientModel.find()

    res.status(200).json(Clients)
})


//test only
// @desc add des fornisseurs
// @route POST /api/fornisseurs

const addClient = (req, res) => {
    if (!req.body) {
        console.log('ya fedda rahi null', req.body);
        return res.status(400)
            .json({ message: '3ella' });
    } else {
        console.log('bon makech fedda', req.body);

    }

    console.log('suis ici 2222');
    console.log('suis ici 33333');

    const fornisseur = ClientModel.create(
        {
            NomEtPrenom: req.body.NomEtPrenom,
            Photo: req.file.filename,
            Lieu: req.body.Lieu,
            DateDeNaissanse: req.body.DateDeNaissanse,
            Sexe: req.body.Sexe,
            Email: req.body.Email,
            telephone: req.body.telephone,
        }
        , (err, client) => {
            console.log('suis ici 44444');

            if (err) {
                res.status(400)
                    .json(err);
            } else {
                if (!client) {
                    res.status(404)
                        .json({ message: '3ella ma thamma 7atta chay' });
                } else {
                    res.status(201)
                        .json(client);
                }
            }
        })
}

/*const addClient = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }

    const Clients = await ClientModel.create({

        NomEtPrenom: req.body.NomEtPrenom,
        Photo: req.body.Photo,
        Lieu: req.body.Lieu,
        DateDeNaissanse: req.body.DateDeNaissanse,
        Sexe: req.body.Sexe,
        Email: req.body.Email,
        telephone: req.body.telephone,
        
    })
    res.status(200).json(Clients);
})
*/


// @desc delete clients
// @route DELETE /api/clients
const deleteClient = asyncHandler(async (req, res) => {
    const Clients = await ClientModel.findById(req.params.clientid)

    if (!Clients) {
        res.status(400)
        throw new Error('non Clients')
    }

    await Clients.remove()

    res.status(200).json({ id: req.params.clientid });
})

module.exports = {
    getClients,
    addClient,
    deleteClient,
}