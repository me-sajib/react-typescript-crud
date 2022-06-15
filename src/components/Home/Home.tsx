import React, { SyntheticEvent } from "react";
import UserModel from "../../types/UserModel";
import UserTable from "../UserTable/UserTable";

const Home = () => {
  const [users, setUsers] = React.useState<UserModel[]>([]);

  const addUser = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    if (name && email) {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })
        .then((res) => res.json())
        .then((data) => setUsers([...users, data]));
    } else {
      alert("Please fill all the fields");
    }
  };

  //   delete user by id
  const deleteUser = (id: string) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(users.filter((user) => user.id !== id));
      });
  };
  return (
    <div className="container">
      <h1 className="text-center my-5 text-primary">User Management</h1>
      <div className="row d-flex justify-content-center  ">
        {/* add task form */}
        <div className="col-md-6">
          <form onSubmit={addUser}>
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
        </div>
        {/* user show table column */}
        <div className="col-md-6">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
