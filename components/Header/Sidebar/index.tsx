import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import CloseIcon from "../../../public/icons/vuesax-linear-close.svg";
import MapIcon from "../../../public/icons/vuesax-bold-map.svg";
import { MENU_ITEMS } from "../Items";

import styles from "./Sidebar.module.scss";
import Link from "next/link";

interface IProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ showSidebar, setShowSidebar }: IProps) => {
  const router = useRouter();
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHead}>
          <div className={styles.toggle} onClick={closeSidebar}>
            <Image src={CloseIcon} alt="close" />
          </div>
          <div className={styles.vendor}>
            <Image src={MapIcon} alt="vendor" />
            <p>Store Locator</p>
          </div>
        </div>
        <nav>
          <ul className={styles.menu}>
            {MENU_ITEMS?.map((item, index) => (
              <li
                className={`${styles.menuItem} ${
                  item.url === router.pathname ? styles.active : ""
                }`}
                key={index}
              >
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.language}>العربيه</p>
      </div>

      {showSidebar && (
        <div
          className={styles.overlay}
          onClick={() => showSidebar && closeSidebar()}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
