import React from "react";

const Section4 = () => {
  const data = [
    {
      icon: <img  src="../../imgs/s1.png" className="icon_homepage" />,
      heading: "Easy Management of PG Rooms ",
      contant: `With our software, you can effortlessly manage ever
      aspect of your PG rooms. From occupancy tracking to
     maintenance requests, streamline your operations
     with just a few clicks.
     `,
    },
    {
      icon: (
        <img  src="../../imgs/s2.png" className="icon_homepage" style={{ color: "#50a1ff" }} />
      ),
      heading: "Comprehensive Room Details",
      contant: `Present detailed room descriptions for every room type
      your PG offers. Highlight amenities, furnishings, and
      room-specific features. Provide a comprehensive view
      to potential residents, ensuring they find the perfect fit.`,
    },
    {
      icon: <img  src="../../imgs/s3.png" className="icon_homepage" style={{ color: "#926dde" }} />,
      heading: "Facility Breakdown, Floor by Floor",
      contant: `Let your PG shine by showcasing its facilities floor by floor.
      From common areas to specialized amenities, give potential
      residents a tour of the remarkable features your building offers.`,
    },
    {
      icon: <img  src="../../imgs/s4.png" className="icon_homepage" style={{ color: "#ffba00" }} />,
      heading: "Various Room Options",
      contant: `With our software, you can effortlessly manage ever
      aspect of your PG rooms. From occupancy tracking to
     maintenance requests, streamline your operations
     with just a few clicks.`,
    },
  ];
  return (
    <div className="container-xxl   container-xl container-lg container-md  p-5  py-2 my-5">
      <section className="section p-3 pt-0 pb-0 ">
        <div>
          <header className="section-header text-center">
            <h1>See how we can help to PG owner</h1>
            <hr style={{ borderTopColor: "#919191" }} className="my-4" />
          </header>
          <div className="row gap-y">
            {data.map((items, index) => (
              <div className="col-md-6  col-12" key={index}>
                <div className="media my-2">
                  <div className="icon">{items.icon}</div>
                  <div className="media-body ms-2">
                    <h2> {items.heading}</h2>
                    <p className="textt">{items.contant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .media {
            display: flex;
          }
          h1 {
            font-weight: 600;
            line-height: 2;
            letter-spacing: 1px;
            color: #323d47;
          }
          h2 {
            font-size: .96rem;
            line-height: 1.5;
            font-weight: 700;
            letter-spacing: 1px;
            color: #323d47;
          }
          p {
            font-size: .8rem;
            line-height: 1.4;
            color: #757575;
            letter-spacing: 0.5px;
          }

          .icon {
            font-size: 1.5rem;
            margin-top:-2%;
        `}
      </style>
    </div>
  );
};

export default Section4;
