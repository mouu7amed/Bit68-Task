import React from "react";
import Head from "next/head";

import Active from "../components/Active";
import Categories from "../components/Categories";
import Landing from "../components/Landing";
import Brands from "../components/Brands";
import BlackNovember from "../components/BlackNovember";
import Items from "../components/Items";
import Ads from "../components/Ads";

const Home = () => {
  return (
    <>
      <Head>
        <title>Store Locator</title>
      </Head>

      <Landing />
      <Categories />
      <Active />
      <Brands />
      <BlackNovember />
      <Items title="Featured items" />
      <Items title="Most Viewed items" />
      <Ads />
    </>
  );
};

export default Home;
