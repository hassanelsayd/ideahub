import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
const MenuPosts = ({ withImages }) => {
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        {withImages && (
          <div className={styles.imageContainer}>
            <Image
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sfKiyScj_l_fk0UzR1vMpw.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className={styles.details}>
            <span className={styles.userName}>Hassan Elsayd</span>
            <span className={styles.date}> - 15.5.2024</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        {withImages && (
          <div className={styles.imageContainer}>
            <Image
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sfKiyScj_l_fk0UzR1vMpw.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className={styles.details}>
            <span className={styles.userName}>Hassan Elsayd</span>
            <span className={styles.date}> - 15.5.2024</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        {withImages && (
          <div className={styles.imageContainer}>
            <Image
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sfKiyScj_l_fk0UzR1vMpw.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className={styles.details}>
            <span className={styles.userName}>Hassan Elsayd</span>
            <span className={styles.date}> - 15.5.2024</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        {withImages && (
          <div className={styles.imageContainer}>
            <Image
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sfKiyScj_l_fk0UzR1vMpw.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className={styles.details}>
            <span className={styles.userName}>Hassan Elsayd</span>
            <span className={styles.date}> - 15.5.2024</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        {withImages && (
          <div className={styles.imageContainer}>
            <Image
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sfKiyScj_l_fk0UzR1vMpw.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className={styles.details}>
            <span className={styles.userName}>Hassan Elsayd</span>
            <span className={styles.date}> - 15.5.2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPosts;
