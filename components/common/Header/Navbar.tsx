import AboutIcon from "@components/icon/About";
import Brightness from "@components/icon/Brightness";
import Email from "@components/icon/Email";
import Home from "@components/icon/Home";
import MenuIcon from "@components/icon/Menu";
import MobileIcon from "@components/icon/Mobile";
import Monitor from "@components/icon/Monitor";
import Moon from "@components/icon/Moon";
import PartnerIcon from "@components/icon/Partner";
import PhoneIcon from "@components/icon/Phone";
import Menu from "@components/ui/Menu";
import styles from "@styles/Common.module.css";
import { Mode } from "@utils/toggle-dark-mode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Drawer from "./Drawer";

interface INavbar {
  themeChange: number;
  setThemeChange: Dispatch<SetStateAction<number>>;
}

export const navLinks = [
  {
    label: "Home",
    link: "/",
    icon: <Home />,
  },
  {
    label: "App",
    link: "/app",
    icon: <MobileIcon />,
  },
  {
    label: "About us",
    link: "/about-us",
    icon: <AboutIcon />,
  },
  {
    label: "Partner",
    link: "/partner",
    icon: <PartnerIcon />,
  },
  {
    label: "Support",
    link: "/support",
    icon: <PhoneIcon />,
    lastItem: true,
  },
];

const Navbar: FC<INavbar> = ({ setThemeChange, themeChange }) => {
  const pathname = useRouter().pathname;
  const [mode, setMode] = useState("system");
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

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
      className={`custom-container text-adaptive  font-als flex justify-between items-center ${styles.nav}`}
    >
      <div className={`${styles.nav_left} flex justify-between items-center`}>
        <Image width={145} height={38} alt="Logo" src="/logo.svg" />
        <div
          className={`${styles.nav_left_inner} justify-between font-medium text-base hidden md:flex`}
        >
          {navLinks.map((navLink) => (
            <Link key={navLink.label} href={navLink.link}>
              <a
                className={`${
                  pathname === navLink.link ? "text-primary" : "text-adaptive"
                } hover:text-primary`}
              >
                {navLink.label}
              </a>
            </Link>
          ))}
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
          <div
            className={`shadow-lg absolute bg-white w-36 rounded-lg z-30 -right-5 top-9 font-maz transition-all ease-in-out ${openMenu ? "visible" : "invisible"}`}
          >
            <Menu open={openMenu} setOpen={setOpenMenu}>
              <ul className={`text-txt-adaptive transition-all ease-in-out ${openMenu ? "visible" : "invisible"}`}>
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
        <Link href="/sign-up">
          <button className="btn btn-lg btn-primary text-sm leading-none hidden md:block">
            Sign Up
          </button>
        </Link>
        <span
          onClick={() => setOpenDrawer(true)}
          className="md:hidden h-5  w-5"
        >
          <MenuIcon />
        </span>
      </div>

      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    </nav>
  );
};

export default Navbar;
