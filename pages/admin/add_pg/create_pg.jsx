import React, { useState, useEffect } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
const Create_pg = () => {
  const [slide1, setSlide1] = useState(true);
  const handleClose3 = () => setSlide2(true);
  const handleShow3 = () => setSlide2(false);

  const [slide2, setSlide2] = useState(false);
  const handleClose2 = () => {
    setSlide2(false);
    setSlide1(true);
  };

  const handleShow2 = () => {
    setSlide2(true);
    setSlide1(false);
  };
  const [numFloors, setNumFloors] = useState(3);

  // Create an array of floor numbers based on user input
  const floorNumbers = Array.from(
    { length: numFloors },
    (_, index) => index + 1
  );

  return (
    <>
      <div className="addpg-container p-3">
        {slide1 ? (
          <div className="container slide1">
            <h6>Please fill the below details</h6>
            <div className="row mt-2">
              <div className="col-5">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="PG Name"
                />
                <div className="my-3 d-flex">
                  <label className="me-3">Floors in building</label>
                  <input
                    type="number"
                    className="form-control number text-center"
                    placeholder="0"
                    value={numFloors}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (!isNaN(newValue) && newValue >= 1) {
                        setNumFloors(newValue);
                      }
                    }}
                  />
                </div>
                <label className="mt-4">PG Address</label>
                <input
                  type="text"
                  className="form-control my-3 mt-2"
                  placeholder="Address line 1"
                />{" "}
                <input
                  type="text"
                  className="form-control my-3 mb-2"
                  placeholder="Address line 2"
                />
                <div className="d-flex pt-0 mt-0">
                  <input
                    type="text"
                    className="form-control my-2 w-50 me-2"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    className="form-control my-2 w-50 ms-2"
                    placeholder="Pin"
                  />
                </div>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="State"
                />{" "}
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <label>PG for</label>
                <div className="container-gender my-2">
                  <div className="card">
                    <input type="checkbox" className="checkbox" />{" "}
                    <img src="../../imgs/man2.png" />
                  </div>
                  <div className="card">
                    {" "}
                    <input type="checkbox" className="checkbox" />{" "}
                    <img src="../../imgs/woman.png" />
                  </div>
                  <div className="card">
                    <input type="checkbox" className="checkbox" />{" "}
                    <img src="../../imgs/parents.png" />
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.203386323958!2d77.31864131492027!3d28.59367469258985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f0a89ce605%3A0xfd09bf1f744de96f!2sGohoardings!5e0!3m2!1sen!2sin!4v1667808584343!5m2!1sen!2sin"
                  className="google_map"
                  allowFullScreen={true}
                  loading="lazy"
                  title="google-map"
                ></iframe>
                <button
                  className="btn btn-create float-end ps-4 pe-4 mt-2"
                  onClick={handleShow2}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {slide2 ? (
              <div className="container slide2 position-relative">
                <>
                  <h6>
                    Amenities for all rooms
                    <TiArrowBackOutline
                      className="float-end  back-icon"
                      onClick={handleClose2}
                    />
                  </h6>
                  <div className="row my-2">
                    <div className="col-4">
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
                          <span className="ms-3">Fridge</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Veg</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Non-Veg</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Parking</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Geyser</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Laundry</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Power backup</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">Washing machine</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>

                <>
                  <h6>PG rules</h6>
                  <div className="row my-2">
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">No Smoking</span>
                        </li>

                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">No Drinking</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">No Girl's Entry</span>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <span className="ms-3">No Guardians Stay</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <span className="me-3">Gate Closing Time</span>{" "}
                          <select
                            className="select"
                            aria-label="Default select example"
                            name="customer_state"
                            value={""}
                          >
                            <option value="Noida" selected>
                              11.30 pm
                            </option>

                            {/* {state.map((option, i) => (
                            <option key={i} value={option.name}>
                              {option.name}
                            </option>
                          ))} */}
                          </select>
                        </li>
                        {/* <li>
                      <input type="checkbox" />
                      <span className="ms-3">No Guardians Stay</span>
                    </li> */}
                      </ul>
                    </div>
                  </div>
                </>

                <div style={{ marginTop: "18vh" }}>
                  <button
                    className="btn btn-create float-end ps-4 pe-4 "
                    onClick={handleShow3}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="container slide3">
                  <div className="row">
                    <div className="col-8 ">
                      <div  style={{overflow:"scroll",height:"78vh"}}>

                   
                      <div
                        className=" heading-row"
                        style={{
                          borderTopLeftRadius: "6.5px",
                          borderTopRightRadius: "6.5px",
                        }}
                      >
                        <div className="text-center heading-f">Floor</div>
                        <div className="text-center heading">Private room</div>
                        <div className="text-center heading">Two sharing</div>
                        <div className="text-center heading">Three sharing</div>
                        <div className="text-center heading">Four sharing</div>
                      </div>
                      {floorNumbers
                        .slice()
                        .reverse()
                        .map((floorNumber) => (
                          <div className="room-row" key={floorNumber}>
                            <div className="text-center flor-head">
                              {floorNumber}st
                            </div>
                            <div className="text-center room-box">
                              <img src="../../imgs/single-bed-s.png" />

                              <div>
                                <button className="add-btn">add</button>
                              </div>
                            </div>
                            <div className="text-center room-box">
                              <img src="../../imgs/Group 1.png" />
                              <div>
                                <button className="add-btn">add</button>
                              </div>
                            </div>
                            <div className="text-center room-box">
                              <img src="../../imgs/Group 2.png" />
                              <div>
                                <button className="add-btn">add</button>
                              </div>
                            </div>
                            <div className="text-center room-box">
                              <img src="../../imgs/Group 3.png" />
                              <div>
                                <button className="add-btn">add</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div
                        className=" heading-row"
                        style={{
                          borderBottomLeftRadius: "6.5px",
                          borderBottomRightRadius: "6.5px",
                        }}
                      >
                        <div
                          className="text-center heading "
                          style={{ fontSize: "1rem" }}
                        >
                          Your Building
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-4 ps-4">
                      <h6
                        style={{
                          fontSize: "1rem",
                          color: "black",
                          lineHeight: "1.6",
                        }}
                      >
                        Add room details floor wise by clicking on “add” button.{" "}
                        <TiArrowBackOutline
                          className="float-end  back-icon"
                          onClick={handleClose3}
                        />
                      </h6>
                      <p style={{ fontWeight: "300" }}>
                        For help you can watch this video
                      </p>

                      <div
                        className="mx-md-auto my-3 my-md-5 p-0"
                        style={{ textAlign: "center" }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/_tAziy85tX0?controls=0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>

                      <button className="btn-create w-100" style={{ marginTop: "15vh" }}>Submit PG</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <style jsx>
        {`
          .select {
            color: #737272;
            font-size: 0.84rem;
            font-weight: 500;
            letter-spacing: 0.7px;
            color: #767676;
            border: 1px solid #ababbc;
            border-radius: 2px !important;
            height: 34px !important;
            transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
          span {
            color: #737272;
            font-size: 0.84rem;
            font-weight: 500;
            letter-spacing: 0.7px;
          }
          // li {
          //   display: flex;
          //   align-items: center;
          //   line-height: 1.5rem;
          // }
          img {
            height: 3.8rem;
            margin-top: 3px;
          }
          .checkbox {
            width: fit-content;
            margin-left: auto;
          }
          .container-gender {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .addpg-container {
            height: 82vh;
            background-color: #ffffff;
            overflow: hidden;
            border-radius: 4px;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          }
          h6 {
            font-size: 1.1rem;
            line-height: 2;
            font-weight: 400;
            color: #323d47;
            letter-spacing: 0.5px;
          }
          label {
            font-size: 0.9rem;

            color: #323d47;
            letter-spacing: 0.5px;
          }
          .number {
            width: 4vw;
          }
          .card {
            // background-color: #eeeff4;
            border-radius: 4px;
            padding: 0.5rem 0.8rem;
            cursor: pointer;
            border: none;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            background: linear-gradient(
              96deg,
              #fe5e21 0%,
              #f2a43a 100%
            ) !important;
          }
          .google_map {
            width: 100%;
            border-radius: 4px !important;
            height: 45%;
            margin-top: 2.75rem;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
              rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
          }
          .heading-row {
            background: linear-gradient(96deg, #fc6523 0%, #f8a52f 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .heading {
            width: 100%;
          }
          .heading-f {
            width: 45%;
          }
          .heading,
          .heading-f {
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            padding: 8.5px 10px;
          }

          .room-row {
            transition: transform 0.5s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .flor-head,
          .room-box {
            font-size: 0.8rem;
            font-weight: 500;
            padding: 8.5px 10px;
            height: 7.9rem;
            width: 100%;
          }
          .room-box {
            border: 0.7px solid #f8a52f;
            border-left: none;
          }
          .flor-head {
            background: linear-gradient(96deg, #fc6523 0%, #fc6c25 100%);
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45% !important;
          }
          .add-btn {
            border: 1px solid #f8a52f;
            margin-top: 1rem;
            color: #f8a52f;
            border-radius: 10px;
            font-size: 0.7rem;

            background-color: #fbfbfb;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 0rem 0.5rem;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
          }
          .add-btn:hover {
            border: 1px solid #f8a52f;
            color: #fbfbfb;
            background-color: #f8a52f;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 0rem 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default Create_pg;
