import React from "react";
import styles from "./categoriesList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoriesList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href={`/blog?cat=style`}
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={40}
            height={40}
            alt=""
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href={`/blog?cat=travel`}
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            width={40}
            height={40}
            alt=""
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href={`/blog?cat=food`}
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            width={40}
            height={40}
            alt=""
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href={`/blog?cat=culture`}
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            width={40}
            height={40}
            alt=""
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href={`/blog?cat=coding`}
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            width={40}
            height={40}
            alt=""
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href={`/blog?cat=fashion`}
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            width={40}
            height={40}
            alt=""
            className={styles.image}
          />
          Fashion
        </Link>
      </div>
    </div>
  );
};

export default CategoriesList;
