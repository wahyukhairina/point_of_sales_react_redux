import React from 'react'
import { Button } from 'react-bootstrap'

const ListUser = (user) => {
  return (
    <>
      <tr>
        <td>{user.user.user_id}</td>
        <td>{user.user.name}</td>
        <td>{user.user.username}</td>
        <td>********</td>
        <td>{user.user.status}</td>
        <td>{user.user.data_added}</td>
        <td>{user.user.data_updated}</td>

        <td><a className='fa fa-pencil-square-o fa-2x' title='Edit User' data-toggle='modal' style={{ cursor: 'pointer' }} />  - <a className='fa fa-trash-o fa-2x' title='Delete User' style={{ color: 'black', cursor: 'pointer' }} /></td>
      </tr>
    </>
  )
}

export default ListUser
