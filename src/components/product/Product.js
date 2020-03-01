import React from 'react'
import ProductItem from './ProductItem'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'

const Product = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <Navbar />
          <div className='row'>
            <div className='col-md-1'>
              <Sidebar />
            </div>
            <div className='col-md-11'>
              <div className='row'>
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
    ini cart
        </div>
      </div>
    </div>
  )
}

export default Product
