import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink, Navigate } from 'react-router-dom'

export default class EliminarProductos extends Component {
  state = {
    status: false
  }

  eliminarProducto = () => {
    var request = "products/" + this.props.id;
    var url = Global.apiUrls + request;
    axios.delete(url).then(response => {
        this.setState({
            status: true
        })
    })
  }

  render() {
    return (
      <div>
        {
            this.state.status === true &&
            (
                <Navigate to="/productos" />
            )
        }
        <NavLink to="/productos" >Back to List</NavLink>
        <h1>¿Eliminar Producto {this.props.id}?</h1>
            <button className='btn btn-danger' onClick={() => this.eliminarProducto()}>Eliminar</button>
      </div>
    )
  }
}
