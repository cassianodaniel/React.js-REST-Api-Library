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
            response.json('Erro ao criar devolução '+err);
        }
        return response.json('A devolução foi criado com sucesso!');
    },

    async index(request, response){
        try{
            const devolution = await connection('books').where('devolution', 1);;
            return response.json(devolution);
        }catch(err){
            response.json('Erro ao listar devoluções! '+err);
        }
    },
    
    async delete(request, response){
        const { id } = request.body;
        try{
        const devolution = await connection('books').where('id', id).del();
        return response.json('Devolução deletada com sucesso! '+devolution);
        }catch(err){
            response.json('Erro ao deletar devolução '+err);
        }
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
            return response.json('Estado de devolução alterado com sucesso!');
        }catch(err){
            response.json('Erro ao alterar estado de devolução!'+err);
        }
    },
};