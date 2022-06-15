import React, { FC } from "react";
import { Link } from "react-router-dom";
import UserModel from "../../types/UserModel";

interface Props {
  user: UserModel;
  deleteUser: (user: UserModel) => void;
}
const UserTable: FC<Props> = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>1</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link className="btn btn-info" to={"/update/" + user._id}>
          Edit
        </Link>
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
