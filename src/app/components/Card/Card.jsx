import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({
  id,
  postImage,
  postDate,
  postCategory,
  postTitle,
  postDesc,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={postImage} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{postDate} - </span>
          <span className={styles.category}>
            {" "}
            {String(postCategory).toUpperCase()}
          </span>
        </div>
        <Link href="/">
          <h1>{postTitle}</h1>
        </Link>
        <p className={styles.desc}>{postDesc}</p>
        <Link href={`/${id}`} className={styles.link}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
