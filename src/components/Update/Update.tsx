import React from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>update id {id}</h3>
    </div>
  );
};

export default Update;
