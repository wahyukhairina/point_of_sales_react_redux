import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '../redux/actions/category'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'

class ListCategory extends Component {
  getCategory () {
    this.props.dispatch(getCategory())
  }

  componentDidMount () {
    this.getCategory()
  }

  render () {
    const { category } = this.props
    return (
      <>

        <div className='col-md-12'>
          <Navbar />
        </div>

        <div className='row'>
          <div className='col-md-1'>
            <Sidebar />
          </div>
          <div className='col-md-11'>

            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>CODE</th>
                  <th scope='col'>CATEGORY</th>
                  <th scope='col'>DATA_ADDED</th>
                  <th scope='col'>DATA_UPDATED</th>
                  <th scope='col'>ACTION</th>
                </tr>
              </thead>
              <tbody>

                {category.map((category) =>
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.data_added}</td>
                    <td>{category.data_updated}</td>
                    <td><button>Edit</button>-<button>Delete</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category.category
  }
}
export default connect(mapStateToProps)(ListCategory)
