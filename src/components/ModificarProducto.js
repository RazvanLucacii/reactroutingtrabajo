import React, { Component } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class ModificarProducto extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaPrecio = React.createRef();
    cajaDescripcion = React.createRef();
    cajaCategoria = React.createRef();
    cajaImagen = React.createRef();
    
    state = {
        producto: {},
        statusGet: false,
        status: false
    }

    buscarProducto = () => {
        var request = "products/" + this.props.id;
        var url = Global.apiUrls + request;
        axios.get(url).then(response => {
            this.setState({
                producto: response.data,
                statusGet: true
            })
        })
    }

    modificarProducto = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var precio = parseInt(this.cajaPrecio.current.value);
        var descripcion = this.cajaDescripcion.current.value;
        var categoria = this.cajaCategoria.current.value;
        var imagen = this.cajaImagen.current.value;
        var rating = null;

        var data = {
            id: id,
            title: nombre,
            precio: precio,
            description: descripcion,
            category: categoria,
            image: imagen,
            rating: rating
        }

        var request = "products/" + this.props.id;
        var url = Global.apiUrls + request;
        axios.put(url, data).then(response =>{
            this.setState({
                status: true
            })
        })
    }
    
    componentDidMount = () => {
        this.buscarProducto();
    }

  render() {
    return (
      <div>
        {
            this.state.status === true &&
            (
                <Navigate to="/productos"/>
            )
        }
        <NavLink to="/productos" >Back to List</NavLink>
        <h1>Modificar Producto {this.props.id}</h1>
        {
            this.state.statusGet === true &&
            (
                <form>
                    <input type="hidden" defaultValue={this.state.producto.id} ref={this.cajaNumero} className='form-control'/>
                    <label>Nombre</label>
                    <input type="text" defaultValue={this.state.producto.title} ref={this.cajaNombre} className='form-control'/>
                    <label>Descripcion</label>
                    <input type="text" defaultValue={this.state.producto.description} ref={this.cajaDescripcion} className='form-control'/>
                    <label>Precio</label>
                    <input type="text" defaultValue={this.state.producto.price} ref={this.cajaPrecio} className='form-control'/>
                    <label>Categoria</label>
                    <input type="text" defaultValue={this.state.producto.category} ref={this.cajaCategoria} className='form-control'/>
                    <label>Imagen</label>
                    <input type="text" defaultValue={this.state.producto.image} ref={this.cajaImagen} className='form-control'/>
                    <button onClick={this.modificarProducto} className='btn btn-primary'>Modificar</button>
                </form>
            )
        }
      </div>
    )
  }
}

