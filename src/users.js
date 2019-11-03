import React from "react";
import {Link} from 'react-router-dom';


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
    const UserRows = this.state.users.map(user1 =>{
      return <tr key={user1.id}>
        <td>{user1.name}</td>
        <td>{user1.username}</td>
        <td>{user1.email}</td>
        <td>{user1.address.street},{user1.address.suit},{user1.address.city},{user1.address.zipcode}</td>
        <td><Link to={
          {
            pathname: '/todo',
            state: { user2: {id: user1.id}, fromPath: '/users'}
          }
        }>View</Link></td>

<td><Link to={
          {
            pathname: '/posts',
            state: { post1: {id: user1.id}, fromPath: '/users'}
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

