import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    const {shoe,themGioHang} =this.props

    return (
      <div data-bs-toggle="modal" data-bs-target="#myModal">
        <img src={shoe.image} alt="..." height={420} style={{objectfit:'cover'}} />
      <div className='card-body'>
        <p>{shoe.name}</p>
        <p>{shoe.price.toLocaleString()}$</p>
        <button className='btn btn-danger'
        onClick={()=>{
          themGioHang(shoe);
        }}
        >
          Thêm vào giỏ
            <i className='fa fa-cart-plus'></i>
        </button>
      </div>
      </div>
    )
  }
}
