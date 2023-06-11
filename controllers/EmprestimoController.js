const EmprestimoModel = require('../models/EmprestimoModel');

class EmprestimoController {

    async listar(req, res){  
        //select * from emprestimo;
        const resultado = await EmprestimoModel.find({});
        res.json(resultado);    
    }

    async buscarPorId(req, res){
        const id  = req.params.id;
        //select * from emprestimo where codigo = 2;
        const resultado = await EmprestimoModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        const emprestimo = req.body;
        //insert into emprestimo (xxx) values (xxxx);
        const resultado = await EmprestimoModel.create(emprestimo);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const id = req.params.id;
        const emprestimo = req.body;
        //update emprestimo set xxxx values xxxx
        const resultado = await EmprestimoModel.findOneAndUpdate({'_id': id}, emprestimo, {new: true});
        res.json(resultado);
    }

    async excluir(req, res){
        const id = req.params.id;
        await EmprestimoModel.findOneAndDelete({'_id': id});
        res.send("Comprovante excluído!");
    }
}

module.exports = new EmprestimoController();