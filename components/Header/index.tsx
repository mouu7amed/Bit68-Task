import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import MapIcon from "../../public/icons/vuesax-bold-map.svg";
import SearchIcon from "../../public/icons/vuesax-linear-search-normal.svg";
import UserIcon from "../../public/icons/vuesax-bold-frame.svg";
import CartIcon from "../../public/icons/vuesax-cart-icon.svg";
import MenuIcon from "../../public/icons/vuesax-linear-menu.svg";
import Sidebar from "./Sidebar";
import { MENU_ITEMS } from "./Items";

import styles from "./Header.module.scss";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  const renderOffer = () => {
    return (
      <div className={styles.offer}>
        <p>White Friday Sales Up To 70% Off</p>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {renderOffer()}

        <header>
          <div className={styles.vendor}>
            <Image src={MapIcon} alt="vendor" />
            <p>Store Locator</p>
          </div>
          <div className={styles.searchBar}>
            <input placeholder="Search" />
            <Image src={SearchIcon} alt="search" />
          </div>
          <div className={styles.tools}>
            <div>
              <p className={styles.language}>العربيه</p>
              <Image src={UserIcon} alt="profile" />
              <Image src={CartIcon} alt="cart" />
            </div>

            <div
              className={styles.menuIcon}
              onClick={() => setShowSidebar(true)}
            >
              <Image src={MenuIcon} alt="menu" />
            </div>
          </div>
        </header>

        <nav>
          <ul className={styles.menu}>
            {MENU_ITEMS.map((item, idx) => (
              <li
                className={`${styles.menuItem} ${
                  item.url === router.pathname ? styles.active : ""
                }`}
                key={`item-${idx}`}
              >
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {showSidebar && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </>
  );
};

export default Header;
