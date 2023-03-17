/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../redux/app/store";
import { RootState } from "../../redux/app/types";
import { getItems } from "../../redux/features/items/itemsSlice";
import styles from "./Items.module.scss";

interface IProps {
  title: string;
}

const Items = ({ title }: IProps) => {
  const items = useSelector((state: RootState) => state.items);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <p className={styles.title}>{title}</p>

      {!items.loading ? (
        <div className={styles.items}>
          <ul>
            {items.items &&
              items.items.results?.length &&
              [...items.items.results].reverse().map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={`brand${item.id}`} />

                  <p className={styles.name}>{item.name}</p>
                  <div
                    className={`${styles.price} ${
                      item.price_before_sale > item.price_after_sale
                        ? styles.isDiscount
                        : ""
                    }`}
                  >
                    <p className={styles.original}>
                      EGP {item.price_after_sale}
                    </p>
                    {item.price_before_sale > item.price_after_sale && (
                      <p className={styles.discount}>
                        Save {item.price_before_sale - item.price_after_sale}
                      </p>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Items;
