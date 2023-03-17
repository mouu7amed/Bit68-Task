/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import { AppDispatch } from "../../redux/app/store";
import { RootState } from "../../redux/app/types";
import { getCategories } from "../../redux/features/categories/categoriesSlice";
import styles from "./Categories.module.scss";

const Categories = () => {
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <p className={styles.title}>Main Categories</p>

      {!categories.loading ? (
        <div className={styles.items}>
          <img
            src={"/icons/vuesax-linear-arrow-left.svg"}
            alt="leftArrow"
            className={styles.navigation}
          />
          <ul>
            {categories.categories &&
              categories.categories.results?.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
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

export default Categories;
