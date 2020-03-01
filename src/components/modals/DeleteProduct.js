import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { deleteProduct } from '../redux/actions/product'
import { connect } from 'react-redux';

class DeleteProduct extends Component {
onDelete = (id) => {
  this.props.dispatch(deleteProduct(id))
}

  render () {
    return (
      <Modal show={this.props.show} onHide={this.props.onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure want to delete this item?
          <img style={{marginLeft: '100px'}}  />
          <ul style={{textAlign: 'center'}}></ul>
        </Modal.Body>
        <Button variant="primary" onClick={()=>(this.onDelete(this.props.id))}> Delete </Button>
      </Modal>
    )
  }
}

export default connect()(DeleteProduct) 
