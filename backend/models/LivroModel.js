const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({

    _id: {type: Number, required: true, default: -1},
    titulo: {
        type: String,
        required: [true, "Titulo é obrigatório!"]
    },
    categoria: {
        type: String,
        required: [true, "Categoria é obrigatória!"]
    },
    dataCriacao:{
        type: Date,
        default: Date.now()
    },
    sinopse : {
        type: String,
        required: [true, "Sinopse é uma informação obrigatória!"]
    },
    autor: {
        type: String,
        required: [true, "Autor é obrigatório!"]
    },
    quantidade: {
        type: Number,
        required: [true, "Requisito obrigatório!"]
    }
});

LivroSchema.pre('save', async function(next){
    if (this._id < 1){
      const Model = mongoose.model('livro', LivroSchema);
      const objMaxId = await Model.findOne().sort({'_id': -1});
      this._id = objMaxId == null ? 1 : objMaxId._id + 1;
    }
    next();
  });


module.exports = {
    LivroSchema: LivroSchema,
    LivroModel: mongoose.model('livro', LivroSchema)
} 

