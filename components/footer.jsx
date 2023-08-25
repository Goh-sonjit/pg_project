import React from "react";
import { pglocation } from "@/apis/alljson";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GoMail } from "react-icons/go";
const Footer = () => {
  const icon_style={
    
  }
  const logo = [
    {
      id: 1, 
      img: <FaFacebookF  color="#ffffff" size="1.8rem"/>,
      alt: "logo1",
      link: "https://www.facebook.com/gohoardings/",
    },
    {
      id: 2,
      img: <FiInstagram color="#ffffff" size="1.8rem" />,
      alt: "logo2",
      link: "https://www.instagram.com/gohoardings/",
    },
    {
      id: 3,
      img: <FaTwitter color="#ffffff" size="1.8rem" />,
      alt: "logo3",
      link: "https://twitter.com/gohoardings",
    },
    {
      id: 4,
      img: <FaLinkedinIn color="#ffffff" size="1.8rem" />,
      alt: "logo4",
      link: "https://www.linkedin.com/company/gohoardings/",
    },
    {
      id: 5,
      img: <GoMail color="#ffffff" size="1.8rem"  />,
      alt: "logo5",
      link: "mailto:info@gohoardings.com",
    },
  ];
  return (
    <div className="footer-container ">
      <section className="footer">
        <div className="row">
          <div className="col-md-6 ">
            <h2>Challenging the PG game in India</h2>
            <p>
              Take a deep dive and browse your PG, original neighborhood <br />{" "}
              photos, PG reviews and local insights to find what is right for
              you.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Usefull LInks</h2>
            <div className="row ">
              <div className="col-md-6">
                <ul className="ps-0">
                  <li>FAQs</li>
                  <li>About Us</li>
                  <li>Login As PG user</li>
                  <li>Login As PG Owner</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Sitemap</li>
                  <li>Testimonials</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ borderTopColor: "#ffffff" }} className="my-4" />
        <div className="row">
          {pglocation.map((data, i) => (
            <div className="col-3 my-2" key={i}>
              <h2>PG in {data.city}</h2>
              <ul className="ps-0">
                {data.pg_location.map((e, j) => (
                  <li>PG in {e.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr style={{ borderTopColor: "#ffffff" }} className="my-4" />
        <div className="row">
          <div className="col-3 ">
            <div className="grid-container1 my-2">
              {logo.map((clients, index) => {
                return (
                  <div className="grid-item" key={index}>
                    <a href={clients.link} target="_blank">
                    {clients.img}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 ">
         
        </div> <div className="col-3 ">
           
        </div>
          <div className="col-3 ">
            <h2>copyrights © 2023</h2>
        </div>
        </div>
      </section>
      <style jsx>
        {`
          .grid-container1 {
            width: 250px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }

          .grid-item {
            transition: transform 0.3s;
            text-align: start;
          }
       

          .footer-container {
            background: linear-gradient(
              96deg,
              #fe5e21 0%,
              #f2a43a 100%
            ) !important;
            padding: 0px;
          }
          .footer {
            padding: 4vw 2.5vw;
          }
          h2 {
            font-size: 0.96rem;
            line-height: 2;
            font-weight: 600;
            letter-spacing: 1px;
            color: #ffffff;
          }
          p,
          li {
            font-size: 0.8rem;
            line-height: 2;
            font-weight: 400;
            color: #ffffff;
            letter-spacing: 0.5px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
