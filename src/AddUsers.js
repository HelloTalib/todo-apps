import React, { Component } from "react";

export class AddUsers extends Component {
  state = {
    email: "",
    name: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addUsers(this.state);

    this.setState({
      name: "",
      email: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <button className="btn red-btn right indigo">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUsers;
