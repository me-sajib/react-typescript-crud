import React, { FC, SyntheticEvent } from "react";
import UserModel from "../../types/UserModel";

interface Props {
  user: UserModel;
  dataUpdate: (e: SyntheticEvent) => void;
}
const UpdateForm: FC<Props> = ({ user, dataUpdate }) => {
  return (
    <form onSubmit={dataUpdate}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="name"
          placeholder="enter your username"
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="enter your user email address"
          className="form-control"
          id="email"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UpdateForm;
