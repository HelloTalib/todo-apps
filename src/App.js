import React, { Component } from 'react'
import Users from './Users';
import AddUsers from './AddUsers';
export class App extends Component {
  state = {
    users:[
      {
        id:1,
        name:"Talib",
        email: 'abutalib4590@gmail.com'
      },
      {
        id:2,
        name:"Someone",
        email:'someone@gmail.com'
      }
    ]
  }
  deleteUsers = (id) => {
    const users = this.state.users.filter(user => {
      return user.id !== id
    });
    this.setState({
      users:users
    })
  }
  addUsers = (user) => {
    let len = this.state.users.length;
    user.id = len ? this.state.users[len -1].id +1 : 1;
    let users = [...this.state.users, user];
    this.setState({
      users:users
    })
  }
  render() {
    return (
      <div className="container">
        <h3 className="indigo-text center">TODO APPS</h3>
        <Users users={this.state.users} deleteUsers={this.deleteUsers}/>
        <AddUsers addUsers={this.addUsers}/>
      </div>
    )
  }
}

export default App;
