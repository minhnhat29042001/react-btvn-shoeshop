import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    /**
     * Khác biệt giữa state và props
     * Giống nhau: đều là thuộc tính có sẵn của react class component dùng để biding dữ liệu lên giao diện
     * Khac nhau: state sẽ quản lý giá trị thay đổi trw6n component và có thể set lại giá trị mới được thông qua phượng thức set state
     * props: thì dùng để nhận dữ lệu từ component cha truyền vào và không thể gán lại giá trị mối được
     */

    const {title,content}=this.props.data;
    const {button}=this.props
    return (
      <div className='card'>
        <h3 className='card-header'>{title}</h3>
        <div className='card-body'>
            <p>
                {content}
            </p>
            {button}
        </div>
 
      </div>
    )
  }
}
