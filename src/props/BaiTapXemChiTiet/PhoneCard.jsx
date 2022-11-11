import React, { Component } from 'react'

export default class PhoneCard extends Component {
  render() {
    const{item,xemChiTiet} =this.props;
    return (
        <div className='card'>
        <img src={item.hinhAnh}alt="..." className='w-100' height={450} style={{objectFit:'cover'}} />
        <div className='card-body'>
            <h3>
              {item.tenSP}
            </h3>
            <p>{item.giaBan}</p>
            <button className='btn btn-dark' onClick={()=>{
                xemChiTiet(item);
            }}>View detail</button>
        </div>
    </div>
    )
  }
}
