import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import logo from '../CartWidget/Assets/juicy-beauty-blogger.png'
import {NavLink, Link} from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className='navbar navbar-espand-lg container d-flex flex-direction-row'>
      <Link className='nav-item' to= '/'>
      <h1 className='navbar-brand'>Beauty Store Revs</h1>
      </Link>
        <div className='d-flex flex-direction-row align-items-center justify-content-around w-75'>
            <img src={logo} alt='LogoBrocha'width="200" height="170" className="d-inline-block align-text-top"></img>
            <NavLink to={`/category/cremas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Cremas Faciales</NavLink>
            <NavLink to={`/category/serums`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Sérums</NavLink>
            <NavLink to={`/category/capilares`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Productos Capilares</NavLink>
        </div>
        <CartWidget/>
    </nav>
  )
}
