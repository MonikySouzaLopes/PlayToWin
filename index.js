const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: '5433',
    database: 'PlayToWinB',
});

client.connect()
.then(()=> {
console.log("Conexão bem sucedida!");
})
.catch((err)=>{
console.log("Erro: " + err)
});