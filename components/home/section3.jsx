import React from "react";

const Section3 = () => {
  return (
    <div className="my-5 py-2">
      <h1 className="text-center">Newly listed PG in Noida</h1>

      <section className="section2 mt-4">
      
        <div>
          <img
            src="../../imgs/rooms/Rectangle 26.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-l"
          />
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 27.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-l"
          />
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 28.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-l"
          />
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 29.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-l"
          />
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 30.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-l"
          />
        </div>
      </section>
      <style jsx>
        {`
          h1 {
            font-weight: 600;
            line-height: 2;
            letter-spacing: 1px;
            color: #323d47;
          }
          .setion2-img-l {
            width: 17vw;
            height: 43vh;
          }

          img {
            border-radius: 8.5px;
          }
         
        `}
      </style>
    </div>
  );
};

export default Section3;
