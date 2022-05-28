const mongoose = require('mongoose');
const CategoryPlastiqueModel = require('../models/categoriePlastique/CategoriePlastique')

const getCategPlastiques = (request, response) => {
    CategoryPlastiqueModel.find()
        .exec((error, categoryplastique)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(categoryplastique){
                    response
                        .status(201)
                        .json(categoryplastique);
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

// @desc Get Categplast,
// @route GET /api/Categplast,
const getcategplastique = (request, response) => {
    const maincategid = request.params.maincategid;
    CategoryPlastiqueModel
        .findById(maincategid)
        .exec((err, categoryplastique) => {
            if (!categoryplastique) {
                return response
                    .status(404)
                    .json({
                        "message": "categoryplastique not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(categoryplastique);

        });
}


const addCategPlastiques = (request, response) => {
    console.log(request.body)
    CategoryPlastiqueModel.create({

        mainCategorie: request.body.mainCategorie,
        
    },(error, categoryplastique)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(categoryplastique);
        }
    });

}


const updateCategPlastique = (request, response) => {
    const maincategid = request.params.maincategid;

    CategoryPlastiqueModel.findById(maincategid)
        .exec((error, categoryplastique) =>{
            if (!categoryplastique) {
                return response
                    .status(404)
                    .json({
                        "message": "maincategid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            
            categoryplastique.mainCategorie = request.body.mainCategorie;
            
            categoryplastique.save((error, categoryplastique) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(categoryplastique);
                }
            });
        });
}


const deleteCategPlastiques = (request, response) => {
    const {maincategid} = request.params;
    if (maincategid) {
        CategoryPlastiqueModel
            .findByIdAndRemove(maincategid)
            .exec((error, categoryplastique) => {
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
                {"message": "No category plastic"
            });
    }
}


module.exports = {
    getCategPlastiques,
    getcategplastique,
    addCategPlastiques,
    updateCategPlastique,
    deleteCategPlastiques,
    
}