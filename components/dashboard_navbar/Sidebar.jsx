import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiLogoutCircleLine,RiDashboardLine } from "react-icons/ri";
import { MdOutlineBedroomParent } from "react-icons/md";
import styles from "../../styles/sidebar.module.scss";
import { useRouter } from "next/router";
import { BsBuildingFillAdd, BsBell } from "react-icons/bs";
import { FiUsers} from "react-icons/fi";

const routes = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <RiDashboardLine/>,
    select: true,
  },
  {
    path: "/admin/add_pg",
    name: "Add PG",
    icon: <BsBuildingFillAdd/>,
    select: false,
  },
  {
    path: "/admin/update_room_bed",
    name: "Update Room/Bed",
    icon: <MdOutlineBedroomParent />,
    select: false,
  },
  {
    path: "/admin/staff",
    name: "Staff",
    icon: <FiUsers/>,
    select: false,
  },
];

const SideBar = () => {
  const route = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isHover, setIsHover] = useState(false);
  const [notificationHover, setNotificationHover] = useState(false);
  const [notification, setNotification] = useState([
    { notification: "notification about trade" },
    { notification: "notification about campaign" },
    { notification: "notification about clients" },
  ]);

  const handleHoverNotifi = () => {
    setNotificationHover(true);
  };

  const handleLeaveNotifi = () => {
    setNotificationHover(false);
  };
  const Selectroute = (e) => {
    routes.forEach((el) => {
      el.select = el.name === e.name ? true : false;
    });
  };

   
  useEffect(() => {
    routes.forEach((el) => {
      el.select = el.path === route.pathname ? true : false;
    });
  }, []);


  return (
    <>
      <div className={styles.nav_container}>
        <nav className={styles.admin_header}>
          <div className={styles.nav_items}>
            <ul>
              <li
                className={styles.nav_item}
                onMouseEnter={handleHoverNotifi}
                onMouseLeave={handleLeaveNotifi}
              >
                <BsBell />
                <p className="mb-0">Notification</p>
                {notificationHover && (
                  <div
                    className={styles.notification}
                    onMouseEnter={handleHoverNotifi}
                  >
                    <ul className={`${styles.notification_ul} ps-1`}>
                      {notification.map((items, index) => (
                        <li className={styles.notification_li} key={index}>
                          {items.notification}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li className={styles.nav_item}>
                <RiLogoutCircleLine />
                <p
                  className={`${styles.tooltip} mb-0`}
                  style={{ color: "black" }}
                >
                  Log out
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <aside className={styles.main_container}>
        <div
          animate={{
            width: isOpen ? "220px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 20,
            },
          }}
          className={styles.sidebar}
        >
          <div className={styles.nav_logo}>
            <img
              src="../../imgs/Pg.png"
              alt="logo"
              className="ms-2 mt-3 mb-2"
              onClick={() => route.push("/")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <section className={styles.routes}>
            {routes.map((route, index) => {
              return (
                <Link
                  href={route.path}
                  key={index}
                  onClick={() => Selectroute(route)}
                  className={styles.link}
                  aria-expanded={route.select}
                >
                  <div className={styles.icon}>{route.icon}</div>
                  {route.name}
                </Link>
              );
            })}
          </section>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
