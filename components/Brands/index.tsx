/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { AppDispatch } from "../../redux/app/store";
import { RootState } from "../../redux/app/types";
import { getBrands } from "../../redux/features/brands/brandsSlice";

import styles from "./Brands.module.scss";

const Brands = () => {
  const brands = useSelector((state: RootState) => state.brands);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <p className={styles.title}>Popular Brands</p>

      {!brands.loading ? (
        <div className={styles.items}>
          <img
            src={"/icons/vuesax-linear-arrow-left.svg"}
            alt="leftArrow"
            className={styles.navigation}
          />
          <ul>
            {brands.brands &&
              brands.brands.results?.map((item) => (
                <li key={item.id}>
                  <div className={styles.brandImage}>
                    <img src={item.image} alt={`brand${item.id}`} />
                  </div>
                  <p>{`Up to ${item.sale_percentage}%`}</p>
                </li>
              ))}
          </ul>
          <img
            src={"/icons/vuesax-linear-arrow-right.svg"}
            alt="rightArrow"
            className={styles.navigation}
          />
        </div>
      ) : null}
    </section>
  );
};

export default Brands;
