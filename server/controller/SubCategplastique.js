const mongoose = require('mongoose');
const CategoryPlastiqueModel = require('../models/categoriePlastique/CategoriePlastique')

const addSubCategPlastiques = (request, response) => {
    const maincategid = request.params.maincategid;
    if(maincategid) {
        CategoryPlastiqueModel.findById(maincategid)
            .select('subCategorie')
            .exec((error, categoryplastique)=>{
                if(error){
                    response
                        .status(400)
                        .json(error);
                }else{
                    doAddSubCateg(request, response, categoryplastique);
                }
            });
    }else{
        response
            .status(404)
            .json({"message": " main category not found"});
    }
}
const doAddSubCateg= (request, response, categoryplastique) =>{
    categoryplastique.subCategorie.push({
        subCategorie: request.body.subCategorie,
    });

    categoryplastique.save((error, categoryplastique)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            let subCategorie = categoryplastique.subCategorie[categoryplastique.subCategorie.length - 1];
            response
                .status(201)
                .json(subCategorie);
        }
    });
}

const getSubCategPlastiques = (request, response) => {
    CategoryPlastiqueModel.findById(request.params.maincategid)
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
                            "message": "No subCategorie"
                        });
                }
            }
        });
}

const deleteSubCategPlastiques = (request, response) => {
    const {maincategid, subcategid} = request.params;
    if (!maincategid || !subcategid) {
        return response
            .status(404)
            .json({'message': 'Not found, maincategid and subcategid are both required'});
            }
        CategoryPlastiqueModel
            .findById(maincategid)
            .select('subCategorie')
            .exec((error, categoryplastique) => {
                if (!categoryplastique) {
                    return response
                        .status(404)
                        .json({'message': 'categoryplastique not found'});
                } else if (error) {
                    return response
                        .status(400)
                        .json(error);
                }
                if (categoryplastique.subCategorie && categoryplastique.subCategorie.length > 0) {
                    if (!categoryplastique.subCategorie.id(subcategid)) {
                        return response
                            .status(404)
                            .json({'message': 'subCategorie not found'});
                    } else {
                        categoryplastique.subCategorie.id(subcategid).remove();
                        categoryplastique.save(error => {
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
    addSubCategPlastiques,
    getSubCategPlastiques,
    deleteSubCategPlastiques,
}