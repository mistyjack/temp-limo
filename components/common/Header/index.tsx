import { toggleDarkMode } from "@utils/toggle-dark-mode";
import { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header: FC = () => {
  const [themeChange, setThemeChange] = useState(1);

  useEffect(() => {
    toggleDarkMode();
  }, [themeChange]);

  return (
    <>
      <Navbar setThemeChange={setThemeChange} themeChange={themeChange} />
    </>
  );
};

export default Header;
