import React from "react";

const Section1 = () => {
  return (
    <>
      <section className="section3 my-5 p-5 ">
        <div className="text-center">
          <img
            src="../../imgs/1_1.png"
            style={{ cursor: "pointer" }}
            className="setion2-img"
          />
          <h2>Direct contact with PG owner</h2>
        </div>
        <div className="text-center">
          <img
            src="../../imgs/3_3.png"
            style={{ cursor: "pointer" }}
            className="setion2-img"
          />
          <h2>Bed select options</h2>
        </div>
        <div className="text-center">
          <img
            src="../../imgs/2_2.png"
            style={{ cursor: "pointer" }}
            className="setion2-img"
          />
          <h2>Advanced Booking</h2>
        </div>
      </section>
      <style jsx>
        {`
          h2 {
            font-size: 1.1rem;

            line-height: 2;
            letter-spacing: 1px;
            color: #323d47;
          }
          .setion2-img {
            width: 15vw;
            height: auto;
          }
        `}
      </style>
    </>
  );
};

export default Section1;
