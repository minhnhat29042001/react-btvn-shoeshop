import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {thongTinChiTiet} =this.props;
    return (
      <div className='modal' id="myModal">
        <div class="modal-dialog">
          <div className="modal-content text-center">
          <h6 className='text-primary mt-3' style={{fontSize:40}}>Thông tin chi tiết</h6>
          <img src={thongTinChiTiet.image} alt="..." height={420} style={{objectfit:'cover'}} />
          <div className='card-body'>
            <p style={{fontSize:20}}>Mã sp: {thongTinChiTiet.id}</p>
            <p style={{fontSize:20}}>Tên sp: {thongTinChiTiet.ten}</p>
            <p style={{fontSize:20}}>Mô tả sp: {thongTinChiTiet.description}</p>
            <p style={{fontSize:20}}>Mô tả ngắn: {thongTinChiTiet.shortDescription}</p>
            <p style={{fontSize:20}}>Giá sp: {thongTinChiTiet.price.toLocaleString()}$</p>
          </div>
      
          </div>
        </div>
      </div>
    )
  }
}
