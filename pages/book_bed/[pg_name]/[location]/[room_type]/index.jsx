import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Fixednavbar from "@/components/navbar/navbar-fixed";
import Footer from "@/components/footer";
import Slider from "react-slick";
const index = () => {
  const router = useRouter();
  const { pg_name, location, room_type } = router.query;

  //store img upload
  const [defaultValueFile, setdefaultValueFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setdefaultValueFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const pgBuildings = [
    {
      floorNumbers: 1,
      floorDetails: [
        {
          isAvailable: 1,
          roomtype: "Private",
          rent: "10000",
          deposite: "7000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Two_sharing",
          rent: "80000",
          deposite: "6000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Three Sharring",
          rent: "60000",
          deposite: "5000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Four Sharring",
          rent: "60000",
          deposite: "5000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
      ],
    },
    {
      floorNumbers: 2,
      floorDetails: [
        {
          isAvailable: 1,
          roomtype: "Private",
          rent: "10000",
          deposite: "7000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Two_sharing",
          rent: "80000",
          deposite: "6000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Three Sharring",
          rent: "60000",
          deposite: "5000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Four Sharring",
          rent: "60000",
          deposite: "5000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
      ],
    },
    {
      floorNumbers: 3,
      floorDetails: [
        {
          isAvailable: 1,
          roomtype: "Private",
          rent: "10000",
          deposite: "7000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Two_sharing",
          rent: "80000",
          deposite: "6000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Three Sharring",
          rent: "60000",
          deposite: "5000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
        {
          isAvailable: 1,
          roomtype: "Four Sharring",
          rent: "60000",
          deposite: "5000",
          bedinfo: [
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
            {
              selected: false,
              img: "../../../imgs/single-bed-s.png",
              img_Selected: "../../imgs/2_filled.png",
            },
          ],
        },
      ],
    },
  ];
  const [pgBuilding, setPgBuilding] = useState(pgBuildings);

  const imgThumb = [
    {
      img: "../../../imgs/rooms/Rectangle 18.png",
      name: "Dashboard",
    },
    {
      img: "../../../imgs/rooms/Rectangle 22.png",
      name: "data Campaign",
    },
    {
      img: "../../../imgs/rooms/Rectangle 19.png",
      name: "Invoice",
    },
    {
      img: "../../../imgs/rooms/Rectangle 22.png",
      name: "data Campaign",
    },
    {
      img: "../../../imgs/rooms/Rectangle 19.png",
      name: "Invoice",
    },
  ];

  useEffect(() => {
    console.log(pgBuilding); // This will display the updated state when it changes
  }, [pgBuilding]);

  const handleShow = (florNo, room) => {
  
    const updatedPgBuilding = pgBuilding.map((floor) => {
      if (floor.floorNumbers === florNo) {
        const updatedFloorDetails = floor.floorDetails.map((roomDetail) => {
          if (roomDetail.roomtype === room.roomtype) {
            const updatedBedInfo = roomDetail.bedinfo.map((bed) => ({
              ...bed,
              selected: true,
            }));
            return {
              ...roomDetail,
              bedinfo: updatedBedInfo,
            };
          }
          return roomDetail;
        });

        return {
          ...floor,
          floorDetails: updatedFloorDetails,
        };
      }
      return floor;
    });

    setPgBuilding(updatedPgBuilding);
  };
  {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

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
          <section className="my-md-5">
            <div
              className="row p-0"
              style={{
                height: "fit-content",
              }}
            >
              <div className=" my-2 ps-0">
                <h1 className="pg-heading-location">
                  Ashok pg building in sector 12 A-93 Noida
                </h1>
                <span className="ms-0 ps-0">
                  Standalone building and Metro multispeciality...
                </span>
              </div>
              <div
                className="col-md-9 p-0"
                style={{ overflow: "scroll", height: "78vh" }}
              >
                {pgBuilding
                  .slice()
                  .reverse()
                  .map((floorDetails, i) => (
                    <div className="room-row" key={floorDetails.floorNumbers}>
                      <div className="text-center flor-head">
                        {floorDetails.floorNumbers}st
                      </div>
                      {floorDetails.floorDetails.map((room, roomIdx) => (
                        <div className="text-center room-box" key={roomIdx}>
                          {room.bedinfo.map((obj, imgIdx) => (
                            <div className="text-center" key={imgIdx}>
                              <img
                                className="img-fluid"
                                src={
                                  obj.selected == true
                                    ? "../../../imgs/1_filled.png"
                                    :  obj.img
                                }
                                alt={`Flor ${roomIdx + 1} bed ${imgIdx + 1}`}
                                onClick={(e) => handleShow(floorDetails.floorNumbers, room)}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}

                <div className=" heading-row">
                  <div className="text-center heading-f">Floor</div>
                  <div className="text-center heading">Private</div>
                  <div className="text-center heading">Two sharing</div>
                  <div className="text-center heading">Three sharing</div>
                  <div className="text-center heading">Four sharing</div>
                </div>
              </div>
              <div className="col-md-3 p-0 ">
                <div
                  className="p-2"
                  style={{
                    height: "68.2vh",
                    border: "0.7px solid #f1f1f1",
                    borderLeft: "none",
                    position: "relative",
                  }}
                >
                  <Slider {...slider}>
                    {imgThumb.map((items, index) => (
                      <div className="text-center" key={index}>
                        <img
                          src={items.img}
                          style={{
                            width: "100%",
                            height: "30vh",
                            marginTop: "2%",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>

                  <div
                    className="room-detail position-absolute bottom-0 "
                    style={{ width: "95%" }}
                  >
                    <div className="my-2">
                      <span className="pg-heading-location">Rent</span>
                      <span className="float-end  pg-heading-location">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 320 512"
                          class="cart_rupees_logo__eSIPg"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
                        </svg>{" "}
                        7000
                      </span>
                    </div>
                    <div className="my-2">
                      <span className="pg-heading-location">Deposite</span>
                      <span className="float-end  pg-heading-location">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 320 512"
                          class="cart_rupees_logo__eSIPg"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
                        </svg>{" "}
                        5000
                      </span>
                    </div>
                    <button
                      className="search-btn  my-1"
                      type="button"
                      // onClick={() =>
                      //   route.push(
                      //     `/book_bed/${data.pg_name}/${data.location}/${data.room_type}`
                      //   )
                      // }
                    >
                      Book this bed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-md-5">
            <div
              className="row p-0"
              style={{
                height: "fit-content",
                boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "6.5px",
              }}
            >
              <h4 className="col-12">
                <div className="row">
                  <div className="col-md-9 p-1">
                    <div className=" d-flex ">
                      <input
                        type="text"
                        className="form-control w-75"
                        placeholder="Type in place to get direction from PG"
                      />
                      <span className="search-box ">Get Direction</span>
                    </div>
                  </div>
                  <div className="col-md-3 ps-md-3">Near By...</div>
                </div>
              </h4>

              <div className="col-md-9">
                <div className="row p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.203386323958!2d77.31864131492027!3d28.59367469258985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f0a89ce605%3A0xfd09bf1f744de96f!2sGohoardings!5e0!3m2!1sen!2sin!4v1667808584343!5m2!1sen!2sin"
                    className="google_map m-0 p-0"
                    allowFullScreen={true}
                    loading="lazy"
                    style={{
                      height: "42vh",
                      boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
                    }}
                    title="google-map"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-3 ps-md-3">
                <ul className="p-0">
                  <li>
                    <img
                      src="../../../imgs/train.png"
                      className="aminites-icon"
                    />{" "}
                    <span>Metro</span>
                  </li>

                  <li>
                    <img
                      src="../../../imgs/mall.png"
                      className="aminites-icon"
                    />{" "}
                    <span>Mall</span>
                  </li>
                  <li>
                    <img
                      src="../../../imgs/atm-machine.png"
                      className="aminites-icon"
                    />
                    <span>ATM</span>
                  </li>
                  <li>
                    <img
                      src="../../../imgs/park.png"
                      className="aminites-icon"
                    />
                    <span>Park</span>
                  </li>
                  <li>
                    <img
                      src="../../../imgs/bank.png"
                      className="aminites-icon"
                    />
                    <span>Bank</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="my-md-5">
            <div
              className="row p-0"
              style={{
                height: "fit-content",
              }}
            >
              <div className="col-md-8">
                <div
                  className="row"
                  style={{
                    boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
                    borderRadius: "6.5px",
                  }}
                >
                  <h4 className="">Amenities available</h4>
                  <div className="col-md-4">
                    <ul className="p-0">
                      <li>
                        <img
                          src="../../../imgs/air-conditioner.png"
                          className="aminites-icon-ac"
                        />{" "}
                        <span> AC</span>
                      </li>

                      <li>
                        <img
                          src="../../../imgs/restaurant.png"
                          className="aminites-icon"
                        />{" "}
                        <span>Food</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/wi-fi.png"
                          className="aminites-icon"
                        />{" "}
                        <span>WI-FI</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/laundry.png"
                          className="aminites-icon"
                        />{" "}
                        <span>Washing Machine</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0">
                      <li>
                        <img
                          src="../../../imgs/television.png"
                          className="aminites-icon"
                        />
                        <span>TV</span>
                      </li>

                      <li>
                        <img
                          src="../../../imgs/fridge.png"
                          className="aminites-icon"
                        />
                        <span>Fridge</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/water-boiler.png"
                          className="aminites-icon"
                        />
                        <span>Geyser</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/generator.png"
                          className="aminites-icon"
                        />{" "}
                        <span>Power Backup</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0">
                      <li>
                        <img
                          src="../../../imgs/laundry2.png"
                          className="aminites-icon"
                        />{" "}
                        <span>Laundry</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/parking-area.png"
                          className="aminites-icon"
                        />
                        <span>Parking area</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="row ms-2"
                  style={{
                    boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
                    borderRadius: "6.5px",
                  }}
                >
                  <h4 className="">Rules and regulations</h4>
                  <div className="col">
                    <ul className="p-0">
                      <li>
                        <img
                          src="../../../imgs/no-smoking.png"
                          className="aminites-icon"
                        />{" "}
                        <span>No smoking</span>
                      </li>

                      <li>
                        <img
                          src="../../../imgs/no-drinking.png"
                          className="aminites-icon"
                        />{" "}
                        <span>No alcohole</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/girl2.png"
                          className="aminites-icon-ac"
                        />{" "}
                        <span>No Girl’s Entry</span>
                      </li>
                      <li>
                        <img
                          src="../../../imgs/gate.png"
                          className="aminites-icon"
                        />{" "}
                        <span>Gate Closing Time 11:00 pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="my-md-5">
          <div
            className="row p-0"
            style={{
              height: "fit-content",
              boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px",
              borderRadius: "6.5px",
            }}
          >
            <h4 className="">Please fill out the form below</h4>
            <form className="row">
              <div className="col-4">
                <span className="ms-0">Name as per your ID:</span>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="full name"
                />
                <span className="ms-0">Phone number:</span>
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="phone number"
                />
                <span className="ms-0">Email address:</span>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="email"
                />
                <span className="ms-0">Select gender:</span>
                <select
                  className="select-f w-100 mb-2"
                  aria-label="Default select example"
                  name=""
                >
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </select>
              </div>
              <div className="col-4">
                <span className="ms-0">Chose your shifting date:</span>
                <input type="date" className="form-control mb-2" />
                <span className="ms-0">Please upload your ID card</span>
                <div
                  className="card "
                  style={{
                    height: "30vh",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: " #f2f2f2",
                  }}
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        borderRadius: "5.5px",
                      }}
                    />
                  ) : (
                    <input
                      type="file"
                      id="fileupload"
                      name="mediaImage"
                      onChange={handleFileChange}
                      className="upld-btn"
                      accept="image/jpg,image/jpeg,image/png"
                      aria-describedby="name-error"
                      aria-invalid="true"
                    />
                  )}
                </div>
              </div>
              <div className="col-4">
                <span style={{ color: "black", fontSize: "1rem" }}>Note*</span>
                <ul className="p-0">
                  <li className="my-2">
                    <span style={{ lineHeight: "1.5" }}>
                      All the information you submit here goes directly to the
                      PG owner after you have booked your bed.
                    </span>
                  </li>

                  <li className="my-3">
                    <span style={{ lineHeight: "1.5" }}>
                      Once you've completed the bed booking successfully, an
                      email will be sent to you containing the PG owner's name,
                      contact number, and payment receipt.
                    </span>
                  </li>
                </ul>
                <div className="ms-1 my-2">
                  <button className="book-bed">Book Bed</button>
                </div>
              </div>
            </form>
          </div>
        </section> */}
        </div>

        <style jsx>
          {`
          .price{
            color: #212543;
            font-size: 1.1rem;
            font-weight: 600;
        }
          .pg-heading-location{
            white-space: nowrap;
            text-overflow: ellipsis;
      
            font-size: 1.125rem;
            color:"#4B4B4B"
            font-weight: 600;
            text-transform: capitalize;
            margin: 0;
          }
            .search-btn {
              letter-spacing: 0.5px;
              font-size: 0.9rem;
              width: 100%;
              border-radius: 1.5px;
              font-weight: 400;
              -webkit-transition: 0.15s linear;
              transition: 0.25s linear;
              padding: 0.4rem 0.7rem;
              background: #f2a43a;
              border: transparent;
              color: #fff;
            }

            // .search-btn:hover {
            //   background: linear-gradient(96deg, #ff4600 0%, #db7e00 100%);
            // }
            .heading-row {
              background-color: #f8f8f8;
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
              color: #8d8c8c;
              font-size: 0.9rem;
              font-weight: 500;
              padding: 8.5px 10px;
            }

            .room-row {
              transition: transform 0.5s ease;
              display: flex;
              justify-content: center;
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
              display: flex;
              justify-content: center;
              align-items: center;
              border: 0.7px solid #f1f1f1;
              border-left: none;
            }
            .flor-head {
              background-color: #f8f8f8;
              color: #8d8c8c;
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
            img {
              cursor: pointer;
            }
            .upld-btn {
              border: 1px solid #d2d2d2;
              width: fit-content;
              font-size: 0.9rem;
              transition: all 0.15s ease-in-out;
              color: #6c6c6c;
              cursor: pointer;
              margin: 0% auto;
              background-color: #ffffff;
              padding: 0.3rem 0.5rem;
              border-radius: 8.5px;
            }
            .upld-btn:hover {
              color: #6c6c6c;
              background-color: #f2f2f2;
            }
            .search-box {
              color: #4b4b4b;
              background-color: #ffffff;
              font-size: 1rem !important;
              display: flex;
              border-radius: 2px !important;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
            h4 {
              background-color: #f2a43a;
              font-size: 1.3rem;
              line-height: 2.2;
              border-top-left-radius: 6.5px;
              border-top-right-radius: 6.5px;
              letter-spacing: 1px;
              color: #ffffff;
            }
            .body {
              padding: 0vw 3.6vw;
              background-color: #ffffff;
            }
            .container-fluid {
              margin-top: 15vh;
            }
            span {
              color: #737272;
              font-size: 0.77rem;
              font-weight: 500;
              letter-spacing: 0.7px;
              margin-left: 0.7rem;
            }
            li {
              display: flex;
              align-items: center;
              line-height: 0.7rem;
            }
          `}
        </style>
      </div>
      <Footer />
    </>
  );
};

export default index;
