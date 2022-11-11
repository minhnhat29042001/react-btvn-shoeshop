import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    const {gioHang,xoaGioHang} =this.props;
    return (
      <table className='table' style={{backgroundColor: '#E1e1e1', margin: 'auto'}}>
        <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình Ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
         {gioHang.map((spGH,index)=>{
          return  <tr key={index}> 
           <td>{spGH.id}</td>
           <td>{spGH.name}</td>
           <td>
             <img src={spGH.image} width={50} height={50} alt="..." />

           </td>
           <td>{spGH.soLuong}</td>
           <td>{spGH.price}$</td>
           <td>{spGH.soLuong*spGH.price}$</td>
           <td>
             <button className='btn btn-danger' onClick={()=>{
              xoaGioHang(spGH.id)
             }}>
                 <i className='fa fa-trash'></i>
             </button>
           </td>
         </tr>
         })}
        </tbody>
      </table>
    )
  }
}
