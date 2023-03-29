//Importando o pacote express
const  express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const controllerVendas = require('./controller/controllerCliente')

app.use('/', controllerVendas);



// local host
app.listen(3000,()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});

