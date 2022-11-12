import React, { Component } from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default class HomeTemplates extends Component {
  render() {
    return (
      <div>
        <header className='bg-dark text-white p-5 nav'>
     
            <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' :'nav-link'} to='/btgiohang'><i className='fa fa-cart-plus'></i>BT giỏ hàng</NavLink>
        </header>
        <div className='content' style={{minHeight:'75vh'}}>
            <Outlet/>
        </div>
        <header className='bg-dark text-white p-5'>Footer</header>
      </div>
    )
  }
}
