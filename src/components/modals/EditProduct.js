import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateProduct } from '../redux/actions/product';

class UpdateProduct extends Component{
 state = {
        name: '',
        desc: '',
        image: '',
        price: '',
        category: '',
        stock: '',
        data_updated: ''
    }
 
    
   componentWillReceiveProps({data}){
       this.onSetValue(data)
       console.log(this.props)
   }

   onSetValue = (product) => {
       this.setState({
           name : product.name,
           desc : product.desc,
           image : product.image,
           price : product.price,
           category : product.category,
           stock : product.stock
       }
     
       )
   }


    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeImage = (event) => {
        this.setState({
            image : event.target.files[0]
        })
    }

   
    onSubmit = async (event) => {
        event.preventDefault()

        const data = new FormData();
        data.append( "name",this.state.name);
        data.append("desc", this.state.desc);
        data.append("image",this.state.image);
        data.append("price",this.state.price);
        data.append("category",this.state.category);
        data.append("stock",this.state.stock);
        data.append("data_updated", new Date());


        const id = this.props.data.id;
        this.props.dispatch(updateProduct (id, data))
        this.props.onHide()
        }

    render(){
        const { show, onHide } = this.props
        return(
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" name="name" onChange={this.onChangeValue}  value={this.state.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" value={this.state.desc} name="desc" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Upload Image" name="image" onChange={this.onChangeImage} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" name="price" value={this.state.price} onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" name="category" value={this.state.category} onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Enter Stock" name="stock" value={this.state.stock} onChange={this.onChangeValue} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}



export default connect()(UpdateProduct) 