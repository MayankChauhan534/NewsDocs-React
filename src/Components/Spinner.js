import React from "react";
import loading from "../Loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="Loading..." height="50px" />
    </div>
  );
};

export default Spinner;
