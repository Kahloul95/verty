const mongoose= require('mongoose')

const SubCategorySchema = new mongoose.Schema({
    subCategorie: {
        type: String,
        required: true,
    },
})


const CategoryBioSchema = new mongoose.Schema({
    mainCategorie: {
        type: String,
        required: true,
    },
    subCategorie:[SubCategorySchema],

})
const CategoryBioModel = mongoose.model('categoryBio', CategoryBioSchema);

module.exports = CategoryBioModel;