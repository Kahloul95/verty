const mongoose = require('mongoose');
const CategoryBioModel = require('../models/categorieBio/CategorieBio')

const addSubCategBio = (request, response) => {
    const maincategbioid = request.params.maincategbioid;
    if(maincategbioid) {
        CategoryBioModel.findById(maincategbioid)
            .select('subCategorie')
            .exec((error, categoryBio)=>{
                if(error){
                    response
                        .status(400)
                        .json(error);
                }else{
                    doAddSubCategBio(request, response, categoryBio);
                }
            });
    }else{
        response
            .status(404)
            .json({"message": " main category not found"});
    }
}

const doAddSubCategBio= (request, response, categoryBio) =>{
    categoryBio.subCategorie.push({

        subCategorie: request.body.subCategorie,
    });

    categoryBio.save((error, categoryBio)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            let subCategorie = categoryBio.subCategorie[categoryBio.subCategorie.length - 1];
            response
                .status(201)
                .json(subCategorie);
        }
    });
}

const getSubCategBio = (request, response) => {
    CategoryBioModel.findById(request.params.maincategbioid)
        .select('subCategorie')
        .exec((error, subCategorie)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(subCategorie){
                    response
                        .status(201)
                        .json(subCategorie);
                }else{
                    return response
                        .status(404)
                        .json({
                            "message": "No sub Categorie Bio"
                        });
                }
            }
        });
}


const deleteSubCategBio = (request, response) => {
    const {maincategbioid, subcategbioid} = request.params;
    if (!maincategbioid || !subcategbioid) {
        return response
            .status(404)
            .json({'message': 'Not found, maincategbioid and subcategbioid are both required'});
            }
        CategoryBioModel
            .findById(maincategbioid)
            .select('subCategorie')
            .exec((error, categoryBio) => {
                if (!categoryBio) {
                    return response
                        .status(404)
                        .json({'message': 'categoryBio not found'});
                } else if (error) {
                    return response
                        .status(400)
                        .json(error);
                }
                if (categoryBio.subCategorie && categoryBio.subCategorie.length > 0) {
                    if (!categoryBio.subCategorie.id(subcategbioid)) {
                        return response
                            .status(404)
                            .json({'message': 'subCategorie not found'});
                    } else {
                        categoryBio.subCategorie.id(subcategbioid).remove();
                        categoryBio.save(error => {
                            if (error) {
                                return response
                                    .status(404)
                                    .json(error);
                            } else {
                                response
                                    .status(204)
                                    .json(null);
                            }
                        });
                    }
                } else {
                    res
                        .status(404)
                        .json({'message': 'No Review to delete'});
                }
            });
}

module.exports = {
    addSubCategBio,
    getSubCategBio,
    deleteSubCategBio,
}