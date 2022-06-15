import React, { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserModel from "../../types/UserModel";
import UpdateForm from "./UpdateForm";

const Update = () => {
  const [user, setUser] = useState<UserModel[]>([]);
  const { id } = useParams();
  //   fetch data
  useEffect(() => {
    fetch("http://localhost:5000/users/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  //   update data
  const update = (e: SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    if (name && email) {
      fetch("http://localhost:5000/user/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            alert(data.message);
          }
        });
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary py-4">Update Data</h2>
      <div className="row d-flex justify-content-center  ">
        {/* add task form */}
        <div className="col-md-12">
          {user.map((item) => (
            <UpdateForm user={item} dataUpdate={update} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Update;
