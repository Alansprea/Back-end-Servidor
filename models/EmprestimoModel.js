const mongoose = require('mongoose');



var date = new Date()

const EmprestimoSchema = new mongoose.Schema({
    _id: {type: Number, required: true, default: -1},
    informacoesAluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aluno'
    },
    codigolivro: {
        type: Number,
        required: [true, "Informe o código do livro!"]
    },
    comprovanteEmissao: {
        type: Date,
        default: Date.now()
    },
    dataDevolucao: {
        type: Date,
        default: date.setDate(date.getDate() + 15)
    }
});

EmprestimoSchema.pre('save', async function(next){
    if (this._id < 1){
      const Model = mongoose.model('emprestimo', EmprestimoSchema);
      const objMaxId = await Model.findOne().sort({'_id': -1});
      this._id = objMaxId == null ? 1 : objMaxId._id + 1;
    }
    next();
  });


module.exports = {
    EmprestimoSchema: EmprestimoSchema,
    EmprestimoModel: mongoose.model('emprestimo', EmprestimoSchema)
} 
