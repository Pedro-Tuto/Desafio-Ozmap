//criando uma função para listar usuários e passar como parâmetro na rota
async function listUsers(ctx){
    console.log(ctx)
    ctx.status = 200;
    ctx.body = {total:0, count: 0, rows:[]}
}

//criando um export para as funções
module.exports = {
    listUsers,
    
};