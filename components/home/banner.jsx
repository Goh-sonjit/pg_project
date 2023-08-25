import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { useRouter } from "next/router";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";

const colourOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
];
const Banner = () => {
  const route = useRouter();
  const [loged, setLogged] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (selected) => {
    if (selected.length <= 4) {
      setSelectedOptions(selected);
    }
  };

  const availableOptions = colourOptions.filter(
    (option) => !selectedOptions.includes(option)
  );
  return (
    <>
      <Navbar />
      <div className="body ">
        <div
          className="parallax-container"
          style={{
            backgroundImage: `url(../../imgs/home.jpg)`,
            backgroundAttachment: "fixed ",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            position: "relative",
            backgroundSize: "cover",
            height: "85vh",
            padding: "1vw 1.8vw",
            borderRadius: "6.5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div className="search-bar">
              <select
                className="select"
                aria-label="Default select example"
                name="customer_state"
                value={""}
              >
                <option value="Noida" selected>
                  Noida
                </option>

                {/* {state.map((option, i) => (
                            <option key={i} value={option.name}>
                              {option.name}
                            </option>
                          ))} */}
              </select>

              <Select
                isMulti
                options={
                  selectedOptions.length === 3
                    ? selectedOptions
                    : availableOptions
                }
                placeholder="Search for up to three places or landmarks"
                className="basic-multi-select"
                value={selectedOptions}
                onChange={handleSelectChange}
                classNamePrefix="select"
              />
              <CiLocationOn className="near-me-icon" />
              <button className=" btn-search">Search</button>
            </div>
            <div className="filter-bar container">
              <div className="row">
                <div className="col-md-3">
                  <input type="radio" name="gender" />
                  <span className="ms-3">Male</span>
                </div>
                <div className="col-md-3">
                  <input type="radio" name="gender" />
                  <span className="ms-3"> Female</span>
                </div>
                <div className="col-md-3">
                  <input type="radio" name="gender" />
                  <span className="ms-3">Both</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Single Room</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Double Sharing</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Triple Sharing</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Four Sharing</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">4000</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">6000</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">8000</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">10000+</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Food</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">AC</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">wi-fi</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Geyser</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Parking</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span className="ms-3">Washing Machine</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          span {
            color: #737272;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 0.7px;
          }
          li {
            display: flex;
            align-items: center;
            line-height: 1.5rem;
          }
          .body {
            padding: 0vw 1.8vw;
            background-color: #ffffff;
          }
          .search-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 5;
            width: 60vw;
            border-radius: 6.5px;
            padding: 0.4rem 0.7rem;
            background-color: #ffffff;
            position: relative;
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
              rgba(0, 0, 0, 0.23) 0px 6px 6px;
          }
          .filter-bar {
            position: relative;
            margin-top: -1%;
            z-index: 3;
            height: fit-content;
            width: 60vw;
            border-radius: 6.5px;
            padding: 2rem 0.7rem 0.7rem 0.7rem;
            background-color: #ffffff;
          }
          .select {
            border: 2px solid #ededed;
            padding: 5px 8px;
            font-size: 0.95rem;
            border-radius: 0px;
            width: 10vw;
            letter-spacing: 1px;
            background-color: #ededed;
            color: #4b4b4b;
            font-weight: 500;
          }
          .btn-search {
            padding: 5.2px 8.2px;
            font-size: 0.95rem;
            border: none;
            letter-spacing: 1px;
            border-radius: 4px;
            -webkit-transition: all 0.15s ease-in-out;
            color: #fff;
            background: linear-gradient(96deg, #fe5e21 0%, #f2a43a 100%);
            border-top-left-radius: 0%;
            border-bottom-left-radius: 0%;
          }
          .btn-search:hover {
            background: linear-gradient(96deg, #ff4901 0%, #f8a52f 100%);
          }
        `}
      </style>
    </>
  );
};

export default Banner;
