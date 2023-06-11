const LivroModel = require('../models/LivroModel');

class LivroController{

    async listar(req, res){
        //select * from livro;
        const resultado = await LivroModel.find({});
        res.json(resultado);
    }

    async buscarPorId(req, res){
        const id  = req.params.id;
        //select * from livro where codigo = 2;
        const resultado = await LivroModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        const livro = req.body;
        //insert into livro (xxx) values (xxxx);
        const resultado = await LivroModel.create(livro);
        res.json(resultado);
    }

    async atualizar(req, res){
        const id = req.params.id;
        const livro = req.body;
        //update livro set xxxx values xxxx
        const resultado = await LivroModel.findOneAndUpdate({'_id': id}, livro, {new: true});
        res.send(resultado);
    }

    async excluir(req, res){
        const id = req.params.id;
        await LivroModel.findOneAndDelete({'_id': id});
        res.send("Livro excluído!");
    }
}

module.exports = new LivroController();