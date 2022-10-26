import CloseIcon from "@components/icon/Close";
import Menu from "@components/ui/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction } from "react";
import { navLinks } from "./Navbar";

interface IDrawer {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const Drawer: FC<IDrawer> = ({ openDrawer, setOpenDrawer }) => {
  const pathname = useRouter().pathname;

  return (
    <>
      <div
        className={`shadow-lg md:hidden transition-all ease-in-out absolute bg-white w-4/5 p-4 rounded-lg z-30 right-4 top-20 font-maz ${
          openDrawer ? "visible" : "invisible"
        }`}
      >
        <Menu open={openDrawer} setOpen={setOpenDrawer}>
          <div
            onClick={() => setOpenDrawer(false)}
            className={`h-4 text-adaptive w-4 ml-auto cursor-pointer transition-all ease-in-out ${
              openDrawer ? "visible" : "invisible"
            }`}
          >
            <CloseIcon />
          </div>
          <ul
            className={`text-base font-semibold mt-6 transition-all ease-in-out ${
              openDrawer ? "visible" : "invisible"
            }`}
          >
            {navLinks.map((navLink) => (
              <li
                onClick={() => setOpenDrawer(false)}
                className={`py-5 flex items-center gap-2 hover:text-primary ${
                  !navLink.lastItem ? "border-b" : ""
                } ${
                  pathname === navLink.link ? "text-primary" : "text-adaptive"
                }`}
                key={`drawer-${navLink.label}`}
              >
                <div className="h-4 w-4">{navLink.icon}</div>
                <Link href={navLink.link}>
                  <a>{navLink.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </div>
      <div
        className={`absolute md:hidden max-w-full top-0 left-0 h-screen z-20 w-screen bg-black opacity-40 transition-all ease-in-out ${
          openDrawer ? "visible" : "invisible"
        }`}
      />
    </>
  );
};

export default Drawer;
