import React, { useEffect, useState } from "react";

const Dashboard1 = () => {
  useEffect(() => {}, []);
  return (
    <div className="container-fluid py-2 p-4 rounded-3">
      <div className="row">
        <div className="col-md-4  d-flex  p-2 py-3">
          <img
            src={"../../imgs/man.png"}
            alt="Preview"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />

          <div className="text-start ps-3 pt-3">
            <h5 className="">Welcome back</h5>
            <p className="text-mute">It's nice to see you again</p>
          </div>
        </div>
        <div className="col-md-4 p-2 py-3">
          {" "}
          <div className="text-start p-2 pt-3">
            <h5 className="">40 beds</h5>
            <p className="text-mute">Are currently available</p>
          </div>
        </div>
        <div className="col-md-4 p-2">
          <div className="card p-3 py-2 border-0 ">
            <p className="text-dark">Start using our pg management tools</p>

            <h6 className="text-dark"> Learn More</h6>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container-fluid {
            background-color: #ffffff;
          }
          .card {
            background-color: #EEEFF4;
            height: 17vh;
            opacity: 0.85;
            box-shadow: #EEEFF4 -3px 7px 15px -4px;
          }
          .text-mute {
            color: #9aabc3;
            font-size: 14px;
          }
          h5,
          p {
            color: #353e5d;
            font-size: 14px;
          }
          h6 {
            cursor: pointer;
            border-bottom: 1.5px solid transparent;
            width: fit-content;
            font-size: 14px;
          }
          h6:hover {
            border-bottom: 1.5px solid #595349;
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard1;
