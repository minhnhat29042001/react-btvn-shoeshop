import React, { Component } from 'react'
import Article from './DemoProps/Article'
import CardProduct from './DemoProps/CardProduct'

export default class DemoProps extends Component {
data={
    title:'Test title',
    content:'Test content'
}

  render() {
    return (
      <div className='container'>
        <h3>Product list</h3>
        <div className='row'>
        <div className='col-4'>
            <CardProduct id="1" name="Iphone 10" price="1000"/>
        
        </div>
        <div className='col-4'>
            <CardProduct id="2" name="Iphone 14" price="3000"/>
        
        </div>
        </div>
        <hr />
        <h3>Blogs</h3>
        <Article data={this.data} button={<button>Detail</button>}/>

      </div>
    )
  }
}
