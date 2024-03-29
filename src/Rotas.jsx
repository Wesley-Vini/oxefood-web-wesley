import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormProduto from './views/Produto/FormProduto';
import ListCliente from './views/cliente/ListCliente';
import FormCliente from './views/cliente/formCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                
                
            
            </Routes>
        </>
    )
}

export default Rotas
