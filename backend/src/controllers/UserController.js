const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {
            id,
            nome,
            password,
            email,
        } = request.body;
        
        try{
            await connection('users').insert({
                id,
                nome,
                password,
                email,
            });
        }catch(err){ 
            response.json('Erro ao criar usuário! '+err);
        }
        return response.json('O usuário foi criado com sucesso!');
    },

    async index(request, response){
        try{
            const users = await connection('users').select('*');
            return response.json(users);
        }catch(err){
            response.json('Erro ao listar usuários! '+err);
        }
    },

    async update(request, response){
        const {
            id,
            nome,
            password,
            email,
        } = request.body;
        try{
            await connection('users').where('id', id).update({password: 'updatedPassword'});
            return response.json('Senha alterada com sucesso!');
        }catch(err){
            response.json('Erro ao alterar senha de usuário! '+err);
        }
    },
    
    async delete(request, response){
        const { id } = request.body;
        try{
        const users = await connection('users').where('id', id).del();
        return response.json('Usuário deletado com sucesso! '+users);
        }catch(err){
            response.json('Erro ao deletar usuário!'+err);
        }
    },
};