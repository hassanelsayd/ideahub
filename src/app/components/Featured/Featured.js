import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Welcome to <span className={styles.sitename}>ideahub</span>
        </b>{" "}
        where the good ideas find you.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*37IiH2wRKC3ovb6XoRpAew.png"
            alt="post"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            JavaScript Clean Code: Best Practice
          </h1>
          <p className={styles.postDesc}>
            Writing clean and maintainable code is crucial for any developer,
            and in this article, we’ll explore some of the best practices you
            can follow to ensure that your JavaScript code is not only
            functional but also easy to read and understand.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
