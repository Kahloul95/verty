const mongoose = require('mongoose');
const CategoryBioModel = require('../models/categorieBio/CategorieBio')

const getCategBios = (request, response) => {
    CategoryBioModel.find()
        .exec((error, categoryBio)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(categoryBio){
                    response
                        .status(201)
                        .json(categoryBio);
                }else{
                    return response
                        .status(404)
                        .json({
                            "message": "category not found"
                        });
                }
            }
        });
}

// @desc Get CategBio,
// @route GET /api/CategBio,
const getcategorybio = (request, response) => {
    const maincategbioid = request.params.maincategbioid;
    CategoryBioModel
        .findById(maincategbioid)
        .exec((err, categoryBio) => {
            if (!categoryBio) {
                return response
                    .status(404)
                    .json({
                        "message": "categoryBio not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(categoryBio);

        });
}


const addCategBios = (request, response) => {
    console.log(request.body)
    CategoryBioModel.create({

        mainCategorie: request.body.mainCategorie,

    },(error, categoryBio)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(categoryBio);
        }
    });

}


const updateCategBio = (request, response) => {
    const maincategbioid = request.params.maincategbioid;

    CategoryBioModel.findById(maincategbioid)
        .exec((error, categoryBio) =>{
            if (!categoryBio) {
                return response
                    .status(404)
                    .json({
                        "message": "maincategbioid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            
            categoryBio.mainCategorie = request.body.mainCategorie;
            
            categoryBio.save((error, categoryBio) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(categoryBio);
                }
            });
        });
}


const deleteCategBios = (request, response) => {
    const {maincategbioid} = request.params;
    if (maincategbioid) {
        CategoryBioModel
            .findByIdAndRemove(maincategbioid)
            .exec((error, categoryBio) => {
                    if (error) {
                        return response
                            .status(404)
                            .json(error);
                    }
                    response
                        .status(204)
                        .json(null);
                }
            );
    } else {
        response
            .status(404)
            .json(
                {"message": "No category produit bio "
            });
    }
}

module.exports = {
    getCategBios,
    getcategorybio,
    addCategBios,
    updateCategBio,
    deleteCategBios,
    
}
