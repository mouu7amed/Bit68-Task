import React from "react";
import Image from "next/image";

import BlackNovImg from "../../public/images/black-novermber-section.png";
import styles from "./BlackNovember.module.scss";

const BlackNovember = () => {
  return (
    <section className={styles.section}>
      <Image src={BlackNovImg} alt="BlackNov" />
    </section>
  );
};

export default BlackNovember;
