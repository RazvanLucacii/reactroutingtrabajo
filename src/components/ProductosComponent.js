import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import gifload from './../assets/images/gifload.gif'
import {NavLink} from 'react-router-dom';

export default class ProductosComponent extends Component {

  state = {
    productos: [],
    rating: {}, 
    status: false
  }

  loadProductos = () => {
      var request = "products";
      var url = Global.apiUrls + request;
      axios.get(url).then(response =>{
          this.setState({
              productos: response.data,
              rating: response.data.rating,
              status: true
          })
      })
  }

  componentDidMount = () =>{
    this.loadProductos();
  }

  render() {

    if (this.state.status === false){
      return(<div><img src={gifload} style={{width:"550px", height:"400px"}} alt='Loading'/></div>)
    }else{
      return (
        <div className='container'>
          <h1>Productos Component</h1>
          {
            this.state.status === true &&
            (
              <table className='table table-dark table-bordered text-center'>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.productos.map((producto, index) => {
                      return(<tr key={index}>
                          <td>{producto.title}</td>
                          <td><img src={producto.image} style={{width:"200px"}} alt='IMAGEN'/></td>
                          <td>
                              <NavLink className="btn btn-success" to={"/detalles/" + producto.id}>
                                  Detalles
                              </NavLink>
                              <NavLink className="btn btn-primary" to={"/modificar/" + producto.id}>
                                  Modificar
                              </NavLink>
                              <NavLink className="btn btn-danger" to={"/eliminar/" + producto.id}>
                                  Eliminar
                              </NavLink>
                          </td>
                      </tr>)
                  })
                  }
                </tbody>
              </table>
            )
          }
        </div>
      )
    }
  }
}
