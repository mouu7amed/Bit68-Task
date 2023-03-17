/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./Ads.module.scss";

const Ads = () => {
  return (
    <section className={styles.section}>
      <img src={"/images/ad-1.png"} alt="ad-1" />
      <img src={"/images/ad-2.png"} alt="ad-2" />
    </section>
  );
};

export default Ads;
