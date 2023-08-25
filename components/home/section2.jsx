import React from "react";

const Section2 = () => {
  return (
    <div className="my-5 py-2">
      <h1 className="text-center">Discover PG on ...</h1>
      <h2 className="text-center">
        Take a deep dive and browse your PG, original neighborhood
        <br /> photos, PG reviews and local insights to find what is right for
        you.
      </h2>

      <section className="section2 mt-4">
        <div>
          <img
            src="../../imgs/rooms/Rectangle 16.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-l"
          />
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 18.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-s "
          />

          <div>
            <img
              src="../../imgs/rooms/Rectangle 22.png"
              style={{ cursor: "pointer" }}
              className="setion2-img-s img-mt"
            />
          </div>
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 19.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-s"
          />
          <div>
            <img
              src="../../imgs/rooms/Rectangle 24.png"
              style={{ cursor: "pointer" }}
              className="setion2-img-s img-mt"
            />
          </div>
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 20.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-s"
          />
          <div>
            <img
              src="../../imgs/rooms/Rectangle 23.png"
              style={{ cursor: "pointer" }}
              className="setion2-img-s img-mt"
            />
          </div>
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 21.png"
            style={{ cursor: "pointer" }}
            className="setion2-img-s"
          />
          <div>
            <img
              src="../../imgs/rooms/Rectangle 25.png"
              style={{ cursor: "pointer" }}
              className="setion2-img-s img-mt"
            />
          </div>
        </div>
        <div>
          <img
            src="../../imgs/rooms/Rectangle 17.png"
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
          h2 {
            font-size: 1.1rem;
            line-height: 1.5;
            letter-spacing: 1px;
            color: #323d47;
          }
          .setion2-img-l {
            width: 15.5vw;
            height: 53vh;
          }
          .setion2-img-s {
            width: 13.5vw;
            height: 23.5vh;
          }
          img {
            border-radius: 8.5px;
          }
          .img-mt {
            margin-top: 5.5vh;
          }
        `}
      </style>
    </div>
  );
};

export default Section2;
