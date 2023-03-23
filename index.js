//Importando o pacote express
const  express = require('express');
const routesCliente = require('./routes/routesCliente')

/*executando o Express*/
const app = express();

app.use(express.json());

console.log('testando!')

app.use('/', routesCliente);

// local host
app.listen(3000,()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});

