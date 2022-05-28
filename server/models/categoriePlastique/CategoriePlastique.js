const mongoose= require('mongoose')

const SubCategorySchema = new mongoose.Schema({
    subCategorie: {
        type: String,
        required: true,
    },
})


const CategoryPlastiqueSchema = new mongoose.Schema({
    mainCategorie: {
        type: String,
        required: true,
    },
    subCategorie:[SubCategorySchema],

})
const CategoryPlastiqueModel = mongoose.model('categoryplastique', CategoryPlastiqueSchema);

module.exports = CategoryPlastiqueModel;