import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import logo from '../CartWidget/Assets/juicy-beauty-blogger.png'

export const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='divNavBar'>
            <img src={logo} alt='LogoBrocha'></img>
        <h1>Beauty Store Revs</h1>
        </div>
        <div>
            <button className='boton'>Cremas Faciales</button>
            <button className='boton'>Sérums Faciales</button>
            <button className='boton'>Productos Capilares</button>
            <button className='boton'>Promociones</button>
        </div>
        <CartWidget/>
    </nav>
    
  )
}

