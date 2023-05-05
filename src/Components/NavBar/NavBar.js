import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import logo from '../CartWidget/Assets/juicy-beauty-blogger.png'
import {NavLink, Link} from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to= '/'>
      <h1>Beauty Store Revs</h1>
      </Link>
        <div className='divNavBar'>
            <img src={logo} alt='LogoBrocha'></img>
            <NavLink to={`/category/cremas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Cremas Faciales</NavLink>
            <NavLink to={`/category/serums`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Sérums</NavLink>
            <NavLink to={`/category/capilares`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Productos Capilares</NavLink>
        </div>
        <CartWidget/>
    </nav>
  )
}

