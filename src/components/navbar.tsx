// import type { ReactNode } from "react";
import Styles from "./navbar.module.css"
import { Link } from "react-router-dom";

// type NavbarProps = {
//     children: ReactNode;
// };
// {children}: NavbarProps

function Navbar() {
  return (
    <div className={Styles["nav-container"]}>
        <nav className={Styles["navbar"]}>
          <Link to="/">
          <div className={Styles["nav-name"]}>
            <img src="public/yoyo.png" alt="" className={Styles["nav-logo"]} />
            <span>Travis Souther</span>
          </div>
          </Link>
      
          <ul className={Styles["nav-links"]}>
            <li className={Styles["icon-button"]}>
              <Link to="/experience">Experience</Link>
            </li>
            <li className={Styles["icon-button"]}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={Styles["icon-button"]}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;

