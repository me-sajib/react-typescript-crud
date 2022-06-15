import React, { FC } from "react";
import UserModel from "../../types/UserModel";

interface Props {
  user: UserModel;
  deleteUser: (user: UserModel) => void;
}
const UserTable: FC<Props> = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-info">Edit</button>
        <button
          className="mx-2 btn btn-danger"
          onClick={() => deleteUser(user)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
