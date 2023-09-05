import React, { useState, useEffect } from "react";
import Fixednavbar from "@/components/navbar/navbar-fixed";
import { AiOutlineSearch } from "react-icons/ai";
import Slider from "react-slick";
import { MdRestartAlt } from "react-icons/md";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

const index = () => {
  const route = useRouter();
  const data = [
    {
      pg_name: "Ashok pg",
      location: "sector 12 A-93 Noida",
      landmark: "Standalone building and Metro multispeciality",
      room_type: "Two sharing",
      imgThumb: [
        {
          img: "../imgs/rooms/Rectangle 18.png",
          name: "Dashboard",
        },

        {
          img: "../imgs/rooms/Rectangle 22.png",
          name: "data Campaign",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
          name: "Invoice",
        },
        {
          img: "../imgs/rooms/Rectangle 22.png",
          name: "data Campaign",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
          name: "Invoice",
        },
      ],
      pg_for: "female",
      food: "1",
      rent: "6500",
      expected_deposite: "6500",
      AC: "1",
      wi_fi: "1",
      fridge: "1",
      tv: "1",
      geyser: "1",
      power_backup: "1",
      washing_machine: "1",
      parking: "1",
    },
    {
      pg_name: "RD pg",
      location: "sector 10 C-86 Noida",
      landmark: "Standalone building and Metro multispeciality",
      room_type: "Private",
      imgThumb: [
        {
          img: "../imgs/rooms/Rectangle 18.png",
          name: "Dashboard",
        },

        {
          img: "../imgs/rooms/Rectangle 22.png",
          name: "data Campaign",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
          name: "Invoice",
        },
        {
          img: "../imgs/rooms/Rectangle 22.png",
          name: "data Campaign",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
          name: "Invoice",
        },
      ],
      pg_for: "male",
      food: "1",
      rent: "6500",
      expected_deposite: "6500",
      AC: "1",
      wi_fi: "1",
      fridge: "1",
      tv: "1",
      geyser: "1",
      power_backup: "1",
      washing_machine: "1",
      parking: "1",
    },
    {
      pg_name: "HIFI pg",
      location: "sector6 A-93 Noida",
      landmark: "Standalone building and Metro multispeciality",
      room_type: "Three sharing",
      imgThumb: [
        {
          img: "../imgs/rooms/Rectangle 18.png",
          name: "Dashboard",
        },

        {
          img: "../imgs/rooms/Rectangle 22.png",
          name: "data Campaign",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
          name: "Invoice",
        },
        {
          img: "../imgs/rooms/Rectangle 22.png",
          name: "data Campaign",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
          name: "Invoice",
        },
      ],
      pg_for: "female",
      food: "1",
      rent: "6500",
      expected_deposite: "6500",
      AC: "1",
      wi_fi: "1",
      fridge: "1",
      tv: "1",
      geyser: "1",
      power_backup: "1",
      washing_machine: "1",
      parking: "1",
    },
    {
      pg_name: "DR best pg",
      location: "sector 10 A-93 Noida",
      landmark: "Standalone building and Metro multispeciality",
      room_type: "Four sharing",
      imgThumb: [
        {
          img: "../imgs/rooms/Rectangle 18.png",
        },

        {
          img: "../imgs/rooms/Rectangle 22.png",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
        },
        {
          img: "../imgs/rooms/Rectangle 22.png",
        },
        {
          img: "../imgs/rooms/Rectangle 19.png",
        },
      ],
      pg_for: "male",
      food: "1",
      rent: "9500",
      expected_deposite: "6500",
      AC: "1",
      wi_fi: "1",
      fridge: "1",
      tv: "1",
      geyser: "1",
      power_backup: "1",
      washing_machine: "1",
      parking: "1",
    },
  ];
  const [pgList, setPgList] = useState(data);

  const filterForm = {
    pg_for: "",
    max_rent: "",
    room_type: "",
    food: "",
    AC: "",
    wi_fi: "",
    parking: "",
    geyser: "",
    tv: "",
    power_backup: "",
    washing_machine: "",
  };
  const [filter, setFilter] = useState(filterForm);

  // store filter input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Perform filtering based on user's input
  const handleSearch = () => {
    const filteredData = data.filter((data) => {
      // Apply filters based on the user's input
      if (filter.pg_for && data.pg_for !== filter.pg_for) {
        return false;
      }
      if (filter.room_type && data.room_type !== filter.room_type) {
        return false;
      }
      if (filter.AC && data.AC !== filter.AC) {
        return false;
      }
      if (filter.food && data.food !== filter.food) {
        return false;
      }
      if (filter.wi_fi && data.wi_fi !== filter.wi_fi) {
        return false;
      }
      if (filter.fridge && data.fridge !== filter.fridge) {
        return false;
      }
      if (filter.tv && data.tv !== filter.tv) {
        return false;
      }
      if (filter.power_backup && data.power_backup !== filter.power_backup) {
        return false;
      }
      if (
        filter.washing_machine &&
        data.washing_machine !== filter.washing_machine
      ) {
        return false;
      }
      if (filter.parking && data.parking !== filter.parking) {
        return false;
      }
      if (filter.max_rent && parseInt(data.rent) > parseInt(filter.max_rent)) {
        return false;
      }
      return true;
    });
    setPgList(filteredData);
  };

  useEffect(() => {
    handleSearch();
  }, [filter]);

  // Reset filter logic here
  const handleReset = () => {
    setFilter(filterForm);
    setPgList(data);
  };

  const [value, setValue] = useState(12000);

  const sliderStyles = {
    width: "100%",
    cursor: "pointer",
    height: "4.5px",
    background: "#F3A139",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    appearance: "none",
    transition: "background 0.2s",
    accentColor: "#fe5e21",
  };

  {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 3500,
      pauseOnHover: true,

      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 2,
      //       initialSlide: 0,
      //     },
      //   },
      // ],
    };
  }
  let slider = settings;

  return (
    <>
      <div className="body">
        <Fixednavbar />
        <div className="container-fluid p-0 ms-0 me-0">
          <div className="row">
            <div className="col-md-4 filter-section">
              <div className="my-3 mt-1 d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search location or landmark"
                />
                <span className="search-box">
                  <AiOutlineSearch className="search-icon" />
                </span>
              </div>

              <div className="my-3">
                <h4>
                  PG for{" "}
                  <button className="reset-btn" onClick={handleReset}>
                    <MdRestartAlt style={{ fontSize: "1rem" }} />
                    Reset
                  </button>{" "}
                </h4>
                <div className="filter-bar">
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="radio"
                        name="pg_for"
                        value="male"
                        checked={filter.pg_for === "male"}
                        onChange={handleChange}
                      />
                      <span className="ms-2">Male</span>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="radio"
                        name="pg_for"
                        value="female"
                        checked={filter.pg_for === "female"}
                        onChange={handleChange}
                      />
                      <span className="ms-2"> Female</span>
                    </div>
                    <div className="col-md-3">
                      <input
                        type="radio"
                        name="pg_for"
                        value="both"
                        checked={filter.pg_for === "both"}
                        onChange={handleChange}
                      />
                      <span className="ms-2">Both</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <label>Rent range from 0 to {value}</label>
                <input
                  type="range"
                  min="5000"
                  max="15000"
                  step="100"
                  name="max_rent"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value), handleChange(e);
                  }}
                  style={sliderStyles}
                />
              </div>
              <div className="my-3">
                <h4>Room Type</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="p-0">
                      <li>
                        <input
                          type="radio"
                          name="room_type"
                          checked={filter.room_type === "Private"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "Private" : "";
                            setFilter({ ...filter, room_type: newValue });
                          }}
                        />
                        <span className="ms-2">Private Room</span>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="room_type"
                          checked={filter.room_type === "Two sharing"}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? "Two sharing"
                              : "";
                            setFilter({ ...filter, room_type: newValue });
                          }}
                        />
                        <span className="ms-2">Two Sharing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0">
                      <li>
                        <input
                          type="radio"
                          name="room_type"
                          checked={filter.room_type === "Three sharing"}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? "Three sharing"
                              : "";
                            setFilter({ ...filter, room_type: newValue });
                          }}
                        />
                        <span className="ms-2">Three Sharing</span>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="room_type"
                          checked={filter.room_type === "Four sharing"}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? "Four sharing"
                              : "";
                            setFilter({ ...filter, room_type: newValue });
                          }}
                        />
                        <span className="ms-2">Four Sharing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <h4>Aminites</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="p-0">
                      <li>
                        <input
                          type="checkbox"
                          name="AC"
                          checked={filter.AC === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, AC: newValue });
                          }}
                        />
                        <span className="ms-2">AC</span>
                      </li>

                      <li>
                        <input
                          type="checkbox"
                          name="tv"
                          checked={filter.tv === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, tv: newValue });
                          }}
                        />
                        <span className="ms-2">TV</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="food"
                          checked={filter.food === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, food: newValue });
                          }}
                        />
                        <span className="ms-2">Food</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="wi_fi"
                          checked={filter.wi_fi === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, wi_fi: newValue });
                          }}
                        />
                        <span className="ms-2">wi-fi</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0">
                      <li>
                        <input type="checkbox" />
                        <span
                          className="ms-2"
                          name="geyser"
                          checked={filter.geyser === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, geyser: newValue });
                          }}
                        >
                          Geyser
                        </span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="parking"
                          checked={filter.parking === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, parking: newValue });
                          }}
                        />
                        <span className="ms-2">Parking</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="power_backup"
                          checked={filter.power_backup === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, power_backup: newValue });
                          }}
                        />
                        <span className="ms-2">Power backup</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="washing_machine"
                          checked={filter.washing_machine === "1"}
                          onChange={(e) => {
                            const newValue = e.target.checked ? "1" : "";
                            setFilter({ ...filter, washing_machine: newValue });
                          }}
                        />
                        <span className="ms-2">Washing Machine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 pg-list">
              {pgList.map((data, i) => (
                <div className="card my-1 mb-4 pg-list-card" key={i}>
                  <div className="row">
                    <div className="col-md-10">
                      <h5>
                        {filter.room_type && data.room_type} PG in{" "}
                        {data.location}
                      </h5>
                      <span>{data.landmark}</span>
                    </div>
                    <div className="col-md-2">
                      <button
                        className="search-btn "
                        type="button"
                        onClick={() =>
                          route.push(
                            `/book_bed/${data.pg_name}/${data.location}/${data.room_type}`
                          )
                        }
                      >
                        Select Bed
                      </button>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-7 ">
                      <Slider {...slider}>
                        {data.imgThumb.map((items, index) => (
                          <div className="text-center" key={index}>
                            <img src={items.img} className="thumb-img" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="col-md-5 ">
                      <div className="container show-aminites-card">
                        <div
                          className="row p-2"
                          style={{ borderBottom: ".2px solid #D2D2D2" }}
                        >
                          <div
                            className="col-md-6 text-center"
                            style={{ borderRight: ".2px solid #D2D2D2" }}
                          >
                            <span>{data.rent}</span>
                            <br />
                            <span>Rent</span>
                          </div>
                          <div className="col-md-6 text-center">
                            <span>{data.expected_deposite}</span>
                            <br />
                            <span>Deposite</span>
                          </div>
                        </div>
                        <div className="row p-2 ">
                          <span className="text-center">Available</span>
                          <div className="col-md-3 ">
                            <ul className="p-0">
                              {data.AC == 1 && (
                                <li>
                                  <img
                                    src="../imgs/air-conditioner.png"
                                    className="aminites-icon-ac"
                                  />
                                </li>
                              )}

                              {data.food == 1 && (
                                <li>
                                  <img
                                    src="../imgs/restaurant.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="col-md-3 ">
                            <ul className="p-0">
                              {data.tv == 1 && (
                                <li>
                                  <img
                                    src="../imgs/television.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                              {data.fridge == 1 && (
                                <li>
                                  <img
                                    src="../imgs/fridge.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="p-0">
                              {data.geyser == 1 && (
                                <li>
                                  <img
                                    src="../imgs/water-boiler.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                              {data.parking == 1 && (
                                <li>
                                  <img
                                    src="../imgs/parking-area.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="p-0">
                              {data.wi_fi == 1 && (
                                <li>
                                  <img
                                    src="../imgs/wi-fi.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                              {data.washing_machine == 1 && (
                                <li>
                                  <img
                                    src="../imgs/laundry.png"
                                    className="aminites-icon"
                                  />
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .reset-btn {
            border: none;
            border-radius: 4.5px;
            padding: 0.4rem;
            color: #323d47;
            font-size: small;
            background-color: transparent;
            transition: all 0.15s ease-in-out;
            cursor: pointer;
            float: right;
          }
          .reset-btn:hover {
            background-color: #eaeaea;
          }

          .thumb-img {
            border-radius: 6.5px;
            width: 11vw;
            height: 30.25vh;
          }
          .show-aminites-card {
            width: 100%;
            height: 30.25vh;
          }
          .pg-list {
            height: 88vh;
            overflow: scroll;
          }
          .search-btn {
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            float: right;
            border-radius: 1.5px;
            font-weight: 400;
            -webkit-transition: 0.15s linear;
            transition: 0.25s linear;
            padding: 0.4rem 0.7rem;
            background: linear-gradient(96deg, #fe5e21 0%, #f2a43a 100%);
            border: transparent;
            color: #fff;
          }

          .search-btn:hover {
            background: linear-gradient(96deg, #ff4600 0%, #db7e00 100%);
          }
          h5 {
            font-size: 1rem;
            color: #323d47;
            font-weight: 400;
            letter-spacing: 0.5px;
          }
          .filter-section {
            border-right: 8px solid #f3f2f2;
            border-radius: 10px;
          }
          .pg-list-card {
            overflow: hidden;
            padding: 7px;
            height: 43vh !important;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            border: 0.3px solid #f3f2f2 !important;
          }
          .body {
            padding: 0vw 3.6vw;
            background-color: #ffffff;
          }
          .container-fluid {
            margin-top: 15vh;
          }
          h4 {
            font-size: 1.1rem;
            line-height: 2;
            font-weight: 400;
            color: #323d47;
            font-weight: 400;
            letter-spacing: 0.5px;
          }

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
        `}
      </style>
    </>
  );
};

export default index;
