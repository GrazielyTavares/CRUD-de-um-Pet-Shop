const Sequelize = require('sequelize');

const connection = require('../database/database.js');

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const tabelaModel = connection.define(
    'Cliente',
    {
        cpf:{
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false
        },
        nome:{
        type: Sequelize.STRING(100),
        allowNull: false
        },
        endereço:{
        type: Sequelize.STRING(100),
        allowNull: false
        },
        telefone:{
        type: Sequelize.STRING(10),
        allowNull: false
        }
    }
        
    
);

tabelaModel.sync({force:true});

module.exports = tabelaModel;