import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import Demo from './components/Demo';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './databinding/DataBinding';
import HandleEvent from './handleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
//import css: Ảnh hưởng toàn bộ ứng dụng
import './index.scss';


// Cấu hình react router
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import HomeTemplates from './Pages/templates/HomeTemplates';
import Page404 from './Pages/Page404/Page404';
import BaiTapGioHang from './Pages/BaiTapGioHang/BaiTapGioHang';

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX 
root.render(
  <>
   <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplates/>}>
        <Route index element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='btgiohang' element={<BaiTapGioHang/>}></Route>
        <Route path='*' element={<Navigate to=""/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  </>
  
)