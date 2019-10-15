import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [counter] = useState(4)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps();
  }, [getDataProps])
  return (
    <div>
      {/* name: faker.name.findName(),
      email: faker.internet.email(),
      company: faker.company.companyName(),
      salary: faker.finance.amount(),
      age: (faker.random.number() % 30) + 18 */}
      <Head title="Hello" />
      <div> {props.isRequesting ? 'Your data is loading' : ''} </div>
      <div> Hello World {counter} </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Zip</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
          !props.isRequesting ? props.users.map((user, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td><img src={user.avatar} width="24" alt={user.name} /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.salary}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
              <td>{user.zip}</td>
              <td>{user.city}</td>
            </tr>
          )) : ''
        }
        </tbody>
      </table>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
