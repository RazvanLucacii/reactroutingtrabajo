import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class CrearProductos extends Component {

  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaPrecio = React.createRef();
  cajaDescripcion = React.createRef();

  state = {
      status: false
  }

  insertarProducto = (e) =>{
    e.preventDefault();
    var id = parseInt(this.cajaNumero.current.value);
    var nombre = this.cajaNombre.current.value;
    var precio = parseInt(this.cajaPrecio.current.value);
    var descripcion = this.cajaDescripcion.current.value;
    var imagen = null;
    var categoria = null;
    var rating = null;
    

    var datos = {
        id: id,
        title: nombre,
        price: precio,
        description: descripcion,
        image: imagen,
        category: categoria,
        rating: rating
        
    }

    var request = "products";
    var url = Global.apiUrls + request;
    axios.post(url, datos).then(response => {
        this.setState({
            status: true
        })
    })
  }

  render() {
    if(this.state.status === true){
      return (<Navigate to="/productos" />)
    }else{
      return (
        <div className='container'>
          <h1>Crear un Producto</h1>
          <form>
            <label>ID Producto</label>
            <input type="number" defaultValue={0} ref={this.cajaNumero} className='form-control' />
            <label>Nombre del Producto</label>
            <input type="text" defaultValue={""} ref={this.cajaNombre} className='form-control' />
            <label>Precio</label>
            <input type="number" defaultValue={0} ref={this.cajaPrecio} className='form-control' />
            <label>Descripcion</label>
            <input type="text" defaultValue={""} ref={this.cajaDescripcion} className='form-control' />
            <button className='btn btn-info' onClick={this.insertarProducto}>
              Crear Producto
            </button>
          </form>
        </div>
      )
    }
  }
}
