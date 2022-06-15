import React from "react";
import UserTable from "../UserTable/UserTable";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5 text-primary">User Management</h1>
      <div className="row d-flex justify-content-center  ">
        {/* add task form */}
        <div className="col-md-6">
          <form>
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
