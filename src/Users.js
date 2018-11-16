import React from "react";

const Users = ({ users, deleteUsers }) => {
  const UserList = users.length ? (
    users.map(user => {
      return (
        <div className="collection-item" key={user.id}>
          <span>{user.email}</span>
          <button className="right waves-effect waves-light red-text" onClick={() => {deleteUsers(user.id)}}>X</button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no users left</p>
  );
  return <div className="collection">
    {UserList}
    </div>;
};

export default Users;
