import Brightness from "@components/icon/Brightness";
import Email from "@components/icon/Email";
import Monitor from "@components/icon/Monitor";
import Moon from "@components/icon/Moon";
import Menu from "@components/ui/Menu";
import styles from "@styles/Common.module.css";
import { Mode } from "@utils/toggle-dark-mode";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface INavbar {
  themeChange: number;
  setThemeChange: Dispatch<SetStateAction<number>>;
}

const Navbar: FC<INavbar> = ({ setThemeChange, themeChange }) => {
  const [mode, setMode] = useState("system");
  const [openMenu, setOpenMenu] = useState(false);
  const [sss, setSss] = useState(false);

  const handleModeSwitch = (mode: Mode) => () => {
    setOpenMenu(false);
    setMode(mode);
    if (mode === "light" || mode === "dark") {
      localStorage.theme = mode;
    } else {
      localStorage.removeItem("theme");
    }
    setThemeChange(themeChange + 1);
  };

  return (
    <nav
      className={`custom-container text-adaptive font-als flex justify-between items-center ${styles.nav}`}
    >
      <div className={`${styles.nav_left} flex justify-between items-center`}>
        <Image width={145} height={38} alt="Logo" src="/logo.svg" />
        <div
          className={`${styles.nav_left_inner} flex justify-between font-medium text-base`}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/app">
            <a>App</a>
          </Link>
          <Link href="/about-us">
            <a>About us</a>
          </Link>
          <Link href="/partner">
            <a>Partner</a>
          </Link>
          <Link href="/support">
            <a>Support</a>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-7">
        <a
          className="hover:bg-gray-00 hover:rounded"
          href="mailto:hello@allstarlimoservice.com"
          aria-label="Send email"
        >
          <Email />
        </a>

        <div className="relative">
          <span
            className={`cursor-pointer hover:text-primary hover:rounded ${
              openMenu ? "text-primary" : ""
            }`}
            onClick={() => setOpenMenu(true)}
          >
            <Brightness />
          </span>
          <div className="absolute -left-7 top-9 font-maz">
            <Menu open={openMenu} setOpen={setOpenMenu}>
              <ul className="text-txt-adaptive">
                <li
                  onClick={handleModeSwitch("light")}
                  className={`${styles.nav_menu_item} ${
                    mode === "light" ? "text-primary" : ""
                  }`}
                >
                  <span className="mr-2.5">
                    <Brightness />
                  </span>
                  Light
                </li>
                <li
                  onClick={handleModeSwitch("dark")}
                  className={`${styles.nav_menu_item} ${
                    mode === "dark" ? "text-primary" : ""
                  }`}
                >
                  <span className="mr-2.5">
                    <Moon />
                  </span>
                  Dark
                </li>
                <li
                  onClick={handleModeSwitch("system")}
                  className={`${styles.nav_menu_item} ${
                    mode === "system" ? "text-primary" : ""
                  }`}
                >
                  <span className="mr-2.5">
                    <Monitor />
                  </span>
                  System
                </li>
              </ul>
            </Menu>
          </div>
        </div>
        <button className="btn btn-lg btn-primary text-sm leading-none">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
