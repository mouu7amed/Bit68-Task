/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import ArrowRight from "../../public/icons/vuesax-linear-arrow-right.svg";
import ArrowLeft from "../../public/icons/vuesax-linear-arrow-left.svg";
import BulletLgIcon from "../../public/images/bullets-large.png";
import styles from "./Active.module.scss";

const Active = () => {
  return (
    <section className={styles.container}>
      <div className={styles.holder}>
        <div className={styles.texts}>
          <p>LET'S GET ACTIVE!</p>
          <h2>FLAT 20% OFF</h2>
          <p>Equipment Collection</p>
          <h3>
            USE CODE: <span>ACTIV</span>
          </h3>
          <button>SHOP NOW</button>
        </div>

        <img
          src={"/images/active-section.png"}
          alt="active"
          className={styles.image}
        />

        <div className={styles.arrowRight}>
          <Image src={ArrowRight} alt="arrows" />
        </div>

        <div className={styles.arrowLeft}>
          <Image src={ArrowLeft} alt="arrows" />
        </div>
      </div>
      <div className={styles.BulletLgIcon}>
        <Image src={BulletLgIcon} alt="bullets" width={111} height={10} />
      </div>
    </section>
  );
};

export default Active;
