import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { deleteProduct } from '../redux/actions/product'
import { connect } from 'react-redux'

const DeleteProduct = (props) => {
  const { show, onHandleClose, data, dispatch } = props

  const onDelete = async (e) => {
    e.preventDefault()

    await dispatch(deleteProduct(data.id))
    onHandleClose()
}

  return (
    <Modal show={show} onHide={onHandleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            Are you sure want to delete this item?
        <img style={{ marginLeft: '100px' }} />
        <ul style={{ textAlign: 'center' }} />
      </Modal.Body>
      <Button variant='primary' onClick={onDelete}> Delete </Button>
    </Modal>
  )
}

export default connect()(DeleteProduct)
