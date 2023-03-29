// importando o express 
const express = require('express');

const tabelaModel = require('../model/tabelaModel.js');

// Rotas Crud 

const clientesController = {

    createCliente: (req, res) => {
        let{cpf, nomeDono, endereco, telefone, nomeAnimal} = req.body
        tabelaModel.create({cpf, nomeDono, endereco, telefone, nomeAnimal})
            .then(
                ()=>{
                    return res.status(201).json({
                        erroStatus: false,
                        mensagemStatus: "DADOS INSERIDOS COM SUCESSO"
                    })
                }
            ).catch(
                (error) => {
                    return res.status(400).json({
                        erroStatus: true,
                        mensagemStatus: "ERRO AO INSERIR DADOS",
                        erro:error
                    });
                }
            )
    },
    getCliente: (req, res) => {
        tabelaModel.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "Dados listados",
                    data:response
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao listar dados",
                    errorObject: error
                })
            }
        )
    },
    getClienteID:(req, res) => {
        let {cpf} = req.params;
        tabelaModel.findByPk(cpf)
            .then(
                (response) => {
                    return res.staus(200).json({
                        erroStatus:false,
                        mensagemStatus:'Dados listados por ID',
                        data: response
                    })
                }
            ).catch(
                (error) => {
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus: "Erro ao listar dados por ID",
                        errorObject: error
                })
            }
        )
    },
    putCliente:(req, res) => {
        let{ nomeDono, endereco, telefone, nomeAnimal} = req.body;
        let{cpf } =req.params;
        tabelaModel.update(
            { nomeDono, endereco, telefone, nomeAnimal},
            {where:{cpf}}
        ).then(
            ()=>{
                return res.staus(200).json({
                    erroStatus:false,
                    mensagemStatus:"Dados atualizados!"
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao listar dados por ID",
                    errorObject: error
                });
            }
        )
    },
    postCliente:(req, res) => {
        let{ nomeDono, endereco, telefone, nomeAnimal} = req.body;
        tabelaModel.update(
            { nomeDono, endereco, telefone, nomeAnimal},
            {where:{cpf}}
        ).then(
            ()=>{
                return res.staus(200).json({
                    erroStatus:false,
                    mensagemStatus:"Dados atualizados!"
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao listar dados por ID",
                    errorObject: error
                });
            }
        )
    },
    destroyCliente:(req, res) => {
        let{cpf} = req.params;
        tabelaModel.findByPk(cpf)
            .then((cliente) => {
                if(cliente){
                    tabelaModel.destroy({where:{cpf}})
                    .then(()=>{
                        return res.status(200).json({
                            erroStatus:false,
                            mensagemStatus:"Dados excluidos"
                        })
                    }).catch(
                        (error)=>{
                            return res.status(400).json({
                                erroStatus:true,
                                mensagemStatus:"Erro ao excluir dados",
                                errorObject:error
                            });
                        })} 
                        else{
                            return res.status(404).json({
                                erroStatus:true,
                                mensagemStatus:"Erro ao excluir dados"
                            })
                        }
            }).catch((error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"Erro ao encontrar dados",
                    errorObject:error
                })
            })
    }                    
}

module.exports = clientesController;