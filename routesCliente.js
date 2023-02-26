// importando o express 
const express = require('express');

const tabelaModel = require('../model/tabelaModel.js');

//gerenciador das  rotas
const router = express.Router();

// Rotas Crud 

//Rota de Cadrasto
router.post('/cadastrarCliente', (req,res) => {
    console.log(req.body);

    //let nome_categoria =req.body.nome_categoria;
    let {cpf, nome, endereço, telefone} = req.body;
    
    tabelaModel.create(
        //dados para inserir
        {cpf, nome, endereço, telefone}

    ).then(
        ()=>{
            return res.status(201).json(
                {
                    erroStatus:false,
                    mensagemStatus:"INSERIDO!"
                })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"DEU ERRO!",
                errorObject:error
            });
        }
    );
    // res.send('ROTA DE CADASTRO DE CATEGORIA!');
    // console.log('TESTE DE NODEMON');
});


//rota Listagem sem critério
router.get('/listarCliente', (req,res)=>{

    tabelaModel.findAll()
        .then(
            (response)=>{

                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CLIENTE LISTADO!",
                    data:response
                })
            }
        ).catch(
            (error)=>{

                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR!",
                    errorObject:error
                });
            }
        );
});


//rota de listagem por cod_cliente
router.get('/listarClientePK/:cpf',(req,res)=>{

    //declarar e receber o dado por cod
    let {cpf} = req.params;

    //seleção de dados Sequelize
    tabelaModel.findByPk(cpf)
    .then(
        (response)=>{

            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO!",
                data:response
            })
        }
    ).catch(
        (error)=>{

            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR!",
                errorObject:error
            });
        }
    );
});

//rota de listagem por nome
router.get('/listarClienteNOME/:nome',(req,res)=>{

    let{nome} = req.params;

    tabelaModel.findOne({attributes:['cpf','nome','endereço','telefone'],where:{nome}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO!",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR!",
                errorObject:error
            });
        }
    );
});

//Rota de Alteração
router.put('/alterarCliente', (req,res)=>{

    const {cpf,nome,endereço,telefone} = req.body;

    tabelaModel.update(
        {nome,endereço,telefone},
        {where:{cpf}}

    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE ALTERADO!"
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR!",
                errorObject:error
            });
        }
    );
});

//rota de excluir
router.delete('/excluirCliente/:cpf', (req,res)=>{
    console.log(req.params);

    let {cpf} = req.params

    tabelaModel.destroy(
        {where:{cpf}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUIDO!"
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR!",
                errorObject:error
            });
        }
    );
});

module.exports = router;