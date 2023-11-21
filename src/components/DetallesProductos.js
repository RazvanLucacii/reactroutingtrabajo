import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

export default class DetallesProductos extends Component {
  state = {
    producto: {},
    status: false
}

buscarProducto = () =>{
    var request ="products/" + this.props.id;
    var url = Global.apiUrls + request;
    axios.get(url).then(response =>{
        this.setState({
            producto: response.data,
            status: true
        })
    })
}

componentDidMount = () =>{
    this.buscarProducto();
}

  render() {
    return (
      <div className='container'>
        <h1>Detalle Producto {this.props.id}</h1>
        <NavLink className="btn btn-success" to="/productos">Back to List</NavLink>
        <hr/>
        <ul className='list-group'>
            <h3>
              <li className='list-group-item' style={{color:"blue"}}>
                  ID: {this.props.id}
              </li>
            </h3>
            <h3>
              <li className='list-group-item'>
                  Nombre: {this.state.producto.title}
              </li>
            </h3>
            <h3>
              <li className='list-group-item'>
                  Descripcion: {this.state.producto.description}
              </li>
            </h3>
            <h3>
              <li className='list-group-item'>
                  Precio: {this.state.producto.price}
              </li>
            </h3>
            <h3>
              <li className='list-group-item'>
                <img src={this.state.producto.image} style={{width: "200px", height: "200px"}} alt='imagen'/>
              </li>
            </h3>
        </ul>
      </div>
    )
  }
}
