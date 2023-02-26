const Sequelize = require('sequelize');

/**conexão com BD */
/*   por linha

1- Nome do banco - STRING
2- Usúario ""    - STRING
3- Senha ""      - STRING
4- Json :

4.1 - local do BD (host)
4.2 - tipo do BD (dialect)
4.3 - fuso horário

*/



const connection = new Sequelize(
        'PetShop', 
        'root',
        '',
        {
            host:'localhost',
            dialect:'mysql',
            timezone: '-03:00'
        }
    );

module.exports = connection;