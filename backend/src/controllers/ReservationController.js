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
            response.json('Erro ao criar reserva!'+err);
        }
        return response.json('A reserva foi criada com sucesso!');
    },

    async index(request, response){
        try{
            const reservation = await connection('books').where('reservation', 1);
            return response.json(reservation);
        }catch(err){
            response.json('Erro ao reservar livro! '+err);
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
            return response.json('Estado de reserva alterado com sucesso!');
        }catch(err){
            response.json('Erro ao alterar estado de reserva!'+err);
        }
    },
    
    async delete(request, response){
        const { id } = request.body;
        try{
        const reservation = await connection('books').where('id', id).del();
        return response.json('Reserva deletada com sucesso! '+reservation);
        }catch(err){
            response.json('Erro ao deletar reserva!'+err);
        }
    },
};