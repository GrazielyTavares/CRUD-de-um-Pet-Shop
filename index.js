//Importando o pacote express
const  express = require('express');
const routesCliente = require('./route/routesCliente');

/*executando o Express*/
const app = express();

app.use(express.json());

console.log('testando!')

app.use('/', routesCliente);

/*Webserver capaz de receber requisições

1. Porta Lógica -OBRIGATÓRIO-
2. CallBack     -  OPCIONAL -

*/

// local host
app.listen(3000,()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});

