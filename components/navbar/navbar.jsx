import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";

function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState([
    typeof window !== "undefined" && window.pageYOffset,
  ]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition([typeof window !== "undefined" && window.pageYOffset]);
    };
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}

const Navbar = () => {
  const [loged, setLogged] = useState();
  const router = useRouter();
  const [scroll] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleCss = () => {
      if (scroll > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    handleCss();
  }, [scroll]);

  return (
    <>
      <nav className="navbar dekstop-nav">
        <div className="nav-container w-100">
          <section className="nav-container">
            <p className="nav-logo ">
              <img
                src="../../imgs/1_PG.com.png"
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
              />
            </p>
          </section>

          <form className="nav-search">
            <button
              className="search-btn  btn-fill "
              type="button"
              onClick={() => router.push("/admin")}
            >
              Post Property
            </button>

            {loged ? (
              <button
                className="search-btn  btn-line "
                type="button"
                // onClick={() => router.push("/admin")}
              >
                Log Out
              </button>
            ) : (
              <>
                <button
                  className="search-btn  btn-line"
                  type="button"
                  // onClick={() => router.push("/login")}
                >
                  Sign up or Log in
                </button>
              </>
            )}
          </form>
        </div>
      </nav>

      {/* mobile nav */}
      {/* <nav className="navbar ps-0 mbil-nav">
        <div className="nav-container w-100">
          <section className="nav-container  ">
            <span
              className="p-2 ps-0 me-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <AiOutlineMenu
                style={
                  isVisible
                    ? { color: "#757575", fontSize: "1.35rem" }
                    : { color: "#fff", fontSize: "1.35rem", opacity: ".7" }
                }
              />
            </span>
            <p className="nav-logo m-0 ">
              <img
                src={
                  isVisible
                    ? "../../imgs/black_logo-light.png"
                    : "../../imgs/logo-light.png"
                }
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
              />
            </p>
          </section>

          <form className="nav-search">
            {loged ? (
              <button
                className="search-btn  btn-success me-0"
                type="button"
                onClick={() => router.push("/admin")}
              >
                My Dashboard
              </button>
            ) : (
              <>
                <button
                  className="search-btn  btn-success ps-3 pe-3 me-0"
                  type="button"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </>
            )}
          </form>
        </div>
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header pb-0">
            <p className="nav-logo ms-3 mb-0">
              <img
                src="../../imgs/black_logo-light.png"
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
                className=""
              />
            </p>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                data-bs-dismiss="offcanvas"
                onClick={() => router.push("/about")}
              >
                About
              </li>
              <li
                className="list-group-item"
                data-bs-dismiss="offcanvas"
                onClick={() => router.push("/features")}
              >
                Features
              </li>
              <li
                className="list-group-item"
                data-bs-dismiss="offcanvas"
                onClick={() => router.push("/pricing")}
              >
                Pricing
              </li>
              <li
                className="list-group-item"
                data-bs-dismiss="offcanvas"
                onClick={() => router.push("/contact")}
              >
                Contact
              </li>
              <li
                className="list-group-item"
                data-bs-dismiss="offcanvas"
                onClick={() => router.push("/privacy-policy")}
              >
                Privacy policy
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <style jsx>
        {`
          .navbar {
            background-color: #ffffff;
            padding: .7vw 1.8vw;
      
          }
          .mbil-nav {
            display: none;
          }
          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            vertical-align: middle;
          }
          .nav-logo {
            font-size: 1.2rem;
          }
          .search-btn {
            letter-spacing: .5px;
            font-size: 0.9rem;
            border-radius: 6.5px;
            font-weight: 400;
            -webkit-transition: 0.15s linear;
            transition: 0.25s linear;
          }
          .btn-fill {
            padding: 0.51rem 1.05rem;
            
            background: linear-gradient(96deg, #fe5e21 0%, #f2a43a 100%);
            border: transparent;
            color: #fff;
            margin-right: 2.5rem;
          }

          .btn-fill:hover {
            background: linear-gradient(96deg,#ff4600 0%,#db7e00 100%);
          }

          .btn-line {
            color: #6e6e6e;
            padding: 0.4rem 1rem;
            background: transparent;
            border: 2.5px solid #fd6122;
          }
          .btn-line:hover {
            background: linear-gradient(96deg,#ff4600 0%,#db7e00 100%);
            box-shadow: 0 1px 10px rgba(248, 249, 250, 0.4);
            color: #fff;
          }

          // .navbar-mobile {
          //   border-left: 1px solid transparent;
          // }
          // .navbar-mobile-scroll {
          //   border-left: 1px solid #eeeeee;
          // }
        `}
      </style>
    </>
  );
};

export default Navbar;
