import React from "react";

const UserTable = () => {
  return (
    <table className="table  table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>
            <a href="mailto:jhon@gmail.com ">email</a>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
