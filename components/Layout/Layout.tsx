import React, { ReactNode } from "react";

import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
