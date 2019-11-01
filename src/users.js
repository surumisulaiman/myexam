import React from "react";
import {Link} from 'react-router-dom';
import "./style.css"

export default class Users extends React.Component {
  constructor(props){
    super(props); 

    this.state = { 
      users: []
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      this.setState({
        users : data
      })
    });
  }

  render(){
    const UserRows = this.state.users.map(user =>{
      return <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address.street},{user.address.suit},{user.address.city},{user.address.zipcode}</td>
        <td><Link to={
          {
            pathname: '/todo',
            state: { user: {id: user.id}, fromPath: '/users'}
          }
        }>View</Link></td>

<td><Link to={
          {
            pathname: '/posts',
            state: { user: {id: user.id}, fromPath: '/users'}
          }
        }>View</Link></td>
      </tr>
    });
    return(
      <table className="table table-hover">
        <thead>
          <tr><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Todo</th><th>Posts</th></tr>
        </thead>
        <tbody>
          {UserRows}
        </tbody>
      </table>
    )
  }
}

