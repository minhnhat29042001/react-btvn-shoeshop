import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    state={
        gioHang:[
            { "id": 1, "name": "Adidas Prophere",price:350,image:'http://svcy3.myclass.vn/images/adidas-prophere.png',soLuong:1}
        ]
    }

    xoaGiohang =(maSPClick)=>{
        let gioHang = this.state.gioHang;
        let index=gioHang.findIndex(sp=> sp.maSP ==maSPClick);
        if(index !== -1){
            gioHang.splice(index,1);
        }
        // cách 2
        // gioHang = gioHang.filter(sp=>sp.maSP!==maSPClick);

        //set Stae
        this.setState({
            giohang:gioHang
        })
    }

    themGioHang =(spClick)=>{
        spClick ={...spClick,soLuong:1};
        let gioHang =this.state.gioHang;
        // Xét sản phẩm được click có trong giỏ hàng hay chưa
        let spGH = gioHang.find(sp=> sp.id === spClick.id);
        if(spGH){
            spGH.soLuong=spGH.soLuong+1;
        } else{
            gioHang.push(spClick);
        }
        this.setState({
            gioHang:gioHang
        })
    }
       
    
  render() {
    /*
        + Chia component khi nào ?
        +yếu tố 1: Component đó tái sử dụng nhiều lần trên nhiều nơi (page,template,..) khác nhau
        +yếu tố 2: ví dụ component có nội dung html quá dài hơn 1000 dòng trên file => chia component
        (là component chỉ sử dụng cho file này thôi). Không chia component quá nhỏ cho trường hợp này tối đa 3 cấp
    */ 

    return (
      <div className='container'>
        <h3 className='text-center mt-2'>Bài tập giỏ hàng</h3>
        <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGiohang}/>
        <DanhSachSanPham themGioHang={this.themGioHang}/>
      </div>
    )
  }
}
