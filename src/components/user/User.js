import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/user'
import ListUser from './ListUser'
import NavbarUser from '../layout/NavbarUser'
import Sidebar from '../layout/Sidebar'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'


class User extends Component {

onGetUser = async() => {
    await this.props.dispatch(getUser())
}

componentDidMount(){
    this.onGetUser()
}

    render(){
        const { user } = this.props
        // console.log(user)
        const listUser = user.user.map((user) =>  <ListUser user = {user} key={user.user_id} /> )
        return (
           <>
                <div className="row">
                    <div className='col-md-12'>
                    <NavbarUser />
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-1'>
                        <Sidebar />
                    </div>
                    <div className='col-md-11'>
                            <Table style={{marginTop: '20px'}} striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date Added</th>
                                    <th scope="col">Data Updated</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUser}
                            </tbody>
                        </Table>
                    </div>
                </div>
                </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(User)