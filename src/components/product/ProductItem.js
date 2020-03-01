import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../redux/actions/product'
import DeleteProduct from '../modals/DeleteProduct'

class ProductItem extends Component {
  state = {
    show : false,
    
  }

  getProducts () {
    this.props.dispatch(getProducts())
  }

  componentDidMount () {
    this.getProducts()
  }

  onShow = (e) => {
    this.setState({
        show: true
    })
} 

  onHandleClose = () => {
    this.setState({
        show: false
    })
} 

  render () {
    const { products } = this.props
    return (
      <>
        {products.map((products) =>
          <div className='col-md-4' key={products.id}>
            <div className='card' style={{ marginTop: '10px' }} id='card_posts'>
              <ul class='card-header' style={{ fontWeight: 'bold' }}>{products.name}</ul>
              <img className='rounded mx-auto d-block' style={{ marginTop: '3px', width: 210, height: 210 }} src={products.image} />
              <div className='card-body'>
                <h5 className='card-title'>Rp.{products.price}</h5>
                <div className='row'>
                  <div className='col-md-4'>
                    <span className='fa fa-shopping-cart fa-2x' style={{ cursor: 'pointer' }} />
                  </div>
                  <div className='col-md-4'>
                    <span className='fa fa-pencil-square-o fa-2x' style={{ color: 'black' }} />
                  </div>
                  <div className='col-md-4'>
                    <a className='fa fa-trash-o fa-2x' onClick={()=>(this.onShow())} data-toggle='modal' style={{ cursor: 'pointer' }}></a> 
                    <DeleteProduct show={this.state.show} onHandleClose={this.onHandleClose} id={products.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(ProductItem)
