import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'
import Modal from './Modal'

export default class BaiTapGioHang extends Component {
    state={
        thongTinChiTiet:{
            id:'',
            ten:'',
            price:'',
            image:'',
            description:'',
            shortDescription:''
        },
        gioHang:[
            { "id": 1, "name": "Adidas Prophere",price:350,image:'http://svcy3.myclass.vn/images/adidas-prophere.png',soLuong:1}
        ]
    

        
    }

    xoaGiohang =(maSPClick)=>{
        let gioHang = this.state.gioHang;
        let index=gioHang.findIndex(sp=> sp.id === maSPClick);
        console.log(index);
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

    xemChiTiet =(spClick)=>{
        spClick ={...spClick};
        console.log(spClick.id);
        let thongTinSanPhamChiTiet = this.state.thongTinChiTiet;
        thongTinSanPhamChiTiet.id=spClick.id;
        thongTinSanPhamChiTiet.ten=spClick.name;
        thongTinSanPhamChiTiet.price=spClick.price;
        thongTinSanPhamChiTiet.image=spClick.image;
        thongTinSanPhamChiTiet.description=spClick.description;
        thongTinSanPhamChiTiet.shortDescription=spClick.shortDescription;
        this.setState({
            thongTinChiTiet:thongTinSanPhamChiTiet
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
        <DanhSachSanPham themGioHang={this.themGioHang} xemChiTiet={this.xemChiTiet}/>
        <Modal thongTinChiTiet={this.state.thongTinChiTiet}/>
      </div>
    )
  }
}
