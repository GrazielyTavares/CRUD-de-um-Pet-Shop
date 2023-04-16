const Sequelize = require('sequelize');

const connection = require('../database/database.js');


const tabelaModel = connection.define(
    'vendas',
    {
        cpf:{
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false
        },
        nomeDono:{
        type: Sequelize.STRING(100),
        allowNull: false
        },
        endereco:{
        type: Sequelize.STRING(100),
        allowNull: false
        },
        telefone:{
        type: Sequelize.INTEGER(11),
        allowNull: false
        },
        nomeAnimal:{
        type: Sequelize.STRING(100),
        allowNull: false
        }
        
    }
        
    
);

tabelaModel.sync({force:true});

module.exports = tabelaModel;