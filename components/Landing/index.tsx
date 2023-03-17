/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import ArrowRight from "../../public/icons/vuesax-linear-arrow-right.svg";
import ArrowLeft from "../../public/icons/vuesax-linear-arrow-left.svg";
import BulletLgIcon from "../../public/images/bullets-large.png";
import BulletSmIcon from "../../public/images/bullets-small.png";
import { AppDispatch } from "../../redux/app/store";
import { RootState } from "../../redux/app/types";
import { getSliderImages } from "../../redux/features/slider/sliderSlice";

import styles from "./Landing.module.scss";

const Landing = () => {
  const slider = useSelector((state: RootState) => state.slider);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderImages());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <img
        src={slider.slider.results?.[0].image}
        alt="landing"
        className={styles.sliderImg}
      />

      <div className={styles.arrowRight}>
        <Image src={ArrowRight} alt="arrows" />
      </div>

      <div className={styles.arrowLeft}>
        <Image src={ArrowLeft} alt="arrows" />
      </div>

      <div className={styles.BulletLgIcon}>
        <Image src={BulletLgIcon} alt="bullets" width={111} height={10} />
      </div>

      <div className={styles.BulletSmIcon}>
        <Image src={BulletSmIcon} alt="bullets" width={70} height={6} />
      </div>
    </div>
  );
};

export default Landing;
