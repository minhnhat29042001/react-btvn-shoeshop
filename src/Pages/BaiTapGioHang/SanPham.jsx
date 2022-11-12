import React, { Component } from 'react'
import './SanPham.css'
export default class SanPham extends Component {
  render() {
    const {shoe,themGioHang,xemChiTiet} =this.props

    return (
      <div  className='product'>
        <img src={shoe.image} alt="..." width={400} height={420} style={{objectfit:'cover'}} />
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
        <button data-bs-toggle="modal" data-bs-target="#myModal" className='btn btn-primary mx-2'
          onClick={()=>{
            xemChiTiet(shoe);
          }}
        >
          Xem chi tiết
            <i className='fa fa-plus'></i>
        </button>
      </div>
      </div>
    )
  }
}
