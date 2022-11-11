import React, { Component } from 'react'
import GioHang from './GioHang';
import './Modal.css'
export default class Modal extends Component {

  render() {
    const {gioHang, xoaGiohang, modalVisible, onClose} =this.props;
    return (
      <div className={modalVisible ? 'modalVisible' : 'modalHidden'}>
          <GioHang gioHang={gioHang} xoaGioHang={xoaGiohang}/>
          <button className='btn btn-danger' onClick={onClose}>
            Đóng
          </button>
      </div>
    )
  }
}
