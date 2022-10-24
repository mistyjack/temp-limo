import styles from "@styles/Common.module.css";
import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from "react";

interface IMenu {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode;
}

const Menu: FC<IMenu> = ({ children, open, setOpen }) => {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef} className={`shadow-lg transition-all ease-in-out ${styles.menu} ${open ? "block" : "hidden"}`}>{children}</div>;
};

export default Menu;
