const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {
            id,
            title,
            reservation,
            rent,
            devolution
        } = request.body;
        
        try{
            await connection('books').insert({
                id,
                title,
                reservation,
                rent,
                devolution
            });
        }catch(err){ 
            response.json('Erro ao criar livro!'+err);
        }
        return response.json('O livro foi criado com sucesso!');
    },

    async index(request, response){
        try{
            const books = await connection('books').select('*');
            return response.json(books);
        }catch(err){
            response.json('Erro ao listar livros! '+err);
        }
    },
    
    async delete(request, response){
        const { id } = request.body;
        try{
        const books = await connection('books').where('id', id).del();
        return response.json('Livro deletado com sucesso! '+books);
        }catch(err){
            response.json('Erro ao deletar livro!'+err);
        }
    },
};