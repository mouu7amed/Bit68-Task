import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3 className={styles.title}>Active Trending</h3>
          <ul>
            <li>
              <Link href="">
                <a>Men</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Women</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Kids</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>About Us</h3>
          <ul>
            <li>
              <Link href="">
                <a>About Company</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Connect Us</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Our Branches</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2022 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
