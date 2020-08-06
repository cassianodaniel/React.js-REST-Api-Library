const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {
            id,
            devolution,
            rent,
            reservation,
        } = request.body;
        
        try{
            await connection('books').insert({
                id,
                devolution,
                rent,
                reservation,
            });
        }catch(err){ 
            response.json('Erro ao criar aluguel!'+err);
        }
        return response.json('O aluguel foi criado com sucesso!');
    },

    async update(request, response){
        const {
            id,
            devolution,
            rent,
            reservation,
        } = request.body;
        try{
            await connection('books').where('id', id).update({devolution: devolution, rent: rent, reservation: reservation});
            return response.json('Estado de aluguel alterado com sucesso!');
        }catch(err){
            response.json('Erro ao alterar estado de aluguel!'+err);
        }
    },

    async index(request, response){
        try{
            const rents = await connection('books').where('rent', 1);;
            return response.json(rents);
        }catch(err){
            response.json('Erro ao listar aluguéis! '+err);
        }
    },
    
    async delete(request, response){
        const { id } = request.body;
        try{
        const rents = await connection('books').where('id', id).del();
        return response.json('Aluguel deletado com sucesso! '+rents);
        }catch(err){
            response.json('Erro ao deletar aluguel!'+err);
        }
    },
};