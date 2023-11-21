import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import ModificarProducto from './ModificarProducto';
import HomeComponent from './HomeComponent';
import ProductosComponet from './ProductosComponent';
import DetallesProductos from './DetallesProductos';
import CrearProductos from './CrearProductos';
import EliminarProductos from './EliminarProductos';
import MenuProductos from './MenuProductos';

export default class Router extends Component {
    render() {
        function DetalleProductoElement(){
            var { id } = useParams();
            return(<DetallesProductos id={id}/>)
        }

        function UpdateProductoElement (){
            var { id } = useParams();
            return <ModificarProducto id={id}/>
        }

        function EliminarProductoElement() {
            var { id } = useParams();
            return <EliminarProductos id={id} />
        }

        return(
            <BrowserRouter>
                <MenuProductos />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/productos" element={<ProductosComponet />} />
                    <Route path="/detalles/:id" element={<DetalleProductoElement />} />
                    <Route path="/modificar/:id" element={<UpdateProductoElement />} />
                    <Route path="/eliminar/:id" element={<EliminarProductoElement />} />
                    <Route path="/crear" element={<CrearProductos />} />
                </Routes>
            </BrowserRouter>
        )
    }
}