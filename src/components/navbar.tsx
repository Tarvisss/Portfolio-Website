
import Styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}


function Navbar({isDarkMode, setIsDarkMode}: NavbarProps) {
  
  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode);
  }
  
  return (
    <div className={Styles["nav-container"]}>
        <nav className={Styles["navbar"]}>
          <Link to="/">
          <div className={Styles["nav-name"]}>
            <img src="/yoyo.png" alt="" className={Styles["nav-logo"]} />
            <span>Travis Souther</span>
          </div>
          </Link>
      
          <ul className={Styles["nav-links"]}>
            <li onClick={toggleDarkMode} className={Styles["icon-button"]}>
              {isDarkMode === true ? (
                <img style={{height: "32px"}} src="/icons8-sun-50 (1).png" alt="lightMode" />
              ) : (
                <img style={{height: "32px"}} src="/icons8-moon-50 (1).png" alt="darkMode" />
              ) }
            </li>
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

