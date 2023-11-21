import React, { Component } from 'react'
import imagenhome from './../assets/images/HOME.jpg'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='container'>
        <h1>El Componente Home</h1>
        <img src={imagenhome} alt='HOME' style={{width: "800px", height: "500px"}} />
      </div>
    )
  }
}
